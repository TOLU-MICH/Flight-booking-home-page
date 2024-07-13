
import SubHeader from "./SubHeader";
import PlansCard from "./PlansCard";
import plan1 from "../assets/images/plan1.jpg";
import plan2 from "../assets/images/plan2.jpg";
import plan3 from "../assets/images/plan3.jpg";

const data = {
  heading: "Our Plans",
  title: "Flights For Everyone",
  para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure animi et quidem quis quas nisi.",
};

const plansList = [
  {
    title: "Private Charter Jet",
    image: plan1,
    code: "Charter B1732",
    price: "270",
  },
  {
    title: "Medical Chopper",
    image: plan2,
    code: "Charter B1732",
    price: "270",
  },
  { title: "Private Plane", image: plan3, code: "Charter B1732", price: "270" },
];

const Plans = () => {
  return (
    <section>
      <div>
        <SubHeader data={data} />
      </div>
      <div className="flex gap-y-4 gap-x-3 lg:gap-0 justify-center lg:justify-between flex-wrap">
        {plansList.map((item, index) => (
          <PlansCard data={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Plans;
