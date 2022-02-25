export interface Breakpoint{
    position:number;
    move:Move;


} 
interface Move {
    steps:number;
    type:'avanza'|'desciende';
}


