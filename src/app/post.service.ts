import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './models/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUri = "https://tranquil-lake-48038.herokuapp.com/posts";
  constructor(private httpService: HttpClient) { }

  public getPosts() : Observable<Post[]> {
    return this.httpService.get<Post[]>(this.postUri);
  }

  getPost(id: number):Observable<Post> {
    return this.httpService.get<Post>(this.postUri +'/'+id);
  }
  addNewPost(post: Post): Observable<Post>{
    return this.httpService.post<Post>(this.postUri, post, httpOptions);
  }

  updatePost(post: Post): Observable<Post>{
    return this.httpService.put<Post>(this.postUri +'/'+post.id, post, httpOptions);
  }

  deletePost (post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postUri}/${id}`;
  
    return this.httpService.delete<Post>(url, httpOptions);
  }
  

}