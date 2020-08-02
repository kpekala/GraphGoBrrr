import {phaser_config} from '../phaser_config';
import gameSession from './GameSession';
export default class GameManager{
    private game: Phaser.Game | undefined;

    start(mathExpr: string){
        gameSession.mathExpr = mathExpr;
        this.game = new Phaser.Game(phaser_config);
    }
}