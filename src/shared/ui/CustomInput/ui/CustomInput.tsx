import { Input } from 'antd';

import styles from './CustomInput.module.scss';

import { Typography } from '@/shared';
import type { ICustomInputProps } from '@/shared/ui/CustomInput/interfaces/ICustomInputProps';

const CustomInput = ({
  label,
  name = '',
  error,
  ...props
}: ICustomInputProps) => (
  <div className={styles.root}>
    {label && (
      <Typography type={'subtitle'} style={{ color: '#b7b7b7' }}>
        {label}
      </Typography>
    )}
    <Input name={name} {...props} status={error && 'error'} />
    {error && (
      <Typography type={'description'} style={{ color: '#e74c3c' }}>
        {error}
      </Typography>
    )}
  </div>
);

export default CustomInput;
