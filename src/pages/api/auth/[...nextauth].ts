import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { query as q } from 'faunadb';
import { fauna } from '../../../services/faundb';


export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      /**
       * What kind of data the application will make use.
       * That can be for example: to read repos, access private projects...
       * All scope can be found inside the Github API reference.
       */
      scope: 'read:user',
    }),
  ],
  jwt: {
    signingKey: process.env.SIGNING_KEY,
    verificationOptions: {
      algorithms: ['HS512']
    }
  },
  callbacks: {
    async signIn(user, account, profile) {
      try {
        await fauna.query(
          q.Create(
            q.Collection('users'),
            {
              data: {
                email: user.email,
              }
            } 
          ),
        );
        return true;
      } catch (err) {
        return false
      }
    }
  }
});