import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
    trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 1,
                transform: 'scale(.2, .3)',
                color: 'red'
            }),
            animate('.6s ease-in')
        ]),
        transition(':leave', [
            animate('1.5s ease-out', style({
                opacity: 0,
                transform: 'translateY(100%)',
                color:'red'
            }))
        ])
    ]);