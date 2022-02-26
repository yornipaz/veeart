import {Breakpoint,User} from './interfaces'
export const  breakpoints: Breakpoint[]=[
    {
        position:14,
        move:{
            steps:-10,
            type:'desciende'
        }
        
    },
    {
        position:19,
        move:{
            steps:-11,
            type:'desciende'
        }
        
    },
    {
        position:22,
        move:{
            steps:-2,
            type:'desciende'
        }
        
    },
    {
        position:24,
        move:{
            steps:-8,
            type:'desciende'
        }
        
    },
    {
        position:3,
        move:{
            steps:8,
            type:'avanza'
        }
        
    },
    {
        position:10,
        move:{
            steps:2,
            type:'avanza'
        }
        
    },
    {
        position:6,
        move:{
            steps:11,
            type:'avanza'
        }
        
    }, {
        position:9,
        move:{
            steps:9,
            type:'avanza'
        }
        
    },



];

export const Users :User[]=[
    {
        name:'felipe',
        position:0,
        final:false,
    },  
    {
        name:'andrez',
        position:0,
        final:false,
    },
]