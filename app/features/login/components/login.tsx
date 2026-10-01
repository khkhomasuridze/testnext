"use client"

import { loginAction } from "@/app/features/login/actions/loginAction"

export default function Login() {


  const onClick = async ()=>{
    const result = await loginAction("test2@gmail.com")
  }
  
  return (
    <div>
      <button
      onClick={onClick}
      className="
        relative inline-flex items-center justify-center 
        px-6 py-3 text-sm font-semibold text-white 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        rounded-xl shadow-md transition-all duration-200 ease-out 
        hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] 
        active:scale-[0.98] 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
        disabled:opacity-50 disabled:pointer-events-none
      "
    >
      Login
    </button>
    </div>
  )
}
