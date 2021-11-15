const BlogItem = (props) => {
  const { title, description, image } = props;

  return (
    <div className="relative group">
      <img src={image} alt="as" className="h-64 w-full" />
      <div className="absolute lg:left-36 md:left-20 left-28 top-52 h-24 w-24 rounded-full bg-gray-200 group-hover:bg-primary">
        <span className="text-primary font-bold text-3xl group-hover:text-white">
          02
        </span>
        <span className="block">MAY</span>
        <span className="block">2020</span>
      </div>
      <header className="font-semibold pt-16 pb-4">{title}</header>
      <p className="px-8 text-gray-600 pb-8">{description}</p>
    </div>
  );
};

export default BlogItem;
