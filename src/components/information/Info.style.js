import styled from 'styled-components';

export const InfoWrapper = styled.div`
	width: 100%;
	padding: 10rem 0 6rem 0;
	background: var(--VeryLightGray);
`;
export const InfoHeader = styled.div`
	p {
		max-width: 70rem;
		padding: 1.5rem 0;
	}
	@media (max-width: 480px) {
		text-align: center;
	}
`;
export const InfoGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;
	@media (max-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 480px) {
		grid-template-columns: repeat(1, 1fr);
		text-align: center;
	}
`;
export const InfoCard = styled.div`
	padding-top: 5rem;
	img {
		max-width: 5rem;
	}
	h3 {
		padding: 2rem 0;
	}
`;
