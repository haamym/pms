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
    if (user && user.role == 543) {
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

  const createNewHandler = () => {
    setCreateForm(true);
  };



  const formik = useFormik({
    initialValues: {
      parking_id: "",
      vehicle_number: "",
      parking_slot: "",
    }
  });
 
  const handleUpdate = (request) =>{

    formik.setValues({
      parking_id: request.parking_id,
      vehicle_number: request.vehicle_number,
      parking_slot: request.parking_slot,
    });
    setUpdateForm(true)
  }

  const onSubmit = async (e) => {
    e.preventDefault();
  
    if (token) {
      const decodedToken = JwtDecoder(token);
      const { parking_id,vehicle_number,parking_slot } = formik.values;
  
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${baseUrl}dashboard/parking_systems`,
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
        data: {
          user_id: decodedToken.user,
          vehicle_number: vehicle_number,
          parking_slot: parking_slot,
        },
      };
  
      try {
        const response = await axios.request(config);
        console.log(response.data.message);
        setApiMessage(response.data.message);
        getParkingData();
      } catch (error) {
        console.log(error.response.data);
        setApiError(error.response.data);
      }
    } else {
      console.log("User state is empty. Cannot proceed.");
    }
  }

  
  const handleDelete = (e) => {
    const id = e.target.parentNode.parentNode.parentNode.id
  
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${baseUrl}dashboard/parking_systems/${id}`,
      headers: {
        'token': token,
        'Content-Type': 'application/json'
      }};
  
      const deleteProperty = () => axios.request(config)
      .then((response) => {
        setApiMessage(response.data.message)
        getParkingData();
      })
      .catch((error) => {
        console.log(error.response.data);
      })
  
      deleteProperty()
  };

  const cancelFormHandler = () => {
    setCreateForm(false);
    setUpdateForm(false);
  }

  const updateHandler = async (e) =>{
    const id = e.target.parentNode.parentNode.parentNode.id
    const { parking_id,vehicle_number,parking_slot } = formik.values;
    console.log(parking_id,vehicle_number,parking_slot)
;
    if (token) {
      const decodedToken = JwtDecoder(token);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseUrl}dashboard/parking_systems/${parking_id}`,
      headers: {
        'token': token,
        'Content-Type': 'application/json'
      },
      data : {
        user_id: decodedToken.user,
        vehicle_number: vehicle_number,
        parking_slot: parking_slot,}
    };
  
    try {
      const response = await axios.request(config);

      setApiMessage(response.data.message);
      getParkingData()
    } catch (error) {
      console.log(error);
      setApiError(error);
    }
  }else {
    console.log("User state is empty. Cannot proceed.");
  }
  
  }

  useEffect(() => {
    if(apiMessage && apiMessage === 'success'){
      setCreateForm(false)
      setApiMessage('')
  
    }
  
  }, [apiMessage])

  return (
    <section className="flex flex-col">
      <header className="flex items-center justify-between px-2 py-2 shadow">
        <TopNav />
      </header>
      <div className="flex  lg:h-[calc(100vh-80px)]">
        <SideNav />
        <div className="w-screen px-4 py-2">
          <div className="flex mb-10 ml-2">
            <button onClick={createNewHandler} className="bg-transparent focus:bg-primary focus:text-[white] focus:shadow-lg hover:bg-primary text-[blue] font-semibold hover:text-[white] py-2 px-4 border border- hover:border-transparent rounded">
              Create
            </button>
            {createForm && (
              <div className="flex justify-center items-center w-[80%] bg-[#c9c7c773] h-[80%] absolute z-[2000]">
                <form className="shadow-xl absolute w-2/3 m-auto left-0 right-0 px-4 py-4 bg-[#f7f5f5] rounded-md">
                  <div className="h-14 flex items-center bg-[#efeeee] rounded-md justify-center mb-4">
                    <p className="uppercase font-bold">Create a new Parking Request</p>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col py-2">
                      Vehicle Number
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="vehicle_number"
                        name="vehicle_number"
                        type="text"
                        placeholder="Vehicle Number"
                        onChange={formik.handleChange}
                        value={formik.values.vehicle_number}
                        required
                      />
                    </label>
                    
                    <label className="flex flex-col py-2">
                      Parking Slot
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="parking_slot"
                        name="parking_slot"
                        type="text"
                        placeholder="Parking Slot"
                        onChange={formik.handleChange}
                        value={formik.values.parking_slot}
                        required
                      />
                    </label>
                    
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={cancelFormHandler}
                      className="bg-[#f7f5f5] active:bg-[#ede9e9] hover:shadow-inner hover:shadow-[#e1e1e1] border border-[#c9c3c3] px-4 py-2 rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={onSubmit}
                      className="bg-[#f7f5f5] active:bg-[#ede9e9] hover:shadow-inner hover:shadow-[#e1e1e1] border border-[#c9c3c3] px-4 py-2 rounded-md"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            )}
          {updateForm && (
              <div className="flex justify-center items-center w-[80%] bg-[#c9c7c773] h-[80%] absolute z-[2000]">
                <form className="shadow-xl absolute w-2/3 m-auto left-0 right-0 px-4 py-4 bg-[#f7f5f5] rounded-md">
                  <div className="h-14 flex items-center bg-[#efeeee] rounded-md justify-center mb-4">
                    <p className="uppercase font-bold">Update</p>
                  </div>
                  <div className="flex flex-col">
                  <label className="flex flex-col py-2">
                      Vehicle Number
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="vehicle_number"
                        name="vehicle_number"
                        type="text"
                        placeholder="Vehicle Number"
                        onChange={formik.handleChange}
                        value={formik.values.vehicle_number}
                        required
                      />
                    </label>
                    
                    <label className="flex flex-col py-2">
                      Parking Slot
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="parking_slot"
                        name="parking_slot"
                        type="text"
                        placeholder="Parking Slot"
                        onChange={formik.handleChange}
                        value={formik.values.parking_slot}
                        required
                      />
                    </label>
                  
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={cancelFormHandler}
                      className="bg-[#f7f5f5] active:bg-[#ede9e9] hover:shadow-inner hover:shadow-[#e1e1e1] border border-[#c9c3c3] px-4 py-2 rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={updateHandler}
                      className="bg-[#f7f5f5] active:bg-[#ede9e9] hover:shadow-inner hover:shadow-[#e1e1e1] border border-[#c9c3c3] px-4 py-2 rounded-md"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            )}
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
