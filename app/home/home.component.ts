import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

import { ConfigService } from '../home/config.service';
import { DomSanitizer } from '@angular/platform-browser';

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

  private sidenavContentComponentRef: ComponentRef<SidenavContentComponent>;

  @ViewChild(MatSidenav, { static: true })
  private sidenav: MatSidenav;

  @ViewChild('sidenavContentContainer', {
    read: ViewContainerRef,
    static: false
  })
  private sidenavContentContainer: ViewContainerRef;

  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private resolver: ComponentFactoryResolver,
    private imageService: ConfigService,
    private sanitizer: DomSanitizer
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(
      user => {
        this.currentUser = user;
      }
    );
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

  ngOnInit() {
    this.loadAllUsers();
    this.imageService.getData().subscribe((baseImage: any) => {
      let objectURL = baseImage.image;

      this.thumbnail = objectURL;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.loadAllUsers();
      });
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      });
  }

  name = 'Test display image';
  thumbnail: any;
}
