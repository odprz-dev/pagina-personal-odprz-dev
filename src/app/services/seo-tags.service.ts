import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import {filter, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SeoTagsService {

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private scully: ScullyRoutesService,
    private meta: Meta
    ) { }

    setTitleAndTags (){
      this.router.events.pipe(
        filter((event)=> event instanceof NavigationEnd),
        map(()=> this.activatedRoute),
        map(route=> {
          while(route.firstChild){
            route = route.firstChild;
          }
          return route;
        }),
        filter(route=> route.outlet === 'primary')
      ).subscribe((route: ActivatedRoute)=>{
        this.scully.getCurrent().subscribe(
          link=>{
            if(link.title){
              this.titleService.setTitle(link.title);
            }else{
              const title: string = route.snapshot.data['title'];
              const description: string = route.snapshot.data['description'];
              const keywords: string = route.snapshot.data['keywords'];
              const expires: string = route.snapshot.data['expires'];

              this.titleService.setTitle(title);
              this.meta.updateTag({name: 'description', property: description });
              this.meta.updateTag({name: 'keywords', property: keywords });
              this.meta.updateTag({httpEquiv: 'expires', property: expires });
            }
          }
        );
      });
    }
}
