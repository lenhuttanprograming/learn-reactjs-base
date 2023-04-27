import React from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress, Typography, makeStyles } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-controls/PasswordField';

LoginForm.propTypes = {
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

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    identifier: yup.string().required('Please enter your email!').email('Please enter a valid email!'),
    password: yup.string().required('Please enter a password!'),
  });

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
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
        Sign In
      </Typography>
      <InputField name="identifier" label="Email" form={form} />
      <PasswordField name="password" label="Password" form={form} />
      <Button size="large" type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
        Sign In
      </Button>
    </form>
  );
}

export default LoginForm;
