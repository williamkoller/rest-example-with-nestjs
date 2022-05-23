export type ProductType = {
  name: string;
  links: Links[];
};

type Links = {
  rel: string;
  href: string;
};
