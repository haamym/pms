import React from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/topNav";
import Facility from "../components/Facilities";
import Edit from "../assets/img/edit.png";
import Delete from "../assets/img/delete.png";
import View from "../assets/img/View.png";
// import View from '../components/View';
import JwtDecoder from "jwt-decode";
import axios from "axios";
import { Formik, useFormik } from "formik";
import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../context/CreateContext";

const baseUrl = process.env.REACT_APP_BASE_URL;

export default function Maintainance() {
  const [createForm, setCreateForm] = useState(false);
  const [maintainanceData, setMaintainanceData] = useState();
  const [propertyData, setPropertyData] = useState();
  const [facilitiesData, setFacilitiesData] = useState();
  const { token,user } = useContext(LoginContext);
  const [updateForm, setUpdateForm] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [count, setCount] = useState(0);
  const [apiError, setApiError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false)



  const getMaintainance = async () => {
    try {
      const config = {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      };

      const response = await axios
        .get(`${baseUrl}dashboard/maintainance_requests`, config)
        .then((response) => {
          const { data } = response;
          setMaintainanceData(data.maintainanceRequests);
          setApiMessage(response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMaintainance();
  }, []);

  const getFacilities = async () => {
    try {
      const config = {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      };

      const response = await axios
        .get(`${baseUrl}dashboard/facilities`, config)
        .then((response) => {
          const { data } = response;
          setFacilitiesData(data.facilities);
          setApiMessage(response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFacilities();
  }, []);



  const getProperties = async () => {
    try {
    const config = {
      headers: {
        'token': token,
        'Content-Type': 'application/json'
      }
    };

      const response = await axios.get(`${baseUrl}dashboard/properties`, config)
      .then((response) => {
        const { data } = response;
        setPropertyData(data.properties);
        setApiMessage(response.data.message)
      })
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);


  const formik = useFormik({
    initialValues: {
      property_id: "",
      facility_id: "",
      request_date: "",
      description: "",
    },
  });


  const createNewHandler = () => {
    setCreateForm(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    if (token) {
      const decodedToken = JwtDecoder(token);
      console.log(decodedToken);
      const { property_id, facility_id, request_date, description } = formik.values;
  
      console.log(property_id, facility_id, request_date, description);
  
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${baseUrl}dashboard/maintainance_requests`,
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
        data: {
          property_id: property_id,
          user_id: decodedToken.user,
          facility_id: facility_id,
          request_date: request_date,
          description: description,
        },
      };
  
      try {
        const response = await axios.request(config);
        console.log(response.data.message);
        setApiMessage(response.data.message);
        getMaintainance();
      } catch (error) {
        console.log(error.response.data);
        setApiError(error.response.data);
      }
    } else {
      console.log("User state is empty. Cannot proceed.");
    }
  };
  

  const handleUpdate = (request) =>{
    formik.setValues({

          property_id: request.property_id,
          facility_id: request.facility_id,
          request_date: request.request_date,
          description: request.description,
    });
    setUpdateForm(true)
  }
const handleDelete =(e)=>{
  const id = e.target.parentNode.parentNode.parentNode.id

  
  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: `${baseUrl}dashboard/maintainance_requests/${id}`,
    headers: {
      'token': token,
      'Content-Type': 'application/json'
    }};

    const deleteProperty = () => axios.request(config)
    .then((response) => {
      setApiMessage(response.data.message)
      getMaintainance()
    })
    .catch((error) => {
      console.log(error.response.data);
    })

    deleteProperty()

}

const cancelFormHandler = () => {
  setCreateForm(false);
  setUpdateForm(false);
};

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
          <div className="flex  mb-10 ml-2">
            <button onClick={createNewHandler} className="bg-transparent focus:bg-primary focus:text-[white] focus:shadow-lg hover:bg-primary text-[blue] font-semibold hover:text-[white] py-2 px-4 border border- hover:border-transparent rounded">
              Create
            </button>
          </div>
          <div>
          {updateForm && (
              <div className="flex justify-center items-center w-[80%] bg-[#c9c7c773] h-[80%] absolute z-[2000]">
                <form className="shadow-xl absolute w-2/3 m-auto left-0 right-0 px-4 py-4 bg-[#f7f5f5] rounded-md">
                  <div className="h-14 flex items-center bg-[#efeeee] rounded-md justify-center mb-4">
                    <p className="uppercase font-bold">update</p>
                  </div>
                  <div className="flex flex-col">
                    <select
                      className="border border-[#c9c3c3] px-2 py-2 rounded-md mb-5"
                      id="property_id"
                      name="property_id"
                      onChange={formik.handleChange}
                      value={formik.values.property_id}
                      required
                    >
                      <option value="">Select a Property</option>
                      {propertyData.map((property) => (
                        <option id={property.property_id} key={property.property_id} value={property.property_id || ''}>
                          {property.property_name}
                        </option>
                      ))}
                    </select>
                    <select
                      className="border border-[#c9c3c3] px-2 py-2 rounded-md mb-3"
                      id="facility_id"
                      name="facility_id"
                      onChange={formik.handleChange}
                      value={formik.values.facility_id}
                      required
                    >
                      <option value="">Select a Facility</option>
                      {facilitiesData.map((facility) => (
                        <option id={facility.facility_id} key={facility.facility_id} value={facility.facility_id || ''}>
                          {facility.facility_name}
                        </option>
                      ))}
                    </select>

                    <label className="flex flex-col py-2">
                      Date
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="request_date"
                        name="request_date"
                        type="datetime-local"
                        placeholder="Request Date"
                        onChange={formik.handleChange}
                        value={formik.values.request_date}
                        required
                      />
                    </label>
                    <label className="flex flex-col py-2">
                      Description
                      <textarea
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md h-60"
                        id="description"
                        name="description"
                        placeholder="Description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
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
          {createForm && (
              <div className="flex justify-center items-center w-[80%] bg-[#c9c7c773] h-[80%] absolute z-[2000]">
                <form className="shadow-xl absolute w-2/3 m-auto left-0 right-0 px-4 py-4 bg-[#f7f5f5] rounded-md">
                  <div className="h-14 flex items-center bg-[#efeeee] rounded-md justify-center mb-4">
                    <p className="uppercase font-bold">Create a new Maintainance Request</p>
                  </div>
                  <div className="flex flex-col">
                    <select
                      className="border border-[#c9c3c3] px-2 py-2 rounded-md mb-5"
                      id="property_id"
                      name="property_id"
                      onChange={formik.handleChange}
                      value={formik.values.property_id}
                      required
                    >
                      <option value="">Select a Property</option>
                      {propertyData.map((property) => (
                        <option id={property.property_id} key={property.property_id} value={property.property_id || ''}>
                          {property.property_name}
                        </option>
                      ))}
                    </select>
                    <select
                      className="border border-[#c9c3c3] px-2 py-2 rounded-md mb-3"
                      id="facility_id"
                      name="facility_id"
                      onChange={formik.handleChange}
                      value={formik.values.facility_id}
                      required
                    >
                      <option value="">Select a Facility</option>
                      {facilitiesData.map((facility) => (
                        <option id={facility.facility_id} key={facility.facility_id} value={facility.facility_id || ''}>
                          {facility.facility_name}
                        </option>
                      ))}
                    </select>

                    <label className="flex flex-col py-2">
                      Date
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="request_date"
                        name="request_date"
                        type="datetime-local"
                        placeholder="Request Date"
                        onChange={formik.handleChange}
                        value={formik.values.request_date}
                        required
                      />
                    </label>
                    <label className="flex flex-col py-2">
                      Description
                      <textarea
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md h-60"
                        id="description"
                        name="description"
                        placeholder="Description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
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
            <>
              <table className="mx-2 text-sm w-3/4">
                <thead className="bg-[#3ea7e2] text-left text-[white] font-bold">
                  <tr className="">
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3 w-32"></th>
                  </tr>
                </thead>

                <tbody className="">
                  {maintainanceData ? (
                    maintainanceData.map((request) => (
                      <tr
                        id={request.request_id}
                        key={request.request_id}
                        className="even:bg-[#dad8d8] last-of-type:border-b-4 last-of-type:border-[#3ea7e2] last-of-type:border-solid relative"
                      >
                        <td className="px-4 py-3 ">{request.description}</td>
                        <td className="px-4 py-3">{request.request_date}</td>
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
                    ))
                  ) : (
                    <tr>
                      <td className="text-left my-1 font-bold">Loading Data</td>
                    </tr>
                  )}
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
