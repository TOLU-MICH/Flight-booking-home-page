import Button from "./Button";
import { CalendarOutline, PersonOutline, Star } from "react-ionicons";

const PlansCard = ({ data }: any) => {
  const divs = [];
  for (let i = 0; i < 5; i++) {
    divs.push(
      <span className="lg:w-1 xl:w-2 md:w-fit">
        <Star color={"#60a5fa"} />
      </span>
    );
  }

  return (
    <div
      className="p-2 w-full sm:max-w-[49%] lg:max-w-[32.333%] rounded-xl shadow-[rgba(0,0,0,0.05)_0px_0px_40px_5px] h-fit hover:-translate-y-3 transition-transform duration-300 cursor-pointer"
      data-aos="fade-up-right"
    >
      <img
        src={data.image}
        alt=""
        className="rounded-xl h-[200px] w-full object-cover"
      />
      <div className="px-1">
        {data.author && data.date ? (
          <div className="flex w-full items-center gap-10 mt-3 px-4">
            <div className="flex items-center gap-2">
              <PersonOutline color="#60a5fa" />
              <span className="text-slate-900 text-xs text-nowrap text-[15.5px]">
                {data.author}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarOutline color="#60a5fa" />
              <span className="text-slate-900 text-xs text-nowrap text-[15.5px]">
                {data.date}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex justify-between pt-4">
            <h4 className=" font-bold text-base lg:text-base xl:text-xl">
              {data.title}
            </h4>
            <div className="flex gap-[2px] md:gap-x-4 xl:gap-2">{divs}</div>
          </div>
        )}
        <p className="text-gray-500 text-sm xl:text-base">{data.code}</p>
        <p
          className={
            "pt-4 text-gray-800 text-sm xl:text-base " +
            (data.author && data.date ? "pb-4" : "pb-8")
          }
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          dignissimos placeat doloremque tempore quia, molestiae officia nemo in
          quibusdam laborum.
        </p>
        {!data.author && !data.date ? (
          <>
            <p className="border-b-2 border-dashed pb-3 text-xs">
              <span className="text-blue-400 font-bold text-xl xl:text-3xl">
                {data.price}
              </span>{" "}
              / Hour
            </p>
            <Button
              value={"Book now"}
              style="!py-2 !px-4 !text-white flex gap-2 mt-4 mb-3 !text-xs"
              icon
            />
          </>
        ) : (
          <Button
            value={"Read more"}
            style="!bg-transparent !text-xs !text-white !py-2 !px-4 !font-normal"
          />
        )}
      </div>
    </div>
  );
};

export default PlansCard;
