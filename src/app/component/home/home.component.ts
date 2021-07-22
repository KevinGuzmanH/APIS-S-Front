import {Component, Inject, OnInit} from '@angular/core';
import { PLATFORM_ID} from "@angular/core";
import { isPlatformBrowser, isPlatformServer} from "@angular/common";
import { TimelineMax } from "gsap"
import {gsap} from "gsap/all";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showmenu!: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)){
      gsap.timeline({repeat: -1,repeatDelay: 4,yoyo: true}).to('#pikachu', {
        rotate: 3
    }).to('#pikachu', {
        rotate: -3
      }).to('#pikachu', {
        rotate: 3
      })
      ;
      gsap.to('#futbolistapc',{
        duration: 2,
        repeat: -1,
        yoyo: true,
        translateY: -40,
      })
      gsap.timeline({repeat: -1,yoyo: true}).to('#futbolista',{
        duration: 2,
        translateY: -20,
        repeat: 2,
        yoyo: true
        })
        .to('#futbolista',{
          duration: 3,
          rotateY: 180
        })
        .to('#futbolista',{
          duration: 2,
          translateY: -20,
          }).from('#circulo3',{
          duration: 1,
          scale: 0,
          ease: "elastic"
          }).from('#circulo2',{
          duration: 1,
          scale: 0,
          ease: "elastic"
          }).from('#circulo1', {
          duration: 1,
          scale: 0,
          ease: "elastic"
          }).from('#nube', {
          duration: 1,
          scale: 0,
          ease: "elastic"
          }).from('#pressT', {
          duration: 1,
          scale: 0,
          ease: "elastic"
          }).from('#nube', {
          duration: 3,
          })
    }

  }

}
