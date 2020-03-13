import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const InputName = styled(TextField) `
    margin-top: 20px;
    width: 40vw;
    height: 56px;
`

export const InputEmail = styled(TextField) `
    margin-top: 16px;
    width: 40vw;
    height: 56px;
`
export const InputDateOfBirth = styled(TextField) `
    margin-top: 16px;
    width: 40vw;
    height: 56px;
`

export const InputPassword = styled(TextField)`
    margin-top: 16px;
    width: 40vw;
    height: 56px;
`

export const InputPasswordConfirm = styled(TextField)`
    margin-top: 16px;
    width: 40vw;
    height: 56px;
    margin-bottom: 16px;
`

export const ContentSignUp = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TextRegister = styled.div `
    font-size: 20px;
    color: #000000;
    height: 18px; 
    margin-top: 28px;  
`

export const ButtonSignDiv = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    margin-top: 16px;

`

export const MainButtonSign = styled.button`
    width: 20vw;
    background: #c33734;
    padding: 12px 16px;
    margin: 8px 16px 0;
    border:none;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    border-radius: 2px;
    :focus{
        outline:none;
    }
    cursor: pointer;
`

export const TextPhoto = styled.div `
    font-size: 16px;
    color: #000000;
    height: 18px; 
    margin-top: 28px;  
`