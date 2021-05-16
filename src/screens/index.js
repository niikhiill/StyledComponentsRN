import React from 'react';
import {Text, TextInput} from 'react-native';
import useLocalStorage from '../useLocalStorage';
import useUpdateLogger from '../useUpdateLogger';
import {Container} from '../styles/wrapper';
import {Title} from '../styles/text';
import {CustomImage} from '../styles/image';
import {RoundedButton} from '../styles/button';

const Home = ({navigation}) => {
  const [name, setname] = useLocalStorage('name', '');
  useUpdateLogger(name);
  return (
    <Container>
      <CustomImage source={require('../assets/react.png')} />
      <Title>Styled Component</Title>
      <Text> textInComponent </Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type here!"
        onChangeText={name => setname(name)}
      />
      <RoundedButton
        title="Login"
        fontSize={'20px'}
        onPress={() => navigation.navigate('Profile')}
      />
    </Container>
  );
};

export default Home;
