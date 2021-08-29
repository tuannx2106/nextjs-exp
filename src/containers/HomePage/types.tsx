export interface RecordType {
  phone: string;
  address: string;
  project: string;
}

export type Post = {
  author: string
  content: string
}

export interface StaticPropsType {
  text: string;
  posts: Post[];
}
