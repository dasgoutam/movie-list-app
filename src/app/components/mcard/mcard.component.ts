import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mcard',
  templateUrl: './mcard.component.html',
  styleUrls: ['./mcard.component.scss']
})
export class McardComponent implements OnInit {

  @Input() title = "DefaultTitle";
  @Input() image = "";
  @Input() rating = 0;
  @Input() favorite = false;

  constructor() { }

  ngOnInit(): void {
  }

}
