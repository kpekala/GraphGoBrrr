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
    }

    componentDidMount() {
        this.gameManager.start('sin (x/2)');
    }

    getCurrentPage() {
        if (this.state.gameStarted)
            return <Game fun={this.state.fun}/>;
        else
            return <Creator onGameStarted={this.onGameStarted}/>;

    }

    onGameStarted(fun){
        this.setState({fun: fun, gameStarted: true});
    }

    render(){
        return (
            <div className="appContainer">
                {this.getCurrentPage()}
            </div>
        );
    }
}