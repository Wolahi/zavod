import { Dispatch, SetStateAction } from "react";

import { IReport } from "@/shared/config/interfaces/IReport";

export interface IDrawerReport {
  report: IReport | null;
  open: boolean;
  onClose: () => void;
  setReport: Dispatch<SetStateAction<IReport[]>>;
}
