import React from 'react';
import {
    ContentHeader,
    Logo,
    ImgLogo,
    ImgLogin,
    SearchField,
    IconSearch,
    InputSearch,
} from './styled';
import logo from '../../assets/logo.png';
import iconLogin from '../../assets/iconLogin.png';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <ContentHeader>
            <Logo>
                <Link to="/">
                    <ImgLogo className="logo" src={logo} alt="Logo Projeto" />
                </Link>
                <h2> FutureTube</h2>
            </Logo>

            <SearchField>

                <InputSearch
                    placeholder="Pesquisar"
                />

                <IconSearch />

            </SearchField>

            <Link to="/login">
                <ImgLogin className="iconLogin" src={iconLogin} alt="Icone Login"></ImgLogin>
            </Link>

        </ContentHeader>
    )
}
