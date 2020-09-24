import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div
        id="title"
        className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"
      >
        Dashboard
      </div>
      <div>
          <Link to="/dashboard/profile/f226687f-867b-4e9a-9bae-607bb6e65a25">Go to Profile</Link>
        </div>
        <div>
          <Link to="/dashboard/main">Go to Main</Link>
        </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard

/*
Внутри должно быть три элемента

div с id="title" и текстом Dashboard
ссылка(реакт) с навигацией /dashboard/profile/92589c47-3214-4bd9-bc56-f53706d94798 и 
текстом "Go To Profile"
ссылка(реакт) с навигацией /dashboard/main и текстом "Go To Main"
*/
