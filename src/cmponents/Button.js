const Button = ({ name }) => {
  return (
    <div className="pl-4">
      <button className="p-1 mx-0 my-3 px-2 rounded-lg  bg-gray-100 hover:bg-gray-200">
        {name}
      </button>
    </div>
  );
};

export default Button;
