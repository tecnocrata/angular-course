import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntryEditComponent as BlogEntryEditComponent } from './blog-entry-edit.component';

describe('BlogEntryEditComponent', () => {
  let component: BlogEntryEditComponent;
  let fixture: ComponentFixture<BlogEntryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogEntryEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
