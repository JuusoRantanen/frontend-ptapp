import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css';
import './customerlist.css'
import * as dayjs from 'dayjs'

export default function Traininglist() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetch('https://traineeapp.azurewebsites.net/gettrainings')
            .then(response => response.json())
            .then(data => setTrainings(data))
       
    }, [])

    const columns = [
        { field: "date", filter: 'agDateColumnFilter', headerName: "Date",
        valueFormatter: params => dayjs(params.data.date).format('DD/MM/YYYY HH:MM')
    },
        { field: "duration", filter: 'agTextColumnFilter'},
        { field: "activity", filter: 'agTextColumnFilter' },
       
        { headerName:"First Name", field: "customer.firstname", filter: 'agTextColumnFilter' },
        { headerName: "Last Name", field: "customer.lastname", filter: 'agTextColumnFilter' },
    ]
    const defaultColDef = {
        sortable: true,
        floatingFilter: true,
    };
    
    return (
        
        <div className="App">
           <h2>Trainings</h2>
            <div className="ag-theme-material"
                style={{ height: '700px', width: 'auto', margin: 'auto' }} >
                
                <div></div>
      


<AgGridReact
                columnDefs={columns}
                defaultColDef={defaultColDef}
                animateRows={true}
                rowData={trainings}>
    
               
</AgGridReact>
        </div>
        </div>
    );
}