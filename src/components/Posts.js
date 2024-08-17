import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/PostsSlice";
import Loading from "./Loading";
import Post from "./Post";

function Posts() {
  const dispatch = useDispatch()
  const { isLoading, posts, isError, error } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  let content;

  if (isLoading) content = <Loading />
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
  if (!isLoading && !isError && posts.length === 0) content = <div className="col-span-12">No Posts Found</div>
  if (!isLoading && !isError && posts.length > 0) {
    content = posts.map((post) => <Post key={post.id} post={post} />)
  }


  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}

export default Posts;