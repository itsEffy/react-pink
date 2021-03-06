import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import serialize from "serialize-javascript";
import Routes from "../../client/Routes";
import SpecialRoutes from "../../client/SpecialRoutes";
import defineImagePreloadLink from "./defineImagePreloadLink";

import formWithLocalStorage from "./formWithLocalStorage.string";

export default (req, store, context, isPostMethod) => {
  let content;
  if (isPostMethod) {
    content = renderToString(
      <Provider store={store}>
        <div>
          <StaticRouter location={req.path} context={context}>
            <div>{renderRoutes(SpecialRoutes)}</div>
          </StaticRouter>
        </div>
      </Provider>
    );
  } else {
    content = renderToString(
      <Provider store={store}>
        <div>
          <StaticRouter location={req.path} context={context}>
            <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
        </div>
      </Provider>
    );
  }

  const isMobile =
    req.get("User-Agent").search(/Mobile|Android|Opera Mini/g) >= 0;

  const isMicrosoftUA = req.get("User-Agent").search(/Trident|Edge/g) >= 0;

  const helmet = Helmet.renderStatic();

  const initialState = JSON.stringify(store.getState());

  const imagePreloads = defineImagePreloadLink(req.path, req.get("User-Agent"));

  return `
  <!DOCTYPE html lang="ru">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

      <meta property="og:title" content="Pink" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="http://react-pink.herokuapp.com/og-image.jpg" />
      <meta property="og:image:secure_url" content="https://react-pink.herokuapp.com/og-image.jpg" />
      <meta property="og:url" content="https://react-pink.herokuapp.com/"
      <meta property="og:locale" content="ru_RU" />

      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&amp;subset=cyrillic" rel="stylesheet">

      <link rel="preload" href="/client-bundle.js" as="script">
      <link rel="preload" href="/tabNavigation.js" as="script"> 
      ${
        isMicrosoftUA
          ? `<link rel="preload" href="/picturefill.min.js" as="script">
             <link rel="preload" href="/pf.mutation.min.js" as="script">`
          : ""
      }
      

      <link rel="stylesheet" href="/main.css">
      <link rel="stylesheet" href="/slick.css">

      <link rel="shortcut icon" href="/favicon-96x96.png">

      ${imagePreloads}
      
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&amp;subset=cyrillic" rel="stylesheet">

      <script src="/svgxuse.min.js" defer></script>
      <script src="/tabNavigation.js" defer></script>
      ${
        isMicrosoftUA
          ? `<script src="/picturefill.min.js" defer></script> 
             <script src="/pf.mutation.min.js" defer></script>`
          : ""
      }

    </head>
    <body class="${isMobile ? "noHover" : "hasHover"} ${
    isMicrosoftUA ? "MS" : "notMS"
  }">

 

      <div id="root">${content}</div>

      <script>
        window.INITIAL_STATE = ${initialState};

       ${req.path === "/tour" ? formWithLocalStorage : ""}
      </script> 

<script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/serviceWorker.js', {
        scope: '/'
      }).then(function(registration) {
        console.log("new SW registered");
      }).catch(function(err) {
        console.log("SW registration failed", err)
      });
    }
  </script>

      

      <script src="/client-bundle.js"></script>
    </body>
  </html> 
  `;
};
