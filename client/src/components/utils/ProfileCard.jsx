import React from 'react'
import ProfileNav from '../auth/Profile/ProfileNav'

function ProfileCard({children}) {
  return (
    <>
    <ProfileNav/>
    <div className="rounded-xl bg-white shadow-sm border-gray-400 w-full md:w-[70%] lg:w-[40%] py-3 px-4">
    {children}
     </div>
    </>
  )
}

export default ProfileCard