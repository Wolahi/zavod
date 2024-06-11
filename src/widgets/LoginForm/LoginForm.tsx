import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Typography } from "antd";

import styles from "./style.module.scss";

import CustomInput from "@/shared/ui/CustomInput/CustomInput.tsx";
import { loginSchema } from "@/widgets/LoginForm/config/LoginSchema/LoginSchema.ts";
import type { ILoginForm } from "@/widgets/LoginForm/interfaces/ILoginForm.ts";

const LoginFrom = (): React.ReactElement => {
  const [isClose, setIsClose] = useState(true);

  const { control, handleSubmit } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: ILoginForm) => console.log(data);

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <Typography.Title>Вход в систему</Typography.Title>
      <Controller
        control={control}
        name="login"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <CustomInput
            value={value?.trim()}
            onChange={onChange}
            label={"Логин"}
            name={"Логин"}
            placeholder={"Логин"}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <CustomInput
            label={"Пароль"}
            value={value?.trim()}
            onChange={onChange}
            name={"Пароль"}
            maxLength={32}
            minLength={8}
            placeholder={"Пароль"}
            type={isClose ? "password" : "text"}
            error={error?.message}
            suffix={
              <button
                className={styles.passwordShowButton}
                type={"button"}
                onClick={() => setIsClose((prev) => !prev)}
              >
                {isClose ? (
                  <EyeInvisibleOutlined />
                ) : (
                  <EyeOutlined style={{ color: "#1677ff" }} />
                )}
              </button>
            }
          />
        )}
      />
      <Button type="primary" htmlType={"submit"}>
        Войти
      </Button>
    </form>
  );
};

export default LoginFrom;
