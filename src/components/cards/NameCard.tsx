import { useState } from "react";
import { Id, Row } from "../../types"

interface Props {
    row : Row;
    updaterow : (id:Id, content:string) => void;
}
function NameCard(props: Props) {
    const {row, updaterow} = props
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
      <textarea className="h-90% w-full resize-none border-none 
      rounded bg-transparent text-white focus:outline-none"
      autoFocus
      placeholder="Enter Name"
      onBlur={toggleEditMode} 
      onChange={(e)=> updaterow(row.id,e.target.value)}
      ></textarea>
    </div>
            </>
        );
    }
  return (
    <div  onClick={toggleEditMode}
    className="bg-mainBackgroundColor 
        p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl cursor-pointer
    ">
      {row.name}
    </div>
  )
}

export default NameCard
