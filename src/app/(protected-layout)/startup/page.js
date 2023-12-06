import ComingSoon from "@/components/shared/ComingSoon";
import StartupBanner from "@/components/startup/StartupBanner";
import StartupCard from "@/components/startup/StartupCard";
import { startupData } from "@/fakeData/startupData";

const StartupPage = () => {
  return (
    <div>
      <StartupBanner />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
        {startupData?.map((item) => (
          <StartupCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default StartupPage;
