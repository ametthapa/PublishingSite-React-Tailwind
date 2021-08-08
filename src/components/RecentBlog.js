import BlogItem from "./BlogItem";

const blogData = [
  {
    title: "Blog 1",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia",
    image: "/images/2.jpg",
  },
  {
    title: "Blog 2",
    description: "Description for blog 2 and other random stuff.",
    image: "/images/3.jpg",
  },
  {
    title: "Yet Aother Blog",
    description: "Some Random description copied from web",
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
