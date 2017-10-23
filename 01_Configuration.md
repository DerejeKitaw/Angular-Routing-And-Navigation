[Source](https://angular.io/guide/router)

The appRoutes array of routes describes how to navigate. 
```bash
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
```

Pass it to the RouterModule.forRoot method in the module imports to configure the router.
```bash
#@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  ...
})
export class AppModule { }

```

Each Route maps a URL path to a component. 

There are no leading slashes in the path. The router parses and builds the final URL for you, allowing you to use both relative and absolute paths when navigating between application views.
```bash
{ path: 'crisis-center', component: CrisisListComponent }
```

The :id in the second route is a token for a route parameter. 
```bash
{ path: 'hero/:id',      component: HeroDetailComponent }
```
In a URL such as /hero/42, "42" is the value of the id parameter. 

The corresponding HeroDetailComponent will use that value to find and present the hero whose id is 42. 

The data property in the third route is a place to store arbitrary data associated with this specific route. 
```bash
{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  }
```
The data property is accessible within each activated route. 

### Use it to store items such as 
    - page titles, 
    - breadcrumb text, 
    - and other read-only, static data. 
    
The empty path in the fourth route represents the default path for the application, the place to go when the path in the URL is empty, as it typically is at the start. 
```bash
{ path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }
```
This default route redirects to the route for the /heroes URL and, therefore, will display the HeroesListComponent.

The ** path in the last route is a wildcard. The router will select this route if the requested URL doesn't match any paths for routes defined `earlier` in the configuration. 
```bash
{ path: '**', component: PageNotFoundComponent }
```
This is useful for displaying a "404 - Not Found" page or redirecting to another route.

    The order of the routes in the configuration matters and this is by design. 

`The router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes.` 

In the configuration above, routes with a static path are listed first, followed by an empty path route, that matches the default route. The wildcard route comes last because it matches every URL and should be selected only if no other routes are matched first.

If you need to see what `events are happening during the navigation lifecycle`, there is the enableTracing option as part of the router's default configuration. 
```bash
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }
```
This outputs each router event that took place during each navigation lifecycle to the browser console. This should only be used for debugging purposes. You set the enableTracing: true option in the object passed as the second argument to the RouterModule.forRoot() method.