import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, BehaviorSubject, combineLatest, of } from 'rxjs';
import { map, catchError, startWith } from 'rxjs/operators';
import { DataService } from '../data';
import { Post } from '../post.model';
import { TruncatePipe } from '../truncate-pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services implements OnInit {
  filteredPosts$!: Observable<Post[]>;
  searchTerm$ = new BehaviorSubject<string>('');
  isLoading = false;
  hasError = false;
  searchText = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.filteredPosts$ = combineLatest([
      this.dataService.getPosts(),
      this.searchTerm$.pipe(startWith(''))
    ]).pipe(
      map(([posts, searchTerm]) => {
        if (!searchTerm.trim()) {
          return posts;
        }
        const lowerSearch = searchTerm.toLowerCase();
        return posts.filter(post =>
          post.title.toLowerCase().includes(lowerSearch) ||
          post.body.toLowerCase().includes(lowerSearch)
        );
      }),
      catchError(error => {
        console.error('Error:', error);
        this.hasError = true;
        return of([]);
      })
    );
  }

  onSearchChange(value: string): void {
    this.searchText = value;
    this.searchTerm$.next(value);
  }
}
