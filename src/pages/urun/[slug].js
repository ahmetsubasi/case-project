"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NotFound from '@/components/Product/NotFound';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {
    Product, 
    Slider, 
    ProductDetail, 
    BreadCrumb, 
    Title,
    Brand,
    Category,
    Review,
    Description,
    Prices,
    Discount,
    OldPrice,
    Stock, 
    FavoriteButton
} from '@/styles/Product.style';

export async function getServerSideProps({ params }) {

    const slug = params.slug;
    const data = await fetch(`https://dummyjson.com/products/${slug}`)
        .then((res) => res.json());

    return {
        props: {
            data: data
        }
    }
}

export default function ProductDetailPage({ data }) {

    const [favorited, setFavorited] = useState(false);

    if (!data.title) {
        return NotFound();
    }

    const favorite = () => {
        setFavorited(favorited ? false : true);
    };

    let oldPrice;
    if (data.price && data.discountPercentage) {
        oldPrice = Math.round(data.price * ((100 + data.discountPercentage) / 100));
    }

    return (
        <>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Product>
                    <Slider>
                        <Slide autoplay={false}>
                            {data.images.map((item) => {
                                return (
                                    <Image
                                        key={item}
                                        alt="item"
                                        src={item}
                                        width={400}
                                        height={400}
                                    />
                                )
                            }
                            )}
                        </Slide>
                    </Slider>
                    <ProductDetail>
                        <BreadCrumb>
                            <Link href='/'>Anasayfa</Link> → {data.title}
                        </BreadCrumb>

                        <Title>{data.title}</Title>
                        <Brand>{data.brand}</Brand>
                        <Category>{data.category}</Category>
                        <Description>{data.description}</Description>
                        <Prices>
                            <OldPrice>
                                <span>{oldPrice}$</span>
                            </OldPrice>
                            <Discount> {data.price}$</Discount>
                        </Prices>
                        <Review>{data.rating}/5</Review>
                        <Stock className='stk'>Mağaza Stok Durumu: {data.stock}</Stock>
                        <FavoriteButton className={`btn ${favorited ? 'favorited' : ''}`} onClick={favorite}>
                            <svg className="favorite-button favorite-button--small" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                                    <circle cx="18" cy="18" r="18" fill="white" />
                                </mask>
                                <g mask="url(#mask2)">
                                    <circle cx="18" cy="18" r="20" fill="white" />
                                    <circle className="fill" cx="18" cy="18" r="20" fill="#F86379" />
                                </g>
                                <path className="heart" d="M18 26C18 26 27 19.2439 27 14.798C27 10.3522 21.382 7.66721 18 12.7899C14.618 7.66721 9 10.3522 9 14.798C9 19.2439 18 26 18 26Z" fill="white" />
                            </svg>
                        </FavoriteButton>
                    </ProductDetail>
                </Product>
            </main>
        </>
    )
}
