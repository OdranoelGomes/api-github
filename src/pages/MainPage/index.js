import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from './styles';

import logoGithub from '../../assets/images/github-logo.png';

const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={logoGithub} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input 
          placeholder="Usuário Git" 
          value={login} 
          onChange={(event) => setLogin(event.target.value)} 
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  )
};
  

export default MainPage;
