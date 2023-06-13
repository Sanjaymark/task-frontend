function StudentCard({student, studentData, setData})
{   
    const removeStudent = (id)=>
    {
        const newStudentData = studentData.filter((stud)=>stud.id !== id);
        setData(newStudentData)
    }
    

    return (
        <div>
            <div className="card w-96 bg-base-100 bg-info shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{student.name}</h2>
                    <p>Batch : {student.batch}</p>
                    <p>Email : {student.email}</p>
                    <p>Phone : {student.phone}</p>
                    <p>EDU   : {student.qualification}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>removeStudent(student.id)} className="btn btn-danger bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default StudentCard;
