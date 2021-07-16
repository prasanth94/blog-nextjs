import Hero from "../components/home/hero";
import FeaturedPosts from "../components/home/featured-posts";
import { getFeaturedPosts } from "../lib/post-util";
export default function HomePage(props) {
  return (
    <>
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
