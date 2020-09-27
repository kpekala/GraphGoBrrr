import React from 'react';
import '../../css/app.scss';
import GameManager from "../game/GameManager";
import Game from "./Game";
import Creator from "./Creator";
export default class App extends React.Component {

    constructor(props){
        super(props);
        this.gameManager = new GameManager();
        this.state = {
            gameStarted: false,
            fun: ''
        }

        this.onGameStarted = this.onGameStarted.bind(this);
        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    getCurrentPage() {
        if (this.state.gameStarted)
            return <Game fun={this.state.fun}/>;
        else
            return <Creator fun={this.state.fun}
                            onGameStarted={this.onGameStarted}
                            onFunctionChange={this.onFunctionChange}/>;

    }
    onFunctionChange(event){
        this.setState({fun: event.target.value});
    }

    onGameStarted(){
        this.setState({gameStarted: true});
    }

    render(){
        return (
            <div className="appContainer">
                {this.getCurrentPage()}
            </div>
        );
    }
}