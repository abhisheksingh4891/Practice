import axios from "axios";
import { useEffect, useState } from "react";

const Cards = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => setData(response.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="C m-3" style={{ fontFamily: 'Raleway' }}>
      <div className="row">
        {data.slice(0, 30).map((d) => {
          return (
            <div className="col-md-3 mb-3" key={d.id}>
              <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="https://plus.unsplash.com/premium_photo-1661351475914-dc1e0e550b37?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBob3RvfGVufDB8fDB8fHww" alt="Descriptive Alt Text" />
                <div className="card-body">
                  <h3 className="card-title">{d.title}</h3>
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
