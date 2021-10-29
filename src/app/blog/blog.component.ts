import { Component, OnInit } from '@angular/core';
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

  constructor(private readonly blogService: BlogService) { }

  ngOnInit(): void {
    this.getAll();
    this.blogService.listUpdated()
      .subscribe((updated: boolean) => {
        if(updated){
          this.getAll();
        }
      })
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
  

}
