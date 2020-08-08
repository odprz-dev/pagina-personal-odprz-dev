import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-section',
  template: `
  <div class="text-center py-8 flex justify-center"> <!--Sección Title-->
    <div class="w-4 h-3 bg-themeRed-800 rounded-l-lg my-auto mr-2"></div><h3 class="text-3xl font-bold">{{titleSection}}</h3><div class="ml-2 w-4 h-3 bg-themeRed-800 rounded-r-lg my-auto"></div>
  </div>
  `,
  styles: [
  ]
})
export class TitleSectionComponent implements OnInit {

  constructor() { }

  @Input() titleSection: string;

  ngOnInit(): void {
  }

}
