import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() displayTitle: boolean = false;
  @Input() displayMenu: boolean = true;

  ngOnInit(): void {
  }

}
