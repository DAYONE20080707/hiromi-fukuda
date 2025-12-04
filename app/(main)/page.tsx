
import KeyVisual_04 from "@/components/top/kv/KeyVisual_04"
import About_01 from "@/components/top/about/About_01"
import Message_02 from "@/components/top/message/Message_02"
import Service_02 from "@/components/top/service/Service_02"
import Blog_01 from "@/components/top/blog/Blog_01"
import Faq_01 from "@/components/top/faq/Faq_01"
import Cta_03 from "@/components/ui/module/cta/Cta_03"
import Profile_05 from "@/components/top/profile/Profile_05"

// メインページ
const HomePage = () => {
  return (
    <div>
      <KeyVisual_04 />
      <About_01 />
      <Service_02 />
      <Message_02 />
      <Blog_01 />
      <Faq_01 />
      <Cta_03 />
      <Profile_05 />
    </div>
  )
}

export default HomePage
