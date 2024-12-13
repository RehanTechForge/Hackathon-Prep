export interface Post {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  mainImage: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  categories: Array<{
    _ref: string;
    _type: string;
    _key: string;
    title: string;
  }>;
  author: {
    _ref: string;
    _type: string;
    name: string;
    image: {
      _ref: string;
      _type: string;
    };
  };
  body: Array<{
    _key: string;
    _type: string;
    style?: string;
    markDefs?: Array<any>;
    children?: Array<{
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }>;
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  }>;
}
