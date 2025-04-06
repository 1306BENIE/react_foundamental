import React from 'react';
import { useLoaderData } from "react-router";
import { Presentation } from '../Presentation';
import { Projets } from '../Projets';
import { Contacts } from '../Contacts';

const Home = () => {
  const { Projet } = useLoaderData();
  return (
    <>
      <Presentation />
      <Projets projectData= {Projet}/>
      <Contacts />
    </>
  );
}

export default Home;
