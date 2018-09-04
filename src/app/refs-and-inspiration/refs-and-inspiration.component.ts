import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollBox } from '../scroll-box';

@Component({
  selector: 'app-refs-and-inspiration',
  templateUrl: './refs-and-inspiration.component.html',
  styleUrls: ['./refs-and-inspiration.component.scss']
})
export class RefsAndInspirationComponent implements OnInit, OnDestroy {

  links: any[] = [
    {
      title: 'Advantages Of Decoupling Application Front-End From Back-End',
      author: 'Abhinav Asthana, CEO & Co-founder of Postman',
      url: 'https://www.expresscomputer.in/news/advantages-of-decoupling-application-front-end-from-back-end/24245/'
    },
    {
      title: 'Angular Single Page Applications (SPA): What are the Benefits?',
      author: 'Angular University',
      url: 'https://blog.angular-university.io/why-a-single-page-application-what-are-the-benefits-what-is-a-spa/'
    },
    {
      title: 'Is My Single-Page Application SEO Friendly?',
      author: 'Anthony Gore, Vue Developers',
      url: 'https://vuejsdevelopers.com/2018/04/09/single-page-app-seo/'
    },
    {
      title: 'Use Fetch as Google for websites',
      author: 'Google',
      url: 'https://support.google.com/webmasters/answer/6066468?hl=en?utm_campaign=chrome_series_fetchgoogleweb_111717'
    },
    {
      title: 'HTML5',
      author: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/HTML5'
    }
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      const body = document.getElementsByTagName('html')[0];
      body.classList.add('code');
      const sb = new ScrollBox();
      sb.createScrollBox();
    }, 0);
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('html')[0];
    body.classList.remove('code');
  }
}
