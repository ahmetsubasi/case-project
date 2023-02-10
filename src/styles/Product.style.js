import styled from "styled-components";

export const Product = styled.div`
  margin: 2rem;
  display: flex;
  gap: 40px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Slider = styled.div`
  text-align: center;
    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const ProductDetail = styled.div`
    > * {
        margin-bottom: 20px;
    }
    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const BreadCrumb = styled.div`
    font-size: 12px;
`;

export const Title = styled.h1`
    font-weight: bold;
    color: #484848;
`;
export const Brand = styled.p`
    color: #484848;
    font-size: 16px;
`;
export const Category = styled.p`
    color: #484848;
    font-size: 16px;
    text-transform: capitalize;
`;

export const Review = styled.p`
    color: #484848;
    font-size: 16px;
`;
export const Description = styled.div`
  color: #484848;
`;

export const Prices = styled.div`
display: flex;
gap: 10px;
`

export const Discount = styled.p`
  color: #439E4A;
`;

export const OldPrice = styled.p`
  color: #484848;
  span {
    text-decoration: line-through;
  }
`;

export const Stock = styled.p`
    color:#484848;
    &:hover {
        color: #B22222;
        text-decoration: underline;
    }
`

export const FavoriteButton = styled.button`
cursor: pointer;
border-radius: 50%;
overflow: visible;
box-shadow: 0 15px 35px rgba(3, 51, 68, 0.1), 0 3px 10px rgba(3, 51, 68, 0.07);
width: 36px;
height: 36px;
.fill {
    fill: #f86379;
    transform: scale(0.2);
    transform-origin: 50%;
}
.heart {
    fill: #789898;
}
&.favorited {
    .fill {
        transform: scale(1);
        transition: transform 80ms ease-out;
      }
      
      .stroke {
        display: none;
      }
        
      .heart {
        fill: white;
        animation: animated 220ms both;
        transform-origin: 50%;
    }
}
`;