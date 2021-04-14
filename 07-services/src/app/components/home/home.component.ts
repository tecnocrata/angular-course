import { Component, OnInit } from '@angular/core';
import { BlogEntriesService } from 'src/app/services/blog-entries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // entries: BlogEntry[] =null
  entries = null;
  constructor(private blogEntries: BlogEntriesService) {}

  ngOnInit(): void {}
}
