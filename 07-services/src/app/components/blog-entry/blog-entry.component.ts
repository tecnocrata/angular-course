import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css'],
})
export class BlogEntryComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log('This is the ID blog entry', id);
  }

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['/home']);
  }
}
