import { MouseEventHandler } from 'react';

export interface IDrawerFormExtra {
  handleSubmit: MouseEventHandler<HTMLElement>;
  onDelete: () => void;
}
