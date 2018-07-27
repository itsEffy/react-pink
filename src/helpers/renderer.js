import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import serialize from "serialize-javascript";
import Routes from "../../client/Routes";
import SpecialRoutes from "../../client/SpecialRoutes";

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

  // console.log(req.get("User-Agent"));

  // предварительный код
  const isMobile =
    req.get("User-Agent").search(/Mobile|Android|Opera Mini/g) >= 0;
  // console.log("mobile: ", isMobile);

  const isMicrosoftUA = req.get("User-Agent").search(/Trident|Edge/g) >= 0;
  // console.log("isMSUA: ", isMicrosoftUA);

  const helmet = Helmet.renderStatic();

  const initialState = JSON.stringify(store.getState());

  // возвращает строку, описывающую тип девайса
  const defineProbableDevice = UAheader => {
    // из планшетов понимает только iPad - очень трудно
    if (UAheader.search(/iPad/gi) >= 0) {
      return "tablet";
    } else if (UAheader.search(/Mobile|Android|Opera Mini/g) >= 0) {
      return "mobile";
    }
    return "desktop";
  };

  // возвращает true, если экран с наибольшей вероятностью - retina
  const defineRetina = UAheader => UAheader.search(/Mac/g) >= 0;

  // возвращает true, если браузер скорее всего поддерживает WebP
  const defineWebpSupport = UAheader =>
    UAheader.search(/Chrome|Opera Mini|UCBrowser|Samsung/g) >= 0;

  // даннная функция пытается определить изображения, которые с наибольшей веростноятью понадобятся странице.
  // Оптимизация скорости загрузки
  const defineImagePreloadLink = (route, UAheader) => {
    const probableDevice = defineProbableDevice(UAheader);
    const isRetina = defineRetina(UAheader);
    const supportsWebp = defineWebpSupport(UAheader);

    /*
    console.log(
      "probableDevice: ",
      probableDevice,
      "isRetina: ",
      isRetina,
      "supportsWebp: ",
      supportsWebp
    );
    */

    const imageVersion = `${probableDevice}${isRetina ? "@2x" : ""}`;
    const jpegOrWebp = supportsWebp ? "jpg" : "jpg";
    const pngOrWebp = supportsWebp ? "webp" : "png";

    switch (route) {
      case "/":
        return `<link rel="preload" href="/img/index/bg-back-${imageVersion}.${jpegOrWebp}" as="image">
      <link rel="preload" href="/img/index/iphone-hand-${imageVersion}.${pngOrWebp}" as="image">`;
      default:
        return "";
    }
  };

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
      
      <link rel="stylesheet" href="/main.css">
      <link rel="shortcut icon" href="/favicon-96x96.png">

      ${imagePreloads}
      
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&amp;subset=cyrillic" rel="stylesheet">

      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

      <script src="/svgxuse.min.js" defer></script>

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
      });
    }
  </script>

      <script src="/client-bundle.js"></script>
    </body>
  </html> 
  `;
};
