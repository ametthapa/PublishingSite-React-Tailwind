import imgAuthor from "../images/5.jpg";

const Author = () => {
  return (
    <div className="grid md:grid-cols-2 lg:px-20 px-10 md:pt-0 pt-10">
      <div>
        <img
          src={imgAuthor}
          alt="girl"
          className="w-full lg:h-author md:h-full md:block hidden"
        />
      </div>
      <div className="lg:pt-16 md:pt-8 lg:px-10 md:px-5 md:pb-0 pb-5">
        <p className="uppercase text-red-500 tracking-widest">
          Welcome To Publishing Company
        </p>
        <p className="text-5xl font-semibold text-gray-700 py-2 leading-normal">
          Publishing Company Created By Authors
        </p>
        <p className="pb-5 text-gray-500 leading-7">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <p className="pb-5 text-gray-500 leading-7">
          On her way she met a copy. The copy warned the Little Blind Text, that
          where it came from it would have been rewritten a thousand times and
          everything that was left from its origin would be the word "and" and
          the Little Blind Text should turn around and return to its own, safe
          country.
        </p>
        <button className="font-semibold bg-primary py-2 px-4 rounded-md text-white shadow-md">
          View All Our Authors
        </button>
      </div>
    </div>
  );
};

export default Author;
