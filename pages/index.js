import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I AM A PROFESSIONAL GAME DEVELOPER</p>
        <p>I&#39;m Kervin Amiel Josh K. Canlas, but you can call me &quot;Joro.&quot; I enjoy playing online games with my
friends, and I really like the song &quot;And&quot; by Eden, even though not many people know about it. My top
foods are Shawarma and Pineapple Pizza. I don&#39;t have a lot of social events, but what I love is the fun we
have when we game together. It&#39;s a different kind of fun, unlike always going out or partying.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}