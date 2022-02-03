import moment from "moment";
function Animal({ id, key, createdAt, name, avatar, bornAt }) {
  const dateString = new Date(bornAt).toLocaleDateString();

  const age = moment().diff(dateString, "years");
  const days = moment().diff(dateString, "days");
  const numberofdays = (days / 365).toFixed(1);

  return (
    <div className="h-130 bg-gradient-to-r from-blue-300 to-purple-300 rounded-3xl ">
      <div className="">
        <img
          key={key}
          className="h-[280px] m-12 mx-auto rounded-lg border-8"
          src={avatar}
          alt=""
        />

        <div className="justify-center items-center mb-8 w-[260px] mx-auto ">
          <div className="flex flex-col items-center shadow-sm bg-white border-4 border-gray-300 rounded-full  hover:bg-purple-200 cursor-pointer">
            <h1 className="font-serif font-bold truncate">{name}</h1>
            {age <= 0 ? (
              <h3 className="font-serif ">Age:{numberofdays} Months</h3>
            ) : (
              <h3>Age : {age}</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal;
