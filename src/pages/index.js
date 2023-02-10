import Head from 'next/head';
import { Product } from '@/components/Product/Product';
import { ProductsDiv, ProductList} from '@/styles/Home.style';

export async function getServerSideProps() {

  const data = await fetch(`https://dummyjson.com/products/`)
      .then((res) => res.json());

  return {
      props: {
          data: data.products
      }
  }
}

export default function Home({data}) {

  return (
    <>
      <Head>
        <title>Frontend case project</title>
        <meta name="description" content="Nextjs frontend case project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProductsDiv>
          <ProductList>
            {data && data.map((item) =>
              <Product key={item.id} item={item} />
            )}
          </ProductList>
        </ProductsDiv>
      </main>
    </>
  )
}
