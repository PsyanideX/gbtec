export interface ImageList {
  total: number;
  total_pages: number;
  results: Image[];
}

export interface Image {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at?: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string;
  alt_description: string;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: Topicsubmissions;
  user: User;
  tags: (Tag | Tags2 | Tags3 | Tags4 | Tags5)[];
}

interface Tags5 {
  type: string;
  title: string;
  source?: Source3;
}

interface Tags4 {
  type: string;
  title: string;
  source?: Source4;
}

interface Source4 {
  ancestry: Ancestry3;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: Coverphoto4;
}

interface Coverphoto4 {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: Topicsubmissions5;
  user: User5;
}

interface User5 {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location?: string;
  links: Links2;
  profile_image: Profileimage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social4;
}

interface Topicsubmissions5 {
  nature?: Texturespatterns;
}

interface Ancestry3 {
  type: Type;
  category: Type;
  subcategory?: Type;
}

interface Tags3 {
  type: string;
  title: string;
  source: Source3;
}

interface Source3 {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: Coverphoto3;
}

interface Coverphoto3 {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: Topicsubmissions4;
  user: User4;
}

interface User4 {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location?: any;
  links: Links2;
  profile_image: Profileimage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social4;
}

interface Social4 {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: any;
}

interface Topicsubmissions4 {
}

interface Tags2 {
  type: string;
  title: string;
  source: Source2;
}

interface Source2 {
  ancestry: Ancestry2;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: Coverphoto2;
}

interface Coverphoto2 {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: Topicsubmissions3;
  user: User3;
}

interface User3 {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username?: string;
  portfolio_url: string;
  bio: string;
  location?: string;
  links: Links2;
  profile_image: Profileimage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social3;
}

interface Social3 {
  instagram_username: string;
  portfolio_url: string;
  twitter_username?: string;
  paypal_email?: any;
}

interface Topicsubmissions3 {
  'color-of-water'?: Texturespatterns;
  architecture?: Texturespatterns;
  wallpapers?: Texturespatterns;
}

interface Ancestry2 {
  type: Type;
  category?: Type;
  subcategory?: Type;
}

interface Tag {
  type: string;
  title: string;
  source: Source;
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
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: Topicsubmissions2;
  user: User2;
}

interface User2 {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username?: any;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links2;
  profile_image: Profileimage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social2;
}

interface Social2 {
  instagram_username: string;
  portfolio_url: string;
  twitter_username?: any;
  paypal_email?: any;
}

interface Topicsubmissions2 {
  'textures-patterns': Texturespatterns;
}

interface Ancestry {
  type: Type;
  category: Type;
  subcategory: Type;
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
  last_name?: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  location?: string;
  links: Links2;
  profile_image: Profileimage;
  instagram_username?: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

interface Social {
  instagram_username?: string;
  portfolio_url?: string;
  twitter_username?: string;
  paypal_email?: any;
}

interface Profileimage {
  small: string;
  medium: string;
  large: string;
}

interface Links2 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
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

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
