import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/Header'; // Importa el componente Header
import Footer from '../components/Footer'; // Importa el componente Footer
import HomePage from '../components/HomePage';

const IndexPage = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default IndexPage;
