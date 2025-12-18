import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  @Input() isMobileOpen = false;

  @HostBinding('class.mobile-open')
  get mobileOpen() {
    return this.isMobileOpen;
  }

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
}
}
