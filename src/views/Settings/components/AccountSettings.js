import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
} from '@material-ui/core';
import AccountForm from './account_components/AccountForm/AccountForm';
import AvatarOptions from './account_components/AvatarOptions/AvatarOptions';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import useStyles from '../FormStyles';

const schema = yup.object ().shape ({
  username: yup.string (),
  password: yup.string (),
  avatar: yup.string (),
});

const AccountSettings = () => {
  const classes = useStyles ();

  const {register, handleSubmit, errors} = useForm ({
    resolver: yupResolver (schema),
  });

  const submitHandler = data => alert (JSON.stringify (data));

  return (
    <AccountForm
      submitHandler={submitHandler}
      handleSubmit={handleSubmit}
      register={register}
      errors={errors}
      AvatarOptions={<AvatarOptions />}
    />
  );
};

export default AccountSettings;
