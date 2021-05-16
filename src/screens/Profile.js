import React from 'react';
import {Container} from '../styles/wrapper';
import {Title} from '../styles/text';
import {RoundedInput} from '../styles/input';
import {RoundedButton} from '../styles/button';

export default Profile = () => {
  return (
    <Container>
      <Title> Welcome, User </Title>
      <RoundedInput placeholder="UserName" />
      <RoundedInput password placeholder="Password" />
      <RoundedButton title="Submit" width="80%" />
    </Container>
  );
};
