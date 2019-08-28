import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
// import Home from './components/Home';
// import Counter from './components/Counter';
// import FetchData from './components/FetchData';
import asyncComponent from 'libs/AsyncComponents';
import 'styles/site.scss';

const Home = asyncComponent(() => import('Components/Home'));
const Counter = asyncComponent(() => import('Components/Counter'));
const FetchData = asyncComponent(() => import('Components/FetchData'));

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
  </Layout>
);
