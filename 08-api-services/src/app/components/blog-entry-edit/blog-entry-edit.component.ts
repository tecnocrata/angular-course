import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogEntriesService } from 'src/app/services/blog-entries.service';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry-edit.component.html',
  styleUrls: ['./blog-entry-edit.component.css'],
})
export class BlogEntryEditComponent implements OnInit {
  entry: { title: string; content: string };
  id: string = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private blogEntry: BlogEntriesService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.activatedRoute.snapshot.queryParams['showImage']);
    this.entry = { title: '', content: '' };
    console.log('This is the ID blog entry', this.id);
  }

  ngOnInit(): void {
    // this.entry = this.blogEntry.getEntry(this.id);
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
