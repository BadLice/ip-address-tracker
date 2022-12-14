import { IpGeoContext } from 'contexts/ip.geo';
import IpInput from 'ip.input';
import React, { useContext, useState } from 'react';
import { fetchLocation } from 'reducers/ip.geo.thunks';
import styled from 'styled-components';

const Container = styled.div`
	height: 33%;
	width: 100%;
	background: url('./images/pattern-bg.png') no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 2rem;

	@media only screen and (max-width: 850px) {
		height: 50%;
	}
`;

const Title = styled.h1`
	color: white;
	height: 20%;
	font-weight: 200;
`;

const Wrapper = styled.form`
	width: 100%;
	height: 3rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Submit = styled.button`
	border: none;
	border-radius: 0rem 0.8rem 0.8rem 0rem;
	height: 100%;
	width: 4%;
	background-color: black;
	color: white;
	font-size: 1.5rem;
	cursor: pointer;

	&::before {
		content: url('./images/icon-arrow.svg');
	}

	&:active {
		background-color: hsl(0, 0%, 17%);
	}

	@media only screen and (max-width: 850px) {
		width: 12%;
	}
`;

const Input = styled(IpInput)`
	border-radius: 0.8rem 0rem 0rem 0.8rem;
	height: 100%;
	width: 35%;
	outline: none;
	border: none;
	font-size: 1rem;
	padding-left: 1rem;
	padding-right: 1rem;

	@media only screen and (max-width: 850px) {
		width: 78%;
	}
`;

const Search = () => {
	const { dispatch } = useContext(IpGeoContext);
	const [searchQuery, setSearchQuery] = useState<string | null>(null);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if (searchQuery) {
			dispatch((dispatch) => fetchLocation(dispatch, searchQuery));
		}
	};

	const hnaldeChangeSearchQuery: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<Container>
			<Title>IP Address Tracker</Title>
			<Wrapper onSubmit={handleSubmit}>
				<Input
					onChange={hnaldeChangeSearchQuery}
					placeholder='Search for any IP address'
				/>
				<Submit aria-label='Submit' />
			</Wrapper>
		</Container>
	);
};

export default Search;
