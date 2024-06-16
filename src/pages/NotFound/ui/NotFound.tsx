import React from "react";

import { CustomTypography } from "@/shared/ui/CustomTypography";

const NotFound = (): React.ReactElement => {
  return (
    <CustomTypography type={"title"}>
      Такой страницы нет или у вас нет доступа
    </CustomTypography>
  );
};

export default NotFound;
