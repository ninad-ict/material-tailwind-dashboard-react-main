import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import Progress from '@material-tailwind/react/Progress';
import Team1 from 'assets/img/team-1-800x800.jpg';
import Team2 from 'assets/img/team-2-800x800.jpg';
import Team3 from 'assets/img/team-3-800x800.jpg';
import Team4 from 'assets/img/team-4-470x470.png';
import Input from "@material-tailwind/react/Input";
import { useState,useEffect } from 'react';
import Button from "@material-tailwind/react/Button";
import qs from "qs";

import axios from '../axios';

import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Label from "@material-tailwind/react/Label";


const config = {
  headers: {
    'content-type': 'application/json'
  }
};


export default function CardTable() {
    const associateForm={Option:"SaveNewAssociate",Name:"",Location:"",User:""};
    const [associate,setAssociate]=useState(associateForm);   
    const expertForm={Option:"SaveNewExpert",Name:"",Location:""};
    const [expert,setExpert]=useState(expertForm);  
    const cropForm={Option:"SaveNewCrop",Crop:""};
    const [crop,setCrop]=useState(cropForm);
    const [showModal, setShowModal] = useState(false);
    const [popupMessageTitle, setpopupMessageTitle] = useState("");
    const [popupMessageBody, setpopupMessageBody] = useState("");
    const [associateList, setAssociateList] = useState([]);
    const [expertList, setExpertList] = useState([]);
    const [cropList, setCropList] = useState([]);
    const [triggerList, setTriggerList] = useState(false);
    const [associateOperation, setAssociateOperation] = useState("add");
    const [expertOperation, setExpertOperation] = useState("add");
    const [cropOperation, setCropOperation] = useState("add");

    console.log("Input attribute"+Input.value);


// useEffect(()=>{
//   setAssociate(associateForm);
// },[associate])

useEffect(()=>{

let formdata=new FormData();
formdata.append("Data",JSON.stringify({"Option":"ExpertList"}));

axios.post(
  'QueryCheck.php', 
  formdata , 
  config
).then((response) => {
  console.log(typeof(response.data));
  console.log("Result"+response.data);
  console.log("Result"+response.data);
  let readjson=JSON.stringify(response.data);
  console.log(response.data.ExpertList);
  setExpertList(response.data.ExpertList);

}).catch(e=>console.log(e));

formdata=new FormData();
formdata.append("Data",JSON.stringify({"Option":"AssociateList"}));

axios.post(
  'QueryCheck.php', 
  formdata , 
  config
).then((response) => {
  console.log(typeof(response.data));
  console.log("Result"+response.data);
  console.log("Result"+response.data);
  let readjson=JSON.stringify(response.data);
  console.log(response.data.AssociateList);
  setAssociateList(response.data.AssociateList);

}).catch(e=>console.log(e));


formdata=new FormData();
formdata.append("Data",JSON.stringify({"Option":"CropList"}));

axios.post(
  'QueryCheck.php', 
  formdata , 
  config
).then((response) => {
  // console.log(typeof(response.data));
  // console.log("Result"+response.data);
  // console.log("Result"+response.data);
  // let readjson=JSON.stringify(response.data);
  // console.log(response.data.AssociateList);
  setCropList(response.data.CropList);

}).catch(e=>console.log(e));

},[triggerList]);

// setTriggerList(true);

    function handleAssociateAddition(e)
    {

      const checkError = e.target.getAttribute("error");
      console.log("Error"+checkError);


      e.preventDefault();

      if(associate.User.length!=10)
      {
        setShowModal(true);
        setpopupMessageTitle("Error");
        setpopupMessageBody("Enter Valid Contact number");
        return;
      }

      let formdata=new FormData();
      formdata.append("Data",JSON.stringify(associate));
      console.log(formdata);
        axios.post(
          'QueryCheck.php', 
          formdata , 
          config
        ).then((response) => {
          console.log("Password is "+response.data);
           
          setShowModal(true);
          if(associateOperation=="add")
          {
            setpopupMessageTitle("New Associate Added");
            setpopupMessageBody("Passcode-"+response.data);
          }
          else
          {
            setpopupMessageTitle("Details Updated");
            setpopupMessageBody("Associate Details Updated");
            setAssociateOperation("add")
          }

          setAssociate(associateForm);
          setTriggerList(()=>!triggerList);
        
      });
    
    } 
    
    function handleExpertAddition(e)
    {
      e.preventDefault();
      let formdata=new FormData();
      formdata.append("Data",JSON.stringify(expert));
      console.log(formdata);
        axios.post(
          'QueryCheck.php', 
          formdata , 
          config
        ).then((response) => {
          console.log("Password is "+response.data);
          let name=expertForm.Name;
          
          console.log({...expert}+"LL");
          setShowModal(true);
          if(expertOperation=="add")
          {
          setpopupMessageTitle("New Expert Added");
          setpopupMessageBody("Passcode-"+response.data);
          }
          else
          {           
          setpopupMessageTitle("Details Updated");
          setpopupMessageBody("Expert Details Updated");
          setExpertOperation("add");
          }
          setExpert(expertForm);
          setTriggerList(()=>!triggerList);
        
      });
    
    }

    function handleCropAddition(e)
    {
      e.preventDefault();
      let formdata=new FormData();
      formdata.append("Data",JSON.stringify(crop));
      console.log(formdata);
        axios.post(
          'QueryCheck.php', 
          formdata , 
          config
        ).then((response) => {
          console.log("Password is "+response.data);
          
          console.log({...crop}+"LL");
          setShowModal(true);
          if(cropOperation=="add")
          {
          setpopupMessageTitle("New Crop Added");
          setpopupMessageBody("Crop Name-"+crop.Crop);
          }
          else
          {           
          setpopupMessageTitle("Details Updated");
          setpopupMessageBody("Crop Details Updated");
          setCropOperation("add");
          }
          setCrop(cropForm);
          setTriggerList(()=>!triggerList);
        
      });

    }

    function handlePersonDelete(id,type)
    {
      let formdata=new FormData();
      formdata.append("Data",JSON.stringify({Option:"DeleteRow",table:type,row:id}));
      console.log("Delete Associate");

      axios.post(
        'QueryCheck.php', 
        formdata , 
        config
      ).then((response) => {
        // console.log("Password is "+response.data);
        // let name=expertForm.Name;
        
        // console.log({...expert}+"LL");
        setShowModal(true);
        setpopupMessageTitle("Done");
        setpopupMessageBody("Deleted Operation Completed");
        // setExpert(expertForm);
        setTriggerList(()=>!triggerList);
      
    });

    }  
    function handlePersonUpdate(e,v,type)
    {


      setShowModal(false);
      console.log("Clicked Update"+JSON.stringify(v));
      console.log("Name"+v.name);

      if(type=="associate")
      {
        console.log("Update associate");
        setAssociate({...associate,
          Name:v.name,User:v.user,
          Location:v.location,
          Option:"updatePerson",
          table:"associate",
          row:v.id});
        setAssociateOperation("update");
        
      }
      else
      {
        console.log("Update associate");
        setExpert({...expert,
          Name:v.name,
          Location:v.location,
          Option:"updatePerson",
          table:"resource",
          row:v.id});
        setExpertOperation("update");
      }

      window.scrollTo(0, 0);

    }

    function handleRowUpdation(e,v,type)
    {
      // e.preventDefault();
      console.log("Click");
      setShowModal(true);
      setpopupMessageTitle("Update "+type);
      setpopupMessageBody(<> 
          <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 pr-4 font-light ">
      <Button   color="lightBlue"
      buttonType="filled"
      size="sm"
      rounded={false}
      block={false}
      iconOnly={false}
      ripple="dark" 
      onClick={()=>handlePersonUpdate(e,v,type)}
      >Edit <br></br>{type}</Button></div>
       <div className="w-full lg:w-6/12 pr-4 font-light ">
       <Button   color="lightBlue"
                                  buttonType="filled"
                                  size="sm"
                                  rounded={false}
                                  block={false}
                                  iconOnly={false}
                                  ripple="dark" 
                                  onClick={()=>handlePersonDelete(v.id,type)}
                                  >Delete {type}</Button>
                                  </div></div></>);
      
    }

    function handleReset()
    {
      setAssociate(associateForm);
      setExpert(expertForm);
      setAssociateOperation("add");
      setExpertOperation("add");
      setTriggerList(()=>!triggerList);
    }
 
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

        {/* Modal */}

      


        {/* Modal */}
            <CardHeader color="purple" contentPosition="none">
            <div className="w-full flex items-center justify-between">
                <h2 className="text-white text-2xl">Settings</h2>
                <Button
                type="button"
              color="white"
              buttonType="outline"
              className="px-4"
              size="lg"
              style={{ padding: 8 }}
              ripple="light"
              value="Submit1"
              onClick={()=>handleReset()}
            >
             Reset
            </Button>
            </div>
            </CardHeader>
            <CardBody >
                <div className="overflow-x-auto grid ">
                <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                {(associateOperation=="add") ? "Add Associate":"Update Associate"}
            {/* Add Associate */}
          </h6>
          <form onSubmit={handleAssociateAddition}>
          <div className="flex flex-wrap mt-10">
         
            <div className="w-full lg:w-3/12 pr-4 mb-10 font-light">
            
              <Input
                type="text"
                color="purple"
                placeholder="Name of Associate"
                required
                value={associate.Name}
                onChange={(e) => setAssociate({ ...associate, Name: e.target.value })}
                
              />
            </div>  
            <div className="w-full lg:w-3/12 pr-4 mb-10 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="Location of Associate"
                required
                value={associate.Location}
                onChange={(e) => setAssociate({ ...associate, Location: e.target.value })}
              />
            </div> 
             <div className="w-full lg:w-3/12 pr-4 mb-10 font-light">
              <Input
                type="number"
                color="purple"
                placeholder="Associate Contact No."
                length="10"
                required
                value={associate.User}
                onChange={(e) => {
                    setAssociate({...associate, User: e.target.value });
                    }}

                    error={associate.User.length!=10&&associate.User? "Enter Valid Contact Number":("")}
                
                    
                    
              />
            </div>
          
            <div className="w-full lg:w-3/12 pr-4 mb-10 font-light">
            <Button type='submit' color="purple" buttonType="filled" ripple="dark">
            {(associateOperation=="add") ? "Add Associate":"Update Associate"}
                        </Button>
            </div>
           
            </div>
             </form>
                </div>
            </CardBody>
            <hr />
            <CardBody >
                <div className="overflow-x-auto">
               
          <div className="flex flex-wrap mt-10">
                <div className="w-full lg:w-12/12 pr-4 mb-10 font-light ">
                <h6 className="text-purple-500 text-sm mt-3  font-light uppercase">
                {(expertOperation=="add") ? "Add Expert":"Update Expert"}   
          </h6>
          </div>
           {/* <div className="w-full lg:w-5/12 pl-4 mb-10 font-light">
                <h6 className="text-purple-500 text-sm mt-3 font-light uppercase">
                {(cropOperation=="add") ? "Add Crop":"Update Crop"}   
          </h6>
          </div> */}
          </div>   
          
          <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 mb-10 font-light">
                <form onSubmit={handleExpertAddition}>
                <div className="flex flex-wrap mt-10">
                <div className="w-full lg:w-5/12 pr-4 mb-10 font-light">
            
              <Input
                type="text"
                color="purple"
                placeholder="Name of Expert"
                required
                value={expert.Name}
                onChange={(e) => setExpert({ ...expert, Name: e.target.value })}
                
              />
            </div>  
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="Location of Expert"
                required
                value={expert.Location}
                onChange={(e) => setExpert({ ...expert, Location: e.target.value })}
              />
            </div> 
            <div className="w-full lg:w-3/12 pr-4 mb-10 font-light">
            <Button type='submit' color="purple" buttonType="filled" ripple="dark">
            {(expertOperation=="add") ? "Add Expert":"Update Expert"}
                        </Button>
            </div>
                </div>
                </form>
             
          </div> 
          
          <div className="w-full lg:w-5/12 pl-4 mb-10 font-light hidden">
          <form onSubmit={handleCropAddition}>
          <div className="flex flex-wrap mt-10">
         <div className="w-full lg:w-8/12 pr-4 mb-10 font-light">
         <Input
             type="text"
             color="purple"
             placeholder="Name of Crop"
             required
             value={crop.Crop}
             onChange={(e) => setCrop({ ...crop, Crop: e.target.value })}
             
           />
         </div>     
         <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
         <Button type='submit' color="purple" buttonType="filled" ripple="dark">
         {(cropOperation=="add") ? "Add Crop":"Update Crop"}
                     </Button>
         </div>
       
    
         </div>
         </form>
          </div>
          </div>
         
          
             </div>
            </CardBody>  
            <hr />
                        <CardBody >
                <div className="overflow-x-auto">
                <div className="flex flex-wrap mt-10">
                <div className="w-full lg:w-6/12 pr-4 mb-10 font-light ">
                <h6 className="text-purple-500 text-sm mt-3  font-light uppercase">
            View Experts
          </h6>
          </div> <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                <h6 className="text-purple-500 text-sm mt-3 font-light uppercase">
            View Associates
          </h6>
          </div>
          </div>
          <div className="flex flex-wrap mt-5 ">
          <div className="w-full lg:w-6/12 pr-4 mb-10 font-light border-r">
          <table className="items-center w-full bg-transparent border-collapse ">
                        <thead>
                       
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    ID
                                </th> <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Name
                                </th>       <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Location
                                </th>       <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Passcode
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                  expertList.map((v,k)=>(
                                    
                                  <tr>
                                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {v.id}
                                </th>   <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                   {v.name}
                                </th>  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.location}
                                </th>  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                   { v.pass}
                                </th> 
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <Button   color="lightBlue"
                                  buttonType="link"
                                  size="sm"
                                  rounded={false}
                                  block={false}
                                  iconOnly={false}
                                  ripple="dark" 
                                  onClick={e=>handleRowUpdation(e,v,"resource")}
                                  >Update</Button>
                                </th> 
                                  </tr>
                                ))}
                        
                                </tbody></table>
            </div> 
          <div className="w-full lg:w-6/12 pr-4 mb-10 font-light pl-4">
          <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    ID
                                </th>  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Name
                                </th>       <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Location
                                </th>       <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    User
                                </th>   <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Passcode
                                </th><th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                              
                                </th>
                                </tr></thead>
                                <tbody>
                                {
                                  associateList.map((v,k)=>(
                                    
                                  <tr>
                                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.id}
                                </th>  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.name}
                                </th>  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {v.location}
                                </th>  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                   { v.user}
                                </th>  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                   { v.pass}
                                </th> <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <Button   color="lightBlue"
                                  buttonType="link"
                                  size="sm"
                                  rounded={false}
                                  block={false}
                                  iconOnly={false}
                                  ripple="dark" 
                                  onClick={e=>handleRowUpdation(e,v,"associate")}
                                  >Update</Button>
                                </th> 
                                  </tr>
                                ))}
                                </tbody>
                                </table>
            </div>  

            </div>
                </div>
            </CardBody>
        </Card>
        </>
    );
}
