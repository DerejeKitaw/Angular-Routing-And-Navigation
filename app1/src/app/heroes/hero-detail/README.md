# Adding animation to hero detail component

## 01_Define animation in external file   `animation.ts`

```bash
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
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
        ]),
        transition(':leave', [
        animate('0.5s ease-out', style({
            opacity: 0,
            transform: 'translateY(100%)'
        }))
        ])
    ]);

```

## 02_include animation in hero-detail component
```bash
#animations: [ slideInDownAnimation ] 

```
## 03_Bind animation
```bash
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  

```

## 04_Import BrouseAnimationModule in app module
```bash
 imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],

```