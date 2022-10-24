import React, { useState } from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState();

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
      id: '1',
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: 'JavaScript',
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: 'JavaScript',
    },
    {
      id: '3',
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: 'PHP',
    },
    {
      id: '4',
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: null,
    },
    {
      id: '5',
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: 'TypeScript',
    },
    {
      id: '6',
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://www.detalherj.com.br',
      language: 'Ruby',
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
