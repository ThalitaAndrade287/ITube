import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

export const ContentHeader = styled.div`
    margin: 0;
    padding: 0;
    height: 60px;
    border-style: solid;
    border-color: #EFF0F1;
    border-width: 0px 0px 1px 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.div`
    display: flex;
    width: 100px;
    align-items: center;
    align-content: center;
    margin-left: 10px;
`

export const ImgLogo = styled.img`
    width: 70px;
`

export const ImgLogin = styled.img`
    width: 30px;
    margin-right: 10px;
`

export const InputSearch = styled(InputBase)`
    margin-left: 20px;
`

export const IconSearch = styled(SearchIcon)`
    margin-right: 20px;
    cursor: pointer;    
`

export const SearchField = styled.div`
    display: flex;
    align-items: center;
    border-style: solid;
    border-color: #CBD0D1;
    border-width: 1px 1px 1px 1px;
    width: 30vw;
    justify-content: space-between
`

