import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import LowerBlog_01 from "@/components/blog/blog/Blog_01";
import Cta_03 from "@/components/ui/module/cta/Cta_03";
import Profile_05 from "@/components/top/profile/Profile_05";

// よくある質問
const BlogPage = () => {
  return (
    <div>
      <Lowerkv_02
        subtitle="生徒の声・ブログ"
        title="Review&Blog"
        imageUrl="./common/lowerkv_blog.jpg"
      />
      <LowerBlog_01 />
      <Cta_03 />
      <Profile_05 />
    </div>
  );
};

export default BlogPage;
