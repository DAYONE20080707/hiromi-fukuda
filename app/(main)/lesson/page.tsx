import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import About_02 from "@/components/service/about/About_02";
import Award_01 from "@/components/service/award/Award_01";
import Class_01 from "@/components/service/class/Class_01";
import Coaching_01 from "@/components/service/coaching/Coaching_01";
import Feature_01 from "@/components/service/feature/Feature_01";
import Flow_01 from "@/components/service/flow/Flow_01";
import Profile_05 from "@/components/top/profile/Profile_05";
import Cta_03 from "@/components/ui/module/cta/Cta_03";

// 事業内容
const ServicePage = () => {
  return (
    <div>
      <Lowerkv_02
        subtitle="教室について/レッスン・料金"
        title="About lesson"
        imageUrl="./common/lowerkv_lesson.jpg"
      />
      <About_02 />
      <Feature_01 />
      <Coaching_01 />
      <Award_01 />
      <div id="class">
        <Class_01 />
      </div>
      <Flow_01 />
      <Cta_03 />
      <Profile_05 />
    </div>
  );
};

export default ServicePage;
