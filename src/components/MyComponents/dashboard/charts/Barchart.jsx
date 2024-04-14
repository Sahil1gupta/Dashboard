import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import io from 'socket.io-client';

const BASE_URL =  import.meta.env.MODE=== 'production' 
  ? 'wss://farmers-friend.onrender.com' 
  : '/socket.io';
  console.log( import.meta.env.MODE);
  console.log(BASE_URL)


function Barchart() {
    const data = [
        {
          crop: 'Rice',
          maxMoisturePercentage: 4000,
          minMoisturePercentage: 2400,
         
        },
        {
          crop: 'Papyaa',
          maxMoisturePercentage: 3000,
          minMoisturePercentage: 1300,
         
        },
        {
          crop: 'Apple',
          maxMoisturePercentage: 2000,
          minMoisturePercentage: 9800,
          
        },
        {
          crop: 'Wheat',
          maxMoisturePercentage: 2780,
          minMoisturePercentage: 3908,
          
        },
        {
          crop: 'Kela',
          maxMoisturePercentage: 1890,
          minMoisturePercentage: 4800,
          
        },
        {
          crop: 'Orange',
          maxMoisturePercentage: 2300,
          minMoisturePercentage: 3800,
          
        },
        {
          crop: 'Brinjal',
          maxMoisturePercentage: 3400,
          minMoisturePercentage: 4300,
          
        },
      ];

      const [sendata, setSenata] = useState([]);

      useEffect(() => {
        const socket = io(`${BASE_URL}`);
        console.log('Before connect event listener');
        
      
        socket.on('connect', () => {
          console.log('Socket.IO connected');
          // Emit the 'soil' event to the server
          socket.emit('soil', { message: 'Hello from client' });
        });
      
        socket.on('soil', (message1,message2) => {
          setSenata(prevData => [...prevData, message1]);
          console.log(message1)
          console.log(message2)

        });
        socket.on('connect_error', (err) => {
          console.log(`connect_error due to ${err.message}`);
        });
      
        socket.on('connect_timeout', (timeout) => {
          console.log('Connection Timeout', timeout);
        });
    console.log(sendata)
        socket.on('disconnect', () => {
          console.log('Socket.IO connection closed');
        });
    // Clean up the Socket.IO connection when the component unmounts
        return () => socket.disconnect();
      }, []);
  return (
    <div className="w-full h-72"> 
  
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="crop" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="maxMoisturePercentage" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      <Bar dataKey="minMoisturePercentage" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
    </BarChart>
  </ResponsiveContainer>  </div>
  )
}

export default Barchart