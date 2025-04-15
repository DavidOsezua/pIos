import AdsSection from "@/components/AdsSection";
import BlogSection from "@/components/BlogSection";
import NewContent from "@/components/NewContent";
import JournalCategoryLayout from "@/layout/JournalCategoryLayout";
import { api } from "@/services/endpoint";
import axios from "axios";
import { useEffect, useState } from "react";

interface Article {
  title: string;
  article_type: string;
  created_at: string;
  abstract: string;
  cover_image: string;
  journal_title: string;
  approved: boolean;
}

interface TransformedArticle {
  title: string;
  type: string;
  date: string;
  imgBottom: string;
  imgTop: string;
  desc: string;
  img: string;
  credit: string;
}

const JournalCategory = () => {
  const [articles, setArticles] = useState<TransformedArticle[]>([]);

  const fetchArticlesData = async () => {
    try {
      const response = await api.get("api/v2/articles/");
      console.log(response.data);
      const ApprovedArticles = (response.data as Article[]).filter(
        (article) => article.approved
      );
      const transformedData: TransformedArticle[] = ApprovedArticles.map(
        (article: Article) => ({
          title: article.title,
          type: article.article_type.toUpperCase(),
          date: new Date(article.created_at).toLocaleDateString("en-US"),
          imgBottom: "",
          imgTop: "",
          desc: article.abstract,
          img: article.cover_image,
          credit: `Image credit: ${article.journal_title}`,
        })
      );

      setArticles(transformedData);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.error(e.response?.data?.detail);
      } else {
        console.error("An unexpected error occurred", e);
      }
    }
  };

  useEffect(() => {
    fetchArticlesData();
  }, []);

  return (
    <JournalCategoryLayout>
      <section className={`section w-full bg-backgroundtwo`}>
        <div className={`sectionContainer w-full space-y-4`}>
          <div className={`w-full`}>
            <img src="journalCategoryImage.png" className="w-full" alt="" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, idx) => (
              <div key={idx} className="bg-white p-4 ">
                <div className="flex">
                  <div className="mr-4">
                    <div>
                      <img
                        src={article.img}
                        alt="thumb"
                        className=" object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs text-gray-500 font-semibold">
                      <span className="uppercase text-blue-700">
                        {article.type}
                      </span>
                      <span className="italic">{article.date}</span>
                    </div>
                    <h3 className="text-md font-bold leading-tight mt-1">
                      {article.title}
                    </h3>
                    {article.desc && (
                      <p className="text-sm text-gray-700 mt-1 italic">
                        {article.desc.length > 180
                          ? `${article.desc.substring(0, 180)}...`
                          : article.desc}
                      </p>
                    )}
                    <p className="text-[11px] text-gray-400 mt-1">
                      {article.credit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <NewContent />

          <BlogSection />

          <AdsSection />
        </div>
      </section>
    </JournalCategoryLayout>
  );
};

export default JournalCategory;
