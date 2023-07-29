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

const ChartPrice = () => {

const [items, setItem] = useState([]);
  useEffect(function () {
    fetch("/api/items")
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  const sellingPrice = ()=>{
    return items.map((item) =>{
        return item.selling_price
    })
  }
  const labelGoods = ()=>{
    return items.map((item) =>{
        return item.name
    })
  }
  const buyingPrice = ()=>{
    return items.map((item) =>{
        return item.buying_price
    })
  }




    const data = {
        labels: labelGoods(),
        datasets: [
            {label: "Buying items",
            data: buyingPrice(),
            backgroundColor: 'aqua',
            borderColor: 'black',
            borderWidth: 1,
        },
        {label: "Selling Price",
            data: sellingPrice(),
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
              marginLeft: '50vh'
            }

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

export default ChartPrice
