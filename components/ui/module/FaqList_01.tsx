import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { faqData, FaqData, FaqItem } from "@/data/faqData";

const FaqList_01 = ({ hideTab = false }: { hideTab?: boolean }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof faqData>("category1");

  return (
    <>
      {/* タブナビゲーション */}
      {!hideTab && (
        <div className="flex justify-center gap-10 mb-8 border-t border-b border-[#EFEFEF]">
          {Object.entries(faqData).map(([key, category]) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(key as keyof typeof faqData);
                setOpenIndex(null);
              }}
              className={`px-1 py-4 text-sm font-bold ${
                activeCategory === key
                  ? "bg-white text-accentColor border-b-4 border-accentColor"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}

      {/* FAQリスト */}
      <div className="mt-16">
        {faqData[activeCategory].items.map((item, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div
              className="flex justify-between py-4 md:py-6 px-4 md:px-10 bg-white cursor-pointer rounded-[10px]"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-start font-medium text-lg">
                <Image
                  src="/common/question-brown.svg"
                  alt="?マーク"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                {item.question}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className={`transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? "rotate-90" : ""
                }`}
              >
                <path
                  d="M2 14H26"
                  stroke="#A78144"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className={openIndex === index ? "hidden" : ""}
                />
                <path
                  d="M14 26L14 2"
                  stroke="#A78144"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {openIndex === index && (
              <div className="py-4 md:py-6 px-4 md:px-10 bg-white">
                <div className="flex font-medium items-start">
                  <Image
                    src="/common/answer-red.svg"
                    alt="?マーク"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <div className="flex flex-wrap items-start gap-2 flex-1">
                    {item.answer.includes("VIOLIN_SIZE_TABLE") ? (
                      <div className="w-full space-y-4">
                        {item.answer.split("VIOLIN_SIZE_TABLE")[0] && (
                          <p className="whitespace-pre-line">
                            {item.answer.split("VIOLIN_SIZE_TABLE")[0].trim()}
                          </p>
                        )}
                        <div className="overflow-x-auto w-full">
                          <table className="w-full border-collapse text-base">
                            <thead>
                              <tr className="bg-[#F6F2EC]">
                                <th className="border border-baseColor px-4 py-3 text-left font-medium">
                                  身長
                                </th>
                                <th className="border border-baseColor px-4 py-3 text-left font-medium">
                                  サイズ
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-baseColor px-4 py-3">
                                  110㎝ ～ 115㎝
                                </td>
                                <td className="border border-baseColor px-4 py-3">
                                  1/8
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-baseColor px-4 py-3">
                                  115㎝ ～ 125㎝
                                </td>
                                <td className="border border-baseColor px-4 py-3">
                                  1/4
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-baseColor px-4 py-3">
                                  125㎝ ～ 130㎝
                                </td>
                                <td className="border border-baseColor px-4 py-3">
                                  1/2
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-baseColor px-4 py-3">
                                  130㎝ ～ 145㎝
                                </td>
                                <td className="border border-baseColor px-4 py-3">
                                  3/4
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-baseColor px-4 py-3">
                                  145㎝ ～ 大人
                                </td>
                                <td className="border border-baseColor px-4 py-3">
                                  4/4
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : (
                      <span className="whitespace-pre-line">{item.answer}</span>
                    )}
                    {"linkText" in item &&
                      "linkUrl" in item &&
                      item.linkText &&
                      item.linkUrl && (
                        <Link
                          href={item.linkUrl}
                          className="text-accentColor hover:underline whitespace-nowrap"
                        >
                          {item.linkText}＞
                        </Link>
                      )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqList_01;
