import React, { useState } from 'react';
import Data from '../components/Account/Data';
import AccountHeader from '../components/Account/Header';
import { AccountStyle } from '../styles';

export default function Account() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <AccountStyle>
      <AccountHeader setIsEdit={setIsEdit} isEdit={isEdit} />
      <Data name="Jenny Smith" email="jennys@gmail.com" password="123456" setIsEdit={setIsEdit} isEdit={isEdit} />
    </AccountStyle>
  );
}
