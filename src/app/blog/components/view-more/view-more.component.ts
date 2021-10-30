import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Blog } from '../../model/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.scss']
})
export class ViewMoreComponent implements OnInit {

  constructor(private readonly blogService: BlogService, private readonly activatedRoute: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe().subscribe({ next:()=> this.getForm()})
  }

  blog!: Blog;

  getForm(){
    this.activatedRoute.params.pipe(
      map((params) => params.url),
      switchMap((url: string) => {
        return this.blogService.getByUrl(url); 
      })
      )
      .subscribe((blog: Blog) => {
        this.blog = blog;
      },  (error) => {
        console.error(error);
        
      }, () => {}
      )
  }

}
