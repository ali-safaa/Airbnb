function MediumCard(props) {
  return (
    <div className="cursor-pointer hover:scale-105 transform duration-300 mt-2">
      <div className="relative w-60 sm:w-80">
        <img
          className=" rounded-xl h-60 w-60 sm:h-80 sm:w-80"
          src={props.image}
          alt="/"
          layout="fill"
        />
      </div>
      <h3 className="text-lg font-semibold pl-2 py-2">{props.title}</h3>
    </div>
  );
}

export default MediumCard;
