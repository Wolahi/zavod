import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

import styles from "./PasswordButtonEye.module.scss";

import type { PasswordButtonEyeProps } from "@/shared/ui/PasswordButtonEye/interfaces/PasswordButtonEyeProps.ts";

const PasswordButtonEye = ({
  isClose,
  onClick,
}: PasswordButtonEyeProps): React.ReactElement => {
  return (
    <button
      className={styles.passwordShowButton}
      type={"button"}
      onClick={onClick}
    >
      {isClose ? (
        <EyeInvisibleOutlined />
      ) : (
        <EyeOutlined style={{ color: "#1677ff" }} />
      )}
    </button>
  );
};

export default PasswordButtonEye;
