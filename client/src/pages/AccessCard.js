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

export default function AccessCard() {
  const [createForm, setCreateForm] = useState(false);
  const [accesscardsData, setAccesscardsData] = useState();
  const [propertyData, setPropertyData] = useState();
  const { token, user } = useContext(LoginContext);
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
    setUserID(decodedToken)
  }, [user]);

  const createNewHandler = () => {
    setCreateForm(true);
  };

  const formik = useFormik({
    initialValues: {
      access_id: "",
      card_number: "",
      expiration_date: "",
    },
  });

  const handleUpdate = (card) =>{

    formik.setValues({
      access_id: card.access_id,
      card_number: card.card_number,
      expiration_date: card.expiration_date,
    });
    setUpdateForm(true)
  }

 

  const updateHandler = async (e) =>{
    const {access_id, card_number,expiration_date } = formik.values;
    
;
    if (token) {
      const decodedToken = JwtDecoder(token);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseUrl}dashboard/accesscards/${access_id}`,
      headers: {
        'token': token,
        'Content-Type': 'application/json'
      },
      data : {
        user_id: decodedToken.user,
        card_number: card_number,
        expiration_date: expiration_date}
    };
  
    try {
      const response = await axios.request(config);

      setApiMessage(response.data.message);
      getAccessCards()
    } catch (error) {
      console.log(error);
      setApiError(error);
    }
  }else {
    console.log("User state is empty. Cannot proceed.");
  }
  
  }


  const getAccessCards = async () => {
    try {
      const config = {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      };

      const response = await axios
        .get(`${baseUrl}dashboard/accesscards`, config)
        .then((response) => {
          const { data } = response;
          setAccesscardsData(data.accesscards);
          setApiMessage(response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(formik.values);

  const onSubmit = async (e) => {
    e.preventDefault();
  
    if (token) {
      const decodedToken = JwtDecoder(token);
      const { card_number,expiration_date } = formik.values;
  
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${baseUrl}dashboard/accesscards`,
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
        data: {
          user_id: decodedToken.user,
          card_number: card_number,
          expiration_date: expiration_date,
        },
      };
  
      try {
        const response = await axios.request(config);
        console.log(response.data.message);
        setApiMessage(response.data.message);
        getAccessCards();
      } catch (error) {
        console.log(error.response.data);
        setApiError(error.response.data);
      }
    } else {
      console.log("User state is empty. Cannot proceed.");
    }
  }

  useEffect(() => {
    getAccessCards();
  }, []);

  

  const handleDelete = (e) => {
    const id = e.target.parentNode.parentNode.parentNode.id


  
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${baseUrl}dashboard/accesscards/${id}`,
      headers: {
        'token': token,
        'Content-Type': 'application/json'
      }};
  
      const deleteProperty = () => axios.request(config)
      .then((response) => {
        setApiMessage(response.data.message)
        getAccessCards();
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
                    <p className="uppercase font-bold">Create a new AccessCard</p>
                  </div>
                  <div className="flex flex-col">
                    <label className="flex flex-col py-2">
                      Card Number
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="card_number"
                        name="card_number"
                        type="number"
                        placeholder="Card Number"
                        onChange={formik.handleChange}
                        value={formik.values.card_number}
                        required
                      />
                    </label>
                    <label className="flex flex-col py-2">
                      Expiration Date
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="expiration_date"
                        name="expiration_date"
                        type="datetime-local"
                        placeholder="Expiration Date"
                        onChange={formik.handleChange}
                        value={formik.values.expiration_date}
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
                      Card Number
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="card_number"
                        name="card_number"
                        type="number"
                        placeholder="Card Number"
                        onChange={formik.handleChange}
                        value={formik.values.card_number}
                        required
                      />
                    </label>
                    <label className="flex flex-col py-2">
                      Expiration Date
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="expiration_date"
                        name="expiration_date"
                        type="datetime-local"
                        placeholder="Expiration Date"
                        onChange={formik.handleChange}
                        value={formik.values.expiration_date}
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
                    <th className="px-4 py-3">User ID</th>
                    <th className="px-4 py-3">Card Number</th>
                    <th className="px-4 py-3">Expiration Date</th>
                    <th className="px-4 py-3 w-32"></th>
                  </tr>
                </thead>

                <tbody className="">
                  {accesscardsData && isAdmin &&
                    accesscardsData.map((card) => (
                      <tr
                        id={card.access_id}
                        key={card.access_id}
                        className="even:bg-[#dad8d8] last-of-type:border-b-4 last-of-type:border-[#3ea7e2] last-of-type:border-solid relative"
                      >
                        <td className="px-4 py-3 ">{card.user_id}</td>
                        <td className="px-4 py-3">{card.card_number}</td>
                        <td className="px-4 py-3">{card.expiration_date
}</td>
                        <td className="px-4 py-3 flex">
                          <button
                            onClick={() => handleUpdate(card)}
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
                    )
                  )}
                  {accesscardsData && !isAdmin && userID && user && accesscardsData.map((card)  =>{
                      if(card.user_id == userID.user){
                        return (
                          <tr
                        id={card.access_id}
                        key={card.access_id}
                        className="even:bg-[#dad8d8] last-of-type:border-b-4 last-of-type:border-[#3ea7e2] last-of-type:border-solid relative"
                      >
                        <td className="px-4 py-3 ">{user.user_name}</td>
                        <td className="px-4 py-3">{card.card_number}</td>
                        <td className="px-4 py-3">{card.expiration_date
}</td>
                        <td className="px-4 py-3 flex">
                          <button
                            onClick={() => handleUpdate(card)}
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
                        )
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
