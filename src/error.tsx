import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const Text = styled.div`
	color: #f87070;
	font-size: 3rem;
`;

export const Error = () => {
	return (
		<Wrapper>
			<Text>Ops... An error occured.</Text>
		</Wrapper>
	);
};
