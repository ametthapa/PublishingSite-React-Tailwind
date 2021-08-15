import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center">
      <p className="text-6xl font-bold p-8 tracking-wider text-primary">
        Opps!
      </p>
      <p className="text-2xl font-semibold tracking-wider uppercase">
        404 - Page not Found
      </p>
      <p className="font-semibold text-lg p-4 pb-0">
        The page you are looking for might have been removed, had iots name
        changed or temporiraly unavailable{" "}
      </p>
      <div className="flex justify-center w-full p-4">
        <div className="p-3 rounded-lg shadow-lg bg-primary border text-white w-24 flex justify-center font-bold">
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
