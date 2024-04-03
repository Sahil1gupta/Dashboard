import React from 'react'
import Barchart from './charts/Barchart'

function Orders() {
  return (
    <>
     <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">Orders</h1>
    </div>
    <div className="flex flex-col  rounded-lg border border-dashed shadow-sm">
      <div>
        
        <Barchart/>
      
      </div>
    </div>
  </main></>
  )
}

export default Orders