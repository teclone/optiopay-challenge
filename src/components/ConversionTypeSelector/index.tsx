import { ChangeEvent, FC } from 'react';
import cx from './index.module.css';

export type ConversionType = 'toRoman' | 'fromRoman';

const checkboxes: Array<{
  label: string;
  value: ConversionType
}> = [
  {
    label: 'To Roman',
    value: 'toRoman'
  },
  {
    label: 'From Roman',
    value: 'fromRoman'
  }
];

export const ConverstionTypeSelector: FC<{
  onChange: (conversionType: ConversionType) => void;
  conversionType: ConversionType
}> = ({onChange, conversionType}) => {

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value as ConversionType);
  };

  return (
    <div className={cx.container}>
      {checkboxes.map((current, index) => {
        return (
          <label key={index} className={cx.label}>
            
            <input className={cx.checkbox} type={'radio'} name={'conversion-type'} value={current.value} onChange={onChangeCallback} checked={conversionType === current.value} />

            {current.label}
          </label>
        )
      })}
    </div>
  )
}