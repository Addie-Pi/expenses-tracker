
import './Chart.css'
import ChartBar from './ChartBar'


function Chart(props){
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValue)


    return (
      <div className="chart">
        {props.dataPoints.map((dataPoint)=>(
            <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
        
      </div>
    )
}


export default Chart