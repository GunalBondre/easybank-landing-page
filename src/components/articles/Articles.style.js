import styled from 'styled-components';

export const ArticleWrapper = styled.div`
	padding: 10rem 0 6rem 0;
	h2 {
		padding: 1rem 0 2rem 0;
	}
`;
export const ArticleGrid = styled.div`
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
export const ArticleCard = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	h4 {
		padding: 1rem 0;
	}
	border-radius: 1rem;
	overflow: hidden;
`;
export const ArticleCardContent = styled.div`
	padding: 2rem 3rem;
`;
