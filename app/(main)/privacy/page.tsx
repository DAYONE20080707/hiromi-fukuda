import Privacy1 from "@/components/privacy/Privacy_01"
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import Breadcrumb from "@/components/ui/module/Breadcrumb";

// 私たちについて
const PrivacyPage = () => {
  return (
    <div>
      <div className=" md:max-w-[1240px] mx-auto pt-[50px] md:pt-20 px-5">
        <Breadcrumb mainTitle="プライバシーポリシー" />
        <div className="mt-10 md:mt-[120px]">
          <ContentHeadline subTitle="プライバシーポリシー" mainTitle="Privacy Policy" />
        </div>
      </div>
      <Privacy1 />
    </div>
  )
}

export default PrivacyPage
