import React from 'react'
import withAuth from '@/app/utils/withAuth'
import Header from './Header'
import AsideBar from './AsideBar'

const PeerLayout = () => {
  return (
    <div>
      <Header />
      <AsideBar />
    </div>
  )
}

export default PeerLayout
