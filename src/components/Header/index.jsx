import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Register from 'features/Auth/register';
import { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (e, reason) => {
    if (reason === 'backdropClick') return;
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <StorefrontIcon className={classes.menuButton} color="inherit"></StorefrontIcon>
          <Typography variant="h6" className={classes.title}>
            Tan Le Shop
          </Typography>

          <NavLink to="/todos" className={classes.link}>
            <Button color="inherit">Todos</Button>
          </NavLink>

          <NavLink to="/albums" className={classes.link}>
            <Button color="inherit">Albums</Button>
          </NavLink>

          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog disableEscapeKeyDown onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close></Close>
        </IconButton>
        <DialogContent dividers>
          <Register closeDialog={handleClose}></Register>
        </DialogContent>
      </Dialog>
    </div>
  );
}
