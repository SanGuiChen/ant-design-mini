import { Input, TSXMLProps } from 'tsxml';
import { InputBlurProps } from './props';

export default (
  {
    enableNative,
    name,
    className,
    style,
    disabled,
    type,
    password,
    placeholder,
    placeholderClassName,
    placeholderStyle,
    maxLength,
    focus,
    confirmType,
    confirmHold,
    alwaysSystem,
    cursor,
    selectionStart,
    selectionEnd,
    randomNumber,
    onChange,
    onConfirm,
    onFocus,
    onBlur,
  }: TSXMLProps<InputBlurProps>,
  { inputValue }
) => (
  <Input
    enableNative={enableNative}
    name={name}
    class={className}
    style={style}
    disabled={disabled}
    value={inputValue}
    type={type}
    password={password}
    placeholder={placeholder}
    placeholder-class={`ant-input-item-placeholder-base ${
      placeholderClassName ? placeholderClassName : ''
    }`}
    placeholder-style={placeholderStyle ? placeholderStyle : ''}
    maxlength={maxLength}
    focus={focus}
    confirm-type={confirmType}
    confirm-hold={confirmHold}
    always-system={alwaysSystem}
    cursor={cursor}
    selection-start={selectionStart}
    selection-end={selectionEnd}
    random-number={randomNumber}
    onInput={onChange}
    onConfirm={onConfirm}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);
