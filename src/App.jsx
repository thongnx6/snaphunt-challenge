import React, { Fragment, Suspense } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {Global, css} from '@emotion/core';
import routes from './routes';

import { GlobalLoader } from './components/Loaders.jsx';
import Page from './pages/Page.jsx';
import Nav from './components/Nav.jsx';

const GlobalStyle = css`
  * {
    outline: none;
  }
  
  html, body {
    height: 100%;
  }

  html {
    font-size: 14px;
    font-family: 'Helvetica Neue';
    color: #151515;
  }
  
  body {
      margin: 0;
      background-color: rgba(34, 37, 41, 0.7);
  }
`;

const App = (props) => {
    const { pathname } = props.location;

    return (
        <Fragment>
            <Global styles={GlobalStyle}/>
            {pathname !== '/' && <Nav />}

            <Suspense fallback={<GlobalLoader />}>
                <Switch>
                    {routes.map(({ path, component: Component, fullSize = false, center = false, background, ...rest }) => {
                        return (
                            <Route
                                key={path}
                                path={path}
                                render={() => (
                                    <Page fullSize={fullSize} center={center} background={background}>
                                        <Component />
                                    </Page>
                                )}
                                {...rest}
                            />
                        )
                    })}

                    <Redirect from='*' to='/' />
                </Switch>
            </Suspense>
        </Fragment>
    );
};

export default withRouter(App);