import { Injectable } from '@angular/core';
import { BlogEntry } from '../models/blog-entry.model';

@Injectable({
  providedIn: 'root',
})
export class BlogEntriesService {
  private entries: BlogEntry[] = [
    {
      id: '1',
      category: 'Trivia',
      date: '2/2/2021',
      title: 'First Entry',
      summary: 'This is my first entry on my virtual blog...',
    },
    {
      id: '2',
      category: 'Tech',
      date: '3/2/2021',
      title: 'Ngrok a perfect developer friend',
      summary:
        'You will love this tool, it is able to save you tons and tons of work.',
    },
    {
      id: '3',
      category: 'Trivia',
      date: '5/3/2021',
      title: 'Justice League: The longest movie that I ever seen',
      summary:
        'I have enjoyed this movie, has replaced totally the previous 2017 version on my mind.',
    },
    {
      id: '4',
      category: 'Tech',
      date: '10/4/2021',
      title: 'What identifier data type do you prefer? number vs guid?',
      summary:
        'There are many reasons for each of them, but we should focus on real-life production environment',
    },
  ];
  constructor() {}

  public getAllEntries() {
    return this.entries;
  }

  public getEntry(id: string): { title: string; content: string } {
    let { title, summary } = this.entries.filter((b) => b.id === id)[0];
    return { title, content: summary };
    // let entry = this.entries.find((b) => b.id === id);
    // if (entry) return { title: entry.title, content: entry.summary };
    // throw new Error("Entry doesn't exists");
  }
}
