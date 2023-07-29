import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Navigation from './Navigation';
import Header from "./Header";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';


import { Bar } from 'react-chartjs-2'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const Chart = () => {

const [items, setItem] = useState([]);
  useEffect(function () {
    fetch('/api/items')
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  const damagedGoods = ()=>{
    return items.map((item) =>{
        return item.destroyed_items
    })
  }
  const labelGoods = ()=>{
    return items.map((item) =>{
        return item.name
    })
  }
  const restored = ()=>{
    return items.map((item) =>{
        return item.quantity
    })
  }




    const data = {
        labels: labelGoods(),
        datasets: [
            {label: "Destroyed items",
            data: damagedGoods(),
            backgroundColor: 'aqua',
            borderColor: 'black',
            borderWidth: 1,
        },
        {label: "Stock",
            data: restored(),
            backgroundColor: 'green',
            borderColor: 'black',
            borderWidth: 1,
        },

        ]
    }

    const options={

    }


  return (
    <>
    <Header />
    <Navigation />
    <div className='chart'>
          <Bar
          style={
              {padding: '20px',
              maxWidth: '65%',
              marginLeft: '50vh'}

          }
          data={data} options={options}
          > </Bar><br></br><br></br><br></br>

          <div className="clerk-2-btn">
              <Link to="/statistics"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
          </div>

      </div>
    </>

  )
}

export default Chart
