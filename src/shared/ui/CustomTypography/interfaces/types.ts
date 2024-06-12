import { HTMLAttributes } from 'react';

export type TypographyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'p'
  | 'title'
  | 'subtitle'
  | 'italic'
  | 'description'
  | 'textM'
  | 'small';

type TagComponent =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'span'
  | 'p'
  | 'strong';

export interface ITypographyProps extends HTMLAttributes<HTMLDivElement> {
  component?: TagComponent;
  type?: TypographyType;
}
