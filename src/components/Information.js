import {
  GiUnicorn,
  GiRomanToga,
  GiArtificialIntelligence,
  GiHistogram,
} from "react-icons/gi";

const unicorn = [
  {
    icon: GiUnicorn,
    title: "Children's Book",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: GiRomanToga,
    title: "Romance",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: GiArtificialIntelligence,
    title: "Art & Architecture",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: GiHistogram,
    title: "History",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
];

console.log(unicorn[0]);

const Information = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 pt-10 lg:px-16 px-4 md:px-5 pb-20 md:gap-y-0 gap-y-14">
      {unicorn.map((items) => {
        return (
          <div className="text-center flex justfy-center items-center flex-col group">
            <div className="h-36 w-36 bg-gray-200 rounded-full flex justify-center items-center group-hover:text-white group-hover:bg-primary">
              <items.icon className="h-16 w-16" />
              <div></div>
            </div>
            <p className="py-5 font-semibold text-2xl">{items.title}</p>
            <p className="text-gray-600 leading-7">{items.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Information;
