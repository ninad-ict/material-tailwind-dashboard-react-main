import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import Progress from '@material-tailwind/react/Progress';
import Team1 from 'assets/img/team-1-800x800.jpg';
import Team2 from 'assets/img/team-2-800x800.jpg';
import Team3 from 'assets/img/team-3-800x800.jpg';
import Team4 from 'assets/img/team-4-470x470.png';
import { useState,useEffect } from 'react';
import axios from '../axios';
import Button from "@material-tailwind/react/Button";

import {DataGrid} from '@mui/x-data-grid';


const config = {
    headers: {
      'content-type': 'application/json'
    }
  };


export default function CardTable() {

    const [farmerList,setFarmerList]=useState([]);
    const [triggerList,setTriggerList]=useState([]);
    const [columns,setColumns]=useState([]);
    const [rowClick,setRowClick]=useState(false);
    const [rows,setRows]=useState([]);

    const inputState={
        associate:"",
        name: "",
        spouse: "",
        father: "",
        dob: "",
        aadhar: "",
        gender: "",
        farmerMobile: "",
        spouseMobile: "",
        alternateMobile: "",
        totalNumbers: "",
        district: "",
        block: "",
        panchayat: "",
        village: "",
        door: "",
        street: "",
        education: "Select Education Details",
        income: "Select Income Details",
        mnregaMember: "",
        credit: "",
        cboMember: "",
        kitchenGarden: "",
        smsService: "",
        voiceSms: "",
        patta: "",
        lat: "",
        long: "",
        climateNote: "",
      }

      const [input,setInput]=useState(inputState);

    useEffect(()=>{

        setColumns( [ {field:'id',headerName:'id', type: 'number'},
        { field: 'date', headerName: 'Created', width: 130 },
        { field: 'name', headerName: 'Farmer Name', width: 130 },
        {
          field: 'mobile',
          headerName: 'Contact',
          type: 'number',
          width: 90,
        },
        { field: 'district', headerName: 'District', width: 130 },
        {
          field: 'associate',
          headerName: 'Facilitator',
        }]);

        let formdata=new FormData();
        formdata.append("Data",JSON.stringify({"Option":"farmerList"}));

        axios.post(
        'QueryCheck.php', 
        formdata , 
        config
        ).then((response) => {
        setFarmerList(response.data.farmerList);
        console.log(response.data.farmerList);
        console.log(farmerList);

        // setRows([{
        //     id:1091,srno:999,created:"sds",farmerName:"Sds",contact:"sdsd",district:"v.district",facilitator:"v.associate"
        // }])

        console.log([response.data.farmerList.map((v,k)=>(
                console.log(v.id),
                {
                    id:parseInt(k),srno:v.id,created:v.date,farmerName:v.name,contact:v.contact,district:v.district,facilitator:v.associate
                }
            ))])

        // setRows([response.data.farmerList.map((v,k)=>(
        //     console.log(v.id),
        //     {
        //         id:parseInt(k),srno:v.id,created:v.date,farmerName:v.name,contact:v.contact,district:v.district,facilitator:v.associate
        //     }
        // ))]);

        console.log(response.data.farmerList);
        setRows(response.data.farmerList);

      

        console.log("ROWS"+rows);
        console.log(rows);
        console.log("columns"+columns);



        }).catch(e=>console.log(e));

    },[triggerList]);

    // const columns = [
    //     {field:'id'},
    //     { field: 'srno', headerName: 'Sr. No.', width: 70 },
    //     { field: 'created', headerName: 'Created', width: 130 },
    //     { field: 'farmerName', headerName: 'Farmer Name', width: 130 },
    //     {
    //       field: 'contact',
    //       headerName: 'Contact',
    //       type: 'number',
    //       width: 90,
    //     },
    //     { field: 'district', headerName: 'District', width: 130 },
    //     {
    //       field: 'facilitator',
    //       headerName: 'Facilitator',
    //     },
    //   ];
      
    //   const rows = [
    //     farmerList&&farmerList.map((v,k)=>(
    //         {
    //             id:k,srno:v.id,created:v.created,farmerName:v.name,contact:v.contact,district:v.district,faciliator:v.facilitator
    //         }
    //     ))
    //   ];

      console.log(rows);
      
        function handleFarmerTableClick(e)
        {
            console.log("Cell Clicked"+e.id);

            let formdata=new FormData();
            formdata.append("Data",JSON.stringify({"Option":"farmerInfo","id":e.id}));

            axios.post(
                'QueryCheck.php', 
                formdata , 
                config
                ).then((response) => {
             
                    console.log("DATA Recieved");
                    console.log(response.data);

                    setRowClick(true);
                   
        
                }).catch(e=>console.log(e));
        }


    return (
        <Card>
            <CardHeader color="purple" contentPosition="left">
                <h2 className="text-white text-2xl">Report</h2>
            </CardHeader>
            <CardBody>
            <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
Farmer Registration Details            {/* Add Associate */}
          </h6>
                <div className="overflow-x-auto">
               {
                    (!rowClick)?  
                <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
                {(rows) ? 
                <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onCellClick={e=>handleFarmerTableClick(e)}
      /> :console.log("NO ROW")}
      </div>
      </div>
      </div>
              :
              "" 
              }
                </div>
            </CardBody>
        </Card>
    );
}
