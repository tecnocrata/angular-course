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
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private blogEntryService: BlogEntriesService
  ) {
    // this.id = this.activatedRoute.snapshot.params['id'];
    // console.log(this.activatedRoute.snapshot.queryParams['showImage']);
    // console.log('This is the ID blog entry', this.id);
    this.entry = {
      id: '',
      category: '',
      date: '',
      title: '',
      summary: '',
      content: '',
    };
  }

  ngOnInit(): void {}

  saveEntry() {
    this.blogEntryService.postEntry(this.entry).subscribe((r) => {
      console.log(this.entry);
    });
  }
}
