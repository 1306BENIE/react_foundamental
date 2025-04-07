import React from 'react';
import { Presentation } from '../Presentation';
import { Projets } from '../Projets';
import { Contacts } from '../Contacts';
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { Projet } = useOutletContext();
  return (
    <>
      <Presentation />
      <Projets projectData={Projet}/>
      <Contacts />
    </>
  );
}

export default Home;
