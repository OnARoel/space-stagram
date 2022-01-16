import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Button from './Button';
import * as ReactBootStrap from 'react-bootstrap';

function App() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(process.env.REACT_APP_NASA_API_KEY)
      .then(function (response) {
        setData(response.data);
      })
      .catch(error => {
        console.log('Error fetching data: ', error);
      })
      .then(() => {
        setLoading(true);
      })

  }, [])

  return (
    <div className="App">
      <div className='container'>
        <div className='loading'>{loading ? (

          data.map(function (item) {
            return (
              <>

                <article>

                  <h3>{item.title}</h3>
                  <img src={item.url} alt='NASA Pic of the Day'></img>
                  <h6>{item.date}</h6>

                  <details open>
                    <summary><ins>Picture Explanation</ins></summary>
                    <p className='date'>{item.explanation}</p>
                  </details>

                  <Button></Button>

                </article>

              </>
            )
          })
        )
          : <ReactBootStrap.Spinner animation='border' />}</div>

      </div>
      <footer>Project done by Andre Roel. CSS frameworks were used thanks to <a href='https://picocss.com/'>PicoCSS</a> and <a href='https://react-bootstrap.github.io/'>React BootStrap</a></footer>
    </div>

  );
}

export default App;
