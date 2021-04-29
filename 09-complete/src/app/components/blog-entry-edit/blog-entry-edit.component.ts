import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogEntry } from 'src/app/models/blog-entry.model';
import { BlogEntriesService } from 'src/app/services/blog-entries.service';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry-edit.component.html',
  styleUrls: ['./blog-entry-edit.component.css'],
})
export class BlogEntryEditComponent implements OnInit {
  entry!: BlogEntry;
  id: string = '';
  private mode: 'edit' | 'new' = 'new';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private blogEntryService: BlogEntriesService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.mode = 'new';
    this.entry = {
      id: '',
      category: '',
      date: '',
      title: '',
      summary: '',
      content: '',
    };
    if (this.id) {
      this.mode = 'edit';
      this.blogEntryService.getEntry(this.id).subscribe((e) => {
        this.entry = e;
      });
    }
  }

  saveEntry() {
    if (this.mode === 'new') {
      this.blogEntryService.postEntry(this.entry).subscribe((r) => {
        console.log(this.entry);
      });
    } else {
      // this.blogEntryService.putEntry(this.entry).subscribe((r) => {
      //   console.log(this.entry);
      // });
    }
  }
}
