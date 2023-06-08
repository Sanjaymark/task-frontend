import {useState} from "react"

export function StateFulCom()
{
    const [name, setName] = useState("")
    return(
        <>
        <div>{name}</div>
        <button
        onClick={()=>setName("Ajay")}>Click Me</button>
        </>
    )
}

export function StatelessComp({name})
{
    return(
        <div>{name}</div>
    )
}