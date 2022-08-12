import FormControl from '@material-ui/core/FormControl';
import React,{ useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Home from '../components/home/Home';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import xhrService from '../components/service/xhr.service';

function Copyright() {
  return (
    <Typography variant="body2" color="textPrimary" align="center">
      {'Copyright © '}
      <Link color="primary" href="https://material-ui.com/">
        UpGrad
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

  const [persona, setPersona] = React.useState('mentee');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [submitAction, setSubmitAction] = React.useState(false);

  useEffect(() => {
    async function register() {
        if(!submitAction)  {
            return;
        }

        let data = {};
        try {
            ({data} = await xhrService.post('http://localhost:3001/api/users', {
                name,
                email,
                password,
                persona,
                contactNumber:  number
            }));
            toast.success(`User Signed Up, ${data.name}`)
            props.history.push('/login');
        } catch(ex) {
            toast.error(ex.message);
        } finally {
            setSubmitAction(false);
        }
    
    }

    register()
    
  }, [submitAction]);

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitAction(true);
  }

  return (
    <div>
        <Home id='home' />
    <Container component="main" maxWidth="xs">
      
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="confirmpassword"
                id="confirmpassword"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="contactnumber"
                label="Contact Number"
                type="contactnumber"
                id="contactnumber"
                autoComplete="Contact-Number"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitForm}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/login'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}