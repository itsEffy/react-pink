import React from "react";
import App from "./App";
import HomePage from "./components/home/HomePage.jsx";
import GalleryPage from "./components/gallery/GalleryPage.jsx";
import TourPage from "./components/tour/TourPage.jsx";
import AboutPage from "./components/about/AboutPage.jsx";
import NotFoundPage from "./components/other/NotFoundPage.jsx";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...TourPage,
        path: "/tour",
        exact: true,
        inMenu: true,
        title: "Конкурс",
        pageTitle: `Конкурс на\u00A0самое безбашенное путешествие с\u00A0Пинк`,
        posted: false
      },
      {
        ...GalleryPage,
        path: "/photo",
        exact: true,
        inMenu: true,
        title: "Фотографии",
        pageTitle: "Фотографии пользователей"
      },
      {
        ...AboutPage,
        path: "/about",
        exact: true,
        inMenu: true,
        title: "О проекте",
        pageTitle: "Несколько слов об\u00A0этом проекте"
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

/*

      
      {
        ...AboutPage,
        path: '/about',
        exact: true,
        inMenu: true,
        title: 'О проекте',
        pageTitle: `Несколько слов об\u00A0этом проекте`
      }

      */
