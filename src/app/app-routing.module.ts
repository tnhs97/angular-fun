import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/post-list', pathMatch: 'full' },
  { path:'post-detail', component: PostDetailComponent},
  { path:'post-list', component: PostListComponent},
  { path:'post-add', component: PostAddComponent},
  { path:'post-edit/:id', component: PostEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }