export interface CategoryInterface {
  id: string;
  name: string;
  status: string;
  image: string| null;
}




export interface Journal {
  id: string;
  category: CategoryInterface| null;
  title: string;
  dateUploaded: string;
  createdAt: string;
  articles: number;
  status: string;
  image: string | null;
}

export interface Article {
  id: string;
  title: string;
  status: string;
  type: string;
  image: string | null;
  createdAt: string;

  journal : {
    id: string;
    title: string;
    image: string | null;
  }

}

export interface RawArticle {
  id: string;
  title: string;
  status: string;
  type: string;
  image: string | null;
  createdAt: string;
  abstract: string;

}

export interface CategoryWithJournals  {
  id: string;
  image: string | null;
  isActive: boolean;
  name: string;
  createdAt: string;
  updatedAt: string;
  journals : {
      id: string;
      image: string | null;
      title: string;
      description: string

  }[]

}