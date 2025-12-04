import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import Contact_01 from "@/components/contact/contact/Contact_01";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import Breadcrumb from "@/components/ui/module/Breadcrumb";
import Profile_05 from "@/components/top/profile/Profile_05";

// お問い合わせ
const ContactPage = () => {
  return (
    <div>
      <div className=" md:max-w-[1240px] mx-auto pt-[50px] md:pt-20 px-5">
        <Breadcrumb mainTitle="お問い合わせ" />
        <div className="mt-10 md:mt-[120px]">
          <ContentHeadline subTitle="お問い合わせ" mainTitle="Contact" />
        </div>
      </div>
      <Contact_01 />
      <Profile_05 />
    </div>
  );
};

export default ContactPage;
