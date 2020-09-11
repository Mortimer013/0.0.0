import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//Styles(node-sass must not be imported but installed)
import "./index.scss";

//Apollo Client connect to Backend
const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "http://localhost:4000"
});

//Components(waits until all components are loaded)
const Loading = lazy(() => import('./components/Loading'));
const Home = lazy(() => import('./components/Home'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
					<Router>
						<Suspense fallback={<Loading />}>
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route component={NotFound}/>
							</Switch>
					</Suspense>
				</Router>
			</div>
		</ApolloProvider>
	);
}

export default App;
