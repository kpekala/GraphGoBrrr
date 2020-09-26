import config from './graph_config'

export function getScreenX(x: number){
    return config.axisPosition.x + x * config.adjustX;
}
export function getScreenY(y: number){
    return config.axisPosition.y - y * config.adjustY;
}