export type Project = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  category_id: number;
  subcategory_id: number | null;
  year: number;
  created_at: string;
};
