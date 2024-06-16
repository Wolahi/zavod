import { useState } from "react";
import { FileAddOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

import styles from "./reportsList.module.scss";

import { ReportCard } from "@/entities";
import { DrawerReportForm } from "@/features";
import { IReport } from "@/shared/config/interfaces/IReport";
import useGetReportsList from "@/widgets/ReportsList/model/useGetReportsList.ts";

const ReportsList = (): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const [reportData, setReportData] = useState<IReport | null>(null);
  const { reports, setReports } = useGetReportsList();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDrawer = (report?: IReport) => {
    if (report) {
      setReportData(report);
      console.log(report);
    } else {
      setReportData(null);
    }
    showDrawer();
  };

  return (
    <div className={styles.root}>
      {reports.map((report) => (
        <ReportCard
          key={report.id}
          report={report}
          onClick={() => handleDrawer(report)}
        />
      ))}
      <FloatButton
        onClick={() => handleDrawer()}
        icon={<FileAddOutlined className={styles.floatButtonIcon} />}
        className={styles.floatButton}
      />
      <DrawerReportForm
        setReport={setReports}
        open={open}
        onClose={onClose}
        report={reportData}
      />
    </div>
  );
};

export default ReportsList;
