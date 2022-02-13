# LearnAngularSsr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Migrated to Angular 13

This project migrated to Angular 13 with the guide of https://update.angular.io

```
npx @angular/cli@13 update @angular/core@13 @angular/cli@13 --force
npx @angular/cli@13 update @angular/material@13
```

## Add Angular Universal (Express Engine)

```
npx ng add @nguniversal/express-engine
npm run dev:ssr
```

## Working around the browser APIs

Because a Universal application doesn't execute in the browser, some of the browser APIs and capabilities might be missing on the server.

For example, server-side applications can't reference browser-only global objects such as `window`, `document`, `navigator`, or `location`.

```ts
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    // this will prevent the error coming in the server logs
    // e.g. ERROR ReferenceError: document is not defined
    if (isPlatformBrowser(this.platformId)) {
      document.title = 'Express Engine | Angular Universal (SSR)';
    }
  }
}
```

Angular provides some injectable abstractions over these objects, such as `Location` or `DOCUMENT`; it might substitute adequately for these APIs. If Angular doesn't provide it, it's possible to write new abstractions that delegate to the browser APIs while in the browser and to an alternative implementation while on the server (also known as shimming).

Reference: https://angular.io/guide/universal#working-around-the-browser-apis

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
