import SiteLogo from "../assets/img/logo.png";
import userProfile from "../assets/img/UserProfile.png";
import Cookie from "universal-cookie";
import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../context/CreateContext";
import Edit from "../assets/img/edit.png";
import Delete from "../assets/img/delete.png";
import View from "../assets/img/View.png";
import axios from "axios";
import { Formik, useFormik } from "formik";
import JwtDecoder from "jwt-decode";

const baseUrl = process.env.REACT_APP_BASE_URL;

export default function TopNav() {
  const { token, user } = useContext(LoginContext);
  const [profileName, setProfileName] = useState();
  const [apiMessage, setApiMessage] = useState("");
  const [profileData, setProfileData] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [userID, setUserID] = useState();
  const [apiError, setApiError] = useState("");



  useEffect(() => {
    if (user && user.role == 543) {
      setIsAdmin(true);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setProfileName(user.user_name);
    }
  }, [user]);

  const getProfileData = async () => {
    try {
      const config = {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      };

      const response = await axios
        .get(`${baseUrl}dashboard/profile`, config)
        .then((response) => {
          const { data } = response;
          setProfileData(data.user);
          setApiMessage(response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);



  const formik = useFormik({
    initialValues: {
        user_name: "",
      user_email: "",
      user_mobile: "",
      user_address: "",
    },
  });

  const handleUpdate = (profile) => {
    
    formik.setValues({
        
        user_name: profile.user_name,
        user_email: profile.user_email,
        user_mobile: profile.user_mobile,
        user_address: profile.user_address,
    });
  };

  

  useEffect(() => {
    if (profileData) {
        handleUpdate(profileData);
    }
    }, [profileData]);


  const handleProfMenu = () => {
    const profileContainer = document.getElementById("profile-container");
    profileContainer.classList.toggle("hidden");
  };

//   user_name,user_mobile,user_address,property_id,req.user
// user_name,user_mobile,user_address,property_id

  const updateHandler = async (e) =>{
    e.preventDefault();
    const id = e.target.parentNode.parentNode.parentNode.id
    const { user_name, user_email,user_mobile,user_address } = formik.values;
    console.log(user_name, user_email,user_mobile,user_address)
    if (token) {
      const decodedToken = JwtDecoder(token);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseUrl}dashboard/profile`,
      headers: {
        'token': token,
        'Content-Type': 'application/json'
      },
      data : {
        user_name: user_name,
        user_mobile: user_mobile,
        user_address: user_address,
        
    }
    };
  
    try {
      const response = await axios.request(config);

      setApiMessage(response.data.message);
      getProfileData()
    } catch (error) {
      console.log(error);
      setApiError(error);
    }
  }else {
    console.log("User state is empty. Cannot proceed.");
  }
  
  }



  const profileClose = () => {};

  const handleLogout = () => {
    const cookie = new Cookie();
    cookie.remove("token-proptyhub");
    window.location.href = "/";
  };

  const handleProfileClick = (event) => {
    const profileFormContainer = document.getElementById(
      "profileFormContainer"
    );
    profileFormContainer.classList.toggle("hidden");
  };


  useEffect(() => {
    if (apiMessage === 'success') {
      const timeoutId = setTimeout(() => {
        setApiMessage('');
      }, 3000); 
      
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [apiMessage]);

  return (
    <>


      <div className="flex items-center">
        <img
          className="h-[3.5rem] w-[3.5rem] mr-4"
          src={SiteLogo}
          alt="proptyhub"
        ></img>
        <h1 className="font-bold">PROPTYHUB</h1>
      </div>
      <div className="w-2/6">
        <input
          className="border border-[#b6b3b3] focus:outline-none w-[100%] px-3 py-2 rounded-lg"
          type="search"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center">
        <div className="flex flex-col mr-4 ">
          <p className="font-thin">Welcome</p>
          <p className="font-bold">{profileName ? profileName : "Unknown"}</p>
        </div>
        <img
          onClick={handleProfMenu}
          className="max-h-14 cursor-pointer"
          src={userProfile}
        />
        <div
          id="profile-container"
          className="absolute top-[5rem] shadow-xl px-2 py-2 w-36 text-center z-10 bg-white hidden"
        >
          <ul className="">
            <li
              onClick={handleProfileClick}
              className=" py-1 cursor-pointer text-[#888484] hover:text-[#fff] hover:bg-primary rounded"
            >
              Profile
            </li>
            <li
              onClick={handleLogout}
              className="py-1 cursor-pointer text-[#888484] hover:text-[#fff] hover:bg-primary rounded"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={profileClose}
        id="profileFormContainer"
        className="absolute bg-slate-500 w-[60vw] h-[90vh] z-[3000] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden"
      >
        <form className="w-[60%] mx-auto my-auto">
        <div className="flex flex-col">
                    {isAdmin ? <label className="flex flex-col py-2">
                      Email
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="user_email"
                        name="user_email"
                        type="text"
                        placeholder="User Email"
                        onChange={formik.handleChange}
                        value={formik.values.user_email }
                        
                      />
                    </label>
                    :<p className="py-3 shadow mt-5">{formik.values.user_email}</p>}
                    
                    <label className="flex flex-col py-2">
                      Mobile
                      <input
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md"
                        id="user_mobile"
                        name="user_mobile"
                        type="text"
                        placeholder="User Mobile"
                        onChange={formik.handleChange}
                        value={formik.values.user_mobile}
                        
                      />
                    </label>
                    <label className="flex flex-col py-2">
                      Address
                      <textarea
                        className="border border-[#c9c3c3] px-2 py-2 rounded-md h-60"
                        id="user_address"
                        name="user_address"
                        type="text"
                        placeholder="User Address"
                        onChange={formik.handleChange}
                        value={formik.values.user_address}
                        
                      />
                    </label>
                    
                  </div>
                  <button
          onClick={handleProfileClick}
          className="w-32 bg-white font-bold rounded shadow"
        >
          Close
        </button>
        <button
          onClick={updateHandler}
          className="w-32 bg-white font-bold rounded shadow ml-10"
        >
          Save
        </button>
        {apiMessage && <p className="text-white mt-5">{apiMessage == 'success' ? "Updated Successfully" : " "}</p>}  
        </form>
      </div>
    </>
  );
}
