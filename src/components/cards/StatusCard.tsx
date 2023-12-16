import { useState } from "react";
import { Id, Row } from "../../types"
import DropIcon from "../../icons/DropIcon";

interface Props {
    row : Row;
    updatestatus : (id:Id, content:string) => void;
}
function TaskCard(props: Props) {
    const {row, updatestatus} = props
    const [editMode, setEditMode] = useState(false);
    const toggleEditMode = ()=>{
        setEditMode((prev)=> !prev)
    }
    if(editMode){
        return(
            <>
                <div
    className="bg-mainBackgroundColor 
        p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl cursor-pointer hover:ring-1 hover:ring-inset hover:ring-rose-400
     ">
       <div className=" flex-1 bg-columnBackgroundColor p-2.5 px-4 rounded-full hover:ring-1 hover:ring-inset hover:ring-rose-400
        " onClick={()=>{toggleEditMode();updatestatus(row.id, "Pending")}} >
      Pending
     
        </div>
 <div className=" flex-1 bg-columnBackgroundColor p-2.5 px-4 rounded-full hover:ring-1 hover:ring-inset hover:ring-rose-400
        " onClick={()=>{toggleEditMode();updatestatus(row.id, "Completed")}}>
      Completed
     
        </div>
    </div>
    
            </>
        );
    }
  return (
    <div  onClick={toggleEditMode}
    className="bg-mainBackgroundColor 
        p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl cursor-pointer
    ">
        <div className=" flex-1 bg-columnBackgroundColor p-2.5 px-4 rounded-full
        ">
      {row.status}
     
        </div>
        <div>
            <DropIcon/>
        </div>
        
    </div>
  )
}

export default TaskCard
