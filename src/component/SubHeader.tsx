const SubHeader = ({ data }: any) => {
  return (
    <div className="m-auto text-center max-w-[26rem] w-full pb-16 flex flex-col gap-1">
      <p className="text-blue-400 font-bold text-sm md:text-xl">
        {data.heading}
      </p>
      <h2 className="text-gray-900 text-3xl font-bold">{data.title}</h2>
      <p>{data.para}</p>
    </div>
  );
};

export default SubHeader;
