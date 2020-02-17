import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import '../styles/bootstrap-4.3.1.min.css';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Navbar from '../components/navbars/navbar';
import Header from '../components/header';
import Projects from '../components/projects/projects';
import About from '../components/about/about';
import Resume from '../components/resume/resume';
import BlogShowcase from '../components/blogShowcase/blogShowcase';
import Contact from '../components/contact';

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: center;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Header />
    <StyledContainer fluid>
      <Projects />
      <About />
      <Resume />
      <BlogShowcase />
      <Contact />
    </StyledContainer>
  </Layout>
);

export default IndexPage;
