type Props = {};

const ArticleCard = (props: Props) => {
  return (
    <div className="h-[250px] bg-white border border-gray-200 rounded-md shadow-sm p-4">
      <div className="flex">
        {/* Left - Images */}
        <div className="flex flex-col space-y-2 mr-4">
          <img
            src="https://via.placeholder.com/70x70?text=Img1"
            alt="Figure 1"
            className="w-20 h-20 object-cover rounded-sm"
          />
          <img
            src="https://via.placeholder.com/70x70?text=Img2"
            alt="Figure 2"
            className="w-20 h-20 object-cover rounded-sm"
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1">
          <div className="flex justify-between text-xs text-gray-500 font-semibold mb-1">
            <span className="text-blue-700 uppercase">Research Article</span>
            <span className="italic">03/11/2025</span>
          </div>

          <h3 className="text-md font-bold leading-snug mb-1">
            Signals from the niche...
          </h3>

          <p className="text-sm text-gray-700 italic">
            Transcription is known to tightly regulate gene expression profiles
            in stem and differentiating cells, but what about translational
            control? Ruoxu Wang, Marc Amoyel and co-workers reveal that signals
            from the stem cell niche induce changes in translational rates,
            regulated via eIF3d1 phosphorylation, to control stem cell fate in
            the Drosophila testis.
          </p>

          <p className="text-[11px] text-gray-400 mt-2">
            Image credit: pbio.3003049
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
