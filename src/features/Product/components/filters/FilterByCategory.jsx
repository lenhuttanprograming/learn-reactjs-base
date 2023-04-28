import React from 'react';
import PropTypes from 'prop-types';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import categoryApi from 'api/categoryApi';
import { Box, Typography, makeStyles } from '@material-ui/core';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },

  menu: {
    padding: 0,
    margin: 0,
    listStyle: 'none',

    '& > li': {
      margin: theme.spacing(1),
      transition: 'all .25s',

      '&:hover': {
        cursor: 'pointer',
        color: theme.palette.primary.dark,
      },
    },
  },
}));

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const newCategoryList = await categoryApi.getAll();
        setCategoryList(() =>
          newCategoryList.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log('Failt to get category API');
      }
    })();
  }, []);

  const handleCategoryClick = (categoryId) => {
    if (!onChange) return;

    onChange(categoryId);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
