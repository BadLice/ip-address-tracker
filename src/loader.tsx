import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Spinner = styled.div`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	border: 0.5rem solid hsl(0, 0%, 59%);
	border-top: 0.5rem solid lightblue;
	animation: ${rotate} 1s infinite linear;
`;

export const Loader = () => {
	return (
		<Wrapper>
			<Spinner />
		</Wrapper>
	);
};
