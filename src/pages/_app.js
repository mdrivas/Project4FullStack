// pages/_app.js
import Head from 'next/head';
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
