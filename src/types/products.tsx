export interface Item {
  title: string;
  list: Array<string>;
}

export interface Category {
  category: string;
  description: string;
  items: Item[];
  link: string;
}

export interface Products {
  title: string;
  description: string;
  btnText: string;
  btnLink: string;
  image: string;
}

export interface VrataProducts {
  title: string;
  imageSrc: string;
}


export interface BoxProps  {
  title:string;
  subititle:string
}

export interface ProductsProps {
  image:string;
  alt:string;
  
}