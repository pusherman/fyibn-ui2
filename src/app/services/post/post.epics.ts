import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActionsObservable } from 'redux-observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { PostActions } from './post.actions';
import { PostService } from './post.service';

@Injectable()
export class PostEpics {
  constructor(
    private router: Router,
    private posts: PostService,
  ) {}

  getLatestPosts = (action$: ActionsObservable<any>) => {
    return action$.ofType(PostActions.FETCH_POSTS_REQUESTED)
      .switchMap(action => {
        return this.posts.getLatest()
          .map(results => {
            return {
              type: PostActions.FETCH_POSTS_SUCCESSFUL,
              payload: results,
            };
          })
          .catch(error => Observable.of({
            type: PostActions.FETCH_POSTS_FAILED,
            payload: error,
          }));
        });
  }
}
