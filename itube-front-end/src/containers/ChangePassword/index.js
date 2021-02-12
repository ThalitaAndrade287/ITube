import React from 'react';
import Header from '../../components/Header/';

export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <h1>Sou a ChangePassword</h1>
            </div>
        )
    }
}
