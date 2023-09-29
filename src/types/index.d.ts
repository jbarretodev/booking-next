export interface CollectionHotel {
  total: number;
  total_pages: number;
  data: Hotel[];
  status: number;
}

export interface Hotel {
  id: number;
  object_model: string;
  title: string;
  price: string;
  sale_price: null;
  discount_percent: null;
  image: string;
  content: string;
  location: null;
  is_featured: number;
  review_score: ReviewScore;
}

export interface ReviewScore {
  score_total: string;
  total_review: number;
  review_text: string;
}
