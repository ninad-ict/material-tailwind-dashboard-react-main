import StatusCard from 'components/StatusCard';
import FarmerRegisterForm from 'components/FarmerRegisterForm';
import { useEffect } from 'react';

export default function FarmRegister(props) {

console.log("FARMM");
console.log(props);

if(props.history.location.state)
{
    console.log("Present");
}
else
{
    console.log("Not present");
}
    

useEffect(()=>{

    console.log("Farm Register page"+JSON.stringify(props.history.location.state));
},[]);

    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto ">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 hidden">
                        <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Traffic"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="New Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last week"
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="Sales"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="blue"
                            icon="poll"
                            title="Performance"
                            amount="49,65%"
                            percentage="12"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 px-4 mb-16">
                    {
                        (props.history.location.state) ? <FarmerRegisterForm editInput={props}/> : <FarmerRegisterForm/>
                    }

                    {/* <FarmerRegisterForm/> */}
                        
                    </div>
                </div>
            </div>
        </>
    );
}
