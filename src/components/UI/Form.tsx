import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

export const EmailMaskFormat = (props: any) => {
  const { inputRef, ...other } = props;

  return <MaskedInput {...other} ref={inputRef} mask={emailMask} />;
};
