import { Component, OnInit } from '@angular/core';

interface BlogEntry {
  id: string;
  category: string;
  date: string;
  title: string;
  summary: string;
}

interface BlogFullEntry extends BlogEntry {
  content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  entries: BlogEntry[] = [
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

  ngOnInit(): void {}
}
