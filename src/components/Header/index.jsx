
import { useMediaQuery } from "react-responsive";
import LargeScreenHeader from "./LargeScreenHeader";
import SmallScreenHeader from "./SmallScreenHeader";

const Index = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 769px)" });

  return (
    <div>{isLargeScreen ? <LargeScreenHeader /> : <SmallScreenHeader />}</div>
  );
};

export default Index;

