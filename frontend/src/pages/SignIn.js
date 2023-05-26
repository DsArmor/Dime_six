import React, {useState} from 'react';
import authService from '../services/auth.service';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import {RadioButtonCheckedOutlined} from "@mui/icons-material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {useRadioGroup} from "@mui/material";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Created by © Dime Booking'}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});

    const [upEmail, setUpEmail] = useState("");
    const [upPassword, setUpPassword] = useState("");
    const [upName, setUpName] = useState("");
    const [itemSignUp, setItemSignUp] = useState(false)
    const [value, setValue] = React.useState("backpacker");
    const [formUpErrors, setFormUpErrors] = useState({});

    const navigate = useNavigate();

    const validate = (values) => {
        const errors = {};
        errors.server = values;
        errors.message = "Email or password incorrect";
        return errors;
    }

    const validateSignUp = (values) => {
        const errors = {};
        errors.server = values;
        errors.message = "Email exist";
        return errors;
    }

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await authService.login(email, password).then(
                () => {
                    navigate("/room");
                    window.location.reload();
                },
                (error) => {
                    setFormErrors(validate(error));
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            await authService.signUp(upEmail, upPassword, upName, value).then(
                () => {
                    setItemSignUp(false)
                },
                (error) => {
                    setFormUpErrors(validateSignUp(error));
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Typography sx={{color: "red"}}> {formErrors.message} </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link variant="body2" onClick={ () => setItemSignUp(true) }>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {itemSignUp &&
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
                        <FileDownloadIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSignUp} sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="upEmail"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setUpEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="upPassword"
                            autoComplete="set-password"
                            onChange={(e) => setUpPassword(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="name"
                            label="Name"
                            id="upName"
                            autoComplete="name"
                            onChange={(e) => setUpName(e.target.value)}
                        />
                         <FormControl>
                            <FormLabel id="row-role-booking">Роль пользователя</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="row-radio-buttons-group-booking"
                                name="row-radio-buttons-group"
                                value={value}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="backpacker" control={<Radio />} label="Турист" checked={value === "backpacker"}/>
                                <FormControlLabel value="hotel" control={<Radio />} label="Отельер" />
                            </RadioGroup>
                        </FormControl>
                        <Typography sx={{color: "red"}}> {formUpErrors.message} </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>}
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}