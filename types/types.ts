export type ProjectRoutes = { url: string; title: string; id: number };

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
  id: number;
  title: string;
  ariaLabel: string;
};

export type MediaLink = {
  route: string;
  ariaLabel: string;
  id?: number;
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
  id: number;
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

export type ListItem = { item: string; id: number | string };
export interface ExperienceCard {
  companies: string;
  date: string;
  desciption: string;
  listResponsibilities: ListItem[];
  listTecnologies: ListItem[];
  id?: number;
}

export type StackItem = {
  src: IconType;
  alt: string;
  id?: number;
};
