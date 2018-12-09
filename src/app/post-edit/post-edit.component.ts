import { Component, OnInit } from "@angular/core";
import { Post } from "../models/post";
import { PostService } from "../post.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: "app-post-edit",
  templateUrl: "./post-edit.component.html",
  styleUrls: ["./post-edit.component.css"]
})
export class PostEditComponent implements OnInit {
  post: Post;

  constructor(
    private postService: PostService, 
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
    ) {
    this.post = new Post();
    
  }

  ngOnInit() {
    this.getPostByID();
  }
  getPostByID() {
    let id = this.route.snapshot.params.id;
    this.postService.getPost(id).subscribe(
      result => {
        this.post = result;
        console.log(result);
      },
      error2 => {
        console.log("Load data failed from server!", error2);
      }
    );
  }

  updatePost() {
    this.postService.updatePost(this.post).subscribe(
      result => {
        alert("Updated post with id =" + result.id);
        this.router.navigate(['post-list']);
      },
      error2 => {
        alert("Update failed at"+ error2);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
