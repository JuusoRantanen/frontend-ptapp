import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css';
import './customerlist.css'


export default function Customerlist() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('http://traineeapp.azurewebsites.net/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
       
    }, [])

    const columns = [
        { field: "firstname", filter: 'agTextColumnFilter'},
        { field: "lastname", filter: 'agTextColumnFilter'},
        { field: "streetaddress", filter: 'agTextColumnFilter'},
        { field: "postcode", filter: 'agTextColumnFilter'},
        { field: "city", filter: 'agNumberColumnFilter' },
        { field: "email", filter: 'agTextColumnFilter' },
        { field: "phone", filter: 'agNumberColumnFilter' },
    ]
    const defaultColDef = {
        sortable: true,
        floatingFilter: true,
    };
    
    return (
        
        <div className="App">
           <h2>Customers</h2>
            <div className="ag-theme-material"
                style={{ height: '700px', width: 'auto', margin: 'auto'}} >
                <div></div>
               
<AgGridReact
                columnDefs={columns}
                defaultColDef={defaultColDef}
                animateRows={true}
                rowData={customers}>
    
               
</AgGridReact>
        </div>
        </div>
    );
}