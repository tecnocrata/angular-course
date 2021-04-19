import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogEntry } from '../models/blog-entry.model';

@Injectable({
  providedIn: 'root',
})
export class BlogEntriesService {
  constructor(private http: HttpClient) {}

  public getAllEntries(): Observable<BlogEntry[]> {
    return this.http.get<BlogEntry[]>('http://localhost:5100/api/entries');
  }

  public getEntry(id: string): Observable<BlogEntry> {
    return this.http.get<BlogEntry>(`http://localhost:5100/api/entries/${id}`);
  }
}
