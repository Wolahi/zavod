import { IReport } from '@/shared/config/interfaces/IReport';

export interface IReportCardProps {
  report: IReport;
  onClick?: (e: any) => void;
}
