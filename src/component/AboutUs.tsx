import { CheckmarkCircleOutline } from "react-ionicons";
import mask from "../assets/images/mask.png";
import Button from "./Button";

const listData = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
];

const AboutUs = () => {
  return (
    <section className="py-20 flex flex-wrap">
      <div className="md:w-[590px] md:h-[590px] w-full h-[350px] object-cover bg-no-repeat relative plane-mask bg-contain" />
      <div
        className="flex flex-col md:w-[48%] w-full md:px-0 px-8 gap-4"
        data-aos="fade-up-right"
      >
        <div>
          <p className="text-blue-500 font-bold text-base">ABOUT US</p>
          <h2 className="text-gray-900 text-3xl font-medium">
            We Are Here To Bring You All The Comfort And Pleasure
          </h2>
        </div>

        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dignissimos ratione, excepturi explicabo non quasi velit pariatur ipsa
          mollitia voluptate nemo similique recusandae, doloribus porro expedita
          eius. Magnam, laudantium velit.
        </p>

        <ul className="flex flex-col gap-2">
          {listData.map((item, index) => (
            <li className="flex gap-2" key={index}>
              <CheckmarkCircleOutline color="#60a5fa" />
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <div className="w-[60%] text-white">
          <Button value={"Discover more"} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
