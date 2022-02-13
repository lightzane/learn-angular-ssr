import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.title = 'Express Engine | Angular Universal (SSR)';
    }
  }

  copiedSnackbar(): void {
    this.snackbar.open('Code copied');
  }

}
