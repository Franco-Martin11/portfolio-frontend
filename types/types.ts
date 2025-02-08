export type ProjectRoutes = { url: string; title: string; id: string };

import type { Component } from "vue";

type IconType = Component;

export type Project = {
  title: string;
  imageSource: string;
  imageAlternate: string;
  routes: ProjectRoutes[];
};

export type LinkRoute = {
  route: string;
  id: string;
  title: string;
  ariaLabel: string;
};

export type MediaLink = {
  route: string;
  ariaLabel: string;
  id?: string;
  label: string;
  icon: IconType;
};

export type ImageProps = {
  srcUrl: string;
  alt: string;
  scroll?: boolean;
};

export type HyperLinkItem = {
  icon: IconType;
  route?: string;
  id: string;
  title: string;
};

export type DescriptionProps = {
  numberProject: number;
  title: string;
  paragraph: string;
};

export type ProjectProps = {
  descriptions: DescriptionProps;
  image: ImageProps;
  route: string;
  hyperLink: HyperLinkItem[];
  listTecnologies: ListItem[];
};

export type ListItem = { item: string; id: string };
export interface ExperienceCard {
  companies: string;
  date: string;
  desciption: string;
  listResponsibilities: ListItem[];
  listTecnologies: ListItem[];
  id?: string;
}

export type StackItem = {
  src: IconType;
  alt: string;
  id?: string;
};
