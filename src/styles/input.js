import styled from 'styled-components';

export const RoundedInput = styled.TextInput.attrs(props => ({
  secureTextEntry: props.password ? true : false,
  placeholderTextColor: '#FFFFFF70',
}))`
  font-size: 18px;
  background-color: black;
  color: white;
  width: 80%;
  height: 50px;
  margin: 16px;
  border-radius: 30px;
  padding: 16px;
`;
