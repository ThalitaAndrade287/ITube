import React from 'react';
import Header from '../../components/Header/';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
    InputName,
    InputEmail,
    InputDateOfBirth,
    InputPassword,
    InputPasswordConfirm,
    ContentSignUp,
    TextRegister,
    MainButtonSign,
    ButtonSignDiv,
    TextPhoto
} from './styled';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            showPasswordConfirm: false,
        }
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleClickShowPasswordConfirm = () => {
        this.setState(state => ({ showPasswordConfirm: !state.showPasswordConfirm }));
    };

    render() {
        return (
            <ContentSignUp>
                <Header />

                <TextRegister>Cadastrar</TextRegister>

                <InputName
                    required
                    id="outlined-required-name"
                    label="Nome"
                    placeholder="Nome e Sobrenome"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="name"
                    type="text"
                />

                <InputEmail
                    required
                    id="outlined-required-email"
                    label="E-mail"
                    placeholder="email@email.com"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="email"
                    type="email"
                />

                <InputDateOfBirth
                    required
                    id="outlined-required-dateOfBirth"
                    label="Data de nascimento"
                    placeholder="Data de nascimento"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="dateOfBirth"
                    type="date"
                />

                <InputPassword
                    required
                    id="outlined-required-password-signUp"
                    label="Senha"
                    placeholder="Mínimo 6 caracteres"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    inputProps={{
                        minlength: "6"
                    }}
                    name="passwordSignUp"
                    type={this.state.showPassword ? 'text' : 'password'}
                    title="A senha deve ter no mínimo 6 caracteres"
                />

                <InputPasswordConfirm
                    required
                    id="outlined-required-confirm"
                    label="Confirmar"
                    placeholder="Confirme a senha anterior"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPasswordConfirm}
                                >
                                    {this.state.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    name="passwordConfirm"
                    type={this.state.showPasswordConfirm ? 'text' : 'password'}
                />

                <TextPhoto> Escolher foto de perfil </TextPhoto>

                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ButtonSignDiv>
                        <MainButtonSign>Cadastrar</MainButtonSign>
                    </ButtonSignDiv>
                </Link>

            </ContentSignUp>
        )
    }
}

