import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import StudentCard from "../Components/StudentCard";

export default function Dashboard({data, setData})
{
    const [state, setState] = useState(false)
    const [another, setAnother]= useState(false)
    function checkState(){
        setState(!state)
        console.log("updation happened")
    }

    function checkAnother(){
        setAnother(!another)
        console.log("updation another happened")
    }

    useEffect(()=>{
        console.log("I'm mounted")
        // data fetch
        // 15ms
    }, [another])

    return (
        <Base>
            <StudentCard
            data={data}
            setData={setData}
            />
        </Base>
    )
}