import React from 'react';

function InputGroupLayout({
  id,
  type,
  name,
  value,
  setUpdate,
  InputGroupStyle,
  LabelStyle,
}) {
  const onChangeHandler = e => {
    setUpdate(e);
  };
  return (
    <InputGroupStyle>
      <LabelStyle htmlFor={id}>{id}</LabelStyle>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChangeHandler}
      />
    </InputGroupStyle>
  );
}

export default InputGroupLayout;
