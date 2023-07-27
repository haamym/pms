import "../pages/dashboard.css";
import {useEffect} from 'react'



export default function sideNav () {

  const handleMenuClick = (e) => {
    console.log(e.target.id);
  };

  useEffect(()=>{

  })

  return (
    <header className=" h-[100%] px-2 shadow w-1/6">
      <nav className="pt-5 ">
        <ul>
          <li className='mb-2'>
            <div
              onClick={handleMenuClick}
              className="flex align-middle hoverable text-[#888484] hover:text-[#fff] hover:bg-primary cursor-pointer  hover:rounded-xl px-3 py-4"
            >
              <svg className='h-5 w-8'
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  className="icons"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M24.96289,1.05469c-0.20987,0.00724 -0.41214,0.08036 -0.57812,0.20898l-23,17.94727c-0.43579,0.33978 -0.51361,0.96851 -0.17383,1.4043c0.33978,0.43579 0.96851,0.51361 1.4043,0.17383l1.38477,-1.08008v26.29102c0.00006,0.55226 0.44774,0.99994 1,1h13.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h13.8418c0.55226,-0.00006 0.99994,-0.44774 1,-1v-26.29102l1.38477,1.08008c0.2819,0.21983 0.65967,0.27257 0.991,0.13833c0.33133,-0.13423 0.56586,-0.43504 0.61526,-0.7891c0.0494,-0.35406 -0.09386,-0.70757 -0.37579,-0.92736l-7.61523,-5.94141v-7.26953h-6v2.58594l-9.38477,-7.32227c-0.18607,-0.14428 -0.41707,-0.21828 -0.65234,-0.20898zM25,3.32227l19,14.82617v26.85156h-12v-19h-14v19h-12v-26.85156zM37,8h2v3.70898l-2,-1.5625zM20,28h10v17h-10z"></path>
                  </g>
                </g>
              </svg>
              <span id="dashboard" className="ml-2">Dashboard</span>
            </div>
            <div>{/* <a href="/dashboard">Dashboard</a> */}</div>
          </li>
          <li>
            <p className="px-5 text-sm font-bold py-2">Management</p>
            <div
              onClick={handleMenuClick}
              className="flex align-middle hoverable text-[#888484] hover:text-[#fff] hover:bg-primary cursor-pointer  hover:rounded-xl px-3 py-4"
            >
              <svg className='h-5 w-8'
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                       fill="none"
                       fillRule="nonzero"
                       stroke="none"
                       strokeWidth="1"
                       strokeLinecap="butt"
                       strokeLinejoin="miter"
                       strokeMiterlimit="10"
                       strokeDasharray=""
                       strokeDashoffset="0"
                       fontFamily="none"
                       fontWeight="none"
                       fontSize="none"
                       textAnchor="none"
                       className="icons"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M24.96289,1.05469c-0.20987,0.00724 -0.41214,0.08036 -0.57812,0.20898l-23,17.94727c-0.43579,0.33978 -0.51361,0.96851 -0.17383,1.4043c0.33978,0.43579 0.96851,0.51361 1.4043,0.17383l1.38477,-1.08008v26.29102c0.00006,0.55226 0.44774,0.99994 1,1h13.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h13.8418c0.55226,-0.00006 0.99994,-0.44774 1,-1v-26.29102l1.38477,1.08008c0.2819,0.21983 0.65967,0.27257 0.991,0.13833c0.33133,-0.13423 0.56586,-0.43504 0.61526,-0.7891c0.0494,-0.35406 -0.09386,-0.70757 -0.37579,-0.92736l-7.61523,-5.94141v-7.26953h-6v2.58594l-9.38477,-7.32227c-0.18607,-0.14428 -0.41707,-0.21828 -0.65234,-0.20898zM25,3.32227l19,14.82617v26.85156h-12v-19h-14v19h-12v-26.85156zM37,8h2v3.70898l-2,-1.5625zM20,28h10v17h-10z"></path>
                  </g>
                </g>
              </svg>
              <span className="ml-2" id="Facilities">Facilities</span>
            </div>
          </li>
          <li>
            <div
              onClick={handleMenuClick}
              className="flex align-middle hoverable text-[#888484] hover:text-[#fff] hover:bg-primary cursor-pointer  hover:rounded-xl px-3 py-4"
            >
              <svg className='h-5 w-8'
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                       fill="none"
                       fillRule="nonzero"
                       stroke="none"
                       strokeWidth="1"
                       strokeLinecap="butt"
                       strokeLinejoin="miter"
                       strokeMiterlimit="10"
                       strokeDasharray=""
                       strokeDashoffset="0"
                       fontFamily="none"
                       fontWeight="none"
                       fontSize="none"
                       textAnchor="none"
                       className="icons"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M24.96289,1.05469c-0.20987,0.00724 -0.41214,0.08036 -0.57812,0.20898l-23,17.94727c-0.43579,0.33978 -0.51361,0.96851 -0.17383,1.4043c0.33978,0.43579 0.96851,0.51361 1.4043,0.17383l1.38477,-1.08008v26.29102c0.00006,0.55226 0.44774,0.99994 1,1h13.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h13.8418c0.55226,-0.00006 0.99994,-0.44774 1,-1v-26.29102l1.38477,1.08008c0.2819,0.21983 0.65967,0.27257 0.991,0.13833c0.33133,-0.13423 0.56586,-0.43504 0.61526,-0.7891c0.0494,-0.35406 -0.09386,-0.70757 -0.37579,-0.92736l-7.61523,-5.94141v-7.26953h-6v2.58594l-9.38477,-7.32227c-0.18607,-0.14428 -0.41707,-0.21828 -0.65234,-0.20898zM25,3.32227l19,14.82617v26.85156h-12v-19h-14v19h-12v-26.85156zM37,8h2v3.70898l-2,-1.5625zM20,28h10v17h-10z"></path>
                  </g>
                </g>
              </svg>
              <span className="ml-2" id="MaintananceRequest">Maintanance Request</span>
            </div>
          </li>
          <li>
            <div
              onClick={handleMenuClick}
              className="flex align-middle hoverable text-[#888484] hover:text-[#fff] hover:bg-primary cursor-pointer  hover:rounded-xl px-3 py-4"
            >
              <svg className='h-5 w-8'
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                       fill="none"
                       fillRule="nonzero"
                       stroke="none"
                       strokeWidth="1"
                       strokeLinecap="butt"
                       strokeLinejoin="miter"
                       strokeMiterlimit="10"
                       strokeDasharray=""
                       strokeDashoffset="0"
                       fontFamily="none"
                       fontWeight="none"
                       fontSize="none"
                       textAnchor="none"
                       className="icons"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M24.96289,1.05469c-0.20987,0.00724 -0.41214,0.08036 -0.57812,0.20898l-23,17.94727c-0.43579,0.33978 -0.51361,0.96851 -0.17383,1.4043c0.33978,0.43579 0.96851,0.51361 1.4043,0.17383l1.38477,-1.08008v26.29102c0.00006,0.55226 0.44774,0.99994 1,1h13.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h13.8418c0.55226,-0.00006 0.99994,-0.44774 1,-1v-26.29102l1.38477,1.08008c0.2819,0.21983 0.65967,0.27257 0.991,0.13833c0.33133,-0.13423 0.56586,-0.43504 0.61526,-0.7891c0.0494,-0.35406 -0.09386,-0.70757 -0.37579,-0.92736l-7.61523,-5.94141v-7.26953h-6v2.58594l-9.38477,-7.32227c-0.18607,-0.14428 -0.41707,-0.21828 -0.65234,-0.20898zM25,3.32227l19,14.82617v26.85156h-12v-19h-14v19h-12v-26.85156zM37,8h2v3.70898l-2,-1.5625zM20,28h10v17h-10z"></path>
                  </g>
                </g>
              </svg>
              <span className="ml-2" id="AcessCard">AccessCard Request</span>
            </div>
          </li>
          <li>
            <div
              onClick={handleMenuClick}
              className="flex align-middle hoverable text-[#888484] hover:text-[#fff] hover:bg-primary cursor-pointer  hover:rounded-xl px-3 py-4"
            >
              <svg className='h-5 w-8'
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                       fill="none"
                       fillRule="nonzero"
                       stroke="none"
                       strokeWidth="1"
                       strokeLinecap="butt"
                       strokeLinejoin="miter"
                       strokeMiterlimit="10"
                       strokeDasharray=""
                       strokeDashoffset="0"
                       fontFamily="none"
                       fontWeight="none"
                       fontSize="none"
                       textAnchor="none"
                       className="icons"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M24.96289,1.05469c-0.20987,0.00724 -0.41214,0.08036 -0.57812,0.20898l-23,17.94727c-0.43579,0.33978 -0.51361,0.96851 -0.17383,1.4043c0.33978,0.43579 0.96851,0.51361 1.4043,0.17383l1.38477,-1.08008v26.29102c0.00006,0.55226 0.44774,0.99994 1,1h13.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h13.8418c0.55226,-0.00006 0.99994,-0.44774 1,-1v-26.29102l1.38477,1.08008c0.2819,0.21983 0.65967,0.27257 0.991,0.13833c0.33133,-0.13423 0.56586,-0.43504 0.61526,-0.7891c0.0494,-0.35406 -0.09386,-0.70757 -0.37579,-0.92736l-7.61523,-5.94141v-7.26953h-6v2.58594l-9.38477,-7.32227c-0.18607,-0.14428 -0.41707,-0.21828 -0.65234,-0.20898zM25,3.32227l19,14.82617v26.85156h-12v-19h-14v19h-12v-26.85156zM37,8h2v3.70898l-2,-1.5625zM20,28h10v17h-10z"></path>
                  </g>
                </g>
              </svg>
              <span className="ml-2" id="ParkingRequest">Parking Request</span>
            </div>
          </li>
          <li>
            <p className="px-5 text-sm font-bold py-2">Tools</p>
            <div
              onClick={handleMenuClick}
              className="flex align-middle hoverable text-[#888484] hover:text-[#fff] hover:bg-primary cursor-pointer  hover:rounded-xl px-3 py-4"
            >
              <svg className='h-5 w-8'
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                       fill="none"
                       fillRule="nonzero"
                       stroke="none"
                       strokeWidth="1"
                       strokeLinecap="butt"
                       strokeLinejoin="miter"
                       strokeMiterlimit="10"
                       strokeDasharray=""
                       strokeDashoffset="0"
                       fontFamily="none"
                       fontWeight="none"
                       fontSize="none"
                       textAnchor="none"
                       className="icons"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M24.96289,1.05469c-0.20987,0.00724 -0.41214,0.08036 -0.57812,0.20898l-23,17.94727c-0.43579,0.33978 -0.51361,0.96851 -0.17383,1.4043c0.33978,0.43579 0.96851,0.51361 1.4043,0.17383l1.38477,-1.08008v26.29102c0.00006,0.55226 0.44774,0.99994 1,1h13.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h13.8418c0.55226,-0.00006 0.99994,-0.44774 1,-1v-26.29102l1.38477,1.08008c0.2819,0.21983 0.65967,0.27257 0.991,0.13833c0.33133,-0.13423 0.56586,-0.43504 0.61526,-0.7891c0.0494,-0.35406 -0.09386,-0.70757 -0.37579,-0.92736l-7.61523,-5.94141v-7.26953h-6v2.58594l-9.38477,-7.32227c-0.18607,-0.14428 -0.41707,-0.21828 -0.65234,-0.20898zM25,3.32227l19,14.82617v26.85156h-12v-19h-14v19h-12v-26.85156zM37,8h2v3.70898l-2,-1.5625zM20,28h10v17h-10z"></path>
                  </g>
                </g>
              </svg>
              <span className="ml-2" id="Reports">Reports</span>
            </div>
          </li>
          <li>
            <div
              onClick={handleMenuClick}
              className="flex align-middle hoverable text-[#888484] hover:text-[#fff] hover:bg-primary cursor-pointer  hover:rounded-xl px-3 py-4"
            >
              <svg className='h-5 w-8'
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                       fill="none"
                       fillRule="nonzero"
                       stroke="none"
                       strokeWidth="1"
                       strokeLinecap="butt"
                       strokeLinejoin="miter"
                       strokeMiterlimit="10"
                       strokeDasharray=""
                       strokeDashoffset="0"
                       fontFamily="none"
                       fontWeight="none"
                       fontSize="none"
                       textAnchor="none"
                       className="icons"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M24.96289,1.05469c-0.20987,0.00724 -0.41214,0.08036 -0.57812,0.20898l-23,17.94727c-0.43579,0.33978 -0.51361,0.96851 -0.17383,1.4043c0.33978,0.43579 0.96851,0.51361 1.4043,0.17383l1.38477,-1.08008v26.29102c0.00006,0.55226 0.44774,0.99994 1,1h13.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h13.8418c0.55226,-0.00006 0.99994,-0.44774 1,-1v-26.29102l1.38477,1.08008c0.2819,0.21983 0.65967,0.27257 0.991,0.13833c0.33133,-0.13423 0.56586,-0.43504 0.61526,-0.7891c0.0494,-0.35406 -0.09386,-0.70757 -0.37579,-0.92736l-7.61523,-5.94141v-7.26953h-6v2.58594l-9.38477,-7.32227c-0.18607,-0.14428 -0.41707,-0.21828 -0.65234,-0.20898zM25,3.32227l19,14.82617v26.85156h-12v-19h-14v19h-12v-26.85156zM37,8h2v3.70898l-2,-1.5625zM20,28h10v17h-10z"></path>
                  </g>
                </g>
              </svg>
              <span className="ml-2" id="Advertisement">Advertisement</span>
            </div>
          </li>
          <li className="mt-auto">
            <div
              onClick={handleMenuClick}
              className="flex align-middle hoverable text-[#888484] hover:text-[#fff] hover:bg-primary cursor-pointer  hover:rounded-xl px-3 py-4"
            >
              <svg className='h-5 w-8'
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                       fill="none"
                       fillRule="nonzero"
                       stroke="none"
                       strokeWidth="1"
                       strokeLinecap="butt"
                       strokeLinejoin="miter"
                       strokeMiterlimit="10"
                       strokeDasharray=""
                       strokeDashoffset="0"
                       fontFamily="none"
                       fontWeight="none"
                       fontSize="none"
                       textAnchor="none"
                       className="icons"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M24.96289,1.05469c-0.20987,0.00724 -0.41214,0.08036 -0.57812,0.20898l-23,17.94727c-0.43579,0.33978 -0.51361,0.96851 -0.17383,1.4043c0.33978,0.43579 0.96851,0.51361 1.4043,0.17383l1.38477,-1.08008v26.29102c0.00006,0.55226 0.44774,0.99994 1,1h13.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h13.8418c0.55226,-0.00006 0.99994,-0.44774 1,-1v-26.29102l1.38477,1.08008c0.2819,0.21983 0.65967,0.27257 0.991,0.13833c0.33133,-0.13423 0.56586,-0.43504 0.61526,-0.7891c0.0494,-0.35406 -0.09386,-0.70757 -0.37579,-0.92736l-7.61523,-5.94141v-7.26953h-6v2.58594l-9.38477,-7.32227c-0.18607,-0.14428 -0.41707,-0.21828 -0.65234,-0.20898zM25,3.32227l19,14.82617v26.85156h-12v-19h-14v19h-12v-26.85156zM37,8h2v3.70898l-2,-1.5625zM20,28h10v17h-10z"></path>
                  </g>
                </g>
              </svg>
              <span className="ml-2" id="Setting">Setting</span>
            </div>
          </li>
        </ul>
       
      </nav>
    </header>
  );
}
