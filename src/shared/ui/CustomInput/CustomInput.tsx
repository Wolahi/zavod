import { Input, Typography } from "antd";

import type { ICustomInputProps } from "@/shared/ui/CustomInput/ICustomInputProps.tsx";

const CustomInput = ({
  label,
  name = "",
  error,
  ...props
}: ICustomInputProps) => (
  <div>
    {label && <Typography style={{ color: "#b7b7b7" }}>{label}</Typography>}
    <Input name={name} {...props} status={error && "error"} />
    {error && (
      <Typography.Paragraph style={{ color: "#e74c3c" }}>
        {error}
      </Typography.Paragraph>
    )}
  </div>
);

export default CustomInput;
