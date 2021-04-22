export interface BlogEntry {
  id: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  content: string;
}

export interface BlogFullEntry extends BlogEntry {
  content: string;
}

// export interface BlogDB {
//   [id: string]: BlogEntry;
// }

// let a : BlogDB;
// a["1"].category
