import React from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress, Typography, makeStyles } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-controls/PasswordField';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {},

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0),
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
}));

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your name!')
      .test('should enter at least 2 words', 'Please enter at least 2 words', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('Please enter your email!').email('Please enter a valid email!'),
    password: yup.string().required('Please enter a password!').min(6, 'Please enter at least 6 letters!'),
    retypePassword: yup
      .string()
      .required('Please retype your password!')
      .oneOf([yup.ref('password')], "Didn't match your password!"),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }

    // form.reset();
  };

  const { isSubmitting } = form.formState;

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      {isSubmitting && <LinearProgress></LinearProgress>}
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography component="h3" variant="h5" className={classes.title}>
        Create An Account
      </Typography>
      <InputField name="fullName" label="Full Name" form={form} />
      <InputField name="email" label="Email" form={form} />
      <PasswordField name="password" label="Password" form={form} />
      <PasswordField name="retypePassword" label="Retype Password" form={form} />
      <Button size="large" type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
        Create an account
      </Button>
    </form>
  );
}

export default RegisterForm;
