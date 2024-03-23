import {
  BedOutline,
  EarthOutline,
  ShieldCheckmarkOutline,
} from "react-ionicons";
import FeatureCard from "./FeatureCard";
import SubHeader from "./SubHeader";

const featuresList = [
  {
    icon: <BedOutline color="#60a5fa" style={{ width: 60, height: 60 }} />,
    title: "Hotels on the House",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium vero quod sapiente adipisci sint perferendis ut praesentium repellat amet!",
  },
  {
    icon: (
      <ShieldCheckmarkOutline
        color="#60a5fa"
        style={{ width: 60, height: 60 }}
      />
    ),
    title: "Safe to Trust",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium vero quod sapiente adipisci sint perferendis ut praesentium repellat amet!",
  },
  {
    icon: <EarthOutline color="#60a5fa" style={{ width: 60, height: 60 }} />,
    title: "Worldwide Customers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium vero quod sapiente adipisci sint perferendis ut praesentium repellat amet!",
  },
];

const data = {
  heading: "Our Features",
  title: " Our Priceless Features",
  para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure animi et quidem quis quas nisi.",
};

const Features = () => {
  return (
    <section className="py-20">
      <SubHeader data={data} />

      <div className="w-full flex flex-wrap justify-between gap-y-4 xl:gap-4">
        {featuresList.map((item, index) => (
          <FeatureCard data={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Features;
