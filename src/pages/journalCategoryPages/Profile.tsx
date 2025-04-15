import AdsSection from "@/components/AdsSection";
import ArticleCard from "@/components/ArticleCard";
import NewContent from "@/components/NewContent";
import JournalCategoryLayout from "@/layout/JournalCategoryLayout";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <JournalCategoryLayout>
        <section className={`section w-full bg-backgroundtwo`}>
          <div className={`sectionContainer w-full space-y-4`}>
            <div className="flex flex-col items-center justify-center p-4 space-y-10">
              {/* Header Profile Section */}
              <div className="w-full">
                {/* Banner Image */}
                <div
                  className="w-full relative h-40 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("profileBackgroundImage.png")',
                  }}
                >
                  <div className="absolute bottom-[-20%] left-[20px] z-100 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    L.R
                  </div>
                </div>

                <div className="pt-[2rem] flex flex-col sm:flex-row items-center justify-between mt-4">
                  {/* Profile Section */}
                  <div className="flex items-center space-x-4">
                    <div>
                      <h2 className="text-xl font-semibold">
                        Dr. Larry Rowlings
                      </h2>
                      <p className="text-sm text-gray-600">
                        larrrrowlings1@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Publish Button */}
                  <NavLink
                    to="/publish"
                    className="mt-4 sm:mt-0 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950 transition"
                  >
                    PUBLISH ARTICLE
                  </NavLink>
                </div>
              </div>
            </div>

            <div className={`grid grid-cols-2 gap-4`}>
              {Array.from({ length: 12 }).map(() => (
                <ArticleCard />
              ))}
            </div>

            <NewContent />
            <AdsSection />
          </div>
        </section>
      </JournalCategoryLayout>
    </div>
  );
};

export default Profile;
