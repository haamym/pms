import { StatusOnlineIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Edit from "../assets/img/edit.png"
import Delete from "../assets/img/delete.png"
import View from "../assets/img/View.png"

export default function TableComp() {
  const [popup, setPopup] = useState(false);
  const [admin, setAdmin] = useState(true)

  

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
              <td className="px-4 py-3 flex">
                <button className="mr-4 w-6 hover:shadow-2xl rounded">
                  <img src={View} alt="view" />
                </button>
                {admin && <button className="mr-4 w-6 hover:shadow-md rounded">
                  <img className="w-16 h-5" src={Edit} alt="edit" />
                </button>}
                {admin && <button className="mr-4 w-6 hover:shadow-2xl rounded">
                  <img className="w-16 h-5" src={Delete} alt="delete" />
                </button>}
              </td>
              <td className="" id={`moreAction`}>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot></tfoot>
      </table>
    </>
  );
}
