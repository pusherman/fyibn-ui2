import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../../../store';

@Injectable()
export class PostActions {
  static FETCH_POSTS_REQUESTED = 'FETCH_POSTS_REQUESTED';
  static FETCH_POSTS_SUCCESSFUL = 'FETCH_POSTS_SUCCESSFUL';
  static FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED';

  static FETCH_POST_REQUESTED = 'FETCH_POST_REQUESTED';
  static FETCH_POST_SUCCESSFUL = 'FETCH_POST_SUCCESSFUL';
  static FETCH_POST_FAILED = 'FETCH_POST_FAILED';

  static CHANGE_PAGE_COMPLETE = 'CHANGE_PAGE_COMPLETE';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  getPosts(page): void {
    this.ngRedux.dispatch({
      type: PostActions.FETCH_POSTS_REQUESTED,
      payload: { page },
    });
  }

  getPost(id): void {
    this.ngRedux.dispatch({
      type: PostActions.FETCH_POST_REQUESTED,
      payload: { id },
    });
  }

  changePage(page): void {
    this.ngRedux.dispatch({
      type: PostActions.CHANGE_PAGE_COMPLETE,
      payload: { page },
    })
  }
}
