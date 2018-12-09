import { Component, OnInit } from "@angular/core";
import { Post } from "../models/post";
import { PostService } from "../post.service";
@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) {
    this.posts = [];
  }

  getPostsFromServer() {
    this.postService.getPosts().subscribe(
      result => {
        this.posts = result;
        console.log(result);
      },
      error2 => {
        console.log("Load data failed from server!", error2);
      }
    );
  }
  ngOnInit() {
    this.getPostsFromServer();
  }
  delete(post: Post): void {
    this.posts = this.posts.filter(h => h !== post);
    this.postService.deletePost(post).subscribe();
  }
}
