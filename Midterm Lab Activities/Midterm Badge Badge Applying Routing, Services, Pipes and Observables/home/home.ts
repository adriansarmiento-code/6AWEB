import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data';
import { Post } from '../post.model';
import { TruncatePipe } from '../truncate-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  latestPosts$!: Observable<Post[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.latestPosts$ = this.dataService.getPosts().pipe(
      map(posts => posts.slice(0, 5))
    );
  }
}
