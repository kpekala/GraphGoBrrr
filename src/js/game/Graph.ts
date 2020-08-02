import {Expression, Parser} from "expr-eval";
export default class Graph{
    fun: Expression;
    constructor(expr: string) {
        this.fun = new Parser().parse(expr);
    }

    getValue(x: number){
        return this.fun.evaluate({x: x});
    }
}