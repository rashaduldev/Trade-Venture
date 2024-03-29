import EventCard from "@/components/events/EventCard";
import Banner from "@/components/shared/Banner";
import PageBanner from "@/components/startup/StartupBanner";
import { EventCardData } from "@/fakeData/eventPageData";
import React from "react";

const EventsPage = () => {
  return (
    <div>
      <Banner title={"Innovation Event"}></Banner>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
        {EventCardData?.map((item) => (
          <EventCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
