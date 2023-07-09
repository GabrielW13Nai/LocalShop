import { React, useContext} from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

import { UserContext } from './UserContext'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const Chart = () => {

    const {users} = useContext(UserContext)

    const data = {
        labels: ['Number of items', 'Damaged goods'],
        datasets: [
            {label: "blank",
            data: {users},
            borderColor: 'black',
            boderWidth: 1
        }
        ]
    }

    const options


  return (
    <div>
        <Bar
        data={data} options={options}
        > </Bar>

    </div>
  )
}

export default Chart
