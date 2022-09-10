import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';
import { createStringXY, } from 'ol/coordinate';
import Map from 'ol/Map';
import ControlMousePosition from 'ol/control/MousePosition';

@Component({
  selector: 'app-mouse-position',
  template: ``,
  styles: [`::ng-deep .ol-scale-line {
      position: relative;
  }
  ::ng-deep .ol-scale-line, ::ng-deep .ol-scale-line-inner {
      background-color: transparent;
      border-color: var(--text-color);
      color: var(--text-color);
      font-size: inherit;
      bottom: auto;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MousePositionComponent implements OnInit {

  @Input() map: Map;
  @Input() positionTemplate: string;
  control: ControlMousePosition;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.control = new ControlMousePosition({
      className: 'mouseposition-control',
      projection: 'EPSG:4326',
      coordinateFormat: createStringXY(4),
      target: this.element.nativeElement,
    });
    this.map.addControl(this.control);
  }
}