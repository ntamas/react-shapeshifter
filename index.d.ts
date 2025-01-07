/// <reference types="react" />

import * as React from 'react';

export declare type Shape = "menu" | "close" | "left" | "right" | "down" | "up";

export interface IShapeshifterProps {
  color?: string;
  onClick?: (event: React.SyntheticEvent<any>) => void;
  padding?: any;
  shape?: Shape;
  style?: React.CSSProperties;
  thickness?: number;
  width?: number;
}

export declare const Shapeshifter: React.FunctionComponent<IShapeshifterProps>;

export default Shapeshifter;

