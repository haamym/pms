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

export default function Advertisement() {
  const [advertisementData, setAdvertisemenData] = useState();
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

  const getAdvertiseData = async () => {
    try {
      const config = {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      };

      const response = await axios
        .get(`${baseUrl}dashboard/advertisements`, config)
        .then((response) => {
          const { data } = response;
          setAdvertisemenData(data.advertisements);
          setApiMessage(response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdvertiseData();
  }, []);



  const createNewHandler = () => {
    setCreateForm(true);
  };


  const cancelFormHandler = () => {
    setCreateForm(false);
    setUpdateForm(false);
  }

  console.log();

  const formik = useFormik({
    initialValues: {
      ad_id: "",
      user_id: "",
      ad_title: "",
      ad_content: "",
      ad_date: "",
    },
  });

  const handleUpdate = (ad) => {
    formik.setValues({
      ad_id: ad.ad_id,
      user_id:  ad.user_id,
      ad_title:  ad.ad_title,
      ad_content: ad.ad_content,
      ad_date: ad.ad_date,
    });
    setUpdateForm(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    if (token) {
      const decodedToken = JwtDecoder(token);
      const { ad_id,ad_title,ad_content,ad_date} = formik.values;
  
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${baseUrl}dashboard/advertisements`,
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
        data: {
          user_id: decodedToken.user,
          ad_title:  ad_title,
          ad_content: ad_content,
          ad_date: ad_date,
        },
      };
  
      try {
        const response = await axios.request(config);
        console.log(response.data.message);
        setApiMessage(response.data.message);
        getAdvertiseData();
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
      url: `${baseUrl}dashboard/advertisements/${id}`,
      headers: {
        'token': token,
        'Content-Type': 'application/json'
      }};
  
      const deleteProperty = () => axios.request(config)
      .then((response) => {
        setApiMessage(response.data.message)
        getAdvertiseData();
      })
      .catch((error) => {
        console.log(error.response.data);
      })
  
      deleteProperty()
  };


  const updateHandler = async (e) =>{
    const id = e.target.parentNode.parentNode.parentNode.id
    const { ad_id,ad_title,ad_content,ad_date} = formik.values;
    
    console.log(report_id)
;
    if (token) {
      const decodedToken = JwtDecoder(token);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseUrl}dashboard/advertisements/${ad_id}`,
      headers: {
        'token': token,
        'Content-Type': 'application/json'
      },
      data : {
        user_id: decodedToken.user,
        ad_title:  ad_title,
        ad_content: ad_content,
        ad_date: ad_date,
      }
    };
  
    try {
      const response = await axios.request(config);

      setApiMessage(response.data.message);
      getReportData()
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
          <div className="flex px-4 py-2">
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
                      Advertisement Title
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="ad_title"
                        name="ad_title"
                        type="text"
                        placeholder="Advertisement Title"
                        onChange={formik.handleChange}
                        value={formik.values.ad}
                        required
                      />
                    </label>
                    <div className="flex flex-col">

                    <label className="flex flex-col py-2">
                      Advertisement Content
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="ad_content"
                        name="ad_content"
                        type="text"
                        placeholder="Advertisement Content"
                        onChange={formik.handleChange}
                        value={formik.values.ad_content}
                        required
                      />
                    </label>
                    
                    
                    <label className="flex flex-col py-2">
                       Date
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="ad_date"
                        name="ad_date"
                        type="date"
                        placeholder="Advertisment Date"
                        onChange={formik.handleChange}
                        value={formik.values.ad_date}
                        required
                      />
                    </label>
                    </div>
                    
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
                      Advertisement Title
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="ad_title"
                        name="ad_title"
                        type="text"
                        placeholder="Advertisement Title"
                        onChange={formik.handleChange}
                        value={formik.values.ad_title}
                        required
                      />
                    </label>
                    <div className="flex flex-col">

                    <label className="flex flex-col py-2">
                      Advertisement Content
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="ad_content"
                        name="ad_content"
                        type="text"
                        placeholder="Advertisement Content"
                        onChange={formik.handleChange}
                        value={formik.values.ad_content}
                        required
                      />
                    </label>
                    
                    
                    <label className="flex flex-col py-2">
                       Date
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="ad_date"
                        name="ad_date"
                        type="date"
                        placeholder="Advertisment Date"
                        onChange={formik.handleChange}
                        value={formik.values.ad_date}
                        required
                      />
                    </label>

                    </div>
                  
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
                    <th className="px-4 py-3">Ad Title</th>
                    <th className="px-4 py-3">Ad Content</th>
                    <th className="px-4 py-3">Ad Date</th>
                    <th className="px-4 py-3 w-32"></th>
                  </tr>
                </thead>

                <tbody className="">
                  {advertisementData &&
                    isAdmin &&
                    advertisementData .map((advertisements) => (
                      <tr
                        id={advertisements.ad_id}
                        key={advertisements.ad_id}
                        className="even:bg-[#dad8d8] last-of-type:border-b-4 last-of-type:border-[#3ea7e2] last-of-type:border-solid relative"
                      >
                        <td className="px-4 py-3 ">{advertisements.user_id}</td>
                        <td className="px-4 py-3">{advertisements.ad_title}</td>
                        <td className="px-4 py-3">{advertisements.ad_content}</td>
                        <td className="px-4 py-3">{advertisements.ad_date.slice(0,10)}</td>
                        <td className="px-4 py-3 flex">
                          <button
                            onClick={() => handleUpdate(advertisements)}
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

                  {!advertisementData && (
                    <tr>
                      <td className="text-left my-1 font-bold">Loading Data</td>
                    </tr>
                  )}

                  {advertisementData &&
                    !isAdmin &&
                    user &&
                    advertisementData.map((advertisements) => {
                      if (advertisements.user_id == userID.user) {
                        return (
                          <tr
                        id={advertisements.ad_id}
                        key={advertisements.ad_id}
                        className="even:bg-[#dad8d8] last-of-type:border-b-4 last-of-type:border-[#3ea7e2] last-of-type:border-solid relative"
                      >
                        <td className="px-4 py-3 ">{advertisements.user_id}</td>
                        <td className="px-4 py-3">{advertisements.ad_title}</td>
                        <td className="px-4 py-3">{advertisements.ad_content}</td>
                        <td className="px-4 py-3">{advertisements.ad_date.slice(0,10)}</td>
                        <td className="px-4 py-3 flex">
                          <button
                            onClick={() => handleUpdate(advertisements)}
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
