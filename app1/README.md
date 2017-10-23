## 01_Create hero api

## 02_Create hero module

```bash
ng g module hero --dry
```

## 03_Import hero module in app module to access heros  
hero.module.ts
Hero
```bash 
.....
    imports: [
    HeroModule
  ],
....
```

## 04_Create hero service
```bash
ng g service heroes/hero --dry
```
## 05_Provide hero service to hero module
```bash
providers: [ HeroService ]
```
## 06_Create hero interface
```bash
ng g class heroes/hero --dry
```
## 07_Update heros service to return heros
To access api update .angular-cli.json
```bash
    "assets": [
            "assets",
            "api",
            "favicon.ico"
        ],
```
initialize http at constructor
Add HttpClientModule for http works.
```bash
 HttpClientModule //add this module for angular4 
```
## 08_Create hero list component to list heros
```bash
ng g c hero-list --dry
```
## 09_Display hero-list component in app component

Need to export component from hero module to access it in app

hero.modue.ts
```bash
    @NgModule({
        imports: [
            CommonModule
        ],
        declarations: [HeroListComponent],
        exports:[HeroListComponent]
    })
export class HeroesModule { }  
```
## 10_Add routing
