import React from 'react';
import { Presentation } from '../Presentation';
import { Projets } from '../Projets';
import { Contacts } from '../Contacts';
import useJSONPLACEHOLDERGETWAY from '../../service/apiJsonPlaceHolder.service';


const Home = () => {
  const { Projet } = useJSONPLACEHOLDERGETWAY();
  return (
    <>
      <Presentation />
      <Projets projectData={Projet}/>
      <Contacts />
    </>
  );
}

export default Home;
