import { Select } from "antd";

import styles from "./CustomSelect.module.scss";

import { Typography } from "@/shared";
import type { ICustomSelectProps } from "@/shared/ui/CustomSelect/ui/interfaces/ICustomSelectProps.ts";

const CustomSelect = ({ label, error, ...props }: ICustomSelectProps) => {
  return (
    <div className={styles.root}>
      {label && (
        <Typography type={"subtitle"} style={{ color: "#b7b7b7" }}>
          {label}
        </Typography>
      )}
      <Select {...props} status={error && "error"} className={styles.select} />
      {error && (
        <Typography type={"description"} style={{ color: "#e74c3c" }}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default CustomSelect;
