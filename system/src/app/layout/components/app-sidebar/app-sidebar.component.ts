import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { sidebar } from '@config/sidebar';
/**
 * Component quản lý layout sideBar.
 *
 * @author Toanph <skype: toanph1505>
 */
@Component({
  selector: 'app-sidebar',
  template: `
    <nav class="sidebar-nav">
      <ul class="nav" *ngIf="isSystem()">
        <ng-template ngFor let-navitem [ngForOf]="navigation">
          <li *ngIf="isDivider(navitem)" class="nav-divider"></li>
          <ng-template [ngIf]="isTitle(navitem)">
            <app-sidebar-title [title]='navitem'></app-sidebar-title>
          </ng-template>
          <ng-template [ngIf]="!isDivider(navitem)&&!isTitle(navitem)">
            <app-sidebar-item [item]='navitem'></app-sidebar-item>
          </ng-template>
        </ng-template>
      </ul>
      <ul class="nav" *ngIf="!isSystem()">
        <ng-template ngFor let-navitem [ngForOf]="navigation">
          <li *ngIf="isDivider(navitem)" class="nav-divider"></li>
          <ng-template [ngIf]="isTitle(navitem)">
            <app-sidebar-title [title]='navitem'></app-sidebar-title>
          </ng-template>
          <ng-template [ngIf]="!isDivider(navitem)&&!isTitle(navitem)">
            <app-sidebar-item-admin [item]='navitem'></app-sidebar-item-admin>
          </ng-template>
        </ng-template>
      </ul>
    </nav>`
})
export class AppSidebarNavComponent {

  public navigation: any;
  
  constructor(private _router: Router) {
    this.navigation = sidebar;
   }

  public isDivider(item) {
    return item.divider ? true : false
  }

  public isTitle(item) {
    return item.title ? true : false
  }

  public isSystem(){
    return localStorage.getItem('layout') == 'system' ? true : false
  }
}

/**
 * Component hiển thị từng module
 *
 * @author Toanph <skype: toanph1505>
 */
@Component({
  selector: 'app-sidebar-item-admin',
  template: `
  <li class="nav-item dropdown" dropdown placement="bottom right">
  <a *ngIf="isChild()" class="nav-link dropdown-toggle" href="#" role="button" aria-haspopup="true" aria-expanded="false" dropdownToggle (click)="false">
    <img class="sidebar-icon" [src]="this.item.images" alt="">
    <span class="sidebar-text">{{ this.item.name }}</span>
  </a>
  <a *ngIf="!isChild()" class="nav-link" routerLinkActive="active" [routerLink]="[this.url]">
    <img class="sidebar-icon" [src]="this.item.images" alt="">
    <span class="sidebar-text">{{ this.item.name }}</span>
  </a>
  <div *ngIf="isChild()">
    <div class="dropdown-menu dropdown-menu-right" *dropdownMenu aria-labelledby="simple-dropdown">
      <a *ngFor="let children of this.item.children" 
      class="dropdown-item dropdown-item-sidebar" 
      routerLinkActive="active"
      [routerLink]="[this.url + '/' + children.url]">
        {{children.name}}</a>
    </div>
  </div>
</li>
    `
})
export class AppSidebarBackendNavItemComponent implements OnInit {
  @Input() item: any;
  public url: any;
  public layout: any;
  constructor( private router: Router )  { 
  }

  // Khoi tao
  ngOnInit() {
    this.layout = localStorage.getItem('layout') + '-nav-link';
    // check system or backend
    this.url = "/"+localStorage.getItem('layout') + this.item.url;
  }

  public hasClass() {
    return this.item.class ? true : false
  }

  public isDropdown() {
    return this.item.children ? true : false
  }

  public thisUrl() {
    return this.item.url
  }

  public isActive() {
    return this.router.isActive(this.thisUrl(), false)
  }

  public hasVariant() {
    return this.item.variant ? true : false
  }

  public isBadge() {
    return this.item.badge ? true : false
  }

  public isExternalLink() {
    return this.item.url.substring(0, 4) === 'http' ? true : false
  }

  public isIcon() {
    return this.item.icon ? true : false
  }

  public isImages() {
    return this.item.images ? true : false
  }

  public isChild(){
    return this.item.children ? true: false
  }
}

/**
 * Component quản lý thẻ tiêu đề cho sidebar
 *
 * @author Toanph <skype: toanph1505>
 */
@Component({
  selector: 'app-sidebar-title',
  template: ''
})
export class AppSidebarNavTitleComponent implements OnInit {
  @Input() title: any;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const li = this.renderer.createElement('li');
    const name = this.renderer.createText(this.title.name);

