import React from 'react';
import '../../css/creator.scss';

type MyProps = {
    fun: string
    onGameStarted: () => void,
    onFunctionChange: (event: any) => void
}

export default class Creator extends React.Component<MyProps,{}> {

    constructor(props: any){
        super(props);
    }

    render(){
        return (
            <div id="creatorContainer">
                <label className="title">Write a function</label>
                <input className="inputFunction" onChange={this.props.onFunctionChange}/>
                <button className="buttonInput" onClick={this.props.onGameStarted}>Click!</button>
            </div>
        );
    }
}