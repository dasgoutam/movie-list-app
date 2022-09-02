import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watched-card',
  templateUrl: './watched-card.component.html',
  styleUrls: ['./watched-card.component.scss']
})
export class WatchedCardComponent implements OnInit {

  @Input() title:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