    this.renderer.addClass(li, 'nav-title');

    if ( this.title.class ) {
      const classes = this.title.class;
      this.renderer.addClass(li, classes);
    }

    if ( this.title.wrapper ) {
      const wrapper = this.renderer.createElement(this.title.wrapper.element);

      this.renderer.appendChild(wrapper, name);
      this.renderer.appendChild(li, wrapper);
    } else {
      this.renderer.appendChild(li, name);
    }
    this.renderer.appendChild(nativeElement, li)
  }
}

/**
 * Component hiển thị từng module
 *
 * @author Toanph <skype: toanph1505>
 */
@Component({
  selector: 'app-sidebar-item',
  template: `
    <li *ngIf="!isDropdown(); else dropdown" [ngClass]="hasClass() ? 'nav-item ' + item.class : 'nav-item'">
      <app-sidebar-link [link]='item'></app-sidebar-link>
    </li>
    <ng-template #dropdown>
      <li [ngClass]="hasClass() ? 'nav-item nav-dropdown ' + item.class : 'nav-item nav-dropdown'"
          [class.open]="isActive()"
          routerLinkActive="open"
          appNavDropdown>
        <app-sidebar-dropdown [link]='item'></app-sidebar-dropdown>
      </li>
    </ng-template>
    `
})
export class AppSidebarNavItemComponent implements OnInit {
  @Input() item: any;

  constructor( private router: Router )  { 
  }

  // Khoi tao
  ngOnInit() {
  }

  public hasClass() {
    return this.item.class ? true : false
  }

  public isDropdown() {
    return this.item.children ? true : false
  }

  public thisUrl() {
    return this.item.url
  }

  public isActive() {
    return this.router.isActive(this.thisUrl(), false)
  }
}

/**
 * Component hiển thị Link Sidebar
 *
 * @author Toanph <skype: toanph1505>
 */
@Component({
  selector: 'app-sidebar-link',
  template: `
    <a *ngIf="!isExternalLink(); else external"
      class="{{ layout }}"
      [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'"
      routerLinkActive="active"
      [routerLink]="[url]">
      <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
      <img class="sidebar-icon" *ngIf="isImages()" [src]="link.images" alt="">
      <span *ngIf="isImages()" class="sidebar-text">{{ link.name }}</span>
      <span *ngIf="isIcon()">{{ link.name }}</span>
      <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
    </a>
    <ng-template #external>
      <a class="{{ layout }}" [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'" href="{{url}}">
        <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
        {{ link.name }}
        <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
      </a>
    </ng-template>
  `
})
export class AppSidebarNavLinkComponent implements OnInit {
  @Input() link: any;
  public url: any;
  public layout: any;
  constructor() { }

  // Khoi tao
  ngOnInit() {
    this.layout = localStorage.getItem('layout') + '-nav-link';
    // check system or backend
    this.url = "/"+localStorage.getItem('layout') + this.link.url;
  }

  public hasVariant() {
    return this.link.variant ? true : false
  }

  public isBadge() {
    return this.link.badge ? true : false
  }

  public isExternalLink() {
    return this.link.url.substring(0, 4) === 'http' ? true : false
  }

  public isIcon() {
    return this.link.icon ? true : false
  }

  public isImages() {
    return this.link.images ? true : false
  }

}

/**
 * Component quản lý dropdown cho sidebar
 *
 * @author Toanph <skype: toanph1505>
 */
@Component({
  selector: 'app-sidebar-dropdown',
  template: `
    <a class="nav-link nav-dropdown-toggle {{layout}}" appNavDropdownToggle>
      <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
      <img class="sidebar-icon" *ngIf="isImages()" [src]="link.images" alt="">
      <span class="sidebar-text">{{ link.name }}</span>
      <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
    </a>
    <ul class="nav-dropdown-items">
      <ng-template ngFor let-child [ngForOf]="link.children">
        <app-sidebar-item [item]='child'></app-sidebar-item>
      </ng-template>
    </ul>
  `
})
export class AppSidebarNavDropdownComponent {
  @Input() link: any;
  layout: any;
  public isBadge() {
    return this.link.badge ? true : false
  }

  public isIcon() {
    return this.link.icon ? true : false
  }

  public isImages() {
    return this.link.images ? true : false
  }

  constructor() { 
    this.layout = localStorage.getItem('layout') + '-nav-link';
  }
}

export const APP_SIDEBAR_NAV = [
  AppSidebarNavComponent,
  AppSidebarNavDropdownComponent,
  AppSidebarNavItemComponent,
  AppSidebarNavLinkComponent,
  AppSidebarNavTitleComponent,
  AppSidebarBackendNavItemComponent,
];
