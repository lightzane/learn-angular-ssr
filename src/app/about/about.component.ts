import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data: any;

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

  getResponse(): void {
    this.backend.getHello().subscribe((data) => {
      if (data) this.data = data;
    });
  }

}
