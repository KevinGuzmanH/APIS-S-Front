export interface NewsResponse {
  date:   Date;
  status: string;
  news:   News[];
}

interface News {
  url:            string;
  title:          string;
  summary:        string;
  published_date: Date;
}
