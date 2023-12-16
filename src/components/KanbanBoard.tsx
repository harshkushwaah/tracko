import { useState } from "react";
import ColumnContainers from "./ColumnContainers";
import { Id, Row } from "../types";
import PlusIcon from "../icons/PlusIcon";

function KanbanBoard() {
    const column = {
         id: 1001, name: "Name", status:'Interview Status',feedback:"Interview Feedback",rating:"Rating"
    }
    
  const [rows, setRows] = useState<Row[]>([]);
console.log(rows)

  console.log(rows)
  return (<>
    <h1 className="w-full h-[100px] text-4xl flex justify-center
        items-center">Tracko - Interview Tracker</h1>
    <div className="
        m-auto
        flex
        h-full
        w-full
        items-center
        overflow-x-auto
        overflow-y-hidden
        px-[40px]">
          
      <ColumnContainers
        column={column}
        rows={rows.filter((row) => row.columnId === 1001)}
        updateRow={updaterow}
        deleteRow={deleteRow}
        updateFeedback={updateFeedback}
        updateStatus={updatestatus}
        updateRating={updaterating}
      />
    </div>
    <button
        className="
            flex w-full
            items-center 
            justify-center
            border-columnBackgroundColor border-2 rounded-md p-4
            border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:ring-1 hover:ring-inset hover:ring-rose-400 hover:text-rose-300
            active:bg-black"
        onClick={() => {
          createRow(column.id);
        }}
      >
        <PlusIcon />
        Add Row
      </button>
      <footer className="flex justify-center mt-1">made with love by <a target="_blank" href="https://www.linkedin.com/in/harshkushwaah"> @harshkushwaah</a></footer>
    </>
  );

// ------------------------------------------------------------------------------


  function createRow(columnId: Id) {
    const newRow: Row = {
      id: generateId(),
      columnId,
      name: `Click To Edit`,
      feedback: `Click To Edit`,
      status : `Pending`,
      rating : 0
    };
    setRows([...rows, newRow]);
  }
  function deleteRow(id : Id){
    const newRows = rows.filter((task)=>task.id !== id)
    setRows(newRows)
  }
  function generateId() {
    return Math.floor(Math.random() * 10001);
  }

// ------------------------------------- UPDATE FUNCTIONS -----------------------------------------


  function updaterow(id: Id, name: string) {
    const newRow = rows.map((task) => {
      if (task.id !== id) return task;
      return { ...task, name };
    });
    setRows(newRow);
  }
  function updateFeedback(id: Id, feedback: string) {
    const newRow = rows.map((task) => {
      if (task.id !== id) return task;
      return { ...task, feedback };
    });
    setRows(newRow);
  }
  function updatestatus(id: Id, status: string) {
    const newRow = rows.map((task) => {
      if (task.id !== id) return task;
      return { ...task, status };
    });
    setRows(newRow);
  }
  function updaterating(id: Id, rating: number) {
    const newRow = rows.map((task) => {
      if (task.id !== id) return task;
      return { ...task, rating };
    });
    setRows(newRow);
  }
  
}

export default KanbanBoard;
