import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasePageComponent } from '../../page/page.component';

@Component({
  selector: 'app-who-uses',
  templateUrl: './who-uses.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhoUsesComponent extends BasePageComponent {
  readonly companies = [
    {
      logo: 'https://nestjs.com/valor-software.5dab60ec.png',
      url: 'https://valor-software.com/',
    },
    {
      logo: 'https://nestjs.com/logo-xtremis.0feb160c.svg',
      url: 'http://xtremis.com/',
      width: '200px',
    },
    {
      logo: 'https://nestjs.com/neoteric.0e4df380.png',
      url: 'https://neoteric.eu/',
    },
    {
      logo: 'https://nestjs.com/swingdev-logo.66e92510.svg',
      url: 'https://www.swingdev.io/',
    },
    {
      logo: '/assets/logo/adidas.svg',
      url: 'https://www.adidas.com',
      width: '80px',
    },
    {
      logo: 'https://nestjs.com/gojob-logo.2b6e823c.png',
      url: 'https://gojob.com/',
      width: '100px',
    },
    {
      logo: '/assets/logo/trellis.png',
      url: 'https://trellis.org/',
      width: '70px',
    },
    {
      logo: 'https://nestjs.com/scalio-logo.0a1046af.svg',
      url: 'https://scal.io',
      width: '120px',
    },
    {
      logo: '/assets/logo/rewe.svg',
      url: 'https://rewe-digital.com/',
      width: '180px',
    },
    {
      logo: 'https://nestjs.com/genuinebee.bdd5ef72.svg',
      url: 'https://genuinebee.com/',
    },
  ];

  readonly companiesUrls = [
    'https://gorrion.io/',
    'http://balticdatascience.com/',
    'https://prohabits.com/',
    'https://komed-health.com/',
    'https://kerberus.com.co/',
    'https://www.notadd.com/',
    'http://jsdaddy.io/',
    'http://architectnow.net/',
    'https://www.yumpingo.com/',
    'https://www.analytics-importer.cz/',
    'https://www.dayzim.com/',
    'https://www.wizkids.co.uk/',
    'https://pilvia.com/',
    'https://www.wi-q.com/',
    'http://agrofel.com.br',
    'https://www.societegenerale.com/',
    'https://trashpanda.hulan.nl/',
  ];
}
