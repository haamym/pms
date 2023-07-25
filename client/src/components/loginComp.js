import siteLogo from "../assets/img/logo.png"
import axios from 'axios'
import { useState } from "react"
import Cookie from 'universal-cookie'
import JwtDecoder from 'jwt-decode'
const baseUrl = process.env.REACT_APP_BASE_URL;

export default function LoginComp() {
const [apiError, setApiError] = useState('')
const [token, setToken] = useState();





  const onSubmit = (e) => {
        e.preventDefault()
        const { email, password } = e.target;
        login({ email: email.value, password: password.value });
    }


    const login = (user) => axios.post(`${baseUrl}auth/login`,user)
        .then((res)=>{  
          console.log(res.data)
          const {token} = res.data
          const cookie = new Cookie()
          cookie.set('token', token, {path: '/'})
          const decodedToken = JwtDecoder(token)
          setToken(decodedToken)
          window.location.href = '/dashboard'

        }).catch((err)=>{
          const {response} = err
          console.log(err)
          setApiError(response.data)
        })

        console.log(token)

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-14 w-auto"
            src={siteLogo}
            alt="artusama"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {apiError && <p className="text-center text-xs text-[red]">{apiError}</p>}
          <form className="space-y-6" onSubmit={onSubmit} method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full  rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register here.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
