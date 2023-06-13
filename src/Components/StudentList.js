import Base from "../BasePage/Base"
import StudentCard from "./StudentCard"

function StudentList({studentData, setData})
{
    return(
        <Base>
            {
                studentData.map((stud, idx)=>(
                    <StudentCard
                    student={stud}
                    studentData={studentData}
                    setData={setData}
                    key={stud.id}
                    />
                ))
            }
        </Base>
    )
}

export default StudentList;