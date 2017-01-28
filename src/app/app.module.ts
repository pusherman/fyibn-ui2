import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.route';
import { FyibnNavComponent } from './fyibn-nav/fyibn-nav.component';
import { PostListModule } from './post-list/post-list.module';
import { PostViewModule } from './post-view/post-view.module';

@NgModule({
  declarations: [
    AppComponent,
    FyibnNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    PostListModule,
    PostViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
