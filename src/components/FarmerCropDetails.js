
import Input from '@material-tailwind/react/Input';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Label from "@material-tailwind/react/Label";

import { useState,useEffect } from 'react';


export default function FarmerCropDetails(props)
{

    const landEntries=props.landEntries;
    const handleLandEntries=props.onLandDetails;


    const visibility=props.isChecked;
    console.log("Visibile->"+visibility);
    // console.log(landEntries);
    // handleLandEntries({...landEntries,type:"rain"});

    const type=props.type;

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
    },[]);

    const soilType=["Select Soil Type","Laterite","Red","Loamy","Black Cotton"];
    const landOwner=["Land Ownership","Own","Leased In","Leased Out"];
    const cutlivationPractice=["Cultivation Practice","Organic","In Organic","Both"];
    const landPosition=["Land Position","Upper","Lower","Hill"];
    const landType=["Land Type","Sloppy","Steep","Plain","Sloppy","Flatter","Plains","Rockier uplands"];
    const liveStock=["Select Livestock",'Cow','Goat','Sheep','Hen/Chicken'];

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
        {soilType.map((k,v)=>(
            
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

        </div>
    )
}