import { Injectable } from '@angular/core';

import { ApiService } from '../api/api.service';

@Injectable()
export class FavoriteService {
  private endpoint = 'favorites';

  constructor(private api: ApiService) { }

  create(post_id: number) {
    return this.api.post(this.endpoint, { post_id })
      .map(res => res);
  }

  remove(post_id: number) {
    return this.api.delete(this.endpoint, { post_id })
      .map(res => res);
  }
}
