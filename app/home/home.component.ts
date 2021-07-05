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

  url = 'https://www.linkpicture.com/q/1_525.png';

  countries = [
    {
      id: 1,
      name: 'Basic Portland',
      url: 'https://www.linkpicture.com/q/1_525.png'
    },
    {
      id: 2,
      name: 'BAO Grand',
      url: 'https://www.linkpicture.com/q/2_338.png'
    },
    {
      id: 3,
      name: 'Manalagi Hita',
      url: 'https://www.linkpicture.com/q/3_230.png'
    },
    {
      id: 4,
      name: 'SEA Express',
      url: 'https://www.linkpicture.com/q/1_525.png'
    },
    {
      id: 5,
      name: 'Long Shan Hu',
      url: 'https://www.linkpicture.com/q/2_338.png'
    },
    {
      id: 6,
      name: 'Jin Hae He',
      url: 'https://www.linkpicture.com/q/3_230.png'
    }
  ];

  onChange(deviceValue) {
    this.url = this.countries.filter(x => x.id == deviceValue)[0].url;
  }
}
