import React from 'react';
import App from './App';
import HomePage from './components/home/HomePage.jsx';
// import GalleryPage from './components/gallery/GalleryPage.jsx';
// import TourPage from './components/tour/TourPage.jsx';
import NotFoundPage from './components/other/NotFoundPage.jsx';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

/*
{
        ...GalleryPage,
        path: '/photo',
        exact: true
      },
      {
        ...TourPage,
        path: '/tour',
        exact: true
      },
      {
        ...TourPage,
        path: '/about',
        exact: true
      }

      */
