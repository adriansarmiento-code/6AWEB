import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postsSubject = new BehaviorSubject<Post[]>([]);
  public posts$: Observable<Post[]> = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadPosts();
  }

  private loadPosts(): void {
    const cachedPosts = localStorage.getItem('posts');

    if (cachedPosts) {
      this.postsSubject.next(JSON.parse(cachedPosts));
    } else {
      this.http.get<Post[]>(this.apiUrl).pipe(
        tap(posts => {
          localStorage.setItem('posts', JSON.stringify(posts));
          this.postsSubject.next(posts);
        }),
        shareReplay(1)
      ).subscribe();
    }
  }

  getPosts(): Observable<Post[]> {
    return this.posts$;
  }
}

