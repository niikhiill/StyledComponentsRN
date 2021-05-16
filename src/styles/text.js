import {TextPropTypes} from 'react-native';
import styled from 'styled-components';

export const Title = styled.Text`
  font-size: 32px;
  color: ${props => props.theme.colors.textDark || 'black'};
  margin: 16px;
`;
