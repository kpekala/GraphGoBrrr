import React from 'react';
import './css/app.scss';

export default class App extends React.Component {

    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="appContainer">
                Witam w pOteZNeJ aplikacji
            </div>
        );
    }
}