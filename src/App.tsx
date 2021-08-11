import { createRef } from 'react';
import { FC } from 'react';
import { useState } from 'react';
import {
  Button,
  ConversionType,
  ConverstionTypeSelector,
  TextField,
} from './components';
import { fromRoman, toRoman } from './lib';

import cx from './app.module.css';
import { supportedRomanCharacters } from './lib/constants';

const getInputType = (conversionType: ConversionType) => {
  return conversionType === 'toRoman' ? 'number' : 'text';
};

const getPlaceholderText = (conversionType: ConversionType) => {
  return conversionType === 'toRoman'
    ? 'enter digit...'
    : 'enter roman numerals...';
};

export const App: FC<{
  /**
   * converts in realtime as user types
   */
  realtimeConvert?: boolean;
}> = ({ realtimeConvert = false }) => {
  const inputRef = createRef<HTMLInputElement>();
  const [conversionType, setConversionType] =
    useState<ConversionType>('toRoman');
  const [inputValue, setInputValue] = useState('');

  const [result, setResult] = useState<number | string>('');

  const [error, setError] = useState('');

  const runConversion = (value: string) => {
    if (!value) {
      return setError('field cannot be empty');
    }

    setResult(
      conversionType === 'fromRoman'
        ? fromRoman(value)
        : toRoman(Number.parseInt(value))
    );
  };

  const onConvert = () => {
    runConversion(inputValue);
  };

  /**
   * clear result and error once user is typing
   */
  const onChange = () => {
    if (result) {
      setResult('');
    }
    if (error) {
      setError('');
    }

    const value = (inputRef.current?.value as string).trim();
    const typedChar: string = value.length
      ? value.charAt(value.length - 1).toUpperCase()
      : '';

    let newValue = inputValue;

    if (!value || conversionType === 'toRoman') {
      newValue = value;
      if (conversionType === 'fromRoman') {
        const typedChar = value.charAt(value.length - 1).toUpperCase();
        if (supportedRomanCharacters.includes(typedChar)) {
          newValue = value.toUpperCase();
        }
      } else {
        newValue = value;
      }
    } else if (supportedRomanCharacters.includes(typedChar)) {
      newValue = value.toUpperCase();
    }

    if (newValue !== inputValue) {
      setInputValue(newValue);

      if (realtimeConvert && newValue !== '') {
        runConversion(newValue);
      }
    }
  };

  const onChangeConversionType = (type: ConversionType) => {
    setConversionType(type);
    setResult('');
    setInputValue('');
  };

  return (
    <div className={cx.app}>
      {/* converstion type selector */}
      <ConverstionTypeSelector
        conversionType={conversionType}
        onChange={onChangeConversionType}
      />

      <div>
        <TextField
          value={inputValue}
          name={'input'}
          type={getInputType(conversionType)}
          placeholder={getPlaceholderText(conversionType)}
          ref={inputRef}
          onChange={onChange}
        />
      </div>

      <div className={cx.buttonContainer}>
        <Button onClick={onConvert} name={'convert'}>
          Convert
        </Button>

        {Boolean(result) && <p className={cx.result}>{result}</p>}
      </div>
    </div>
  );
};

export default App;
