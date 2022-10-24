import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

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
      language: 'Ruby',
    },
    {
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: 'Java',
    },
    {
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: 'TypeScript',
    },
  ];

  // Calculo dos Filters

  const languages = [
    { name: 'JavaScript', count: 3, color: '#f1c40f' },
    { name: 'Shell', count: 2, color: '#95a5a6' },
    { name: 'PHP', count: 2, color: '#3498db' },
    { name: 'Ruby', count: 1, color: '#e74c3c' },
  ];

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
