import { trigger, transition, state, animate, style } from '@angular/animations';

export let Fade =    
    trigger('fade',[
    state('void',style({opacity:0})),
    transition(':enter,:leave',[
    animate(300)
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
