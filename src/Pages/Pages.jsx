
import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
// import axios from 'axios';
import {headers} from '../constants/constants';
import {useSelector,useDispatch} from 'react-redux';
import {Button} from 'react-bootstrap';
import {FaEdit, FaTrash} from 'react-icons/fa';
import { setInitialData} from '../features/tableSlice';
import {ConfirmationModel} from '../components/Modal/ConfirmationModal';
import {CustomerDetailsEditModal} from '../components/Modal/CustomerDetailsEditModal';

const Pages = ()=> {
    const [show,setShow]=useState(false);
    const dispatch = useDispatch();
    const customerState = useSelector((state) => state?.table);
    const [selectedId, setSelectedId] = useState('')
    // const [customer, setCustomer] = useState([]);

    console.log("state",customerState);

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
                // setCustomer(replicated);
                dispatch(setInitialData(replicated));
            })
        }
        fetchData();
        
    },[]);

    const handleEdit = (id) => {
        setShow(true);
        selectedId(id);
    }

    const handleDelete =(id) =>{
        selectedId(id);
    }
    
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
                    {customerState.length > 0 ? (
                        customerState.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.company?.name}</td>
                            <td>{customer.website}</td>
                            <td>{customer.address?.city}</td>
                            <td>
                                {/* Edit */}
                                <Button variant="primary" onClick={(id) => handleEdit(id)} style={{marginBottom:'10px'}}>
                                    <FaEdit style={{marginRight: 5}}/> Edit
                                </Button>
                                <Button variant="primary" onClick={(id) => handleDelete(id)}>
                                    <FaTrash style={{marginRight: 5}}/> Delete
                                </Button>
                            </td>
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
                   <CustomerDetailsEditModal show={show} handleClose={handleClose} onSave={onSave}></CustomerDetailsEditModal>
                   <ConfirmationModel show={show} handleClose={handleClose}></ConfirmationModel>

    </div>
  )
}

export default Pages