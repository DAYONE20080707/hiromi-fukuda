import BlogDetail_01 from "@/components/blog/blogDetail/BlogDetail_01";
import Profile_05 from "@/components/top/profile/Profile_05";
import Cta_03 from "@/components/ui/module/cta/Cta_03";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { id } = await params;

  return (
    <>
      <BlogDetail_01 params={{ id }} />
      <Cta_03 />
      <Profile_05 />
    </>
  );
};

export default BlogDetailPage;
