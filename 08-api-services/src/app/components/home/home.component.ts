import { Component, OnInit } from '@angular/core';
import { BlogEntry } from 'src/app/models/blog-entry.model';
import { BlogEntriesService } from 'src/app/services/blog-entries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  entries: BlogEntry[] = [];
  constructor(private blogEntries: BlogEntriesService) {}

  ngOnInit(): void {
    // this.entries = this.blogEntries.getAllEntries();
  }
}
