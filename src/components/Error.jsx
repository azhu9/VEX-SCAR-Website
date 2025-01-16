import React from 'react'

const Error = () => {
  return (
    <div class="bg-[#333333] flex items-center justify-center w-full h-[92vh]">
        <div class="text-center">
            <h1 class="text-9xl font-extrabold text-white">404</h1>
            <p class="text-2xl font-semibold text-gray-200 mt-4">
            Oops! Page Not Found
            </p>
            <p class="text-lg text-gray-400 mt-2">
            The page you're looking for doesn't exist or has been moved.
            </p>
            <div class="mt-6">
            <a
                href="/home"
                class="px-6 py-3 bg-red-600 text-white font-medium text-lg rounded-lg shadow hover:bg-red-800 transition"
            >
                Go Home
            </a>
            </div>
        </div>
    </div>
  )
}

export default Error