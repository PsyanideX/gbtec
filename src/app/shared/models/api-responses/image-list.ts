export interface ImageList {
  total: number;
  total_pages: number;
  results: Image[];
}

export interface Image {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | undefined | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | undefined | null;
  alt_description: string;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: any;
  user: User;
  tags: Tag[];
}

interface Tag {
  type: string;
  title?: string;
  source?: Source;
}

interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: Coverphoto;
}

interface Coverphoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null | undefined;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string | null | undefined;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions?: any;
  user: User;
}

interface Ancestry {
  type?: Type;
  category?: Type;
  subcategory?: Type;
}

interface Type {
  slug: string;
  pretty_slug: string;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string | undefined | null;
  twitter_username: string | undefined | null;
  portfolio_url: string | undefined | null;
  bio: string | undefined | null;
  location: string | undefined | null;
  links: Links;
  profile_image: Profileimage;
  instagram_username: string | undefined | null;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

interface Social {
  instagram_username: string | undefined | null;
  portfolio_url: string | undefined | null;
  twitter_username: string | undefined | null;
  paypal_email: any | undefined | null;
}

interface Profileimage {
  small: string;
  medium: string;
  large: string;
}

interface Links {
  self?: string;
  html?: string;
  photos?: string;
  likes?: string;
  portfolio?: string;
  following?: string;
  followers?: string;
  download?: string;
  download_location?: string;
}

interface Topicsubmissions {
  wallpapers?: Wallpapers;
  nature?: Wallpapers;
  experimental?: Wallpapers;
  'textures-patterns'?: Texturespatterns;
}

interface Texturespatterns {
  status: string;
  approved_on: string;
}

interface Wallpapers {
  status: string;
  approved_on?: string;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
