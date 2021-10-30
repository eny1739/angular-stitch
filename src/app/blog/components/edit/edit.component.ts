import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Blog } from '../../model/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  blogs: Blog[] = [];
  isEditing: boolean = false;

  constructor(private readonly blogService: BlogService, private readonly activatedRoute: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(): void {
    this.getAll();
    this.isEditing=false;
    if(this.isLoggedIn()){
      this.getAll();
      this.blogService.listUpdated()
      .subscribe((updated: boolean) => {
        if(updated){
          this.getAll();
        }
      })
      this.activatedRoute.params.pipe().subscribe({ next:()=> this.getForm()})
    }
  }

  titleToSlug = (title: string):string => {
    title = title.replace(/^\s+|\s+$/g, ''); // trim
    title = title.toLowerCase();

    let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    let to   = "aaaaeeeeiiiioooouuuunc------";
    for (let i=0, l=from.length ; i<l ; i++) {
        title = title.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    title = title.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return title;
  }

  blogForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
    author: new FormControl(null, [Validators.required]),
    url: new FormControl(" "),
  })

  setFormValues(blog: Blog): void{
    this.blogForm.addControl("id", new FormControl());
    this.blogForm.get("id")?.setValue(blog.id);
    this.blogForm.get('title')?.setValue(blog.title);
    this.blogForm.get('content')?.setValue(blog.content);
    this.blogForm.get('author')?.setValue(blog.author);
    this.blogForm.get('url')?.setValue(blog.url);
  }

  getForm(){
    this.activatedRoute.params.pipe(
      map((params) => params.id),
      switchMap((id: string) => {
        if(!id){
          return EMPTY;
        } 
        else{
          return this.blogService.getById(id);
        } 
      })
      )
      .subscribe((blog: Blog) => {
        if(blog){
            this.setFormValues(blog)
        }
      },  (error) => {
        console.error(error);
        
      }, () => {}
      )
  }

  getAll(){
    this.blogService.getAll()
    .pipe()
    .subscribe((blogs) => {
      this.blogs = blogs;
    }, (error) => {
      console.error(error);
    }, () => {}
    )
  }

  onDelete(id: string):void{
    this.blogService.delete(id)
      .pipe(
        switchMap(() => this.blogService.getAll())
      )
      .subscribe((blogs: any) => {
        this.blogs = blogs;
      }, (error) => {
        console.error(error);
        
      }, () => {}
      )
  }

  onSubmit(): void{
    const blog = this.blogForm.value;
    blog.url = this.titleToSlug(blog.title);
    this.blogService.save(blog).pipe(
      switchMap(()=> this.blogService.getAll())
    ).subscribe({
      next: () => {},
      error: console.error,
      complete: () => {}
    })

    this.blogForm.reset();
    this.router.navigateByUrl(`/blog`)
  }

  isLoggedIn(): boolean {
    return (sessionStorage.getItem('token') !== null)
  }
  
  sliceContent(content: string, maxLength: number = 50): string {
    return content.slice(0, maxLength) + (content.length > maxLength ? "..." : "");
  }

  isValid(): boolean{
    return !this.blogForm.value.name
  }

  isFieldValid(fieldName: string, parent?: AbstractControl): {[key:string]: boolean}{
    let control: AbstractControl = this.blogForm.get(fieldName) as AbstractControl;

    const classes = {
      'is-invalid': false,
      'is-valid': false
    }

    if(parent){
      control = parent;
    }

    if(control && control.touched && control.invalid){
      classes['is-invalid'] = true;
    } else if (control && control.valid) {
      classes['is-valid'] = true;
    } 
    return classes;
  }

  navigateToBlog():void {
    this.router.navigateByUrl('/blog');
  }

}
