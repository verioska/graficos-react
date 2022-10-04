import Plot from 'react-plotly.js';
import './Plotly.css'

const Plotly = () =>{
  const plot1 = { 
    x : [ "perro" , "gato" , "conejo" ], 
    y : [ 12 , 3 , 5  ] }; 
  
  const data = [ plot1 ]

  const values = [
    ["Alquler", "Carro", "Luz"],
    ["$220.00", "$190.00", "$10"],
  ];

  const headers = [["<b> Item </b>"], ["<b> Expenditure </b>"]];

  return(
    <div className="container-grafic">
      <div className="container-plot">
        <Plot
          data={
            [
              {
                values: [112, 46, 544],
                labels: ["Lasaña", "Pastas", "Mariscos"],
                type: "pie",
              },
            ]
          }
          layout={{width: 350, height: 350, title: 'Comida'}}
        
        />
      </div>
      <div className="container-plot">
        <Plot
          data={data}
          layout={ {width: 350, height: 350, title: 'Mascotas'} }
        />
      </div>
      <div className="container-plot">
        <Plot
          data={[
            {
              type: "table",
              header: {
                values: headers,
                align: "center",
              },
              cells: {
                values: values,
                align: "center",
              },
            },
          ]}
          layout={ {width: 350, height: 350, title: 'Gastos'} }
        />
      </div>
    </div>
  )
}

export default Plotly