import SubHeader from "./SubHeader";
import postImage from "../assets/images/01.jpg";
import postImage2 from "../assets/images/02.jpg";
import postImage3 from "../assets/images/03.jpg";
import PlansCard from "./PlansCard";

const data = {
  title: "Our Blog",
  heading: "Our Latest Posts",
  para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure animi et quidem quis quas nisi.",
};

const posts = [
  {
    image: postImage,
    author: "Amin Najva",
    date: "Nov 15, 2023",
    title: "Most Visited Countries In Last 3 Years",
    description: "",
  },
  {
    image: postImage2,
    author: "Amin Najva",
    date: "Nov 15, 2023",
    title: "Most Visited Countries In Last 3 Years",
    description: "",
  },
  {
    image: postImage3,
    author: "Amin Najva",
    date: "Nov 15, 2023",
    title: "Most Visited Countries In Last 3 Years",
    description: "",
  },
];

const Blog = () => {
  return (
    <section className="max-w-screen-xl w-full px-8 md:px-12 m-auto">
      <SubHeader data={data} />

      <div className="flex gap-y-4 gap-x-3 lg:gap-0 justify-center lg:justify-between flex-wrap">
        {posts.map((item, index) => (
          <PlansCard data={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
