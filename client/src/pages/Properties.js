import React from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/topNav";
import Facility from "../components/Facilities";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import { useState,useContext,useEffect } from "react";
import { LoginContext } from "../context/CreateContext";
import Edit from "../assets/img/edit.png";
import Delete from "../assets/img/delete.png";
import View from "../assets/img/View.png";
import axios from "axios";
import {Formik, useFormik} from 'formik'

const baseUrl = process.env.REACT_APP_BASE_URL;

export default function Properties() {
const [propertyData, setPropertyData] = useState();
const {token} = useContext(LoginContext)
const [createForm, setCreateForm] = useState(false)
const [updateForm, setUpdateForm] = useState(false)
const [apiMessage, setApiMessage] = useState('')
const [count, setCount] = useState(0);
const [apiError, setApiError] = useState('')



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
    initialValues:{
        property_name:'',
        location:'',
        description:''
    }
})


const onSubmit = async (e) => {
  e.preventDefault()
  const { property_name, location, description } = formik.values;
  

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${baseUrl}dashboard/properties`,
    headers: {
      'token': token,
      'Content-Type': 'application/json'
    },
    data : {"property_name":property_name,
            "location":location,
            "description":description}
  };

  try {
    const response = await axios.request(config);
    console.log(response.data.message);
    setApiMessage(response.data.message);
    getProperties();
  } catch (error) {
    console.log(error.response.data);
    setApiError(error.response.data);
  }

}

const handleUpdate = (property) =>{
  formik.setValues({
    property_id: property.property_id,
    property_name: property.property_name,
    location: property.location,
    description: property.description,
  });
  setUpdateForm(true)
}

const updateHandler = async (e) =>{
  const { property_name, location, description,property_id } = formik.values;

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${baseUrl}dashboard/properties/${property_id}`,
    headers: {
      'token': token,
      'Content-Type': 'application/json'
    },
    data : {"property_name":property_name,
            "location":location,
            "description":description}
  };

  try {
    const response = await axios.request(config);
    console.log(response.data.message);
    setApiMessage(response.data.message);
    getProperties();
  } catch (error) {
    console.log(error);
    setApiError(error);
  }

}






const createHandler = () =>{
  setCreateForm(true)
}

const cancelFormHandler = () =>{
  setCreateForm(false)
  setUpdateForm(false)
}

const handleDelete = (e) =>{
  const id = e.target.parentNode.parentNode.parentNode.id
  
  console.log(id)
  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: `${baseUrl}dashboard/properties/${id}`,
    headers: {
      'token': token,
      'Content-Type': 'application/json'
    }};

    const deleteProperty = () => axios.request(config)
    .then((response) => {
      setApiMessage(response.data.message)
      getProperties()
    })
    .catch((error) => {
      console.log(error.response.data);
    })

    deleteProperty()

  };

