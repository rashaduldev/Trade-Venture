import React from "react";

const PitchPage = () => {
  const data = [
    {
      "id": "1",
      "image": "https://i.ibb.co/n8RFqyL/1.png",
      "title": "Real Estates"
    },
    {
      "id": "2",
      "image": "https://i.ibb.co/wLn2vSz/2.png",
      "title": "Restaurant"
    },
    {
      "id": "3",
      "image": "https://i.ibb.co/HhxH8pz/3.png",
      "title": "Agriculture"
    },
    {
      "id": "4",
      "image": "https://i.ibb.co/ctXZYBT/4.png",
      "title": "Clothes"
    },
    {
      "id": "5",
      "image": "https://i.ibb.co/8sD8YG9/5.png",
      "title": "Export-import"
    },
    {
      "id": "6",
      "image": "https://i.ibb.co/fpXFJsH/6.png",
      "title": "IT Company"
    },
    {
      "id": "7",
      "image": "https://i.ibb.co/4m4YQ7G/7.png",
      "title": "E-commerce"
    },
    {
      "id": "8",
      "image": "https://i.ibb.co/8KJYGbz/8.png",
      "title": "Others"
    }
  ];

  return (
    <div>
      <h1 className="text-[40px] font-bold pt-6 px-5 lg:px-10">Pitch Selection</h1>
      <div className="p-10">
        <div className="rounded-lg text-center bg-white p-5 lg:p-10 my-4">
          <h1 className="lg:text-3xl font-bold lg:pt-10">To continue, Select a type of pitch</h1>
          <p className="text-[#6D6D6D] text-xl my-4"> Please select a pitch</p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:p-14">
            {data.map((sdata) => (
              <div key={sdata.id} className="card bg-base-100 hover:border-[#032D2C] border border-gray-300 cursor-pointer">
                <figure className="pt-5"><img src={sdata.image} alt={sdata.title} /></figure>
                <div className="card-body">
                  <h2 className="card-title mx-auto">{sdata.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchPage;