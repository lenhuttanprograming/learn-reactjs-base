import { Box, Checkbox, FormControlLabel, Typography, makeStyles } from '@material-ui/core';
import { CheckBox } from '@material-ui/icons';
import PropTypes from 'prop-types';

FilterByService.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  service: {
    listStyleType: 'none',
    padding: '0',
    margin: 0,
    marginBottom: theme.spacing(2),
  },
}));

function FilterByService({ filters, onChange }) {
  const classes = useStyles();

  const handleChange = (e) => {
    if (!onChange) return;

    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">CHỌN DỊCH VỤ</Typography>

      <ul className={classes.service}>
        {[
          { value: 'isPromotion', name: 'Khuyến Mãi' },
          { value: 'isFreeShip', name: 'Miễn Phí Vận Chuyển' },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                />
              }
              label={service.name}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
