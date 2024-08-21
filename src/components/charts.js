import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';

const data = [
  { name: 'Andhra Pradesh', production: 4000 }, 
  { name: 'West Bengal', production: 2000 },
  { name: 'Gujarat', production: 1500 },
  { name: 'Kerala', production: 1200 },
  { name: 'Tamil Nadu', production: 1100 },
  { name: 'Goa', production: 700 },
  { name: 'Daman & Diu', production: 600 },
  { name: 'Puducherry', production: 500 },
  { name: 'Odisha', production: 580 },
  { name: 'Karnataka', production: 900 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

const BarAndPieCharts = () => {
  return (
    <div className='my-5 p-3 align-content-center mx-auto' >
      <h2 className='text-center'>Fish Production by State in India (2022)</h2>
      
      {/* Bar Chart */}
      <ResponsiveContainer className='mx-auto ' width="70%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="production" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="production"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarAndPieCharts;
