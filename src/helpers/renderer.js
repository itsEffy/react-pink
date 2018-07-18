import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';
import Routes from '../../client/Routes';

export default (req, store, context) => {
  /*
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
*/

  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  return `
  <html>
    <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
      <link rel="shortcut icon" href="/favicon-96x96.png">
    </head>
    <body className="noHover">
      <div id="root">${content}</div>
      <div>${JSON.stringify(context)}</div>
      
      <script src="client-bundle.js"></script>
    </body>
  </html> 
  `;
};
/* 
<script>
        window.INITIAL_STATE = ${JSON.stringify(store.getState())}
      </script>

      */
