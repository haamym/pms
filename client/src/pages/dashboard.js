import SideNav from "../components/sideNav";
import TopNav from "../components/topNav";
import Facility from "../components/Facilities";
import MaintananceReq from "../components/MaintananceReq";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import axios from "axios";
import TableComp from "../components/Table";
import { LoginContext } from "../context/CreateContext";

export default function Dashboard() {
  const history = useNavigate();
  const location = useLocation();
  const [isVerified, setIsVerified] = useState(false);
  const {token} = useContext(LoginContext)




  // yoooo i need to get the token from the cookie and set it to the header dont fgt that to broski  for verification
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_BASE_URL}auth/verify`,
    headers: {
      'token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZGQ5Y2ExZGUtZmRlOS00YWJlLTk4M2UtN2I4MGE5NTRmZGNiIiwiaWF0IjoxNjkwMjk4NjMwLCJleHAiOjE2OTAzODUwMzB9.ryVY3LqnBxASjkevRE7heQzgKZ7k_2fbg4XUCZ1O708`,
      "Content-Type": "application/json",
    },
  };

  const onRouteChange = () => {
    if (location.pathname === "/dashboard") {
      console.log("dahsboard hit yooooo");
      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setIsVerified(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
    
  
  useEffect(() => {
    // onRouteChange();
  }, [location.pathname]);

    // useEffect(() => {
    //     if (isVerified) {
    //         window.location.href = '/'
    //     }
    // }, [isVerified])

    token && console.log(token)

  return (
    <section className="flex flex-col">
      <header className="flex items-center justify-between px-2 py-2 shadow">
        <TopNav />
      </header>
      <div className="flex  lg:h-[calc(100vh-80px)]">
        <SideNav />
        <div className="w-screen px-4 py-2">
          <h1>dashboard</h1>
          {/* <Facility/> */}
          {/* <MaintananceReq /> */}
            <TableComp/>
        </div>
      </div>
    </section>
  );
}
