import User from "./User";
import Labresult from "./Labresult";

const Index = () => {
  return (
    <div className="flex flex-col gap-[3rem]">
      <User />

      <Labresult />
    </div>
  );
};

export default Index;
