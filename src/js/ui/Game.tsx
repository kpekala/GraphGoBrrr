import React from 'react';
import '../../css/app.scss';
import GameManager from "../game/GameManager";
export default class Game extends React.Component<{fun: string},{}> {
    private gameManager: GameManager;

    constructor(props: any){
        super(props);
        this.gameManager = new GameManager();
    }

    componentDidMount() {
        this.gameManager.start(this.props.fun);
    }

    render(){
        return (
            <div id="gameContainer">

            </div>
        );
    }
}