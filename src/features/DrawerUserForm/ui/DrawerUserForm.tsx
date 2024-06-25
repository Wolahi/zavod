import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Drawer } from "antd";

import styles from "./DrawerUserForm.module.scss";

import { drawerUserFormSchema } from "@/features/DrawerUserForm/config/drawerUserFormSchema";
import useUserForm from "@/features/DrawerUserForm/module/useUserForm.ts";
import type { IDrawerUser } from "@/features/DrawerUserForm/ui/interfaces/IDrawerUser";
import type { IDrawerUserForm } from "@/features/DrawerUserForm/ui/interfaces/IDrawerUserForm";
import { DrawerFormExtra, PasswordButtonEye } from "@/shared";
import { Input, Select, Typography } from "@/shared";
import { rolesOptions } from "@/shared/config/rolesOption.ts";
import useGetDepartment from "@/shared/module/useGetDepartment.ts";

const DrawerUserForm = ({
  user,
  open,
  onClose,
  setUsers,
}: IDrawerUser): React.ReactElement => {
  const { control, handleSubmit, reset } = useForm<IDrawerUserForm>({
    resolver: yupResolver(drawerUserFormSchema(!user)),
  });
  const [isClose, setIsClose] = useState(true);
  const { department } = useGetDepartment();
  const { addUser, updateUser, blockUser } = useUserForm();

  useEffect(() => {
    if (user) {
      reset({
        username: user?.username,
        role: user?.roles[0],
        name: user?.name,
        department: user?.department.id,
      });
    }

    return () => {
      reset();
    };
  }, [user, reset]);

  const onSubmit = async (data: IDrawerUserForm) => {
    if (user) {
      const res = await updateUser(user?.id, data);
      setUsers((prev) => [
        ...prev.filter((prev) => prev.id !== res.data.id),
        res.data,
      ]);
    } else {
      const res = await addUser(data);
      if (res.data) {
        setUsers((prev) => [...prev, res.data]);
      }
    }
    onClose();
    reset();
  };

  const onDelete = async () => {
    if (user) {
      await blockUser(user?.id, user?.username);
      setUsers((prev) => prev.filter((prev) => prev.id !== user?.id));
      onClose();
      reset();
    }
  };

  return (
    <Drawer
      styles={{ body: { padding: "15px" } }}
      placement={"right"}
      width={520}
      onClose={onClose}
      open={open}
      extra={
        user ? (
          <DrawerFormExtra
            handleSubmit={handleSubmit(onSubmit)}
            onDelete={onDelete}
          />
        ) : (
          <div className={styles.buttonsWrapper}>
            <Button
              type="primary"
              htmlType={"submit"}
              onClick={handleSubmit(onSubmit)}
            >
              Добавить
            </Button>
          </div>
        )
      }
    >
      <div className={styles.drawerBody}>
        <Typography type={"textM"}>
          {user ? "Редактирование пользователя" : "Добавление пользователя"}
        </Typography>
        <Controller
          control={control}
          name="username"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              value={value?.trim()}
              label={"Логин"}
              disabled={!!user}
              name={"username"}
              placeholder={"Введите логин"}
              error={error?.message}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="name"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              value={value?.trim()}
              label={"Имя"}
              name={"name"}
              placeholder={"Введите имя"}
              error={error?.message}
              onChange={onChange}
            />
          )}
        />
        {!user && (
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                label={"Пароль"}
                value={value?.trim()}
                onChange={onChange}
                name={"password"}
                maxLength={32}
                minLength={8}
                placeholder={"Введите пароль"}
                type={isClose ? "password" : "text"}
                error={error?.message}
                suffix={
                  <PasswordButtonEye
                    isClose={isClose}
                    onClick={() => setIsClose((prev) => !prev)}
                  />
                }
              />
            )}
          />
        )}
        <Controller
          control={control}
          name="role"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Select
              disabled={!!user}
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
            <Select
              value={value}
              label={"Отдел"}
              options={department.map((department) => ({
                value: department.id,
                label: department.name,
              }))}
              placeholder={"Выберите отдел"}
              error={error?.message}
              onChange={onChange}
            />
          )}
        />
      </div>
    </Drawer>
  );
};

export default DrawerUserForm;
