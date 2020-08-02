import React from 'react';
import '../../css/app.scss';
import GameManager from "../game/GameManager";
export default class App extends React.Component {

    constructor(props){
        super(props);
        this.gameManager = new GameManager();
    }

    componentDidMount() {
        this.gameManager.start('x^2');
    }

    render(){
        return (
            <div className="appContainer">
                <div id="gameContainer">

                </div>
            </div>
        );
    }
}