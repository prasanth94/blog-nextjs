import Hero from "../components/home/hero";
import Head from "next/Head";
import FeaturedPosts from "../components/home/featured-posts";
import { getFeaturedPosts } from "../lib/post-util";
export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Prasanth's blog</title>
        <meta
          name="description"
          content="This is a blog on javascript and specifically about react"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
