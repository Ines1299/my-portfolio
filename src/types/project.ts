export type Project = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  category_id: number;
  subcategory_id: number | null;
  year: number;
  created_at: string;
  slug: string;
  full_image_url: string | null;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type Subcategory = {
  id: number;
  name: string;
  slug: string;
  category_id: number;
};
