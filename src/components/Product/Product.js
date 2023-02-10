import Link from 'next/link';
import Image from 'next/image';
import styled from "styled-components";

const ProductItem = styled.li`
list-style: none;
padding: 20px;
margin-bottom: 20px;
border: 1px solid #000;
border-radius: 20px;
@media (min-width: 768px) {
    width: calc(25% - 20px);
}
.productLink {
    color: #000;
    text-decoration: none;
    margin: 20px;
}
.productImage {
    display: block;
    max-width: 100%;
}
.productLink:hover {
    color: gray;
}
.p1{
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
    color: #484848;
}
.p2{
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
    font-size: 13px;
    color: #439E4A;
}
`;



export const Product = ({item}) => {
    return (
        <>
            <ProductItem>
                <Link className='productLink' href={`urun/${item.id}`}>
                    <Image alt={item.title} className='productImage' src={item.thumbnail} width="200" height="200" />
                   <div className='p1'>
                   <p>{item.title}</p> 
                   <p>{item.brand}</p> 
                   </div>
                   <div className='p2'>
                   <p> {item.price} $ </p>
                   <p> %{item.discountPercentage} Indirim </p>
                   </div>
                </Link>
            </ProductItem>
        </>
    );
}; 