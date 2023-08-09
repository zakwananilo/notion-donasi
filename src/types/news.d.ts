interface NewsItem {
  id: number;
  title: string;
  image: string;
  content: string;
  link: string;
  is_redirect: "0" | "1";
  is_active: "0" | "1";
}