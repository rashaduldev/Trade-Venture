import ProfileBanner from "@/components/startupProfilePage/ProfileBanner";
import ProfileImageGallery from "@/components/startupProfilePage/ProfileImageGallery";
import React from "react";

const SingleStartupPage = () => {
  return (
    <div>
      <ProfileBanner />
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-x-20 container">
        <div className="lg:col-span-6">
          <ProfileImageGallery />
        </div>
        <div className="lg:col-span-3 bg-yellow-600">there</div>
      </div>
    </div>
  );
};

export default SingleStartupPage;
