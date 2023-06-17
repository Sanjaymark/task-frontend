import Base from "../BasePage/Base"
import CrumBar from "./CrumBar"
import ProfileCard from "./ProfileCard"

function ProfileList({studentData, setData, crumState, setCrumState})
{
    return (
        <Base>
        <CrumBar 
         crumState ={crumState}
         setCrumState ={setCrumState}
        />
            {studentData.map((stud, idx)=>(
                <ProfileCard
                student={stud}
                studentData ={studentData}
                setData={setData}
                key={stud.id}
                crumState ={crumState}
                setCrumState ={setCrumState}
                />
            ))}
        </Base>
    )
}

export default ProfileList