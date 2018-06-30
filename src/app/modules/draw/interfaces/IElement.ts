import {ContainerClass} from '../classes/common/ContainerClass';

export interface IElement {
  $element: any;
  parent: ContainerClass;
  width: number;
  height: number;
  x: number;
  y: number;
  selected: boolean;

  position();
}
