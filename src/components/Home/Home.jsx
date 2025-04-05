import React from 'react';
import { Presentation } from '../Presentation';
import { Projets } from '../Projets';
import { Contacts } from '../Contacts';
import { useLoaderData } from "react-router";

const Home = () => {
  const { Projet } = useLoaderData();
  return (
    <>
      <Presentation />
      < Projets />
      <Contacts />
    </>
  );
}

export default Home;
