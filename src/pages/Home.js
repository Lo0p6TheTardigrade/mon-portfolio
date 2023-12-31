import React from 'react';
import '../scss/components/Main.scss';
import Layout from '../components/Layout';
import Main from '../components/Main';

const Home = () => {
  return (
    <div className="home-container">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
};

export default Home;
