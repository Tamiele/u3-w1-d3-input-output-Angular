import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() post!: Post;

  @Output() onCreateRequest = new EventEmitter<Post>();

  newPost: Post = {
    active: false,
    body: '',
    id: 0,
    tags: [],
    title: '',
    userId: 0,
  };

  save() {
    this.onCreateRequest.emit(this.newPost);
    this.newPost = {
      active: false,
      body: '',
      id: 0,
      tags: [],
      title: '',
      userId: 0,
    };
  }
}
