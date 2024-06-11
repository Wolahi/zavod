import React, { createElement, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./CustomTypography.module.scss";

import { ITypographyProps } from "@/shared/ui/CustomTypography/interfaces/types";

export const CustomTypography: React.FC<
  PropsWithChildren<ITypographyProps>
> = ({
  children,
  component = "span",
  type = "p",
  className: currentClassName,
  ...props
}) => {
  const className = cn(styles.typography, currentClassName, {
    [styles[type]]: type,
  });
  return createElement(component, { className, ...props }, children);
};

export default CustomTypography;
