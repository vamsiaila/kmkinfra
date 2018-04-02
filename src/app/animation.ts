import { trigger, transition, state, animate, style } from '@angular/animations';

export let Fade =    
    trigger('fade',[
        transition(':enter',[
            style({opacity:0}),
            animate(500)
    ])
  ])
export let slidenx = 
    trigger('slidenx',[
        transition(':enter',[
            style({transform:'translateX(-100px)'}),
            animate(500)
        ])
    ])
export let slidex = 
    trigger('slidex',[
        transition(':enter',[
            style({transform:'translateX(100px)'}),
            animate(500)
        ])
    ])
export let slidey = 
    trigger('slidey',[
        transition(':enter',[
            style({transform:'translateY(100px)'}),
            animate(500)
        ])
    ])
export let slideny = 
    trigger('slidey',[
        transition(':enter',[
            style({transform:'translateY(-100px)'}),
            animate(500)
        ])
    ])
