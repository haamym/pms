import React from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/topNav";
import Facility from "../components/Facilities";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../context/CreateContext";
import Edit from "../assets/img/edit.png";
import Delete from "../assets/img/delete.png";
import View from "../assets/img/View.png";
import axios from "axios";
import { Formik, useFormik } from "formik";
import JwtDecoder from "jwt-decode";

const baseUrl = process.env.REACT_APP_BASE_URL;

export default function Parking() {
  const [parkingData, setParkingData] = useState();
  const { token, user } = useContext(LoginContext);
  const [createForm, setCreateForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [count, setCount] = useState(0);
  const [apiError, setApiError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [userID, setUserID] = useState();

  useEffect(() => {
    if (user && user.role == 5439) {
      setIsAdmin(true);
    }
    const decodedToken = JwtDecoder(token);
    setUserID(decodedToken);
  }, [user]);

  const getParkingData = async () => {
    try {
      const config = {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      };

      const response = await axios
        .get(`${baseUrl}dashboard/parking_systems`, config)
        .then((response) => {
          const { data } = response;
          setParkingData(data.parkingSystems);
          setApiMessage(response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParkingData();
  }, []);

 

  const handleUpdate = () => {};

  const handleDelete = () => {};

  return (
    <section className="flex flex-col">
      <header className="flex items-center justify-between px-2 py-2 shadow">
        <TopNav />
      </header>
      <div className="flex  lg:h-[calc(100vh-80px)]">
        <SideNav />
        <div className="w-screen px-4 py-2">
          <div className="flex mb-10 ml-2">
            <button className="bg-transparent focus:bg-primary focus:text-[white] focus:shadow-lg hover:bg-primary text-[blue] font-semibold hover:text-[white] py-2 px-4 border border- hover:border-transparent rounded">
              Create
            </button>
          </div>

          <div>
            <>
              <table className="mx-2 text-sm w-3/4">
                <thead className="bg-[#3ea7e2] text-left text-[white] font-bold">
                  <tr className="">
                    <th className="px-4 py-3">User</th>
                    <th className="px-4 py-3">Parking Slot</th>
                    <th className="px-4 py-3">Vehicle Number</th>
                    <th className="px-4 py-3 w-32"></th>
                  </tr>
                </thead>

                <tbody className="">
                  {parkingData &&
                    isAdmin &&
                    parkingData.map((request) => (
                      <tr
                        id={request.parking_id}
                        key={request.parking_id}
                        className="even:bg-[#dad8d8] last-of-type:border-b-4 last-of-type:border-[#3ea7e2] last-of-type:border-solid relative"
                      >
                        <td className="px-4 py-3 ">{request.user_id}</td>
                        <td className="px-4 py-3">{request.parking_slot}</td>
                        <td className="px-4 py-3">{request.vehicle_number}</td>
                        <td className="px-4 py-3 flex">
                          <button
                            onClick={() => handleUpdate(request)}
                            className="mr-4 w-6 hover:shadow-md rounded"
                          >
                            <img className="w-16 h-5" src={Edit} alt="edit" />
                          </button>
                          <button
                            onClick={handleDelete}
                            className="mr-4 w-6 hover:shadow-2xl rounded"
                          >
                            <img
                              className="w-16 h-5"
                              src={Delete}
                              alt="delete"
                            />
                          </button>
                        </td>
                        <td className="" id={`moreAction`}></td>
                      </tr>
                    ))}

                  {!parkingData && (
                    <tr>
                      <td className="text-left my-1 font-bold">Loading Data</td>
                    </tr>
                  )}

                  {parkingData &&
                    !isAdmin &&
                    user &&
                    parkingData.map((request) => {
                      if (request.user_id == userID.user) {
                        return (
                          <tr
                            id={request.parking_id}
                            key={request.parking_id}
                            className="even:bg-[#dad8d8] last-of-type:border-b-4 last-of-type:border-[#3ea7e2] last-of-type:border-solid relative"
                          >
                            <td className="px-4 py-3 ">{user.user_name}</td>
                            <td className="px-4 py-3">
                              {request.parking_slot}
                            </td>
                            <td className="px-4 py-3">
                              {request.vehicle_number}
                            </td>
                            <td className="px-4 py-3 flex">
                              <button
                                onClick={() => handleUpdate(request)}
                                className="mr-4 w-6 hover:shadow-md rounded"
                              >
                                <img
                                  className="w-16 h-5"
                                  src={Edit}
                                  alt="edit"
                                />
                              </button>
                              <button
                                onClick={handleDelete}
                                className="mr-4 w-6 hover:shadow-2xl rounded"
                              >
                                <img
                                  className="w-16 h-5"
                                  src={Delete}
                                  alt="delete"
                                />
                              </button>
                            </td>
                            <td className="" id={`moreAction`}></td>
                          </tr>
                        );
                      }
                    })}
                </tbody>

                <tfoot></tfoot>
              </table>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
