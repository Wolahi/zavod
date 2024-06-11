import type { SelectProps } from "antd";

export interface ICustomSelectProps extends SelectProps {
  label?: string;
  error?: string;
}
