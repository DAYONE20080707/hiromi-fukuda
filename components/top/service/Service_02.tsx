// components/service/Service_02.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import ServiceCard from "@/components/ui/ItemCard/ServiceCard_02"
import { serviceData } from "@/components/data/top/ServiceData"
import Image from "next/image"
import MoreButton from "@/components/ui/button/MoreButton"
import SectionContent from "@/components/ui/frame/SectionContent"

const Service_02 = () => {
  // 表示するサービス数をserviceDataのIDを指定して表示
  const serviceIdsToDisplay = [1, 2, 3, 4, 5]

  // 指定したIDに基づいてデータをフィルタリング
  const servicesToDisplay = serviceData.filter((service) =>
    serviceIdsToDisplay.includes(service.id)
  )

  return (
    <>
      <SectionContent id="service">
        <section className="md:max-w-[1200px] mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20">
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/top/service/service_img.jpg"
                alt="Service Image"
                width={580}
                height={853}
                className="w-full h-full max-w-[250px] md:max-w-[580px] max-h-[853px] rounded-[20px] md:rounded-[40px]"
              />
            </div>
            <div className="flex-1 max-w-[540px]">
              <ContentHeadline
                subTitle="レッスン・料金"
                mainTitle="Class"
                subTitleClassName=""
                titleClassName=""
              />
              <div className="md:mt-6">
                {servicesToDisplay.map((service) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    subTitle={service.subTitle}
                    title={service.title}
                    description={service.description}
                    image={service.image} // 画像パスを渡す
                    href={service.href} // リンク先を渡す
                    className=" md:flex justify-between"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <MoreButton href="/lesson#class" variant="accent" />
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Service_02
