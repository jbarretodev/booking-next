export interface CollectionHotel {
  total: number;
  total_pages: number;
  data: Hotel[];
  status: number;
}

export type DetailHotel = {
  data?: HotelData;
  status?: number;
};

export type HotelData = {
  id?: number;
  object_model?: string;
  title?: string;
  price?: string;
  sale_price?: number;
  discount_percent?: number;
  image?: string;
  content?: string;
  location?: string;
  is_featured?: number;
  address?: string;
  map_lat?: string;
  map_lng?: string;
  map_zoom?: number;
  banner_image?: string;
  gallery?: string[];
  video?: string;
  enable_extra_price?: number;
  extra_price?: ExtraPrice[];
  review_score?: DataReviewScore;
  review_stats?: string[];
  review_lists?: ReviewLists;
  policy?: Policy[];
  star_rate?: number;
  check_in_time?: string;
  check_out_time?: string;
  allow_full_day?: boolean;
  booking_fee?: BookingFee[];
  related?: Related[];
  terms?: { [key: string]: Term };
};

export type BookingFee = {
  name?: string;
  desc?: string;
  name_ja?: string;
  desc_ja?: string;
  price?: string;
  type?: string;
};

export type ExtraPrice = {
  name?: string;
  price?: string;
  type?: string;
};

export type Policy = {
  title?: string;
  content?: string;
};


export type Related = {
  id?: number;
  object_model?: string;
  title?: string;
  price?: string;
  sale_price?: number;
  discount_percent?: number;
  image?: string;
  content?: string;
  location?: number;
  is_featured?: number;
  review_score?: RelatedReviewScore;
};

export type RelatedReviewScore = {
  score_total?: string;
  total_teview?: number;
  review_text?: string;
};

export type ReviewLists = {
  current_page?: number;
  data?: Datum[];
  first_page_url?: string;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  links?: Link[];
  next_page_url?: string;
  path?: string;
  per_page?: number;
  prev_page_url?: string;
  to?: number;
  total?: number;
};

export type Datum = {
  id?: number;
  title?: string;
  content?: string;
  rate_number?: number;
  author_ip?: string;
  status?: string;
  created_at?: Date;
  vendor_id?: number;
  author_id?: number;
  author?: Author;
};

export type Author = {
  id?: number;
  name?: string;
  first_name?: string;
  last_name?: string;
  avatar_id?: number;
};

export type Link = {
  url?: null | string;
  label?: string;
  active?: boolean;
};

export type DataReviewScore = {
  score_total?: string;
  score_text?: string;
  total_review?: number;
  rate_score?: { [key: string]: RateScore };
};

export type RateScore = {
  title?: string;
  total?: number;
  percent?: number;
};

export type Term = {
  parent?: Parent;
  child?: Child[];
};

export type Child = {
  id?: number;
  title?: string;
  content?: string;
  image_id?: string;
  icon?: null | string;
  attr_id: number;
  slug?: string;
};

export type Parent = {
  id?: number;
  title?: string;
  slug?: string;
  service?: string;
  display_type?: string;
  hideIn_single?: string;
};


export type ServiceHotel = {
  total?: number;
  total_pages?: number;
  data?: Hotel[];
  status?: number;
};

export interface Hotel {
  id: number;
  object_model: string;
  title: string;
  price: string;
  sale_price?: number;
  discount_percent?: number;
  image: string;
  content: string;
  location?: string;
  is_featured: number;
  review_score: ReviewScore;
}

export interface ReviewScore {
  score_total: string;
  total_review: number;
  review_text: string;
}
