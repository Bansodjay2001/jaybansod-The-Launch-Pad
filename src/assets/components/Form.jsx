
import React, { useState, useEffect } from 'react';

function Form() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
  
    useEffect(() => {
      const fetchApi = async () => {
        const url = `https://api.spacexdata.com/v3/capsules`;
        const response = await fetch(url);
        const resJson = await response.json();
        setData(resJson);
        setFilteredData(resJson); // Set filteredData to the original data initially
      };
      fetchApi();
    }, []);
  
    const handleSearch = () => {
      const filteredResults = data.filter((item) =>
        item.capsule_serial.toLowerCase().includes(search.toLowerCase())||
        item.status.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase()) 

      );
      setFilteredData(filteredResults); // Update filteredData state instead of data state
    };
  
    return (
      <div>
        <div className="input-container">
          <h1 className="search-heading">Let us help you find what you need</h1>
          <input
            type="search"
            className="search-input"
            placeholder='Type,Serial-Number,Status'
            onChange={(event) => setSearch(event.target.value)}
          />
          <i  onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="info">
          <div className="content">
            {filteredData.map((item) => (
                <div className='capsule-content'
                key={item.capsule_serial}>
                <h2>{item.capsule_serial}</h2>
                <h4>Status: {item.status}</h4>
                <h4>Original Launch: {item.original_launch}</h4>
                <h4>Type: {item.type}</h4>
                <p><strong>Details:  </strong>{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  

  export default Form;

































