import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/102685888?v=4" />
      <Login>odranoelgomes</Login>
      <Name>Leonardo Gomes</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        30&nbsp;<i>seguidores</i>&nbsp; &middot; 10&nbsp;<i>seguindo</i>
      </Data>
      <Data>
        <MdWork size={20} /> Dev Detalhe
      </Data>
      <Data>
        <MdLocationCity size={20} />
        Meier Rio de Janeiro</Data>
      <Data>
        <MdLink size={20} />
        <a href="http://www.detalherj.com.br">detalherj.com.br</a>
      </Data>
    </Inner>
  </Container>
);

export default Profile;
