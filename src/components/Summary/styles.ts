import styled from "styled-components";

interface SummaryTotalProps {
  total: number,
};

export const Container = styled.main<SummaryTotalProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong{
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: ${({ total }) => total >= 0 ? 'var(--green)': 'var(--red)'};
      color: #fff;
    }
  }
`;
