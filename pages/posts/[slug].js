import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/post-util";
export default function PostPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const postData = getPostData(params.slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 3000,
  };
}

export function getStaticPaths() {
  const postFiles = getPostsFiles();
  const slugs = postFiles.map((file) => file.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
}
