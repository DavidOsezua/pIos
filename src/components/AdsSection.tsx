const AdsSection = () => {
  return (
    <div className={`space-y-4`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 w-full ">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-[#00000033] h-[250px] flex items-center justify-center text-xl font-semibold text-black"
          >
            ADS
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm italic text-gray-700">
        <strong>PLOS Biology</strong> | ISSN: 1545-7885 (online)
      </p>
    </div>
  );
};

export default AdsSection;
