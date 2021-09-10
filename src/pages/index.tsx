/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss'
import { stripe } from '../services/stripe';
import { formatToUSD } from '../utils/price';

interface HomeProps {
  product: {
    price_id: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Ig.news</title>
        <meta name="description" content="Home page from Explorer" />
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome!</span>
          <h1>
            News about the <span>React</span> world
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton price_id={product.price_id} />
        </section>
        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  /**
   * @method retrieve
   * The method prices.retrieve is used to fetch the price of a specific product, 
   * that can be found through the price ID
   * @param expand 
   * It can be used to return no only the ID of the product price, but all product data
  */
  const response = await stripe.prices.retrieve('price_1JEIC6JRhNNhKUwZqChXHLs5', {
    expand: ['product'] 
  });

  const product = {
    price_id: response.id,
    amount: formatToUSD(response.unit_amount / 100), // The value comes in cents
  }
 
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  }
}