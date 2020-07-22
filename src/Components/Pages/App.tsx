import React from 'react';
import '../../App.css';
import { Router, RouteComponentProps,LocationProvider } from '@reach/router';
import ErrorPage from './ErrorPage';
import { history } from '../../Utils/routerHistory';
import ActivityPage from './ActivityPage';
import LoginPage from './LoginPage';

// const LoginPage = React.lazy(async () => await import('./LoginPage'));
const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

const App = (): JSX.Element => {
  
  return (
    // <React.Fragment>
    //     <React.Suspense fallback={<Loading />}>
    //       <ActivityPage/>
    //     </React.Suspense>
    // </React.Fragment>
    <LocationProvider history={history}>
      <Router>
        <RouterPage pageComponent={<LoginPage />} path="/"></RouterPage>
        <RouterPage pageComponent={<ActivityPage />} path="/activity"></RouterPage>
        <ErrorPage default />
      </Router>
    </LocationProvider>
  );
}

export default App;
