// components/profile/Profile_05.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import ProfileCard from "@/components/ui/ItemCard/ProfileCard_02"
import SectionContent from "@/components/ui/frame/SectionContent"

const Profile_05 = () => {
  return (
    <>
      <SectionContent className="">
        <section className="md:max-w-[1200px] mx-auto">
          {/* <ContentHeadline
            enTitle="Profile"
            mainTitle="会社概要"
            enTitleClassName=""
            titleClassName=""
          /> */}
          <div className="flex flex-col-reverse md:flex-row md:justify-center gap-6 md:gap-20 w-full">
            <div className="md:w-1/2 rounded-[20px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6554893109096!2d139.6901269764477!3d35.66085872259378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cab61568af5%3A0x277db4a65337244d!2z44CSMTUwLTAwNDYg5p2x5Lqs6YO95riL6LC35Yy65p2-5r-k77yR5LiB55uu!5e0!3m2!1sja!2sjp!4v1764637365889!5m2!1sja!2sjp"
                width="100%"
                height="546"
                style={{ border: "0" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] md:h-[546px]"
              />
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
              <div className="space-y-4">
                <h3 className="text-accentColor text-base font-medium ![line-height:160%]">
                福田ひろみバイオリン教室
                </h3>
                <ProfileCard
                  label=""
                  value="〒150-0046　東京都渋谷区松濤1 (Bunkamuraから徒歩1分)"
                />
                <ProfileCard label="メールアドレス" value="lncjgi9606@yahoo.co.jp" />
              </div>

              {/* 診療時間表 */}
              <div className="mt-10 ">
                <h4 className="text-accentColor text-lg font-medium mb-4">
                  Schedule
                </h4>

                <div className="overflow-x-auto font-medium">
                  <table className="w-full text-base ![line-height:160%]">
                    <thead>
                      <tr className="border-b border-[#d9d9d9]">
                        <th className="text-left py-2 font-medium w-[120px]">
                          レッスン時間
                        </th>
                        <th className="text-center py-2 font-medium">月</th>
                        <th className="text-center py-2 font-medium">火</th>
                        <th className="text-center py-2 font-medium">水</th>
                        <th className="text-center py-2 font-medium">木</th>
                        <th className="text-center py-2 font-medium">金</th>
                        <th className="text-center py-2 font-medium">土</th>
                        <th className="text-center py-2 font-medium">日</th>
                        <th className="text-center py-2 font-medium">祝</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#d9d9d9]">
                        <td className="py-2 text-left w-[120px]">
                          <div>
                            <div className="font-medium">午前</div>
                            <div className="">8:00〜</div>
                          </div>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>-</span>
                        </td>
                        <td className="text-center py-3">
                          <span>-</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                      </tr>
                      <tr className="border-b border-[#d9d9d9]">
                        <td className="py-2 text-left w-[120px]">
                          <div>
                            <div className="font-medium">午後</div>
                            <div className="">4:00〜</div>
                          </div>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>-</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>-</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                        <td className="text-center py-3">
                          <span>●</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 pb-4 text-base border-b border-[#d9d9d9]">
                  <p>お休み：生徒様とのご相談のうえ(要相談)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Profile_05
