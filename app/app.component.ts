import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  opened = false;

  private sidenavContentComponentRef: ComponentRef<SidenavContentComponent>;

  @ViewChild(MatSidenav, { static: true })
  private sidenav: MatSidenav;

  @ViewChild('sidenavContentContainer', {
    read: ViewContainerRef,
    static: false
  })
  private sidenavContentContainer: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  openSidenav(): void {
    const factory = this.resolver.resolveComponentFactory(
      SidenavContentComponent
    );
    this.sidenavContentContainer.clear();

    this.sidenavContentComponentRef = this.sidenavContentContainer.createComponent(
      factory,
      0
    );

    this.opened = true;
  }

  handleClosed(): void {
    this.opened = false;
  }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
