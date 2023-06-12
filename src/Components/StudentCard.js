export default function StudentCard({data, setData}){
    return (
        <div>
            {data.map((stud, index)=>(
                <div key={index}>
                   <h1>{stud.name}</h1>
                   <h3>{stud.age}</h3>
                </div>
            ))}
        </div>
    )

}