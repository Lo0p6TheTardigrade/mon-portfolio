// @flow
import Proof from '../components/Proof';
import { Link } from 'react-router-dom';
import Box from '../components/modules/Components';

const Certificate = () => {
  const cegefos = require('../documents/certificate_cegefos.pdf');
  const openclassroom = require('../documents/certificate_openclassroom.pdf');
  const carret = require('../assets/images/carretLeft.webp');

  return (
    <Box
      tag="div"
      classX={'certificate-page-container'}>
      <Proof
        cegefos={{ file: cegefos, name: 'Cegefos' }}
        openclassroom={{ file: openclassroom, name: 'OpenClassroom' }}
        image={{ src: carret, alt: 'bouton switcher', class: 'btn-file-switcher' }}
      />
      <Box
        tag="div"
        classX={'btn-back-to-home-container'}>
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
