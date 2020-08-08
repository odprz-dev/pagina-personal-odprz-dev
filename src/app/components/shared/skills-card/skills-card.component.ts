import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/models/page-interfaces';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss']
})
export class SkillsCardComponent implements OnInit {

  @Input() skill: Skill ;

  constructor() { }

  ngOnInit(): void {
  }

}
