import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { Flare } from '@material-ui/icons';

FilterPriceRange.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  range: {
    display: 'flex',
    flexFlow: 'row nowrap',
    marginBottom: theme.spacing(2),

    '& > span': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
}));

function FilterPriceRange({ onChange }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!onChange) return;
    onChange(values);
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>

      <Box className={classes.range}>
        <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange}></TextField>
        <span>-</span>
        <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange}></TextField>
      </Box>

      <Button size="small" color="primary" variant="outlined" onClick={handleSubmit}>
        Áp Dụng
      </Button>
    </Box>
  );
}

export default FilterPriceRange;
