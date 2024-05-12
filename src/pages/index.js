import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="app-container">
        <h1 className="main-title">WeatherGuesser</h1>
        <Link href="/guess" legacyBehavior>
          <a className="play-button">Play Now</a>
        </Link>
        <div className="image-container">
          <Image src="/image3.jpeg" alt="Nature landscape" width={300} height={200} layout="responsive" />
          <Image src="/image4.jpeg" alt="Nature landscape" width={300} height={200} layout="responsive" />
          {}
        </div>
      </div>
    </Layout>
  );
}
