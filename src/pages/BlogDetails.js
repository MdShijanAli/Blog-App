import { Link } from "react-router-dom";
import PostDetails from "../components/PostDetails";
import RelatedPosts from "../components/RelatedPosts";

function BlogDetails() {
  return (
    <div>
      <div className="container mt-8">
        <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
          className="mr-2 fa-solid fa-house"></i>Go Home</Link>
      </div>
      <section className="post-page-container">
        {/* <!-- detailed post  --> */}
        <PostDetails />
        {/* <!-- detailed post ends --> */}
        {/* <!-- related posts --> */}
        <RelatedPosts />
        {/* <!-- related posts ends --> */}
      </section>
    </div>
  );
}

export default BlogDetails;