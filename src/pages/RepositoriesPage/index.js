import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

// import Repository from './Repositories/Repository';

const RepositoriesPage = () => {
  const user = {
    login: 'OdranoelGomes',
    name: 'Leonardo G da Silva',
    avatar_url: 'https://avatars.githubusercontent.com/u/102685888?v=4',
    followers: 0,
    following: 0,
    company: null,
    blog: 'https://www.detalherj.com.br',
    location: 'Coelho da Rocha - Brasil',
  };

  // eslint-disable-next-line no-unused-vars
  const repositories = [
    {
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: 'JavaScript',
    },
    {
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: 'JavaScript',
    },
    {
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: 'PHP',
    },
    {
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: null,
    },
    {
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: 'TypeScript',
    },
    {
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: 'Ruby',
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
