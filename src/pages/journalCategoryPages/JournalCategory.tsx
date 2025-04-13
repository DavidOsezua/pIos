import AdsSection from "@/components/AdsSection";
import BlogSection from "@/components/BlogSection";
import NewContent from "@/components/NewContent";
import JournalCategoryLayout from "@/layout/JournalCategoryLayout";

interface article {
  title: string;
  type: string;
  date: string;
  img: string;
  desc: string;
  imgBottom: string;
  imgTop: string;
  credit: string;
}

const articles: article[] = [
  {
    title: "Is beauty beyond the eye of the butterfly?",
    type: "PRIMER",
    date: "03/11/2025",
    desc: "The diversity of bright colors observed across the animal world are often used during mate choice. Richard Merrill explores a new study in PLOS Biology which reveals genetic and neural mechanisms contributing to the evolution of visual mating decisions in Heliconius butterflies.",
    imgBottom: "",
    imgTop: "",
    img: "articleImage.png",
    credit: "Image credit: pbio.3003008",
  },
  {
    title: "Signals from the niche...",
    type: "RESEARCH ARTICLE",
    date: "03/11/2025",
    img: "articleImage.png",
    imgTop: "https://via.placeholder.com/70x70?text=1",
    imgBottom: "https://via.placeholder.com/70x70?text=2",
    desc: "Transcription is known to tightly regulate gene expression profiles...",
    credit: "Image credit: pbio.3003049",
  },
  {
    title: "Dipeptide transport",
    type: "RESEARCH ARTICLE",
    date: "03/11/2025",

    imgBottom: "",
    imgTop: "",
    img: "articleImage.png",
    desc: "Behavioral and molecular approaches are involved...",
    credit: "Image credit: pbio.3003030",
  },
  {
    title: "Balancing Id and team interactions during neural development",
    type: "RESEARCH ARTICLE",
    date: "03/11/2025",
    imgBottom: "",
    imgTop: "",
    img: "articleImage.png",
    desc: "The transcription factor DPY-30 promotes the coordination...",
    credit: "Image credit: pbio.3003056",
  },
  {
    title: "Dynamics of a supergene",
    type: "SHORT REPORT",
    date: "02/28/2025",
    imgBottom: "",
    imgTop: "",
    img: "articleImage.png",
    desc: "Supergenes are clusters of genes suppressing recombination...",
    credit: "Image credit: pbio.3003060",
  },
  {
    title: "Evolutionary origin of bifurcated joints",
    type: "PRIMER",
    date: "02/26/2025",
    imgBottom: "",
    imgTop: "",
    img: "articleImage.png",
    desc: "The evolutionary origin of bifurcated joints has clear...",
    credit: "Image credit: pbio.3003062",
  },
  {
    title: "New solutions for antibiotics",
    type: "PERSPECTIVE",
    date: "02/25/2025",
    imgBottom: "",
    imgTop: "",
    img: "articleImage.png",
    desc: "CRISPR tools for fast re-screening of resistance elements...",
    credit: "Image credit: pbio.3003065",
  },
  {
    title: "Sensory gliders",
    type: "ESSAY",
    date: "02/24/2025",
    imgBottom: "",
    imgTop: "",
    desc: "The diversity of bright colors observed across the animal world are often used during mate choice. Richard Merrill explores a new study in PLOS Biology which reveals genetic and neural mechanisms contributing to the evolution of visual mating decisions in Heliconius butterflies.",
    img: "articleImage.png",
    credit: "Image credit: pbio.3003064",
  },
  {
    title: "PLOS statement on current US policies",
    type: "BLOG POST",
    date: "02/20/2025",
    imgBottom: "",
    imgTop: "",
    desc: "The diversity of bright colors observed across the animal world are often used during mate choice. Richard Merrill explores a new study in PLOS Biology which reveals genetic and neural mechanisms contributing to the evolution of visual mating decisions in Heliconius butterflies.",
    img: "articleImage.png",
    credit: "Image credit: PLOS",
  },
  {
    title: "CRISPR for the win!",
    type: "COMMUNITY PAGE",
    date: "02/18/2025",
    imgBottom: "",
    imgTop: "",
    desc: "The diversity of bright colors observed across the animal world are often used during mate choice. Richard Merrill explores a new study in PLOS Biology which reveals genetic and neural mechanisms contributing to the evolution of visual mating decisions in Heliconius butterflies.",
    img: "articleImage.png",
    credit: "Image credit: pbio.3003063",
  },
];

const JournalCategory = (props: Props) => {
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
