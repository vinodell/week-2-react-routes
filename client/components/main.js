import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div
        id="title"
        className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-2"
      >
        Main
      </div>
      <div>
        <Link to="/dashboard/">Go To Root</Link>
      </div>
      <div>
        <Link to="/dashboard/profile/f226687f-867b-4e9a-9bae-607bb6e65a25">Go To Profile</Link>{' '}
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
