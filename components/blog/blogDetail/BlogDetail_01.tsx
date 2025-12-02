// components/blog/blogDetail/BlogDetail_01.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavigationArrow } from "@/components/ui/icons/NavigationArrow";
import { Cms } from "@/types";
import { blogsFetch } from "@/lib/api/blogsFetch";
import Breadcrumb from "@/components/ui/module/Breadcrumb";

interface BlogDetailProps {
  params: {
    id: string;
  };
}

const BlogDetail_01 = ({ params }: BlogDetailProps) => {
  const { id } = params;
  const [post, setPost] = useState<Cms | null>(null);
  const [prevPost, setPrevPost] = useState<Cms | null>(null);
  const [nextPost, setNextPost] = useState<Cms | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // 記事取得
        const currentPost = await blogsFetch.get(id);
        if (!mounted) return;

        if (!currentPost) {
          setError("記事が見つかりませんでした");
          return;
        }

        setPost(currentPost);

        // 全記事取得（publishedAt順）
        const allPosts = await blogsFetch.list(100);
        if (!mounted) return;

        const sorted = allPosts.sort(
          (a, b) =>
            new Date(b.date ?? "").getTime() - new Date(a.date ?? "").getTime()
        );

        const index = sorted.findIndex((p) => p.id === id);
        setPrevPost(index > 0 ? sorted[index - 1] : null);
        setNextPost(index < sorted.length - 1 ? sorted[index + 1] : null);
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
        if (mounted) {
          setError("記事の取得に失敗しました");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-[1240px] mx-auto py-[50px] md:py-20 px-4 font-medium">
        <div className="text-center">
          <p>読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-[1240px] mx-auto py-[50px] md:py-20 px-4 font-medium">
        <div className="text-center">
          <p>{error || "記事が見つかりませんでした"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1240px] mx-auto py-[50px] md:py-20 px-4 font-medium">
      <Breadcrumb
        mainTitle={post.title}
        parentDirectoryName="生徒の声・コラム"
        parentDirectoryLink="/blog"
      />
      <article className="mt-10 md:mt-[120px]">
        <h1 className="text-xl md:text-[32px] leading-[180%] mb-6">
          {post.title}
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-2">
          <div className="flex flex-wrap gap-2">
            {Array.isArray(post.category) && post.category.length > 0 ? (
              post.category.map((cat, i) => (
                <span key={i} className="text-xs">
                  #{cat}
                </span>
              ))
            ) : (
              <span className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1">
                カテゴリーなし
              </span>
            )}
          </div>
          {post.date && (
            <time className="text-base">
              {new Date(post.date)
                .toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
                .replace(/\//g, ".")}
            </time>
          )}
        </div>

        {post.image && (
          <div className="w-full h-[400px] md:h-[725px] relative mb-10 md:mb-20">
            <Image
              src={post.image.url}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        {/* 生徒情報カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 md:mb-20">
          <div className="flex rounded-[20px] overflow-hidden">
            <div className="bg-accentColor text-white px-6 py-4 flex items-center justify-center min-w-[160px] md:min-w-[198px]">
              <span className="text-base font-medium">お名前</span>
            </div>
            <div className="bg-[#F6F2EC] text-baseColor px-6 py-4 flex items-center flex-1 justify-center">
              <span className="text-base">Aさん (3歳のお子さん保護者様)</span>
            </div>
          </div>
          <div className="flex rounded-[20px] overflow-hidden">
            <div className="bg-accentColor text-white px-6 py-4 flex items-center justify-center min-w-[160px] md:min-w-[198px]">
              <span className="text-base font-medium">レッスンコース</span>
            </div>
            <div className="bg-[#F6F2EC] text-baseColor px-6 py-4 flex items-center flex-1 justify-center">
              <span className="text-base">45分コース</span>
            </div>
          </div>
        </div>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* 前後記事ナビ */}
      <nav className="mt-24 border-t border-b border-baseColor py-4">
        <div className="flex justify-between items-center relative">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.id}`}
              className="group flex items-center hover:text-accentColor transition-colors duration-200 w-[calc(50%-20px)] gap-6"
            >
              <NavigationArrow direction="left" className="text-accentColor" />
              <div>
                <p className="text-base mb-1 font-medium font-en text-accentColor">
                  PREV
                </p>
                <p className="text-lg font-medium line-clamp-2">
                  {prevPost.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="w-[calc(50%-20px)]" />
          )}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-16 bg-black"></div>

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.id}`}
              className="group flex items-center justify-end hover:text-accentColor transition-colors duration-200 w-[calc(50%-20px)] gap-6"
            >
              <div className="text-left">
                <p className="text-base mb-1 font-medium font-en text-accentColor">
                  NEXT
                </p>
                <p className="text-lg font-medium line-clamp-2">
                  {nextPost.title}
                </p>
              </div>
              <NavigationArrow direction="right" className="text-accentColor" />
            </Link>
          ) : (
            <div className="w-[calc(50%-20px)]" />
          )}
        </div>
      </nav>
    </div>
  );
};

export default BlogDetail_01;
