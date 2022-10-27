import { IpGeoContext } from 'contexts/ip.geo';
import { useContext } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	background-color: white;
	width: 75%;
	height: 10rem;
	top: 25%;
	left: 13.5%;
	border-radius: 1rem;
	display: flex;
	flex-direction: row;
	padding-top: 2rem;
	z-index: 2;
	box-shadow: 5px 5px 6px -5px #adadad;
`;

const Label = styled.div`
	height: 15%;
	width: 100%;
	text-transform: uppercase;
	color: hsl(0, 0%, 59%);
	font-weight: bold;
	letter-spacing: 0.1rem;
	font-size: 0.7rem;
`;

const Text = styled.div`
	height: 85%;
	width: 100%;
	text-transform: uppercase;
	color: hsl(0, 0%, 17%);
	font-weight: 500;
	font-size: 1.5rem;
`;

const Item = styled.div`
	width: 25%;
	height: 100%;
	display: flex;
	flex-direction: column;

	padding-left: 1.5rem;
`;

const Divider = styled.div`
	width: 1px;
	height: 75%;
	background-color: hsl(0, 0%, 59%);
`;

//TODO: create nice error message
//TODO: create loader when result empty

const Output = () => {
	const { state } = useContext(IpGeoContext);

	return (
		<Container>
			{state.query && state.status === 'success' ? (
				<>
					<Item>
						<Label>ip address</Label>
						<Text>{state.query}</Text>
					</Item>
					<Divider />
					<Item>
						<Label>location</Label>
						<Text>
							{state.city}, {state.regionName}, {state.country}
						</Text>
					</Item>
					<Divider />
					<Item>
						<Label>timezione</Label>
						<Text>UTC {state.timezone}</Text>
					</Item>
					<Divider />
					<Item>
						<Label>isp</Label>
						<Text>{state.isp}</Text>
					</Item>
				</>
			) : state.status === 'fail' ? (
				'Error!'
			) : (
				'Loading...'
			)}
		</Container>
	);
};

export default Output;
