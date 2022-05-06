import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import Checkbox from "@material-tailwind/react/Checkbox";
import Label from "@material-tailwind/react/Label";
import FarmerCropDetails from "./FarmerCropDetails";
import { useState, useEffect } from "react";
import qs from "qs";

import Radio from "@material-tailwind/react/radio";

import axios from '../axios';
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import { indexOf } from "lodash";
import { func } from "assert-plus";

export default function FarmerRegisterForm() {
  // const [maxid,setMaxid]=useState(4);
  // const [name,setName]=useState("");
  //const [spouse,setSpouse]=useState("");
  function disableById(id, status) {
    const myId = document.querySelector(`#${id}`);
    if (status === "Yes") {
      console.log("Yes show");
      myId.style.display = "block";
    } else {
      myId.value = "";
      console.log("No dont show");
      myId.style.display = "none";
    }
  }
  const currLandEntries={
    id:"",
    type:"",
    acres:"",
    cultivationArea:"",
    soiltype:"Select Soil Type",
    landOwner:"Land Ownership",
    cutlivationPractice:"Cultivation Practice",
    landPosition:"Select Land Position",
    landType:"Select Land Type",
    crop1:"",
    crop2:"",
    crop3:"",
    variety:"",
    subVariety:"",
    season:"",
    fertilizer:"",
    biofertilizer:"",
    lastYearYield:"",
    rateSale:"",
    availabilityMachine:"",
    cropInsurance:"",
    liveStock:"Select Livestock"
  }
  const [tankfeddetails,setTankfeddetails]=useState(currLandEntries);
  const [rainfeddetails,setRainfeddetails]=useState(currLandEntries);
  const [borewelldetails,setborewelldetails]=useState(currLandEntries);
  const [dripdetails,setDripdetails]=useState(currLandEntries);

  const [showModal, setShowModal] = useState(false);
  const [popupMessageTitle, setpopupMessageTitle] = useState("");
  const [popupMessageBody, setpopupMessageBody] = useState("");

  const educationList = [
    "Literate",
    "5th Grade",
    "10th Grade",
    "Inter",
    "Graduate",
    "Post-Graduate",
    "Doctorate",
  ];
  const incomeList = [
    "Less than 50K",
    "50K - 1L",
    "1L - 2L",
    "2L-4l",
    "4L-6L",
    "6L-10L",
    "Above 10L",
  ];


  const [landDetails,setLandDetails]=useState({
    tankfed:false,
    rainfed:false,
    borewell:false,
    drip:false
  })

  const inputState={
    associate:localStorage.getItem("associate")||'-1',
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

  const [input, setInput] = useState(inputState);

  // const [errorCheck,setErrorCheck]=useState([]);

  // const [landEntries,setLandEntries]=useState(
  //   []);

  useEffect(()=>{

    if(!tankfeddetails.id)
      return;


    console.log("tankfeddetails->"+qs.stringify(tankfeddetails));
    axios.post(
      'FarmerLandRecord.php', 
      qs.stringify(tankfeddetails) , 
      config
    ).then((response) => {
      console.log("Max in tankfeddetails->"+response.data);
  
  });

  },[tankfeddetails.id]) 
  
  useEffect(()=>{

    if(!rainfeddetails.id)
     return;



    console.log("rainfeddetails->"+qs.stringify(rainfeddetails));
    axios.post(
      'FarmerLandRecord.php', 
      qs.stringify(rainfeddetails) , 
      config
    ).then((response) => {
      console.log("Max in tankfeddetails->"+response.data);
  
  });

  },[rainfeddetails.id])
  
  useEffect(()=>{

    if(!borewelldetails.id)
     return;




    console.log("borewelldetails->"+qs.stringify(borewelldetails));
    axios.post(
      'FarmerLandRecord.php', 
      qs.stringify(borewelldetails) , 
      config
    ).then((response) => {
      console.log("Max in tankfeddetails->"+response.data);
  
  });

  },[borewelldetails.id])  


  useEffect(()=>{

    if(!dripdetails.id)
      return;

    console.log("dripdetails->"+qs.stringify(dripdetails));
    axios.post(
      'FarmerLandRecord.php', 
      qs.stringify(dripdetails) , 
      config
    ).then((response) => {
      console.log("Max in tankfeddetails->"+response.data);
  
  });

  },[dripdetails.id])

   



   

  function ShowFarmerCropDetails(props){
    if(props.isChecked)
    {
      const id=props.id;
      return (<FarmerCropDetails type={props.type} 
      id={id} 
      />)
    }
    else
    return null;
  }

  useEffect(() => {
    console.log(input);
  }, [input]);

  const config = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  };


  

  function handleFarmerRegistration(e) {
    e.preventDefault();
    let formdata = new FormData();
    console.log("input");
    console.log(input);

    let checkAadhar = /^\d{12}$/;
    let checkPhone = /^\d{12}$/;

    if(!/^\d{12}$/.test(input.aadhar)&&input.aadhar)
    {

      setShowModal(true);
      setpopupMessageTitle("Error");
      setpopupMessageBody("Check Adhaar Details");
      return;
    }  
    
    if(!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(input.dob)&&input.dob)
    {

      setShowModal(true);
      setpopupMessageTitle("Error");
      setpopupMessageBody("Check Date of Birth Details");
      return;
    }




    // Test the string against the regular expression
   




    axios.post('test-axios.php', qs.stringify(input) , config).then((response) => {
      
    console.log("Hey");
      console.log(response.data);

      let currId=response.data;
      // maxid=response.data;
      // setMaxid(parseInt(currId));
      // console.log("Not Entered Land Details->"+maxid);
      // console.log(maxid);


    if(landDetails.tankfed)
    {
      console.log("Entered Land Details");
      // tankfeddetails['id']=currId;
        setTankfeddetails({...tankfeddetails,id:currId}); 
    }     

    if(landDetails.rainfed)
    {
      console.log("Entered Land Details");
      setRainfeddetails({...rainfeddetails,id:currId});
    
    }    
    
    if(landDetails.borewell)
    {
      console.log("Entered Land Details");
      // tankfeddetails['id']=currId;
      setborewelldetails({...borewelldetails,id:currId});
   
    }      
    
    if(landDetails.drip)
    {
      console.log("Entered Land Details");
      // tankfeddetails['id']=currId;
      setDripdetails({...dripdetails,id:currId});
     
    }


    setShowModal(true);
    setpopupMessageTitle("Success");
    setpopupMessageBody("Farmer Registration Successful");

    
      }).catch(e=>console.log(e)); 

      setInput(inputState);
      setTankfeddetails(currLandEntries);
      setRainfeddetails(currLandEntries);
      setborewelldetails(currLandEntries);
      setDripdetails(currLandEntries);

    console.log("Form Submitted");
    // let formdata = new FormData();
    // formdata.append("name", input.name);
    // formdata.append("spouse", input.spouse);
    // formdata.append(input);
    console.log("NAME->", input.name);
    // for (let [name, value] of formdata) {
    //   console.log(`${name} = ${value}`); // key1 = value1, then key2 = value2
    // }

  }

  function handleFarmerTest()
  {console.log("TEST TEST");
    setInput({...input,
      associate:localStorage.getItem("associate")||'-1',
      name: "Ninad",
      spouse: "Xyz",
      father: "disuo",
      dob: "1991-01-17",
      aadhar: "123456789121",
      gender: "Male",
      farmerMobile: "9082330324",
      spouseMobile: "9869087379",
      alternateMobile: "9082330324",
      totalNumbers: "3",
      district: "Thane",
      block: "Panch",
      panchayat: "Pakhadi",
      village: "Menji",
      door: "Y-12",
      street: "narayan",
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
    })
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
    <form onSubmit={handleFarmerRegistration}>
      <Card>
        <CardHeader color="purple" contentPosition="none" >
          <div className="w-full flex items-center justify-between">
            <h2 className="text-white text-2xl" >Farmer's Registration</h2>
            <Button
              type="submit"
              color="white"
              buttonType="outline"
              className="px-4"
              size="lg"
              style={{ padding: 8 }}
              ripple="light"
              value="Submit1"
            >
              Add Farmer Information
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
            Personal Information 
            {/* <Button type='button' onClick={handleFarmerTest}>Test</Button> */}
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="Name"
                required
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
              />
            </div>
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="Spouse Name"
                value={input.spouse}
                onChange={(e) => setInput({ ...input, spouse: e.target.value })}
              />
            </div>
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="Father Name"
                value={input.father}
                onChange={(e) => setInput({ ...input, father: e.target.value })}
              />
            </div>
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <Input
                type="date"
                color="purple"
                placeholder="Date of Birth"
                required
                value={input.dob}
                onChange={(e) => setInput({ ...input, dob: e.target.value })}
                error={!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(input.dob)&&input.dob? "Invalid Date":""}
              />
            </div>
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <Input
                type="number"
                color="purple"
                placeholder="Aadhar No."
                required
                value={input.aadhar}
                onChange={(e) => setInput({ ...input, aadhar: e.target.value })}
                error={!/^\d{12}$/.test(input.aadhar)&&input.aadhar? ("Invalid Aadhar Number"):("")}
              />
            </div>
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <Label htmlFor="divGender">Select Gender:</Label>
              <div class="flex flex-wrap gap-x-8 " id="divGender">
                <div class="flex items-center">
                  <Radio
                    name="gender"
                    id="genderMale"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    text="Male"
                    onClick={() => {
                      setInput({ ...input, gender: "Male" });
                    }}
                  />
                </div>
                <div class="flex items-center">
                  <Radio
                    name="gender"
                    id="genderFemale"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    text="Female"
                    onClick={() => {
                      setInput({ ...input, gender: "Female" });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
            Contact Information
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-4/12  pr-4  mb-10 font-light">
              <Input
                type="number"
                color="purple"
                placeholder="Farmer Mobile No."
                required
                value={input.farmerMobile}
                onChange={(e) =>
                  setInput({ ...input, farmerMobile: e.target.value })
                }
                error={!/^[6-9]\d{9}$/.test(input.farmerMobile)&&input.farmerMobile? ("Enter Valid Contact Number"):("")}
              />
            </div>{" "}
            <div className="w-full lg:w-4/12  pr-4  mb-10 font-light">
              <Input
                type="number"
                color="purple"
                placeholder="Spouse Mobile No."
                value={input.spouseMobile}
                onChange={(e) =>
                  setInput({ ...input, spouseMobile: e.target.value })
                }
                error={!/^[6-9]\d{9}$/.test(input.spouseMobile)&&input.spouseMobile? ("Enter Valid Contact Number"):("")}

              />
            </div>{" "}
            <div className="w-full lg:w-4/12  pr-4  mb-10 font-light">
              <Input
                type="number"
                color="purple"
                placeholder="Alternate Mobile No."
                value={input.alternateMobile}
                onChange={(e) =>
                  setInput({ ...input, alternateMobile: e.target.value })
                }
                error={!/^[6-9]\d{9}$/.test(input.alternateMobile)&&input.alternateMobile? "Enter Valid Contact Number":""}
              />
            </div>{" "}
            <div className="w-full lg:w-4/12  pr-4  mb-10 font-light">
              <Input
                type="number"
                color="purple"
                placeholder="Total Numbers"
                value={input.totalNumbers}
                onChange={(e) =>
                  setInput({ ...input, totalNumbers: e.target.value })
                }
              />
            </div>
          </div>{" "}
          <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
            Location Details
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="District"
                required
                value={input.district}
                onChange={(e) =>
                  setInput({ ...input, district: e.target.value })
                }
              />
            </div>
            <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="Block"
                required
                value={input.block}
                onChange={(e) => setInput({ ...input, block: e.target.value })}
              />
            </div>
            <div className="w-full lg:w-4/12 pl-4 mb-10 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="Panchayat"
                required
                value={input.panchayat}
                onChange={(e) =>
                  setInput({ ...input, panchayat: e.target.value })
                }
              />
            </div>
            <div className="w-full lg:w-4/12 mb-10 pr-4 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="Village"
                required
                value={input.village}
                onChange={(e) =>
                  setInput({ ...input, village: e.target.value })
                }
              />
            </div>{" "}
            <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="Door"
                value={input.door}
                onChange={(e) => setInput({ ...input, door: e.target.value })}
              />
            </div>{" "}
            <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="Street"
                value={input.street}
                onChange={(e) => setInput({ ...input, street: e.target.value })}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-6/12 px-4 mb-10 font-light">
              <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                Education Details
              </h6>
              <div className="flex flex-wrap mt-10">
                <div className="w-full lg:w-12/12 pr-4 mb-10 font-light">
                  <Dropdown
                    color="lightBlue"
                    placement="bottom-start"
                    buttonText={input.education}
                    buttonType="filled"
                    size="regular"
                    rounded={false}
                    block={false}
                    ripple="light"
                  >
                    {educationList.map((values, key) => (
                      <DropdownItem
                        color="lightBlue"
                        key={key}
                        ripple="light"
                        onClick={(e) =>
                          setInput({ ...input, education: e.target.innerText })
                        }
                      >
                        {values}
                      </DropdownItem>
                    ))}
                  </Dropdown>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4 mb-10 font-light">
              <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                Income Details ( Annual )
              </h6>
              <div className="flex flex-wrap mt-10">
                <div className="w-full lg:w-12/12 pr-4 mb-10 font-light">
                  <Dropdown
                    color="lightBlue"
                    placement="bottom-start"
                    buttonText={input.income}
                    buttonType="filled"
                    size="regular"
                    rounded={false}
                    block={false}
                    ripple="light"
                  >
                    {incomeList.map((values, key) => (
                      <DropdownItem
                        color="lightBlue"
                        key={key}
                        ripple="light"
                        onClick={(e) =>
                          setInput({ ...input, income: e.target.innerText })
                        }
                      >
                        {values}
                      </DropdownItem>
                    ))}
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
          <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
            Other Details
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <label htmlFor="divMemMngrega">Membership in MNREGA:</label>
              <div class="flex flex-wrap gap-x-8 " id="divMemMngrega">
                <div class="flex items-center">
                  <input
                    name="mnrega"
                    id="mnregaYes"
                    type="radio"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    onClick={() => {
                      setInput({ ...input, mnregaMember: "Yes" });
                    }}
                  />
                  <label
                    for="mnregaYes"
                    class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
                  >
                    <span class="relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"></span>
                    Yes
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    name="mnrega"
                    id="mnregaNo"
                    type="radio"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    onClick={() => {
                      setInput({ ...input, mnregaMember: "No" });
                    }}
                  />
                  <label
                    for="mnregaNo"
                    class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
                  >
                    <span class="relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"></span>
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <label htmlFor="divCreditAvailed">Credit Availed:</label>
              <div class="flex flex-wrap gap-x-8 " id="divCreditAvailed">
                <div class="flex items-center">
                  <input
                    name="creditAvailed"
                    id="creditYes"
                    type="radio"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    onClick={() => {
                      disableById("enterCredit", "Yes");
                    }}
                  />
                  <label
                    for="creditYes"
                    class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
                  >
                    <span class="relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"></span>
                    Yes
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    name="creditAvailed"
                    id="creditNo"
                    type="radio"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    onClick={() => {
                      setInput({ ...input, credit: "" });
                      disableById("enterCredit", "No");
                    }}
                  />
                  <label
                    for="creditNo"
                    class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
                  >
                    <span class="relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"></span>
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
              <Input
                type="number"
                id="enterCredit"
                color="purple"
                placeholder="Credit Amount"
                value={input.credit}
                onChange={(e) => setInput({ ...input, credit: e.target.value })}
              />
            </div>
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <label htmlFor="divMemberCBO">Is Member in CBO:</label>
              <div class="flex flex-wrap gap-x-8 " id="divMemberCBO">
                <div class="flex items-center">
                  <input
                    name="memberCBO"
                    id="memberCboYes"
                    type="radio"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    onClick={() => {
                      disableById("enterMemberCbo", "Yes");
                    }}
                  />
                  <label
                    htmlFor="memberCboYes"
                    class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
                  >
                    <span class="relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"></span>
                    Yes
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    name="memberCBO"
                    id="memberCboNo"
                    type="radio"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    onClick={() => {
                      setInput({ ...input, cboMember: "" });
                      disableById("enterMemberCbo", "No");
                    }}
                  />
                  <label
                    htmlFor="memberCboNo"
                    class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
                  >
                    <span class="relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"></span>
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
              <Input
                type="text"
                id="enterMemberCbo"
                color="purple"
                placeholder="Name of the CBO"
                value={input.cboMember}
                onChange={(e) =>
                  setInput({ ...input, cboMember: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <label htmlFor="divKitchenGarden">Kitchen Garden</label>
              <div class="flex flex-wrap gap-x-8 " id="divKitchenGarden">
                <div class="flex items-center">
                  <input
                    name="kitchenGarden"
                    id="kitchenGardenYes"
                    type="radio"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    onClick={() => {
                      setInput({ ...input, kitchenGarden: "Yes" });
                    }}
                  />
                  <label
                    htmlFor="kitchenGardenYes"
                    class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
                  >
                    <span class="relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"></span>
                    Yes
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    name="kitchenGarden"
                    id="kitchenGardenNo"
                    type="radio"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    onClick={() => {
                      setInput({ ...input, kitchenGarden: "No" });
                    }}
                  />
                  <label
                    htmlFor="kitchenGardenNo"
                    class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
                  >
                    <span class="relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"></span>
                    No
                  </label>
                </div>
              </div>
            </div>{" "}
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <label htmlFor="divSmsService">SMS Service</label>
              <div class="flex flex-wrap gap-x-8 " id="divSmsService">
                <div class="flex items-center">
                  <input
                    name="smsService"
                    id="smsServiceYes"
                    type="radio"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    onClick={() => {
                      setInput({ ...input, smsService: "Yes" });
                    }}
                  />
                  <label
                    htmlFor="smsServiceYes"
                    class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
                  >
                    <span class="relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"></span>
                    Yes
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    name="smsService"
                    id="smsServiceNo"
                    type="radio"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    onClick={() => {
                      setInput({ ...input, smsService: "No" });
                    }}
                  />
                  <label
                    htmlFor="smsServiceNo"
                    class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
                  >
                    <span class="relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"></span>
                    No
                  </label>
                </div>
              </div>
            </div>{" "}
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <label htmlFor="divVoiceSms">Voice SMS</label>
              <div class="flex flex-wrap gap-x-8 " id="divVoiceSms">
                <div class="flex items-center">
                  <input
                    name="voiceSms"
                    id="voiceSmsYes"
                    type="radio"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    onClick={() => {
                      setInput({ ...input, voiceSms: "Yes" });
                    }}
                  />
                  <label
                    htmlFor="voiceSmsYes"
                    class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
                  >
                    <span class="relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"></span>
                    Yes
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    name="voiceSms"
                    id="voiceSmsNo"
                    type="radio"
                    class="mt-radio mt-radio-light-blue-500 hidden overflow-hidden"
                    onClick={() => {
                      setInput({ ...input, voiceSms: "No" });
                    }}
                  />
                  <label
                    htmlFor="voiceSmsNo"
                    class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
                  >
                    <span class="relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"></span>
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 pr-6 mb-10 font-light">
              <Input
                type="number"
                color="purple"
                placeholder="Patta No."
                value={input.patta}
                onChange={(e) => setInput({ ...input, patta: e.target.value })}
              />
            </div>{" "}
            <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
              <Input
                type="number"
                color="purple"
                placeholder="Latitude"
                value={input.lat}
                onChange={(e) => setInput({ ...input, lat: e.target.value })}
              />
            </div>{" "}
            <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
              <Input
                type="number"
                color="purple"
                placeholder="Longitude"
                value={input.long}
                onChange={(e) => setInput({ ...input, long: e.target.value })}
              />
            </div>
          </div>
          <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
            Land and Crop Details
          </h6>
          <div className="flex flex-wrap mt-10">
            <label htmlFor="divCreditAvailed" className="mx-4">
              Select if Applicable:
            </label>
            <div className="mx-4">
              {" "}
              <Checkbox
                color="lightBlue"
                text="Tankfed"
                id="checkbox"
                className="mx-4"
                onChange={()=>{
                if(landDetails.tankfed==false)
                {
                  setLandDetails({...landDetails,tankfed:true})
                }
                else
                {
                  setLandDetails({...landDetails,tankfed:false})
                }
                }}
              />
           
            </div>
            <div className="mx-4">
              <Checkbox 
              color="lightBlue" 
              text="Rainfed" 
              id="checkbox1" 
              onChange={()=>{
                if(landDetails.rainfed==false)
                {
                  setLandDetails({...landDetails,rainfed:true})
                }
                else
                {
                  setLandDetails({...landDetails,rainfed:false})
                }
                }}
              />
            </div>
            <div className="mx-4">
              <Checkbox color="lightBlue" text="Bore Well" id="checkbox2" 
                  onChange={()=>{
                if(landDetails.borewell==false)
                {
                  setLandDetails({...landDetails,borewell:true})
                }
                else
                {
                  setLandDetails({...landDetails,borewell:false})
                }
                }}
              />
            </div>
            <div className="mx-4">
              <Checkbox
                color="lightBlue"
                text="Drip / Open Well/ Canal irrigation"
                id="checkbox3"
                onChange={()=>{
                if(landDetails.drip==false)
                {
                  setLandDetails({...landDetails,drip:true})
                }
                else
                {
                  setLandDetails({...landDetails,drip:false})
                }
                }}
              />
            </div>
          </div>
       {/* <ShowFarmerCropDetails isChecked={landDetails.tankfed} type='tankfed' id='0' />
       <ShowFarmerCropDetails isChecked={landDetails.rainfed} type='rainfed' id='1'/>
       <ShowFarmerCropDetails isChecked={landDetails.borewell} type='borewell' id='2'/>
       <ShowFarmerCropDetails isChecked={landDetails.drip} type='drip' id='3'/> */}
       <FarmerCropDetails isChecked={landDetails.tankfed} type='tankfed' id='0' landEntries={tankfeddetails} onLandDetails={setTankfeddetails} />
       <FarmerCropDetails isChecked={landDetails.rainfed} type='rainfed' id='1' landEntries={rainfeddetails} onLandDetails={setRainfeddetails}/>
       <FarmerCropDetails isChecked={landDetails.borewell} type='borewell' id='2' landEntries={borewelldetails} onLandDetails={setborewelldetails}/>
       <FarmerCropDetails isChecked={landDetails.drip} type='drip' id='3' landEntries={dripdetails} onLandDetails={setDripdetails}/>

          <h6 className="text-purple-500 text-sm mt-6  font-light uppercase">
            Climate induced Risks in Farming?
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-6/12  pr-4  mb-10 font-light">
              <Textarea
                color="lightBlue"
                size="regular"
                outline={true}
                placeholder="Write Note On Climate Induced Risks in Farming"
                value={input.climateNote}
                onChange={(e) =>
                  setInput({ ...input, climateNote: e.target.value })
                }
              />
            </div>
          </div>
          {/* <div className="flex mt-10 items-center">
                    <div className="bg-red w-full lg:w-4/12 pr-4 mb-10 mx-auto font-light">
                    <Button 
                    type='submit'
                     color="lightBlue"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={e=>handleFarmerRegistration(e)}
            value='Add Farmer Information'
                    >
                        Add Farmer Information
                    </Button></div>
                    
                    </div> */}
        </CardBody>
      </Card>
    </form>
    </>
  );
}