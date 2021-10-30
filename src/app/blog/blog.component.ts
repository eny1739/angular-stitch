import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Blog } from './model/blog';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private readonly blogService: BlogService, private readonly activatedRoute: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(): void {
    this.getAll();
    this.blogService.listUpdated()
      .subscribe((updated: boolean) => {
        if(updated){
          this.getAll();
        }
      })
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
        console.log('user deleted');
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
}
