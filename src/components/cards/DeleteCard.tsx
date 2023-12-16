import TrashIcon from "../../icons/TrashIcon"

function DeleteCard() {
  return (
    
       <div  
    className="bg-mainBackgroundColor justify-center
        p-2.5 h-[100px] min-h-[100px] items-center flex  text-left rounded-xl cursor-pointer
    ">
      <TrashIcon />
    
    </div>
  )
}

export default DeleteCard
