import { MouseEvent, forwardRef, PropsWithChildren } from 'react';
import cx from './index.module.css';

export interface  ButtonProps {
  name: string;

  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>((props, ref) => {
  return <button ref={ref} {...props}  className={cx.button} />
})