import { IpGeoContext } from 'contexts/ip.geo';
import { useContext, useEffect } from 'react';
import { fetchLocation } from 'reducers/ip.geo.thunks';
import styled, { createGlobalStyle } from 'styled-components';
import Map from './map';
import Output from './output';
import Search from './search';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
	font-family: 'Rubik', sans-serif;
  }

  html,body {
    margin: 0;
    padding: 0;
	height: 100%;
  }

  .leaflet-container {
	height: 100%;
  }
`;

const Container = styled.main`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
`;

const App = () => {
	const { dispatch } = useContext(IpGeoContext);

	useEffect(() => {
		dispatch(fetchLocation);
	}, [dispatch]);

	return (
		<>
			<GlobalStyle />
			<Container>
				<Output />
				<Search />
				<Map />
			</Container>
		</>
	);
};

export default App;
