const FeatureCard = ({ data }: any) => {
  return (
    <div
      className="sm:w-[49%] lg:w-[32.333%] p-8 text-center gap-6 flex flex-col shadow-lg cursor-pointer hover:-translate-y-3 transition-transform duration-300"
      data-aos="fade-up-right"
    >
      <div className="mx-auto w-fit">{data.icon}</div>
      <h3 className="font-bold text-xl text-gray-900">{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default FeatureCard;
