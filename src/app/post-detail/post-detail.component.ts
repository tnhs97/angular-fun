import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../models/post";
import {PostListComponent} from "../post-list/post-list.component"
@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post;
  constructor(private postListComponent: PostListComponent) {
    this.post = new Post();
  }
  ngOnInit() {}
  delete(post: Post): void {
    this.postListComponent.delete(post);
  }
}
