import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import axios from 'axios';

function Pages() {
    const [customer, setCustomer] = useState([]);

    useEffect(()=>{
        const fetchData = async() => {
            const res = axios.get("https://jsonplaceholder.typicode.com/users")
        }
    },[])
  return (
    <div>Pages</div>
  )
}

export default Pages