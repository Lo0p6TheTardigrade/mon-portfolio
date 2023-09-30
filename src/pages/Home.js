import React from 'react';
import '../scss/components/Main.scss';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Section from '../components/Section';
import AboutMe from '../components/AboutMe';

const Home = () => {
  return (
    <div className="home-container">
      <Layout>
        <Main />
        <Section />
        <AboutMe />
      </Layout>
    </div>
  );
};

export default Home;
