import {ContainerClass} from '../classes/common/ContainerClass';

export interface IElement {
  parent: ContainerClass;
  width: number;
  height: number;
  selected: boolean;

  position();
}
