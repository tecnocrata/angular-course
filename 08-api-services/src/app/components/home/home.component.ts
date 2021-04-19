import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { BlogEntry } from 'src/app/models/blog-entry.model';
import { BlogEntriesService } from 'src/app/services/blog-entries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  entries: BlogEntry[] = [];
  private subscriptions = new Subscription();
  public entries$!: Observable<BlogEntry[]>;
  constructor(
    private router: Router,
    private blogEntries: BlogEntriesService
  ) {}

  ngOnInit(): void {
    // this.entries = this.blogEntries.getAllEntries();
    // BAD IDEA!
    // this.blogEntries.getAllEntries().subscribe((e) => (this.entries = e));

    // Better
    // this.blogEntries
    //   .getAllEntries()
    //   .pipe(take(1))
    //   .subscribe((e) => (this.entries = e));

    // Better
    // const subscription = this.blogEntries
    //   .getAllEntries()
    //   .subscribe((e) => (this.entries = e));
    // this.subscriptions.add(subscription);

    // Much better method
    this.entries$ = this.blogEntries.getAllEntries();
  }

  public createEntry() {
    this.router.navigate(['/blogEntry/new']);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.unsubscribe();
  }
}
