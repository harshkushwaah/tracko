import { Column, Id, Row } from "../types";
import NameCard from "./cards/NameCard";
import FeedBackCard from "./cards/FeedBackCard";
import RatingCard from "./cards/RatingCard";
import StatusCard from "./cards/StatusCard";
import DeleteCard from "./cards/DeleteCard";

interface Props {
  column: Column;
  rows: Row[];
  deleteRow: (id:Id) => void ,
  updateRow: (id: Id, content: string) => void;
  updateFeedback: (id: Id, content: string) => void;
  updateStatus: (id: Id, content: string) => void;
  updateRating: (id: Id, rating: number) => void;
}

function ColumnContainers(props: Props) {
  const {
    column,
    rows,
    deleteRow,
    updateRow,
    updateFeedback,
    updateStatus,
    updateRating,
  } = props;

  return (
    <>
      <div
        className="
            bg-columnBackgroundColor
            w-full
            h-[780px]
            max-h-[800px]
            rounded-md
            flex
            overflow-x-hidden overflow-y-auto
            mr-1
        "
      >
        {/* --------------------- NAME CARD --------------------------- */}

        <div className="flex flex-col w-3/12">
          <div
            className="
            bg-mainBackgroundColor
            text-md
            h-[60px]
            rounded-md
            rounded-b-none
            p-3
            font-bold
            border-columnBackgroundColor
            border-4

        "
          >
            {column.name}
          </div>
          <div
            className="flex flex-grow flex-col gap-4 p-2
       "
          >
            {rows.map((row) => (
              <div key={row.id}>
                <NameCard key={row.id} row={row} updaterow={updateRow} />
              </div>
            ))}
          </div>
        </div>

        {/* --------------------- STATUS CARD --------------------------- */}

        <div className="flex flex-col w-3/12">
          <div
            className="
            bg-mainBackgroundColor
            text-md
            h-[60px]
            rounded-md
            rounded-b-none
            p-3
            font-bold
            border-columnBackgroundColor
            border-4

        "
          >
            {column.status}
          </div>
          <div
            className="flex flex-grow flex-col gap-4 p-2
       "
          >
            {rows.map((row) => (
              <div key={row.id}>
                <StatusCard
                  key={row.id}
                  row={row}
                  updatestatus={updateStatus}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------- FEEDBACK CARD -------------------------------------- */}

        <div className="flex flex-col w-3/12">
          <div
            className="
            bg-mainBackgroundColor
            text-md
            h-[60px]
            rounded-md
            rounded-b-none
            p-3
            font-bold
            border-columnBackgroundColor
            border-4

        "
          >
            {column.feedback}
          </div>
          <div
            className="flex flex-grow flex-col gap-4 p-2
       "
          >
            {rows.map((row) => (
              <div key={row.id}>
                <FeedBackCard
                  key={row.id}
                  row={row}
                  updatefeedback={updateFeedback}
                />
              </div>
            ))}
          </div>
        </div>

        {/* --------------------------------------------- RATING CARD -------------------------------------- */}

        <div className="flex flex-col w-2/12">
          <div
            className="
        bg-mainBackgroundColor
        text-md
        h-[60px]
        rounded-md
        rounded-b-none
        p-3
        font-bold
        border-columnBackgroundColor
        border-4

    "
          >
            {column.rating}
          </div>
          <div
            className="flex flex-grow flex-col gap-4 p-2
   "
          >
            {rows.map((row) => (
              <div key={row.id}>
                <RatingCard
                  key={row.id}
                  row={row}
                  updaterating={updateRating}
                />
              </div>
            ))}
          </div>
        </div>

        {/* --------------------------------------------- DELETE CARD -------------------------------------- */}


        <div className="flex flex-col w-1/12">
          <div
            className="
        bg-mainBackgroundColor
        text-md
        h-[60px]
        rounded-md
        rounded-b-none
        p-3
        font-bold
        border-columnBackgroundColor
        border-4"
          >
            Delete
          </div>
          <div className="flex flex-grow flex-col gap-4 p-2">
            {rows.map((row) => (
              <div key={row.id} onClick={()=>{deleteRow(row.id)}}>
                <DeleteCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ColumnContainers;
