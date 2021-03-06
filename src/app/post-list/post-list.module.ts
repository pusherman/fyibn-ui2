import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { PostListComponent } from './post-list.component';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { PostListRoutingModule } from './post-list.route';
import { PaginationLinksComponent } from '../pagination-links/pagination-links.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    PostListRoutingModule,
    SharedModule,
    CommonModule,
    MomentModule,
  ],
  declarations: [
    PostListComponent,
    PostListItemComponent,
    PaginationLinksComponent,
  ],
  providers: [
  ],
})
export class PostListModule { }
