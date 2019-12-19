import React, { useState, useEffect, useRef } from 'react';
import {Line} from 'react-chartjs-2';
import getDataWithFilterApi from '../api/getDataWithFilterApi.js';
import getAllClassesApi from '../api/getAllClassesApi.js';


import './ChartLine.css';

export default function ChartLine(){
 
  const [chartData, setChartData] = useState({});
  const [apiData, setApiData] = useState([]); 
  const [classesData, setClassesData] = useState([]);

  const chartRef = useRef(null)

  useEffect(() => {

    getAllClassesApi()
    .then(result => {
      setClassesData(result.data);

        getDataFromApi(result.data[0])
    }) 


  }, [])


  useEffect(() => {
    chartRef.current.chartInstance.update();
  }, [chartData])

  useEffect(() => {
    chartRef.current.chartInstance.update();
  }, [classesData])


  useEffect(() => {
    loadData();
  }, [apiData])

  const loadData = () => {

    const list = [];
    for (let i = 1; i <= apiData.length; i++) {
        list.push(i);
    }

    const sepal_width = [];
    const sepal_length = [];
    const petal_width = [];
    const petal_length = [];

    apiData.map((item)=>{
      sepal_width.push(item.sepal_width);
      sepal_length.push(item.sepal_length);
      petal_width.push(item.petal_width);
      petal_length.push(item.petal_length);
    })

  

    const data = {
      labels: list,
      datasets: [
        {
          label: 'Sepal Width',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#FFC312',
          borderColor: '#FFC312',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#FFC312',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#FFC312',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: sepal_width
        },
        {
            label: 'Sepal Length',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#0652DD',
            borderColor: '#0652DD',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#0652DD',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#0652DD',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: sepal_length
          },
          {
              label: 'Petal Length',
              fill: false,
              lineTension: 0.1,
              backgroundColor: '#ff4757',
              borderColor: '#ff4757',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#ff4757',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#ff4757',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: petal_length
          },
          {
              label: 'Petal Width',
              fill: false,
              lineTension: 0.1,
              backgroundColor: '#8e44ad',
              borderColor: '#8e44ad',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#8e44ad',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#8e44ad',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: petal_width
          }
      ]
    }

    setChartData(data); 
  }

const getDataFromApi = (classe) => {

  getDataWithFilterApi(classe)
  .then(result => {
    setApiData(result.data);
  })
  .catch(err => {
    console.log(err)
  })

}

  const onChangeClasse = (event) => {
    const classe = event.target.value;
    getDataFromApi(classe)
        

  }
    return (
      <div style={{margin: 50}}> 
      <div style={{display: 'flex', flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', justifySelf: 'center', }}> 
        <select onChange={event => onChangeClasse(event)} style={{width: '50%', marginBottom: 20}} className="select-css">
         

          {
            classesData.map((classe, index )=> (
                <option key={index} value={classe}>{classe}</option>
            ))
          }
        </select>  
        </div>
 
        <Line 
          ref={chartRef } 
          data={chartData} 

          options={{
            scales: {
              yAxes: [{
                ticks: { 
                    stepSize: 0.5
                  }
                }]
              }
          }}
          />
 

      </div>
    );
  
};