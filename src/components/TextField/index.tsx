import { ChangeEvent, forwardRef } from 'react';
import cx from './index.module.css';

export interface TextFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  value?: string;

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  return <input ref={ref} {...props}  className={cx.textField} autoComplete={'off'} />
})