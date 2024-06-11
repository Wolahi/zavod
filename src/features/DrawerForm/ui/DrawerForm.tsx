import { ReactElement, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { DeleteOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Drawer } from "antd";

import styles from "./DrawerForm.module.scss";

import { drawerFormSchema } from "@/features/DrawerForm/config/drawerFormSchema.ts";
import type { IDrawer } from "@/features/DrawerForm/ui/interfaces/IDrawer.ts";
import type { IDrawerForm } from "@/features/DrawerForm/ui/interfaces/IDrawerForm.ts";
import { Input, Select, Typography } from "@/shared";
import { rolesOptions } from "@/shared/config/rolesOption.ts";

const DrawerForm = ({ user, open, onClose }: IDrawer): ReactElement => {
  const { control, handleSubmit, reset } = useForm<IDrawerForm>({
    resolver: yupResolver(drawerFormSchema),
  });

  useEffect(() => {
    reset({
      login: user?.login,
      role: user?.role,
      department: user?.department,
    });
  }, [user, reset]);

  const onSubmit = (data: IDrawerForm) => {
    if (
      user?.login !== data.login ||
      user?.department !== data.department ||
      user?.role !== data.role
    ) {
      console.log(data);
    } else {
      console.log("Изменять нечего");
    }
    onClose();
  };

  return (
    <form>
      <Drawer
        placement={"right"}
        width={520}
        onClose={onClose}
        open={open}
        extra={
          <div className={styles.buttonsWrapper}>
            <Button
              type="primary"
              htmlType={"submit"}
              onClick={handleSubmit(onSubmit)}
            >
              Обновить
            </Button>
            <Button
              type={"primary"}
              danger
              style={{
                padding: "10px",
              }}
            >
              <DeleteOutlined />
            </Button>
          </div>
        }
      >
        <div className={styles.drawerBody}>
          <Typography type={"textM"}>Редактирование пользователя</Typography>
          <Controller
            control={control}
            name="login"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={value?.trim()}
                label={"Логин"}
                name={"login"}
                placeholder={"Введите логин"}
                error={error?.message}
                onChange={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="role"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Select
                value={value}
                label={"Роль"}
                placeholder={"Выберите роль"}
                options={rolesOptions}
                onChange={onChange}
                error={error?.message}
                allowClear
              />
            )}
          />

          <Controller
            control={control}
            name="department"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={value?.trim()}
                label={"Отдел"}
                name={"department"}
                placeholder={"Введите отдел"}
                error={error?.message}
                onChange={onChange}
              />
            )}
          />
        </div>
      </Drawer>
    </form>
  );
};

export default DrawerForm;
