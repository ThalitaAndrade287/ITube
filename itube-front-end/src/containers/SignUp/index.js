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
    TextPhoto,
    ContainerSignup,
    InputPhoto
} from './styled';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { connect } from "react-redux";
import { signUp } from "../../actions/index";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            showPasswordConfirm: false,
            name: "",
            email: "",
            dateOfBirth: "",
            password: "",
            passwordConfirm: "",
            photo: ""
        }
    }

    validatePassword = (event) => {
        event.preventDefault()

        const password = this.state.password
        const passwordConfirm = this.state.passwordConfirm

        if (password === passwordConfirm) {
            this.handleSubmit()
        }
        else {

            this.setState({ error: { msg: "Sua senha deve ser a mesma que a anterior", status: true } })
        }
        console.log(this.state)
    };

    handleSubmit = () => {

        const { name, email, dateOfBirth, password, photo } = this.state

        this.props.createdUser(name, email, dateOfBirth, password, photo)

    };

    handleFieldChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    handleFieldChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    handleFieldChangeDateOfBirth = (event) => {
        this.setState({ dateOfBirth: event.target.value })
    }

    handleFieldChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    handleFieldChangePasswordConfirm = (event) => {
        this.setState({ passwordConfirm: event.target.value })
    }

    handleFieldChangePhoto = (event) => {
        this.setState({ photo: event.target.value })
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleClickShowPasswordConfirm = () => {
        this.setState(state => ({ showPasswordConfirm: !state.showPasswordConfirm }));
    };

    render() {

        const { name, dateOfBirth, email, password, passwordConfirm, photo } = this.state;

        return (
            <ContentSignUp>
                <Header />

                <ContainerSignup onSubmit={this.validatePassword}>
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
                        onChange={this.handleFieldChangeName}
                        value={name}
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
                        onChange={this.handleFieldChangeEmail}
                        value={email}
                    />

                    <InputDateOfBirth
                        required
                        id="outlined-required-dateOfBirth"input
                        label="Data de nascimento"
                        placeholder="Data de nascimento"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="dateOfBirth"
                        type="date"
                        onChange={this.handleFieldChangeDateOfBirth}
                        value={dateOfBirth}
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
                        onChange={this.handleFieldChangePassword}
                        value={password}
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
                        onChange={this.handleFieldChangePasswordConfirm}
                        value={passwordConfirm}
                    />
                    
                    <TextPhoto> Escolher foto de perfil </TextPhoto>
                    <InputPhoto
                       required
                       id="outlined-required-photo"
                       label="Photo"
                       placeholder="URL foto"
                       margin="normal"
                       variant="outlined"
                       InputLabelProps={{
                           shrink: true,
                       }}
                       name="photo"
                       type="text"
                       onChange={this.handleFieldChangePhoto}
                       value={photo}
                    />

                    <ButtonSignDiv>
                        <MainButtonSign>Cadastrar</MainButtonSign>
                    </ButtonSignDiv>

                </ContainerSignup>

            </ContentSignUp>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        createdUser: (name, email, dateOfBirth, password, photo) => dispatch(signUp(name, email, dateOfBirth, password, photo)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SignUp);



