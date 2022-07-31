import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Data from '../pagesComponents/Account/Data';
import AccountHeader from '../pagesComponents/Account/Header';
import Subsecribe from '../pagesComponents/Dashboard/Subsecribe/Subsecribe';
import { AccountStyle } from '../styles/dashboard';

export default function Account() {
  const [isEdit, setIsEdit] = useState(false);
  const { open } = useSelector((state) => state.upgrade.value);
  return (
    <AccountStyle>
      {
        open && <Subsecribe />
      }
      <AccountHeader setIsEdit={setIsEdit} isEdit={isEdit} />
      <Data name="Jenny Smith" email="jennys@gmail.com" password="123456" setIsEdit={setIsEdit} isEdit={isEdit} />
    </AccountStyle>
  );
}
