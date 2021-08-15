const Showcase = () => {
  return (
    <div className="relative">
      <img
        src="./images/3.jpg"
        alt="books-reader"
        className="w-full h-showcase object-cover"
      />
      <div className="absolute top-48 lg:left-32 md:left-16 md:w-2/4 sm:w-3/4 left-8">
        <p className="md:text-5xl text-2xl font-bold tracking-wide">
          Good books don't give up all their secrets at once
        </p>
        <p className="py-8">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <div className="font-bold">
          <button className="font-semibold bg-primary p-4 rounded-md text-white shadow-md">
            View All Books
          </button>
          <button className="font-semibold bg-white p-4 rounded-md shadow-md">
            Explore new
          </button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
