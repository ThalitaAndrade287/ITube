import React from 'react';
import { ContentHome, MainHome } from './styled';
import Header from '../../components/Header/';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <MainHome>
                <Header />
                <ContentHome>
                    Sou a Home
                </ContentHome>
            </MainHome>
        )
    }
}

