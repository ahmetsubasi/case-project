import styled from "styled-components";

export const ProductsDiv = styled.div`
  margin: 1rem;
`;

export const ProductList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  margin: 0;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;