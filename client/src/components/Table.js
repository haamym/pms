import { StatusOnlineIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function TableComp() {
  const [popup, setPopup] = useState(false);

  const tableMoreInfo = (event) => {
    const moreInfo = document.querySelector('#moreAction');
        moreInfo.classList.toggle('hidden')
        console.log(moreInfo);
      
    
    // moreInfo.classList.toggle("hidden");
    // moreInfo.classList.toggle("relative");
    // setPopup((prev) => !prev);

    // moreInfo.classList.toggle("relative");
    // console.log(event.target.parentNode.parentNode.id);
    // console.log(moreInfo);
  };

  const fakeFacilitiesData = [
    {
      property_id: 1,
      facility_name: "Swimming Pool",
      description: "A large swimming pool for residents",
      location: "Poolside",
    },
    {
      property_id: 2,
      facility_name: "Gym",
      description: "Fully equipped fitness center",
      location: "Fitness Wing",
    },
    {
      property_id: 3,
      facility_name: "Tennis Court",
      description: "Outdoor tennis court",
      location: "Sports Area",
    },
    {
      property_id: 4,
      facility_name: "Playground",
      description: "Children playground with swings and slides",
      location: "Recreation Zone",
    },
    {
      property_id: 5,
      facility_name: "Clubhouse",
      description: "Community clubhouse with social amenities",
      location: "Clubhouse Area",
    },
    {
      property_id: 6,
      facility_name: "Sauna",
      description: "Relaxing sauna room",
      location: "Wellness Center",
    },
    {
      property_id: 7,
      facility_name: "Business Center",
      description: "Workspace with meeting rooms and Wi-Fi",
      location: "Office Wing",
    },
    {
      property_id: 8,
      facility_name: "BBQ Area",
      description: "Outdoor barbecue and picnic area",
      location: "Courtyard",
    },
    {
      property_id: 9,
      facility_name: "Game Room",
      description: "Indoor gaming and entertainment room",
      location: "Entertainment Zone",
    },
    {
      property_id: 10,
      facility_name: "Dog Park",
      description: "Fenced area for residents to walk their dogs",
      location: "Pet-friendly Zone",
    },
  ];

  return (
    <>
      <table className="mx-2 text-sm w-3/4">
        <thead className="bg-[#3ea7e2] text-left text-[white] font-bold">
          <tr className="">
            <th className="px-4 py-3">Facility Name</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3 w-32"></th>
          </tr>
        </thead>

        <tbody className="">
          {fakeFacilitiesData.map((facility) => (
            <tr
              id={facility.property_id}
              key={facility.property_id}
              className="even:bg-[#dad8d8] last-of-type:border-b-4 last-of-type:border-[#3ea7e2] last-of-type:border-solid relative"
            >
              <td className="px-4 py-3 ">{facility.facility_name}</td>
              <td className="px-4 py-3">{facility.description}</td>
              <td className="px-4 py-3">{facility.location}</td>
              <td className="px-4 py-3">
                <button
                  onClick={tableMoreInfo}
                  className="flex bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-[#f5f2f287] focus:bg-[#f5f2f287]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 pointer-events-none hover:bg-[#ded9d9]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </button>
              </td>
              <td className="relative hidden" id={`moreAction`}>
                <div
                  id={`moreAction-${facility.property_id}`}
                  className="absolute z-10 shadow-2xl rounded flex flex-col w-20 max-w-[5rem] top-0 right-0  bg-[white]"
                >
                  <button className="hover:bg-primary hover:text-[white] hover:rounded py-2">
                    View
                  </button>
                  <button className="hover:bg-primary hover:text-[white] hover:rounded py-2">
                    Edit
                  </button>
                  <button className="hover:bg-primary hover:text-[white] hover:rounded py-2">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot></tfoot>
      </table>
      
    </>
  );
}
