import React from "react";
import App from "./App";

import PostedPage from "./components/tour/PostedPage.jsx";

export default [
  {
    ...App,
    routes: [
      {
        ...PostedPage,
        path: "/tour/post",
        exact: true,
        inMenu: true,
        title: "Конкурс",
        pageTitle: `Конкурс на\u00A0самое безбашенное путешествие с\u00A0Пинк`
      }
    ]
  }
];
