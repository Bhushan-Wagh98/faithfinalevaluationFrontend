import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  dateYear: number;
  constructor() {}

  ngOnInit(): void {
    this.dateYear = new Date().getFullYear();
  }
}
