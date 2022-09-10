import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import Map from 'ol/Map';

@Component({
  selector: 'app-map',
  template: '',
  styles: [':host { width: 100%; height: 75vh; display: block; }',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  @Input() map: Map;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.map.setTarget(this.elementRef.nativeElement);
  }
}