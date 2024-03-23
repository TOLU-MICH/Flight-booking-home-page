import Button from "./Button";
import { CalendarOutline, PersonOutline, Star } from "react-ionicons";

const PlansCard = ({ data }: any) => {
  const divs = [];
  for (let i = 0; i < 5; i++) {
    divs.push(
      <span className="w-2 md:w-fit">
        <Star color={"#60a5fa"} />
      </span>
    );
  }

  return (
    <div className="p-2 w-full md:max-w-[32.333%] rounded-xl shadow-[rgba(0,0,0,0.05)_0px_0px_40px_5px] h-fit hover:-translate-y-3 transition-transform duration-300 cursor-pointer">
      <img
        src={data.image}
        alt=""
        className="rounded-xl max-h-[270px] h-full w-full"
      />
      <div className="px-4">
        {data.author && data.date ? (
          <div className="flex w-full items-center gap-10 mt-3 px-4">
            <div className="flex items-center gap-2">
              <PersonOutline color="#60a5fa" />
              <span className="text-slate-900 text-[15.5px]">
                {data.author}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarOutline color="#60a5fa" />
              <span className="text-slate-900 text-[15.5px]">{data.date}</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-between pt-4">
            <h4 className=" font-bold text-lg md:text-xl">{data.title}</h4>
            <span className="flex gap-[13px] md:gap-2">{divs}</span>
          </div>
        )}
        <p className="text-gray-500 text-base">{data.code}</p>
        <p className="pt-4 pb-8 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          dignissimos placeat doloremque tempore quia, molestiae officia nemo in
          quibusdam laborum.
        </p>
        {!data.author && !data.date ? (
          <>
            <p className="border-b-2 border-dashed pb-3">
              <span className="text-blue-400 font-bold text-xl md:text-3xl">
                {data.price}
              </span>{" "}
              / Hour
            </p>
            <Button
              value={"Book now"}
              style="!py-2 !px-4 !text-white flex gap-2 mt-4 mb-3"
              icon
            />
          </>
        ) : (
          <Button
            value={"Read more"}
            style="!bg-transparent !text-white !py-1 !px-4 !font-normal"
          />
        )}
      </div>
    </div>
  );
};

export default PlansCard;
