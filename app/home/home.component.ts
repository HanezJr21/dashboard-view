import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { AuthenticationService } from '../_services';
import {
  Component,
  OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { SidenavContentComponent } from '../sidenav-content/sidenav-content.component';

@Component({
  selector: 'material-app',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  opened = false;
  user: User;
  private sidenavContentComponentRef: ComponentRef<SidenavContentComponent>;

  @ViewChild(MatSidenav, { static: true })
  private sidenav: MatSidenav;

  @ViewChild('sidenavContentContainer', {
    read: ViewContainerRef,
    static: false
  })
  private sidenavContentContainer: ViewContainerRef;

  constructor(
    private authenticationService: AuthenticationService,
    private resolver: ComponentFactoryResolver
  ) {
    this.user = this.authenticationService.currentUserValue;
  }

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

  ngOnInit() {}

  ngOnDestroy() {}
}
