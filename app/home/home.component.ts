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

  despatch = '$0';
  profit = '$0';
  bargelist = [];
  countries = [
    {
      id: 1,
      name: 'Basic Portland',
      despatch: '$32,000',
      profit: '$98,000',
      bargelist: [
        {
          tug: 'TB.KSA 13 / BG. Terang 3305',
          cob: '5,400',
          target: '16/04/21 - 00.10'
        },
        {
          tug: 'TB.Tenang 61 / BG. RMN 2194',
          cob: '5,700',
          target: '25/04/21 - 00.29'
        },
        {
          tug: 'TB.KSA 47 / BG. RMN 2976',
          cob: '6,800',
          target: '01/05/21 - 00.31'
        },
        {
          tug: 'TB.Tenang 101 /BG.Terang 3205',
          cob: '6,200',
          target: '24/04/21 - 00.19'
        },
        {
          tug: 'TB.KSA 81 /BG.Terang 1265',
          cob: '5,300',
          target: '24/04/21 - 00.17'
        }
      ]
    },
    {
      id: 2,
      name: 'BAO Grand',
      despatch: '$43,000',
      profit: '$215,000',
      bargelist: [
        {
          tug: 'TB.KSA 58 / BG. RMN 2616',
          cob: '5,400',
          target: '26/04/21 - 00.11'
        },
        {
          tug: 'TB.KSA 69 / BG. RMN 2342',
          cob: '6,000',
          target: '25/04/21 - 00.21'
        },
        {
          tug: 'TB.KSA 24 / BG. RMN 4323',
          cob: '6,100',
          target: '26/04/21 - 00.18'
        },
        {
          tug: 'TB.KSA 244 / BG. RMN 2310',
          cob: '7,400',
          target: '26/04/21 - 00.14'
        },
        {
          tug: 'TB.Tenang 54 /BG.Terang 3241',
          cob: '5,100',
          target: '29/04/21 - 00.05'
        }
      ]
    },
    {
      id: 3,
      name: 'Manalagi Hita',
      despatch: '$12,500',
      profit: '$75,000',
      bargelist: [
        {
          tug: 'TB.KSA 23 / BG. RMN 2354',
          cob: '4,500',
          target: '26/04/21 - 00.15'
        },
        {
          tug: 'TB.KSA 54 / BG. RMN 1241',
          cob: '6,600',
          target: '25/04/21 - 00.21'
        },
        {
          tug: 'TB.KSA 49 / BG. RMN 3242',
          cob: '7,300',
          target: '26/04/21 - 00.11'
        },
        {
          tug: 'TB.KSA 169 / BG. RMN 2442',
          cob: '6,200',
          target: '25/04/21 - 00.21'
        },
        {
          tug: 'TB.Tenang 101 /BG.Terang 3001',
          cob: '5,700',
          target: '29/04/21 - 00.10'
        }
      ]
    },
    {
      id: 4,
      name: 'SEA Express',
      despatch: '$29,500',
      profit: '$135,400',
      bargelist: [
        {
          tug: 'TB.KSA 59 / BG. RMN 2716',
          cob: '7,400',
          target: '26/04/21 - 00.15'
        },
        {
          tug: 'TB.KSA 61 / BG. RMN 2295',
          cob: '6,000',
          target: '25/04/21 - 00.21'
        },
        {
          tug: 'TB.KSA 169 / BG. RMN 2442',
          cob: '6,200',
          target: '25/04/21 - 00.21'
        },
        {
          tug: 'TB.KSA 49 / BG. RMN 2976',
          cob: '7,100',
          target: '26/04/21 - 00.11'
        },
        {
          tug: 'TB.Tenang 101 /BG.Terang 3001',
          cob: '5,100',
          target: '29/04/21 - 00.10'
        }
      ]
    },
    {
      id: 5,
      name: 'Long Shan Hu',
      despatch: '$15,000',
      profit: '$72,000',
      bargelist: [
        {
          tug: 'TB.KSA 59 / BG. RMN 2716',
          cob: '7,400',
          target: '26/04/21 - 00.15'
        },
        {
          tug: 'TB.KSA 61 / BG. RMN 2295',
          cob: '6,000',
          target: '25/04/21 - 00.21'
        },
        {
          tug: 'TB.KSA 169 / BG. RMN 2442',
          cob: '6,200',
          target: '25/04/21 - 00.21'
        },
        {
          tug: 'TB.KSA 49 / BG. RMN 2976',
          cob: '7,100',
          target: '26/04/21 - 00.11'
        },
        {
          tug: 'TB.Tenang 101 /BG.Terang 3001',
          cob: '5,100',
          target: '29/04/21 - 00.10'
        }
      ]
    },
    {
      id: 6,
      name: 'Jin Hae He',
      despatch: '$25,000',
      profit: '$125,000',
      bargelist: [
        {
          tug: 'TB.KSA 59 / BG. RMN 2716',
          cob: '7,400',
          target: '26/04/21 - 00.15'
        },
        {
          tug: 'TB.KSA 49 / BG. RMN 2976',
          cob: '7,100',
          target: '26/04/21 - 00.11'
        },
        {
          tug: 'TB.KSA 61 / BG. RMN 2295',
          cob: '6,000',
          target: '25/04/21 - 00.21'
        },
        {
          tug: 'TB.KSA 49 / BG. RMN 2976',
          cob: '7,100',
          target: '26/04/21 - 00.11'
        },
        {
          tug: 'TB.Tenang 101 /BG.Terang 3001',
          cob: '5,100',
          target: '29/04/21 - 00.10'
        }
      ]
    }
  ];

  onChange(deviceValue) {
    this.despatch = this.countries.filter(x => x.id == deviceValue)[0].despatch;
    this.profit = this.countries.filter(x => x.id == deviceValue)[0].profit;
    this.bargelist = this.countries.filter(
      x => x.id == deviceValue
    )[0].bargelist;
  }

  urlBarge = 'https://www.linkpicture.com/q/barge.png';
  urlBarge1 = 'https://www.linkpicture.com/q/barge.png';
  urlBarge2 = 'https://www.linkpicture.com/q/newplot-3.png';
  onClick(deviceValue) {
    if (this.urlBarge == this.urlBarge1) {
      this.urlBarge = this.urlBarge2;
    } else {
      this.urlBarge = this.urlBarge1;
    }
  }
}
