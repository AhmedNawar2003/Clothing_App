import BlogLinks from "./BlogLinks/BlogLinks";
import "./Blog.css";
import { Outlet, useLocation } from "react-router-dom";
import WomenBlog from "./WomenBlog/WomenBlog";
import TipsBlog from "./TipsBlog/TipsBlog";
import TreeBlog from "./TreeBlog/TreeBlog";
import RuleBlog from "./RuleBlog/RuleBlog";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Blog() {
  const location = useLocation();

  // Check if the user is on a specific blog route
  const isSpecificBlogRoute = location.pathname !== "/blog";

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Blog</title>
          <meta
            name="description"
            content="Discover the latest news, tips, and blog posts from our team."
          />
          <meta
            name="keywords"
            content="blog, news, tips, women's fashion, men's fashion, accessories, travel, fashion, design"
          />
          <meta property="og:title" content="Blog" />
          <meta
            property="og:description"
            content="Discover the latest news, tips, and blog posts from our team."
          />
        </Helmet>
      </HelmetProvider>
      <BlogLinks />
      <section className="allBlog">
        <div className="container">
          <div className="row">
            {/* Render static blogs only on the main blog page */}
            {!isSpecificBlogRoute && (
              <>
                <WomenBlog />
                <TipsBlog />
                <TreeBlog />
                <RuleBlog />
              </>
            )}
            {/* Render dynamic child routes */}
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}
