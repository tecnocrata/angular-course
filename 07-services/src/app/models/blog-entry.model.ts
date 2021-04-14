export interface BlogEntry {
  id: string;
  category: string;
  date: string;
  title: string;
  summary: string;
}

export interface BlogFullEntry extends BlogEntry {
  content: string;
}
