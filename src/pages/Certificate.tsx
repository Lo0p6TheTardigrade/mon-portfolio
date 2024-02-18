import React from 'react';
import Proof from '../components/Proof';
import { Link } from 'react-router-dom';
import Box from '../components/modules/Components';
// import { useSelector } from 'react-redux';
// import { Behavior_Custom_Interface } from '../types';

type Props = {};

const Certificate = (props: Props) => {
  //   const window5 = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.window.window5);
  const cegefos = require('../documents/certificate_cegefos.pdf');
  const openclassroom = require('../documents/certificate_openclassroom.pdf');
  const carret = require('../assets/images/carretLeft.webp');

  return (
    <Box
      tag="div"
      class="certificate-page-container">
      <Proof
        cegefos={{ file: cegefos, name: 'Cegefos' }}
        openclassroom={{ file: openclassroom, name: 'OpenClassroom' }}
        image={{ src: carret, alt: 'bouton switcher', class: 'btn-file-switcher' }}
        // image={{ src: carret, alt: 'bouton switcher', class: `btn-file-switcher ${window5 && 'rotate-animate-reverse'}` }}
      />
      <Box
        tag="div"
        class="btn-back-to-home-container">
        <Link
          to="/"
          className="btn-back-to-home">
          Retour
        </Link>
      </Box>
    </Box>
  );
};

export default Certificate;
