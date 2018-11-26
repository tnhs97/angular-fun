import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  post:Post;
  constructor(private postService : PostService) {
    this.post = new Post();
   }
    
  ngOnInit() {
  }
  
  addNewPost(){
    this.postService.addNewPost(this.post).subscribe(
      result =>{
        alert('Added succeed, new ID=' + result.id);
      }, error2 =>{
        alert('Added failed!')
      }
      
    )
  }
}