useEffect(() => {

}, [propertyData,count])

  
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
            <button onClick={createHandler} className="bg-transparent focus:bg-primary focus:text-[white] focus:shadow-lg hover:bg-primary text-[blue] font-semibold hover:text-[white] py-2 px-4 border border- hover:border-transparent rounded">
              Create
            </button>
            {createForm && <div className="flex justify-center items-center w-[80%] bg-[#c9c7c773] h-[80%] absolute z-[2000]">
            <form className='shadow-xl absolute w-2/3 m-auto left-0 right-0 px-4 py-4 bg-[#f7f5f5] rounded-md'>
            <div className='h-14 flex items-center bg-[#efeeee] rounded-md justify-center mb-4'>
                <p className='uppercase font-bold'>Create a new Property</p>
            </div>
            <div className='flex flex-col'>
                <label className='flex flex-col py-2'>
                    Name
                    <input
                        className='border border-[#c9c3c3] px-2 py-2 rounded-md'
                        id='property_name'
                        name='property_name'
                        type='text'
                        placeholder='Property Name'
                        onChange={formik.handleChange}
                        value={formik.values.property_name}

                    />
                </label>
                <label className='flex flex-col py-2'>
                    Location
                    <input
                        className='border border-[#c9c3c3] px-2 py-2 rounded-md'
                        id='location'
                        name='location'
                        type='text'
                        placeholder='Location'
                        onChange={formik.handleChange}
                        value={formik.values.location}
                    
                    />
                </label>
                <label className='flex flex-col py-2'>
                    Description
                    <textarea
                        className='border border-[#c9c3c3] px-2 py-2 rounded-md h-60'
                        id='description'
                        name='description'
                        placeholder='Description'
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    
                    />
                </label>
            </div>
            <div className='flex justify-between'>
                <button onClick={cancelFormHandler} className='bg-[#f7f5f5] active:bg-[#ede9e9] hover:shadow-inner hover:shadow-[#e1e1e1] border border-[#c9c3c3] px-4 py-2 rounded-md'>Cancel</button>
                <button onClick={onSubmit} className='bg-[#f7f5f5] active:bg-[#ede9e9] hover:shadow-inner hover:shadow-[#e1e1e1] border border-[#c9c3c3] px-4 py-2 rounded-md'>Save</button>
            </div>
            
       </form>
            </div>}
            {updateForm && <div className="flex justify-center items-center w-[80%] bg-[#c9c7c773] h-[80%] absolute z-[2000]">
            <form className='shadow-xl absolute w-2/3 m-auto left-0 right-0 px-4 py-4 bg-[#f7f5f5] rounded-md'>
            <div className='h-14 flex items-center bg-[#efeeee] rounded-md justify-center mb-4'>
                <p className='uppercase font-bold'>Update</p>
            </div>
            <div className='flex flex-col'>
                <label className='flex flex-col py-2'>
                    Name
                    <input
                        className='border border-[#c9c3c3] px-2 py-2 rounded-md'
                        id='property_name'
                        name='property_name'
                        type='text'
                        placeholder='Property Name'
                        onChange={formik.handleChange}
                        value={formik.values.property_name}

                    />
                </label>
                <label className='flex flex-col py-2'>
                    Location
                    <input
                        className='border border-[#c9c3c3] px-2 py-2 rounded-md'
                        id='location'
                        name='location'
                        type='text'
                        placeholder='Location'
                        onChange={formik.handleChange}
                        value={formik.values.location}
                    
                    />
                </label>
                <label className='flex flex-col py-2'>
                    Description
                    <textarea
                        className='border border-[#c9c3c3] px-2 py-2 rounded-md h-60'
                        id='description'
                        name='description'
                        placeholder='Description'
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    
                    />
                </label>
            </div>
            <div className='flex justify-between'>
                <button onClick={cancelFormHandler} className='bg-[#f7f5f5] active:bg-[#ede9e9] hover:shadow-inner hover:shadow-[#e1e1e1] border border-[#c9c3c3] px-4 py-2 rounded-md'>Cancel</button>
                <button onClick={updateHandler} className='bg-[#f7f5f5] active:bg-[#ede9e9] hover:shadow-inner hover:shadow-[#e1e1e1] border border-[#c9c3c3] px-4 py-2 rounded-md'>Save</button>
            </div>
            
       </form>
            </div>}
          </div>
          <div>
            <>
              <table className="mx-2 text-sm w-3/4">
                <thead className="bg-[#3ea7e2] text-left text-[white] font-bold">
                  <tr className="">
                    <th className="px-4 py-3">Property Name</th>
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3">Location</th>
                    <th className="px-4 py-3 w-32"></th>
                  </tr>
                </thead>

                <tbody className="">
                  {propertyData ? propertyData.map((property) => (
                    <tr
                      id={property.property_id}
                      key={property.property_id}
                      className="even:bg-[#dad8d8] last-of-type:border-b-4 last-of-type:border-[#3ea7e2] last-of-type:border-solid relative"
                    >
                      <td className="px-4 py-3 ">{property.property_name}</td>
                      <td className="px-4 py-3">{property.description}</td>
                      <td className="px-4 py-3">{property.location}</td>
                      <td className="px-4 py-3 flex">
                        
                        <button onClick={()=>handleUpdate(property)} className="mr-4 w-6 hover:shadow-md rounded">
                          <img className="w-16 h-5" src={Edit} alt="edit" />
                        </button>
                        <button onClick={handleDelete} className="mr-4 w-6 hover:shadow-2xl rounded">
                          <img className="w-16 h-5" src={Delete} alt="delete" />
                        </button>
                      </td>
                      <td className="" id={`moreAction`}></td>
                    </tr>
                  )):<tr><td className="text-left my-1 font-bold">Loading Data</td></tr>}
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
