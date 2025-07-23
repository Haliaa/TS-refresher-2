import { type ReactNode, useEffect, useState } from "react";
import { get } from "./utils/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImg from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>(); // <BlogPost[] | undefined> - is innitial by useState
  const [isFetching, setIsFetching] = useState(false); // <BlogPost[] | undefined> - is innitial by useState
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);

      try {
        const data = (await get(
          "https://jsonplaceholder.typicode.com/posts"
        )) as RawDataBlogPost[];

        const blogPosts: BlogPost[] = data.map((post) => ({
          id: post.id,
          title: post.title,
          text: post.body,
        }));
        setFetchedPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
        setError((error as Error).message);
        // setError((error as Error).message);
        // setError(
        //   "Something went wrong while fetching the posts. Please try again later."
        // );
      }
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  if (isFetching) {
    content = <p id="loading-fallback">Fetching posts...</p>;
  }
  if (error) {
    content = <ErrorMessage text={error} />;
  }

  return (
    <main>
      <img
        src={fetchingImg}
        alt="An abstract image depicting a data fetching process"
      />
      {content}
    </main>
  );
}

export default App;
