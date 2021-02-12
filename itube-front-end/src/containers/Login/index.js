import React from 'react';
import Header from '../../components/Header/';
import { connect } from 'react-redux';
import {
    InputEmail,
    InputPassword,
    TextRegisterUser,
    ContentLogin,
    TextLogin,
    ButtonLoginDiv,
    MainButtonLogin,
    ErrorMessage
} from './styled';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { login } from '../../actions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false
        }
    }

    onClickLogin = event => {
        console.log("oi")
        event.preventDefault();

        const { email, password } = this.state;

        this.props.doLogin(email, password);
    };

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render() {

        const { email, password } = this.setState;

        return (
            <ContentLogin onSubmit={this.onClickLogin}>

                <Header/>

                <TextLogin>Entrar</TextLogin>

                <InputEmail
                    required
                    id="outlined-required-name"
                    label="E-mail"
                    placeholder="email@email.com"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                    onChange={this.handleFieldChange}
                    name="email"
                    type="email"
                    value={email}
                />

                <InputPassword
                    required
                    label="Senha"
                    placeholder="Mínimo 6 caracteres"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                            <Visibility />
                                        )}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    name="password"
                    id="password"
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={this.handleFieldChange}
                />

                <ErrorMessage>{this.props.errorMessage}</ErrorMessage>

                <TextRegisterUser>
                    Não possui cadastro?{' '}
                    <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>
                        Clique aqui.
                    </Link>
                </TextRegisterUser>

                <ButtonLoginDiv>
                    <MainButtonLogin type="submit">Entrar</MainButtonLogin>
                </ButtonLoginDiv>
  
            </ContentLogin>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doLogin: (email, password) => dispatch(login(email, password)),
    };
}

export default connect(null, mapDispatchToProps)(Login);

