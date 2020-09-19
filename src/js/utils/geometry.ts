export function lineAngle(x1: number, y1: number, x2: number, y2: number) {
    let angle = Math.asin(Math.abs(y2-y1) / Math.sqrt(Math.pow(y2-y1,2) + Math.pow(x2-x1,2)));
    if(y2 < y1)
        angle = 2*Math.PI - angle
    return angle;
}