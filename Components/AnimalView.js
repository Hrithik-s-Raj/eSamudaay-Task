import moment from "moment";
import Animal from "./Animal";
function AnimalView({ animals }) {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6">
        {animals.map(({ id, createdAt, name, avatar, bornAt }) => (
          <Animal
            key={id}
            createdAt={moment(createdAt).format("DD/MM/YYYY")}
            name={name}
            avatar={avatar}
            bornAt={moment(bornAt).format("DD MMM,YYYY")}
          />
        ))}
      </div>
    </div>
  );
}

export default AnimalView;
