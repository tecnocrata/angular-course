import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public postEntry(entry: BlogEntry) {
    // Content-Type: application/json
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return this.http.post(
      'http://localhost:5100/blog-entries',
      JSON.stringify(entry),
      options
    );
  }
}
