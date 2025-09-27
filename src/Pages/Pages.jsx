import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import {headers} from '../constants/constants';



const Pages = ()=> {
    const [customer, setCustomer] = useState([]);

    useEffect(()=>{
        const fetchData = () => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res?.json())
            .then(data=>{
                const replicated = [];
                for (let i = 0; i < 5; i++) {
                    replicated.push(...data.map(user => ({
                        ...user,
                        id: user.id + i * data.length // make ids unique
                    })));
                }
                setCustomer(replicated);
                console.log(replicated)
            })
        }
        fetchData();
        
    },[])
  return (
    <div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header.key}>{header.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {customer.length > 0 ? (
                        customer.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.company?.name}</td>
                            <td>{customer.website}</td>
                            <td>{customer.address?.city}</td>
                        </tr>
                        ))
                        ) : (
                    <tr>
                    <td colSpan="5" className="text-center">
                        No customer data available.
                    </td>
                    </tr>
                    )}
                </tbody>
            </Table>
    </div>
  )
}

export default Pages