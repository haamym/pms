import SideNav from "../components/SideNav";
import TopNav from "../components/topNav";
import Facility from "../components/Facilities";
import MaintananceReq from "../components/MaintananceReq";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import axios from "axios";
import TableComp from "../components/Table";
import { LoginContext } from "../context/CreateContext";
import { Card, Title, AreaChart, DonutChart, PieChart } from "@tremor/react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const baseUrl = process.env.REACT_APP_BASE_URL;

export default function Dashboard() {
  const history = useNavigate();
  const location = useLocation();
  const [isVerified, setIsVerified] = useState(false);
  const {user,token} = useContext(LoginContext)
  const [allusers, setAllUsers] = useState()
  const [apiMessage, setApiMessage] = useState("");


  const getAllUsers = async () => {
    try {
      const config = {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      };

      const response = await axios
        .get(`${baseUrl}users`, config)
        .then((response) => {
          const { data } = response;
          setAllUsers(data.users);
          setApiMessage(response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getAllUsers()
  },[])

  const chartdata = [
    {
      date: "Aug 1",
      SemiAnalysis: 1,
      "User": 1,
    },
    {
      date: "Aug 2",
      SemiAnalysis: 2,
      "User": 2,
    },
    {
      date: "Aug 3",
      SemiAnalysis: 3,
      "User": 3,
    },
   
  ];
  
  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

 
  
 
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
    
  
  // useEffect(() => {
  //   // onRouteChange();
  // }, [location.pathname]);




 

  return (
    user && <section className="flex flex-col relative">
      <header className="flex items-center justify-between px-2 py-2 shadow">
        <TopNav />
      </header>
      <div className="flex  lg:h-[calc(100vh-80px)]">
        <SideNav />
        <div className="w-screen px-4 py-2">

          {
            user.role == 543 && <Card>
            <Title>Users Gained</Title>
            <AreaChart
              className="h-72 mt-4"
              data={chartdata}
              index="date"
              categories={[ "User"]}
              colors={["indigo", "cyan"]}
              valueFormatter={dataFormatter}
              showYAxis={false}
            />
          </Card>
          }

          
          {
            user.role != 543 && <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
          />
          }

        </div>
      </div>
    </section>
  );
}
