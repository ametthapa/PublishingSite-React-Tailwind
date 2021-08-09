import BlogItem from "./BlogItem";

const blogData = [
  {
    title: "New Friends With Books",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: "/images/2.jpg",
  },
  {
    title: "New Friends With Books",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: "/images/3.jpg",
  },
  {
    title: "New Friends With Books",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: "/images/5.jpg",
  },
];

const RecentBlog = () => {
  return (
    <div className="px-20 py-24 text-center">
      <span className="text-red-500 text-semibold text-lg tracking-widest uppercase">
        Blog
      </span>
      <p className="font-semibold text-5xl pt-4 pb-20 text-gray-600">
        Recent Blog
      </p>
      <div className="grid grid-cols-3 gap-x-10">
        {blogData.map((blogItem) => {
          return (
            <BlogItem
              title={blogItem.title}
              description={blogItem.description}
              image={blogItem.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentBlog;
