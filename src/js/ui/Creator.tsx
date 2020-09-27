import React from 'react';
import '../../css/creator.scss';
import GameManager from "../game/GameManager";
export default class Creator extends React.Component {

    constructor(props: any){
        super(props);
    }

    render(){
        return (
            <div id="creatorContainer">
                <label className="title">Siema</label>
                <input className="functionInput"/>
            </div>
        );
    }
}