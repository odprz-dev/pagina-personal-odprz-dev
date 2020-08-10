import { Component } from '@angular/core';
import { SeoTagsService } from './services/seo-tags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private seoTagsSrvice: SeoTagsService){
    this.seoTagsSrvice.setTitleAndTags();
  }
}
