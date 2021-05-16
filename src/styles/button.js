import styled from 'styled-components';
import React from 'react';

const RoundedTouchableOpacity = styled.TouchableOpacity`
  height: 50px;
  border-radius: 30px;
  width: ${props => props.width || '150px'};
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.button || 'blue'};
  margin-top: 16px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: ${props => props.size || '16px'};
`;

export const RoundedButton = ({onPress, title, fontSize, width}) => (
  <RoundedTouchableOpacity onPress={onPress} width={width} activeOpacity={0.5}>
    <ButtonText size={fontSize}>{title}</ButtonText>
  </RoundedTouchableOpacity>
);
