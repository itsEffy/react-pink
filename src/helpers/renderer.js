import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import serialize from "serialize-javascript";
import Routes from "../../client/Routes";
// import watchForHover from "../../client/utils/watchForHover";
import formWithLocalStorage from "./formWithLocalStorage.string.js";

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <div>
        <StaticRouter location={req.path} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </div>
    </Provider>
  );

  console.log(req.get("User-Agent"));

  // предварительный код
  const isMobile = req.get("User-Agent").search(/Mobile|Android/gi) >= 0;
  console.log("mobile: ", isMobile);

  const isMicrosoftUA = req.get("User-Agent").search(/Trident|Edge/gi) >= 0;
  console.log("isMSUA: ", isMicrosoftUA);

  const helmet = Helmet.renderStatic();

  const initialState = JSON.stringify(store.getState());

  return `
  <!DOCTYPE html lang="ru">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="stylesheet" href="main.css">
      <link rel="shortcut icon" href="/favicon-96x96.png">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&amp;subset=cyrillic" rel="stylesheet">

      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

      <script src="svgxuse.min.js" defer></script>

    </head>
    <body class="${isMobile ? "noHover" : "hasHover"} ${
    isMicrosoftUA ? "MS" : "enableParallax"
  }">
      <div id="root">${content}</div>

      <script>
        window.INITIAL_STATE = ${initialState};

       ${req.path === "/tour" ? formWithLocalStorage : ""}
      </script>
      <script src="client-bundle.js"></script>
    </body>
  </html> 
  `;
};
