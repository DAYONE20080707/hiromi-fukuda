// components/blog/Blog_01.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cms } from "@/types";
import PageContent from "@/components/ui/frame/PageContent";
import LoadMoreButton from "@/components/ui/button/LoadMoreButton";
import { blogsFetch } from "@/lib/api/blogsFetch";
import SectionContent from "@/components/ui/frame/SectionContent";

interface BlogProps {
  limit?: number;
}

const Blog_01 = ({ limit = 9 }: BlogProps) => {
  const [allContents, setAllContents] = useState<Cms[]>([]);
  const [displayContents, setDisplayContents] = useState<Cms[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [displayLimit, setDisplayLimit] = useState(limit);

  // 全件取得してカテゴリ抽出
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await blogsFetch.list(100); // 全件取得
        if (!mounted) return;
        setAllContents(data);

        // カテゴリー抽出（重複除去）
        const uniqueCats = new Set<string>();
        data.forEach((post) => {
          post.category?.forEach((c) => uniqueCats.add(c));
        });

        setCategories([
          { id: "all", name: "すべて" },
          ...Array.from(uniqueCats).map((c) => ({ id: c, name: c })),
        ]);

        // 初期表示はlimit分だけ
        setDisplayLimit(limit);
        setDisplayContents(data.slice(0, limit));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        if (mounted) {
          setAllContents([]);
          setCategories([{ id: "all", name: "すべて" }]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [limit]);

  // カテゴリ変更時の絞り込み
  useEffect(() => {
    setDisplayLimit(limit); // カテゴリ変更時は表示件数をリセット
    if (activeCategory === "all") {
      setDisplayContents(allContents.slice(0, limit));
    } else {
      const filtered = allContents.filter((post) =>
        post.category?.includes(activeCategory)
      );
      setDisplayContents(filtered.slice(0, limit));
    }
  }, [activeCategory, allContents, limit]);

  // さらに表示ボタンのハンドラー
  const handleLoadMore = () => {
    const newLimit = displayLimit + limit; // 現在の表示件数に9件追加
    setDisplayLimit(newLimit);

    if (activeCategory === "all") {
      setDisplayContents(allContents.slice(0, newLimit));
    } else {
      const filtered = allContents.filter((post) =>
        post.category?.includes(activeCategory)
      );
      setDisplayContents(filtered.slice(0, newLimit));
    }
  };

  // 全て表示されているかチェック
  const isAllDisplayed = () => {
    if (activeCategory === "all") {
      return displayContents.length >= allContents.length;
    } else {
      const filtered = allContents.filter((post) =>
        post.category?.includes(activeCategory)
      );
      return displayContents.length >= filtered.length;
    }
  };

  return (
    <SectionContent className="">
      <section className="md:max-w-[1200px] mx-auto">
        {/* カテゴリボタン */}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 rounded-full overflow-hidden w-full gap-[1px]">
            {categories.slice(0, 3).map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 md:px-12 py-4 transition-all font-medium whitespace-nowrap text-lg ${
                  activeCategory === category.id
                    ? "bg-accentColor text-white"
                    : "bg-[#F6F2EC] text-baseColor hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center mt-16">
            <h1>Loading...</h1>
          </div>
        ) : displayContents.length === 0 ? (
          <div className="text-center mt-16">
            <p>記事がありません</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 mt-16">
              {displayContents.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="w-full hover:opacity-90 transition-opacity"
                >
                  <div className="w-full font-medium">
                    <div className="w-full h-[250px] mt-5 md:mt-0 rounded-t-2xl">
                      {post.image && (
                        <Image
                          src={post.image.url}
                          alt={post.title ?? "ブログサムネイル"}
                          width={370}
                          height={223}
                          className="w-full h-full rounded-[20px] object-cover"
                        />
                      )}
                    </div>
                    <div className="mt-6">
                      <p className="text-lg font-bold break-words min-h-14">
                        {post.title}
                      </p>
                      <p className="mt-2 text-base line-clamp-2">
                        {post.content
                          ?.replace(/<[^>]*>/g, "")
                          .substring(0, 100)}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {post.category?.map((cat, index) => (
                          <span key={index} className=" text-xs">
                            #{cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {!isAllDisplayed() && (
              <div className="flex justify-center mt-16">
                <LoadMoreButton
                  onClick={handleLoadMore}
                  className="mt-10"
                  variant="accent"
                >
                  View more
                </LoadMoreButton>
              </div>
            )}
          </>
        )}
      </section>
    </SectionContent>
  );
};

export default Blog_01;
