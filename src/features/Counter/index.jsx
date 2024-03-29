import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import style from './style.module.css';

CounterFeature.propTypes = {};

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 30px',
  },
});

function CounterFeature(props) {
  const classes = useStyles();
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increase(123);
    console.log(action);
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease(123);
    console.log(action);
    dispatch(action);
  };
  return (
    <div className={style.count}>
      Counter: {count}
      <Button className={classes.root} onClick={handleDecreaseClick}>
        Decrease
      </Button>
      <Button className={classes.root} onClick={handleIncreaseClick}>
        Increase
      </Button>
    </div>
  );
}

export default CounterFeature;
