import AdsSection from "@/components/AdsSection";
// import BlogSection from "@/components/BlogSection";
import NewContent from "@/components/NewContent";
import { RawArticle } from "@/interface";
import JournalCategoryLayout from "@/layout/JournalCategoryLayout";
import { api, BASEURL } from "@/services/endpoint";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";





const JournalCategory = () => {
  const location = useLocation();
  const [articles, setArticles] = useState<RawArticle[]>([]);
  const [journalInfo, setJournalInfo] = useState<{image: string | null, name: string | null}>({name: location.state?.name, image: location.state?.image})
  const { journalId } = useParams<{ journalId: string }>();
  

  
  // const params = new URLSearchParams(location.search);
  // const journalName = params.get("name") || "";
  // const location = useLocation();
 
  
  useEffect(() => {
      const journalName = location.state?.name 
      const journalImage = location.state?.image
      
      if(!journalName){
        if(!journalId) return 
        api.get(`/journal/${journalId}`).then((res) => {
          setJournalInfo({name: res.data.title, image: res.data.image})
        })
      }else{
        setJournalInfo({image: journalImage, name: journalName }) 
      }

    }, [location.state?.name , location.state?.image, journalId])
  
  
  useEffect(() => {
    api.get(`article?journalId=${journalId}`).then((res) => {
      setArticles(res.data)
    })

  }, [journalId])


  return (
    <JournalCategoryLayout  journalInfo={journalInfo}>
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
                        src={`${BASEURL}${article.image}`}
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
                      <span className="italic">{article.createdAt}</span>
                    </div>
                    <h3 className="text-md font-bold leading-tight mt-1">
                      {article.title}
                    </h3>
                    {article.abstract && (
                      <p className="text-sm text-gray-700 mt-1 italic">
                        {article.abstract.length > 180
                          ? `${article.abstract.substring(0, 180)}...`
                          : article.abstract}
                      </p>
                    )}
                    <p className="text-[11px] text-gray-400 mt-1">
                      {article.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <NewContent journalInfo = {journalInfo} />

          {/* <BlogSection journalInfo = {journalInfo}/> */}

          <AdsSection />
        </div>
      </section>
    </JournalCategoryLayout>
  );
};

export default JournalCategory;
