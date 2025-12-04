import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02"
import About_01 from "@/components/about/about/About_01"
import Message_01 from "@/components/about/message/Message_01"
import Request_01 from "@/components/about/request/Request_01"
import Cta_03 from "@/components/ui/module/cta/Cta_03"
import Profile_05 from "@/components/top/profile/Profile_05"

// 私たちについて
const AboutPage = () => {
  return (
    <div>
      <Lowerkv_02
        subtitle="福田ひろみについて"
        title="About Teacher"
        imageUrl="./common/lowerkv_about.jpg"
      />
      <About_01 />
      
      <Message_01 />
      <Request_01 />
      <Cta_03 variant="white" />
      <Profile_05 />
    </div>
  )
}

export default AboutPage
