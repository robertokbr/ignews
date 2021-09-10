import Stripe from 'stripe';
import projectPackage from '../../package.json';

/**
 * Instead of using the stripe API with http, we can use the 
 * Stripe sdk, which is a wrapper with the best practices to handle the API 
*/
export const stripe = new Stripe(
  process.env.STRIPE_API_KEY,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'Ignews',
      version: projectPackage.version,
    }
  }
)