import {ContainerClass} from '../classes/common/ContainerClass';

export interface IElement {
  $element: any;
  width: number;
  height: number;
  x: number;
  y: number;
  selected: boolean;

  parent(val: ContainerClass);

  position();
}
