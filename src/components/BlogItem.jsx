const BlogItem = (props) => {
  const { title, description, image } = props;

  return (
    <div className="relative">
      <img src={image} alt="as" className="h-64 w-full" />
      <div className="absolute left-36 top-52 h-24 w-24 rounded-full bg-gray-200">
        <span className="text-primary text-3xl">02</span>
        <span className="block">MAY</span>
        <span className="block">2020</span>
      </div>
      <header className="font-semibold pt-16 pb-4 text-primary">{title}</header>
      <p className="px-8 text-gray-600">{description}</p>
    </div>
  );
};

export default BlogItem;
