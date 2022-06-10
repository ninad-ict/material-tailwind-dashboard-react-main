
import Input from '@material-tailwind/react/Input';

import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';

import Label from "@material-tailwind/react/Label";
import Button from "@material-tailwind/react/Button";

import { useState,useEffect } from 'react';
import { render } from '@testing-library/react';



export default function FarmerCropDetails(props)
{

    const type=props.type;
    const landEntries=props.landEntries;
    const handleLandEntries=props.onLandDetails;
    const visibility=props.isChecked;

    const cropDetails={ 

        name:'',
        id:'',
        variety:'',
        subVariety:'',
        season:'',
        fertilizer:'',
        biofertilizer:'',
        lastYearYield:'',
        rateSale:'',
        availabilityMachine:'',
        cropInsurance:'',
        type:type
    }

    const [newCrop,setNewCrop]=useState(
        [
            // {name:"Ninad",age:32},
            // {name:"amol",age:34},
            // {name:"rahul",age:40},
        ]
    );

    useEffect(()=>{

        handleLandEntries({...landEntries,cropdetails:newCrop});


    },[newCrop]);


    useEffect (()=>{
        if(!visibility)
        {
            setNewCrop([]);
        }
    },[visibility]);

  
    console.log("Visibile->"+visibility);
    // console.log(landEntries);
    // handleLandEntries({...landEntries,type:"rain"});

    

    // const handleCropDetails=props.onSetLandEntries;
    // const landEntries=props.landEntries;

    let myType="";
    // handleCropDetails({...landEntries,type:"ggg"});

    // useEffect(() => {
    //     console.log(landEntries);
    //   }, [landEntries]);

    if(type=="tankfed")
    {
        myType="TankFed Irrigation";
    }    
    if(type=="rainfed")
    {
        myType="Rainfed Irrigation";
    }   
     if(type=="borewell")
    {
        myType="Borewell Irrigation";
    }  
       if(type=="drip")
    {
        myType="Drip / Open Well / Canal irrigation";
    }

    useEffect(()=>{
console.log(landEntries);
    },[landEntries]);

    useEffect(()=>{
        handleLandEntries({...landEntries,type:type});

        console.log("LETS MAP")
    //     newCrop.map((value,key)=>{

    //         if(value.name.trim()=="Ninad")
    //         {
    //             console.log("Its Ninad!!")
    //             value.name="vivek";
    //         }


    // });

    console.log("The last update is");
    // console.log(newCrop);



    },[]);

    const soilType=["Select Soil Type","Laterite","Red","Loamy","Black Cotton"];
    const landOwner=["Land Ownership","Own","Leased In","Leased Out"];
    const cutlivationPractice=["Cultivation Practice","Organic","In Organic","Both"];
    const landPosition=["Land Position","Upper","Lower","Hill"];
    const landType=["Land Type","Sloppy","Steep","Plain","Sloppy","Flatter","Plains","Rockier uplands"];
    const liveStock=["Select Livestock",'Cow','Goat','Sheep','Hen/Chicken'];

    useEffect(()=>{
        if(newCrop)
        console.log(newCrop);
    },[newCrop]);


    const  CropEntries=(v,k)=>
    {
        console.log("Inside function of cropentries");
        console.log(v);
        console.log(k);
    
    return(
        <div className=" flex flex-wrap w-full lg:w-12/12 pr-6 mb-10 font-light  border rounded p-4 border-light-blue-500">
         <div className="w-full lg:w-12/12 text-align-right float-right">
         <Button
              type="button"
              color="white"
              buttonType="link"
              className="px-4 float-right"
              size="sm"
              style={{ padding: 8 }}
              ripple="light"
              value="deleteCrop"
             onClick={()=>{
                 let arr=[...newCrop];
                 arr.splice(k,1);
                //  arr.pop(k);
                 setNewCrop([...arr]);
             }}
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
</svg></Button>
         </div>
        <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Enter Crop Name"
                                value={newCrop[k].name}
                                key="editor1"
                                onChange={(e)=>{
                                    let arr=newCrop;
                                    arr[k]={...arr[k],name:e.target.value};
                                    setNewCrop([...arr]);
                                }}
                            />
                        </div>    
                             <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Variety"
                                value={newCrop[k].variety}
                                onChange={(e)=>{
                                    let arr=newCrop;
                                    arr[k]={...arr[k],variety:e.target.value};
                                    setNewCrop([...arr]);
                                }}                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Sub Variety"
                                value={newCrop[k].subVariety}
                                onChange={(e)=>{
                                    let arr=newCrop;
                                    arr[k]={...arr[k],subVariety:e.target.value};
                                    setNewCrop([...arr]);
                                }}                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Season"
                                value={newCrop[k].season}
                                onChange={(e)=>{
                                    let arr=newCrop;
                                    arr[k]={...arr[k],season:e.target.value};
                                    setNewCrop([...arr]);
                                }}                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Fertilizer"
                                value={newCrop[k].fertilizer}
                                onChange={(e)=>{
                                    let arr=newCrop;
                                    arr[k]={...arr[k],fertilizer:e.target.value};
                                    setNewCrop([...arr]);
                                }}                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Bio-fertilizer"
                                value={newCrop[k].biofertilizer}
                                onChange={(e)=>{
                                    let arr=newCrop;
                                    arr[k]={...arr[k],biofertilizer:e.target.value};
                                    setNewCrop([...arr]);
                                }}                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Last Year Yield - Kgs"
                                value={newCrop[k].lastYearYield}
                                onChange={(e)=>{
                                    let arr=newCrop;
                                    arr[k]={...arr[k],lastYearYield:e.target.value};
                                    setNewCrop([...arr]);
                                }}                              />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Rate of Sale / Kg."
                                value={newCrop[k].rateSale}
                                onChange={(e)=>{
                                    let arr=newCrop;
                                    arr[k]={...arr[k],rateSale:e.target.value};
                                    setNewCrop([...arr]);
                                }}                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Availability of Machinery"
                                value={newCrop[k].availabilityMachine}
                                onChange={(e)=>{
                                    let arr=newCrop;
                                    arr[k]={...arr[k],availabilityMachine:e.target.value};
                                    setNewCrop([...arr]);
                                }}                              />
                        </div>  
                          <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Crop Insurance"
                                value={newCrop[k].cropInsurance}
                                onChange={(e)=>{
                                    let arr=newCrop;
                                    arr[k]={...arr[k],cropInsurance:e.target.value};
                                    setNewCrop([...arr]);
                                }}                              />
                        </div>   
        </div>
    )
    }

if(!visibility)
return null;
    return (
        <div className="flex flex-wrap mt-10  border rounded p-4">
        <div className="w-full lg:w-12/12 pr-6 mb-10 font-light">
        <Label color="lightBlue">Enter  Details for {myType}</Label>
        </div>
                    <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="number"
                                color="purple"
                                placeholder="Total Acres"
                                defaultValue={landEntries.acres}
                                onChange={(e)=>{handleLandEntries({...landEntries,acres:e.target.value})}}
                            />
                        </div>         
                          <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="number"
                                color="purple"
                                placeholder="Area of cultivation"
                                defaultValue={landEntries.cultivationArea}
                                onChange={(e)=>{handleLandEntries({...landEntries,cultivationArea:e.target.value})}}
                            />
                        </div>           
                          <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                          {/* <Label>Soil Type</Label> */}
                            <Dropdown
            color="gray"
            placement="bottom-start"
            buttonText={landEntries.soiltype}
            buttonType="link"
            size="regular"
            rounded={false}
            block={false}
            ripple="light"
        >
        {
            soilType.map((k,v)=>(
            
            <DropdownItem color="lightBlue" ripple="light" key={v}
             onClick={(e) =>
                handleLandEntries({ ...landEntries, soiltype: e.target.innerText })
                        }
            >
            {k}
            </DropdownItem>     
        ))}
           
        
            </Dropdown>
                        </div> <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Dropdown
            color="gray"
            placement="bottom-start"
            buttonText={landEntries.landOwner}
            buttonType="link"
            size="regular"
            rounded={false}
            block={false}
            ripple="light"
        >
         {landOwner.map((k,v)=>(
            
            <DropdownItem color="lightBlue" ripple="light" key={v}
             onClick={(e) =>
                handleLandEntries({ ...landEntries, landOwner: e.target.innerText })
                        }
            >
            {k}
            </DropdownItem>     
        ))}
            </Dropdown>
                        </div>  
                        <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Dropdown
            color="gray"
            placement="bottom-start"
            buttonText={landEntries.cutlivationPractice}
            buttonType="link"
            size="regular"
            rounded={false}
            block={false}
            ripple="light"
        >
           {cutlivationPractice.map((k,v)=>(
            
            <DropdownItem color="lightBlue" ripple="light" key={v}
             onClick={(e) =>
                handleLandEntries({ ...landEntries, cutlivationPractice: e.target.innerText })
                        }
            >
            {k}
            </DropdownItem>     
        ))}
        
            </Dropdown>
                        </div>   <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Dropdown
            color="gray"
            placement="bottom-start"
            buttonText={landEntries.landPosition}
            buttonType="link"
            size="regular"
            rounded={false}
            block={false}
            ripple="light"
        >
         {landPosition.map((k,v)=>(
            
            <DropdownItem color="lightBlue" ripple="light" key={v}
             onClick={(e) =>
                handleLandEntries({ ...landEntries, landPosition: e.target.innerText })
                        }
            >
            {k}
            </DropdownItem>     
        ))}
                
            </Dropdown>
                        </div>   <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Dropdown
            color="gray"
            placement="bottom-start"
            buttonText={landEntries.landType}
            buttonType="link"
            size="regular"
            rounded={false}
            block={false}
            ripple="light"
        >
           {landType.map((k,v)=>(
            
            <DropdownItem color="lightBlue" ripple="light" key={v}
             onClick={(e) =>
                handleLandEntries({ ...landEntries, landType: e.target.innerText })
                        }
            >
            {k}
            </DropdownItem>     
        ))}
            </Dropdown>
                        </div> 
                        <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Dropdown
            color="gray"
            placement="bottom-start"
            buttonText={landEntries.liveStock}
            buttonType="link"
            size="regular"
            rounded={false}
            block={false}
            ripple="light"
        >
       {liveStock.map((k,v)=>(
            
            <DropdownItem color="lightBlue" ripple="light" key={v}
             onClick={(e) =>
                handleLandEntries({ ...landEntries, liveStock: e.target.innerText })
                        }
            >
            {k}
            </DropdownItem>     
        ))}
         
        
            </Dropdown>
                        </div>  
                        {/* <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Enter Crop Name"
                                defaultValue={landEntries.crop1}
                                onChange={(e)=>{handleLandEntries({...landEntries,crop1:e.target.value})}}
                            />
                        </div>    
                         <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Enter Crop Name"
                                defaultValue={landEntries.crop2}
                                onChange={(e)=>{handleLandEntries({...landEntries,crop2:e.target.value})}}
                            />
                        </div>    
                        <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Enter Crop Name"
                                defaultValue={landEntries.crop3}
                                onChange={(e)=>{handleLandEntries({...landEntries,crop3:e.target.value})}}
                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Variety"
                                defaultValue={landEntries.variety}
                                onChange={(e)=>{handleLandEntries({...landEntries,variety:e.target.value})}}
                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Sub Variety"
                                defaultValue={landEntries.subVariety}
                                onChange={(e)=>{handleLandEntries({...landEntries,subVariety:e.target.value})}}
                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Season"
                                defaultValue={landEntries.season}
                                onChange={(e)=>{handleLandEntries({...landEntries,season:e.target.value})}}
                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Fertilizer"
                                defaultValue={landEntries.fertilizer}
                                onChange={(e)=>{handleLandEntries({...landEntries,fertilizer:e.target.value})}}
                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Bio-fertilizer"
                                defaultValue={landEntries.biofertilizer}
                                onChange={(e)=>{handleLandEntries({...landEntries,biofertilizer:e.target.value})}}
                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Last Year Yield - Kgs"
                                defaultValue={landEntries.lastYearYield}
                                onChange={(e)=>{handleLandEntries({...landEntries,lastYearYield:e.target.value})}}
                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Rate of Sale / Kg."
                                defaultValue={landEntries.rateSale}
                                onChange={(e)=>{handleLandEntries({...landEntries,rateSale:e.target.value})}}
                            />
                        </div>      <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Availability of Machinery"
                                defaultValue={landEntries.availabilityMachine}
                                onChange={(e)=>{handleLandEntries({...landEntries,availabilityMachine:e.target.value})}}
                            />
                        </div>  
                          <div className="w-full lg:w-3/12 pr-6 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Crop Insurance"
                                defaultValue={landEntries.cropInsurance}
                                onChange={(e)=>{handleLandEntries({...landEntries,cropInsurance:e.target.value})}}
                            />
                        </div>    */}


                        <div className="w-full lg:w-12/12 pr-6 mb-10 font-light">
                        <Button
              type="button"
              buttonType="outline"
              className="px-4"
              size="sm"
              ripple="light"
              value="Submit1"
              onClick={()=>setNewCrop([...newCrop,cropDetails])}
            ><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
</svg>Add Crop</Button><span><small className='text-blue-400'>{newCrop.length} New Crops Added</small></span>  
        </div> 

        {newCrop && newCrop.map((v, k) => {
            console.log("Inside Map");
            console.log("Inside Map2");
           return CropEntries (v,k);
        })}


        {/* <CropEntries/> */}
        
       
                        

        </div>

    )
}