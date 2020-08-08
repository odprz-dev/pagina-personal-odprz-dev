import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/page-interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  skillList:Skill[] = [
    {title: '🚧 Backend', description: `Desarrollo de arquitectura backend orientada a servicios Rest Api con tecnología DotNet, DoNet Core, Entity Framework`},
    // {title: '🚧 Backend', description: `Desarrollo de  arquitectura backend orientado a servicios Rest Api con tecnologia DotNet y DoNet Core.
    // Utilizando Entity Framework para la comunicación con la capa de datos; ademas de implementar funcionalidades en tiempo real con signalR y seguridad basada en el protocolo Oauth 2.0`},
    {title: '🌐 Frontend', description: `Desarrollo de páginas y aplicaciones web
         con experiencia en Angular, NgRx y NgMaterial como framework para el desarrollo Frontend.`},
    //   {title: '🌐 Frontend', description: `Desarrollo de páginas y aplicaciones web
    //  con experiencia en lenguaje Java Script, Type Script,
    //   CSS y HTML. Con experiencia en el manejo de Angular y NgMaterial como framework para el desarrollo Frontend y Botstrap para el maquetado web, actualmente utilizo Tailwind como framework CSS.`},
    {title: '🗃 Databases', description: `Experiencia con el desarrollo de base de datos T-SQL(Stored Procedures, Triggers, Complex Database Scriptings).
        Diseño e implementación de base de datos.`},
    {title: '🖌📏 Diseño de interfaces', description: `Puedo diseñar prototipos de interfaces utilizando herramientas como Figma, Lunacy y Adobe XD`},
    {title: '📱 Aplicaciones Móviles', description: `Actualmente me estoy capacitando en el desarrollo de aplicaciones móviles utilizando Flutter y Dart.`},
  ];

  tolsSrc=[
    '/assets/tools/js.png',
    '/assets/tools/msNet.png',
    '/assets/tools/ts.png',
    '/assets/tools/angular.png',
    '/assets/tools/ids.png',
    '/assets/tools/sql.png',
    '/assets/tools/firebase.png',
    '/assets/tools/git.png',
    '/assets/tools/github.png',
    '/assets/tools/git-kraken.png',
    '/assets/tools/ngrx.png',
    '/assets/tools/node.png',
    '/assets/tools/tailwind.svg',
    '/assets/tools/flutter.png',
    '/assets/tools/b5.svg',
    '/assets/tools/figma.png',
  ]

  articleList=['','','','']

  ngOnInit(): void {
  }

}
