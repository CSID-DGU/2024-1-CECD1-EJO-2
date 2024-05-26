// use client

import { ButtonProps } from '../../types/button';
import * as Styled from './style';

export default function Button(props: ButtonProps) {

  return (
    <Styled.Button
      width={props.width}
      height={props.height}
      margin={props.margin}
      padding={props.padding}
      onClick={props.onClick}
      background={props.background}
      backgroundColor={props.backgroundColor}
      backgroundSize={props.backgroundSize}
      borderRadius={props.borderRadius}
      disabled={props.disabled}
      dark={props.dark ? props.dark : false}
      color={props.color}
      fontSize={props.fontSize}
      zIndex={props.zIndex}
      position={props.position}
      top={props.top}
      bottom={props.bottom}
      right={props.right}
      left={props.left}
      boxShadow={props.boxShadow}
      fontWeight={props.fontWeight}
    >
      {props.children}
    </Styled.Button>
  );
}
