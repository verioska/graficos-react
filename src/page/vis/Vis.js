import {  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  HeatmapSeries, 
  Hint,
  LineSeries
 } from 'react-vis';
import './Vis.css'


const Vis = () =>{
  const BarSeries =  HorizontalBarSeries;
  const value = false

  const data = [];

  for (let i = 0; i < 20; i++) {
    const series = [];
    for (let j = 0; j < 100; j++) {
      series.push({x: j, y: (i / 10 + 1) * Math.sin((Math.PI * (i + j)) / 50)});
    }
    data.push({color: i, key: i, data: series, opacity: 0.8});
  }


  return(
    <div className="container-grafic">
      <div className="container-vis">
        <XYPlot width={350} height={350} stackBy="x">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries data={[{y: 2, x: 10}, {y: 4, x: 5}, {y: 5, x: 15}]} />
          <BarSeries data={[{y: 2, x: 12}, {y: 4, x: 2}, {y: 5, x: 11}]} />
        </XYPlot>
      </div>
      <div className="container-vis">
        <XYPlot width={350} height={350}>
          <XAxis />
          <YAxis />
          <HeatmapSeries
            className="heatmap-series-example"
            onValueMouseOver={v => this.setState({value: v})}
            onSeriesMouseOut={v => this.setState({value: false})}
            data={[
              {x: 1, y: 0, color: 10},
              {x: 1, y: 5, color: 10},
              {x: 1, y: 10, color: 6},
              {x: 1, y: 15, color: 7},
              {x: 2, y: 0, color: 12},
              {x: 2, y: 5, color: 2},
              {x: 2, y: 10, color: 1},
              {x: 2, y: 15, color: 12},
              {x: 3, y: 0, color: 9},
              {x: 3, y: 5, color: 2},
              {x: 3, y: 10, color: 6},
              {x: 3, y: 15, color: 12}
            ]}
          />
          {value !== false && <Hint value={value} />}
        </XYPlot>
      </div>
      <div className="container-vis">
        <XYPlot
        width={350}
        height={350}
        colorType="linear"
        colorDomain={[0, 9]}
        colorRange={['yellow', 'orange']}
      >
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis />
        <YAxis />
        {data.map(props => (
          <LineSeries {...props} />
        ))}
      </XYPlot>
      </div>
    </div>
  )
}

export default Vis