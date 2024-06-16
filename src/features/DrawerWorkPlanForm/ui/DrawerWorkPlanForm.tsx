import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Drawer } from "antd";

import { drawerWorkPlanFormSchema } from "../config/drawerWorkPlanFormSchema";
import { IDrawerWorkPlan } from "../interfaces/IDrawerWorkPlan";
import { IDrawerWorkPlanForm } from "../interfaces/IDrawerWorkPlanForm";

import styles from "./DrawerWorkPlanForm.module.scss";

import { DrawerFormExtra, Input, Typography } from "@/shared";

const DrawerWorkPlan = ({
  workPlan,
  open,
  onClose,
}: IDrawerWorkPlan): React.ReactElement => {
  const { control, handleSubmit, reset } = useForm<IDrawerWorkPlanForm>({
    resolver: yupResolver(drawerWorkPlanFormSchema),
  });

  useEffect(() => {
    reset({
      count: Number(workPlan ? workPlan?.count : 1),
    });
  }, [workPlan, reset]);

  const onSubmit = (data: IDrawerWorkPlanForm) => {
    console.log(data);
    reset();
    onClose();
  };

  const onDelete = () => {
    console.log("deleted");
  };

  return (
    <Drawer
      styles={{ body: { padding: "15px" } }}
      placement={"right"}
      width={520}
      onClose={onClose}
      open={open}
      extra={
        workPlan ? (
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
              Загрузить
            </Button>
          </div>
        )
      }
    >
      <div className={styles.drawerBody}>
        <Typography type={"textM"}>
          {workPlan
            ? "Редактирование рабочего плана"
            : "Добавление рабочего плана"}
        </Typography>

        <Controller
          control={control}
          name="count"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              value={Number(value)}
              label={"Норма"}
              name={"count"}
              placeholder={"Введите норму"}
              error={error?.message}
              onChange={onChange}
              type="number"
              min={0}
            />
          )}
        />
      </div>
    </Drawer>
  );
};

export default DrawerWorkPlan;
