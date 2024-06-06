import axios from "axios";
import { useEffect, useState } from "react";

const Cards = () => {
  const [data, setData] = useState([]);

  const getData = async() => {
    try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setData(res.data)
    }catch(err){
      console.log(err);
    }    
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="m-3" style={{ fontFamily: 'Raleway' }}>
      <div className="row">
        {data.slice(0, 20).map((d) => {
          return (
            <div className="col-md-3 mb-3" key={d.id}>
              <div className="card" style={{ width: '18rem'}}>
                <img className="card-img-top" src="https://plus.unsplash.com/premium_photo-1661351475914-dc1e0e550b37?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBob3RvfGVufDB8fDB8fHww" alt="Descriptive Alt Text" />
                <div className="card-body">
                  <h5 className="card-title">{d.title}</h5>
                  <p className="card-text">{d.completed ? 'Completed' : 'Not Completed'}</p>
                  <a href="./" className="btn btn-danger">Next</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
