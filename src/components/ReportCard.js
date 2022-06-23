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
import Icon from '@material-tailwind/react/Icon';
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import {IconButton} from '@material-tailwind/react/Icon';
import { Link } from "react-router-dom"; 
import Radio  from '@material-tailwind/react/radio';

import FarmerRegisterForm from './FarmerRegisterForm';


import {DataGrid} from '@mui/x-data-grid';
import { Label } from '@material-tailwind/react';


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

    const [showModal, setShowModal] = useState(false);
    const [popupMessageTitle, setpopupMessageTitle] = useState("");
    const [popupMessageBody, setpopupMessageBody] = useState("");

    const [reportOption,setReportOption]=useState('farmer');

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
        landrecord:""
      }

      const [input,setInput]=useState(inputState);

    useEffect(()=>{

        // setColumns( [ {field:'id',headerName:'id', type: 'number'},
        // { field: 'date', headerName: 'Created', width: 130 },
        // { field: 'name', headerName: 'Farmer Name', width: 130 },
        // {
        //   field: 'mobile',
        //   headerName: 'Contact',
        //   type: 'number',
        //   width: 130,
        // },
        // { field: 'district', headerName: 'District', width: 130 },
        // {
        //   field: 'associate',
        //   headerName: 'Facilitator',
        // }]);

        let formdata=new FormData();
        formdata.append("Data",JSON.stringify({"Option":"farmerList","associate":localStorage.getItem("associate")||'-1'}));

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
        // setRows(response.data.farmerList);

      

        console.log("ROWS"+rows);
        console.log(rows);
        console.log("columns"+columns);



        }).catch(e=>console.log(e));

    },[triggerList]);

  
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

                    let output=response.data;
                    console.log(output);


                    setRowClick(true);

                    setInput({...input,
                      associate:"",
                      action:"edit",
                      id:output.record.id||'',
        name: output.personal.name|| "--",
        spouse: output.personal.spouse|| "--",
        father: output.personal.father|| "--",
        dob: output.personal.dob|| "--",
        aadhar:output.personal.aadhar|| "--",
        gender: output.personal.gender|| "--",
        farmerMobile: output.contact.farmerMobile|| "--",
        spouseMobile: output.contact.spouseMobile|| "--",
        alternateMobile: output.contact.alternatemobile|| "--",
        totalNumbers: output.contact.totalnumbers|| "--",
        district: output.location.district|| "--",
        block: output.location.block|| "--",
        panchayat: output.location.panchayat|| "--",
        village: output.location.village|| "--",
        door: output.location.door|| "--",
        street: output.location.street|| "--",
        education: output.education.education,
        income:  output.education.income|| "--",
        mnregaMember: output.other.mnregaMember|| "--",
        credit: output.other.credit || "--",
        cboMember: output.other.cboMember|| "--",
        kitchenGarden: output.other.kitchenGarden|| "--",
        smsService: output.other.smsService|| "--",
        voiceSms: output.other.voiceSms|| "--",
        patta: output.other.patta|| "--",
        lat: output.other.lat|| "--",
        long: output.other.longg|| "--",
        climateNote: output.other.climateNote|| "--",
        landrecord:output.landrecord ||""
                    });


                   
        
                }).catch(e=>console.log(e));
        }

        function handleEditFarmer()
        {
{/* <FarmerRegisterForm data={input}/> */}
        }

        function handleDeleteFarmer()
        {

            if(!input.id)
            return;


            let formdata=new FormData();
            formdata.append("Data",JSON.stringify({"Option":"farmerDelete","id":input.id}));
    
            axios.post(
            'QueryCheck.php', 
            formdata , 
            config
            ).then((response) => {
           
                console.log(response.data);

                if(response.data.trim()=='DONE')
                {
                    console.log("its actually DONE");
                    setTriggerList(!triggerList);
                    setRowClick(false);

                    setShowModal(true);
                    setpopupMessageTitle("Success");
                    setpopupMessageBody("Farmer: "+input.name+" Deleted");
                }
    
    
            }).catch(e=>console.log(e));

        }


        useEffect(()=>{

            if(reportOption=='farmer')
            {
                setColumns( [ 
                {field:'Mainid',headerName:'ID'},
                { field: 'created', headerName: 'Created', width: 130 },
                { field: 'assocname', headerName: 'Associate', width: 130 },
                { field: 'name', headerName: 'Farmer Name', width: 130 },
                { field: 'spouse', headerName: 'Spouse', width: 130 },
                { field: 'father', headerName: 'Father', width: 130 },
                { field: 'dob', headerName: 'Birth Date', width: 130 },
                { field: 'aadhar', headerName: 'Aadhar Numer', width: 130 },
                { field: 'gender', headerName: 'Gender', width: 130 },
                { field: 'farmerMobile', headerName: 'Mobile', width: 130 },
                { field: 'spouseMobile', headerName: 'Spouse Mobile', width: 130 },
                { field: 'alternatemobile', headerName: 'Alter. Mobile', width: 130 },
                { field: 'totalnumbers', headerName: 'Total Numbers', width: 130 },
                { field: 'district', headerName: 'District', width: 130 },
                { field: 'block', headerName: 'Block', width: 130 },
                { field: 'panchayat', headerName: 'Panchayat', width: 130 },
                { field: 'village', headerName: 'Village', width: 130 },
                { field: 'door', headerName: 'Door', width: 130 },
                { field: 'street', headerName: 'Street', width: 130 },
                { field: 'education', headerName: 'Education', width: 130 },
                { field: 'income', headerName: 'Income', width: 130 },
                { field: 'mnregaMember', headerName: 'MNREGA?', width: 130 },
                { field: 'credit', headerName: 'Credit', width: 130 },
                { field: 'cboMember', headerName: 'CBO Member?', width: 130 },
                { field: 'kitchenGarden', headerName: 'Kitchen Garden', width: 130 },
                { field: 'smsService', headerName: 'SMS Service', width: 130 },
                { field: 'voiceSms', headerName: 'Voice SMS', width: 130 },
                { field: 'patta', headerName: 'Patta', width: 130 },
                { field: 'lat', headerName: 'Latitude', width: 130 },
                { field: 'longg', headerName: 'Longitude', width: 130 },
                { field: 'climateNote', headerName: 'Note on Climate', width: 130 },
            ]);
            }

            let formdata=new FormData();
            formdata.append("Data",JSON.stringify({"Option":"getSelectedReport","type":reportOption}));
            console.log(reportOption);
            axios.post(
                'QueryCheck.php', 
                formdata , 
                config
                ).then((response) => {

                    console.log("HEYYY");
                    console.log(response);
                    console.log(response.data.selectedReport);
                    response.data.selectedReport &&   setRows(response.data.selectedReport);

                }).catch(e=>console.log(e));





        },[reportOption]);

        useEffect(()=>{

            console.log(columns);
            console.log(rows);
            
        },[rows,columns]);


    return (
<>
        <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)} className="text-gray-600">
           <p className='mr-10'>{popupMessageTitle}</p>
        </ModalHeader>
        <ModalBody>
            <p className="text-base leading-relaxed text-gray-600 font-normal text-center">
               {popupMessageBody}
            </p>
        </ModalBody>
        {/* <ModalFooter>
            <Button 
                color="red"
                buttonType="link"
                onClick={(e) => setShowModalCode(false)}
                ripple="dark"
            >
                Close
            </Button>
        </ModalFooter> */}
    </Modal>
        <Card>
            <CardHeader color="purple" contentPosition="left">
                <h2 className="text-white text-2xl">Report</h2>
            </CardHeader>
            <CardBody>
            <div class="flex flex-wrap gap-x-8 ">
            <div class="flex items-center">
                
                <Radio
                  name="report"
                  id='reportFarm'
                  class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                  text="Farmer Details"
                  checked={(reportOption=='farmer')? "checked":""}
                    onClick={() => {
                      setReportOption('farmer');
                    }}
                />
              </div>     
              <div class="flex items-center">
                <Radio
                  name="report"
                  id='reportLand'
                  class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                  text="Land Details"
                  checked={(reportOption=='land')? "checked":""}
                    onClick={() => {
                      setReportOption('land');
                    }}
                />
              </div> 
              <div class="flex items-center">
                <Radio
                  name="report"
                  id='reportCrop'
                  class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                  text="Crop Details"
                  checked={(reportOption=='crop')? "checked":""}
                    onClick={() => {
                      setReportOption('crop');
                    }}
                />
              </div>
            </div>
            <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
            {reportOption} Registration Details            {/* Add Associate */}
          </h6>
                <div className="overflow-x-auto">
               {
                    (!rowClick)?  
                <div style={{ height:700, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
                {(rows) ? 
                <DataGrid
                
        rows={rows}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[25,50,100]}
      /> :console.log("NO ROW")}
      </div>
      </div>
      {/* // onCellClick={e=>handleFarmerTableClick(e)} */}

      </div>
              :
              <div className="w-full lg:w-12/12 mb-10 font-light">
              <Button
            color="lightBlue"
            buttonType="link"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={false}
            ripple="dark"
            onClick={()=>setRowClick(false)}

        >
         <Icon name="arrow_back" size="2xl" />    Back
        </Button>
        <Card >
            {/* <CardHeader color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl ">Page Visits</h2>
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                    >
                        See More
                    </Button>
                </div>
            </CardHeader> */}
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                        <tr>
                            <th colspan='6' className="strong text-blue-500 align-left border-b border-solid border-gray-200 py-3 text-base whitespace-nowrap font-bold text-center">
                            <h2 className='inline'>Farmer Details for {input.name}</h2>
                            <span className='float-right'>
                            <Button
            color="lightBlue"
            buttonType="link"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={false}
            ripple="dark"
            onClick={handleDeleteFarmer}
        >
        <Icon name="delete" size="lg" /></Button> </span>  <span className='float-right'>
        <Link  to={{pathname:"/farm-register", state: {
      input
    }
    }} >
                            <Button
            color="lightBlue"
            buttonType="link"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={false}
            ripple="dark"
            onClick={handleEditFarmer}
        >
        <Icon name="edit" size="lg" /></Button>
        </Link> </span> 
                            {/* <IconButton variant="text">
        <i className="fas fa-heart" />
      </IconButton> */}
                            {/* <span className='float-right y-auto'>   <IconButton variant="text">
        <i className="fas fa-heart" />
      </IconButton></span> */}
                            </th>
                        </tr>     
                        <tr className='bg-blue-500 rounded-lg'>
                            <th colspan='6' className="px-2 strong text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                            <h2>Personal Details</h2>
                            </th>
                        </tr>
                            <tr>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                                    Name
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                                    Spouse
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                                    Father
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                                    Date of Birth
                                </th>     <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                                    Aadhar
                                </th>     <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                                   Gender
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {input.name}
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.spouse}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.father}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.dob}
                                </td>        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.aadhar}
                                </td>        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.gender}
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                  
                        <tr className='rounded-lg'>
                            <th colspan='4' className="bg-blue-500 px-2 strong text-white align-middle border-b border-solid border-gray-200 text-sm whitespace-nowrap font-light text-center mr-4 border-r ">
                            <h2>Contact Details</h2>
                            </th>    <th colspan='2' className=" bg-blue-500 ml-3 strong text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                            <h2>Education & Work Details</h2>
                            </th>
                        </tr>
                        <tr>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                                    Farmer Contact
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                                    Spouse Contact
                                </th>
                                <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                                    Alternate Contact
                                </th>
                                <th   className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                                    Total Numbers 
                                </th>            <th   className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                                    Education
                                </th>            <th   className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                                    Income
                                </th>  
                                {/* <th colSpan={2}>{}</th>   */}
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {input.farmerMobile}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.spouseMobile}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.alternateMobile}
                                </td> 
                                  <td  className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.totalNumbers}
                                </td>     <td  className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.education}
                                </td>     <td  className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.income}
                                </td>
                                {/* <td colspan='2' className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {}
                                </td> */}
                            </tr>

                        </tbody>
                        <thead>
                  
                  <tr className='bg-blue-500 rounded-lg'>
                      <th colspan='6' className="px-2 strong text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                      <h2>Location Details</h2>
                      </th>
                  </tr>
                  <tr>
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              District
                          </th>
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Block
                          </th>
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                             Panchayat
                          </th>
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                             Village
                          </th>   <th  className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                             Door
                          </th>   <th   className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                             Street
                          </th>  
                          {/* <th colSpan={2}>{}</th>   */}
                      </tr>
                  </thead>
                  <tbody>
                        <tr>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {input.district}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.block}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.panchayat}
                                </td> 
                                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.village}
                                </td>   <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.door}
                                </td>   <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.street}
                                </td>
                                {/* <td colspan='2' className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {}
                                </td> */}
                            </tr>

                        </tbody>
                        <thead>
                  
                  <tr className='bg-blue-500 rounded-lg'>
                      <th colspan='6' className="px-2 strong text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                      <h2>Other Details</h2>
                      </th>
                  </tr>
                  <tr>
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              MNREGA?
                          </th>
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Credit
                          </th>        <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              CBO-Membership
                          </th>        <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Kitchen Garden
                          </th>        <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              SMS Service
                          </th>        <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Voice SMS
                          </th>
                          {/* <th colSpan={2}>{}</th>   */}
                      </tr>
                  </thead>
                  <tbody>
                        <tr>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {input.mnregaMember}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.credit}
                              </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.cboMember}
                              </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.kitchenGarden}
                              </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.smsService}
                              </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.voiceSms}
                              </td>
                        
                            </tr>

                        </tbody>
                        <thead>
                  
                  <tr>
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Patta
                          </th>
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Latitude
                          </th>        <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Longitude
                          </th>        <th  colspan={3}  className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Note on Climate Change
                          </th>      
                          {/* <th colSpan={2}>{}</th>   */}
                      </tr>
                  </thead>
                  <tbody>
                        <tr>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {input.patta}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.lat}
                              </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.long}
                              </td>
                          <td colspan={3} className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {input.climateNote}
                              </td>
                         
                            </tr>

                        </tbody>

                        {(input.landrecord.length!=0)? 
                        <>
                        {console.log(input.landrecord.length)}
                        <thead>
                  
                  <tr className='bg-blue-500 rounded-lg'>
                      <th colspan='6' className="px-2 strong text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                      <h2>Land Details</h2>
                      </th>
                  </tr>
                  </thead>

                  {
                      
                      input.landrecord.map((v,k)=>(
                      <>
                      {console.log(v)}
                      <thead>
                  <tr>
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Land Type
                          </th>
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Acres
                          </th>        <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Cutlivation Area
                          </th>        <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Soil Type
                          </th>        <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Land Owner
                          </th>        <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                             Cultivation Practice
                          </th>
                          {/* <th colSpan={2}>{}</th>   */}
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                      <td rowspan={7} className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.type}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.acres}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.cultivationArea}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.soiltype}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.landOwner}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.cutlivationPractice}
                    </td>

                      </tr>
                 
                  <tr>
                  <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Land Position
                          </th>  
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Land Type
                          </th>  
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Crop 1
                          </th>  
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Crop 2
                          </th>  
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Crop 3
                          </th>  
                          </tr>
                          <tr>
                       <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.landPosition}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.landType}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.crop1}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.crop2}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.crop3}
                    </td>

                      </tr>
                      <tr>
                  <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Variety
                          </th>  
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Sub-variety
                          </th>  
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Season
                          </th>  
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                             Fertilizer
                          </th>  
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Bio-fertilizer
                          </th>  
                          </tr>
                          <tr>
                       <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.variety}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.subVariety}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.season}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.fertilizer}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.biofertilizer}
                    </td>

                      </tr>
                      <tr>
                  <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Last Year yield
                          </th>  
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Rate Sale
                          </th>  
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Availablity Machine
                          </th>  
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                             Crop Insurance
                          </th>  
                          <th className="px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                              Live Stock
                          </th>  
                          </tr>
                          <tr>
                       <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.lastYearYield}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.rateSale}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.availabilityMachine}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.cropInsurance}
                    </td> <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.liveStock}
                    </td>

                      </tr>
                          </tbody>
</>
                      
                      ))
                  }
                  
                          </>   : ""}
                    </table>
                </div>
            </CardBody>
        </Card>
      
          <div className="overflow-x-auto hidden">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                        <tr>
                          <th colSpan={6}>
                          <h6 colSpan={6} className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase text-center">
Farm Details for {input.name}            {/* Add Associate */}
          </h6>
          
                          </th>
                        </tr>
                            <tr className='text-purple-500'>
                                <th className="px-2 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    ID
                                </th>
                                <th className="px-2  align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Name
                                </th>
                                <th className="px-2 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Salary
                                </th>
                                <th className="px-2 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Country
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    1
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Dakota Rice
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $36,738
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Niger
                                </td>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    2
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Minerva Hooper
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $23,789
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Curaçao
                                </td>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    3
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Sage Rodriguez
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $56,142
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Netherlands
                                </td>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    4
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Philip Chaney
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $38,735
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Korea, South
                                </td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
          
                {/* <h6 className="text-purple-500 text-sm  font-light uppercase my-auto flex items-center" onClick={()=>setRowClick(false)}>
                <Icon name="arrow_back" size="2xl" /> Back
          </h6> */}

              </div>
              }
                </div>
            </CardBody>
        </Card>
        </>
    );
}
