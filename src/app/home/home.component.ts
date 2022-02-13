import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    document.title = 'Express Engine | Angular Universal (SSR)';
  }

  copiedSnackbar(): void {
    this.snackbar.open('Code copied');
  }

}
