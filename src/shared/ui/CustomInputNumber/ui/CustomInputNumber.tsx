import { InputNumber } from 'antd';

import styles from './CustomInputNumber.module.scss';

import { Typography } from '@/shared';
import type { ICustomInputNumberProps } from '@/shared/ui/CustomInputNumber/ui/interfaces/ICustomInputNumberProps';

const CustomInput = ({
  label,
  name = '',
  error,
  ...props
}: ICustomInputNumberProps) => (
  <div className={styles.root}>
    {label && (
      <Typography type={'subtitle'} style={{ color: '#b7b7b7' }}>
        {label}
      </Typography>
    )}
    <InputNumber name={name} {...props} status={error && 'error'} />
    {error && (
      <Typography type={'description'} style={{ color: '#e74c3c' }}>
        {error}
      </Typography>
    )}
  </div>
);

export default CustomInput;
