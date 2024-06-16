import { IObjectOutput } from '@/shared/config/interfaces/IObjectOutput';

export interface IObjectCardProps {
  object: IObjectOutput;
  onClick?: (e: any) => void;
}
