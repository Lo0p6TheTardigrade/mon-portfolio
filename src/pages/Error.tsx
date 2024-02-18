import React from 'react';
import Error404 from '../components/Error404';
import Layout from '../components/Layout';

type Props = {};

const Error = (props: Props) => {
  return (
    <Layout>
      <Error404 />
    </Layout>
  );
};

export default Error;
