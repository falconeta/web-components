import { ComponentInputs, ComponentOutputs } from '../enums';

export interface ComponentInfo {
  name: string;
  inputs: ComponentInputs[];
  outputs: ComponentOutputs[];
}
