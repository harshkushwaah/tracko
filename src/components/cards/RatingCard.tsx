import { useState } from "react";
import { Id, Row } from "../../types"
import StarIcon from "../../icons/StarIcon";

interface Props {
    row : Row;
    updaterating : (id:Id, rating:number) => void;
}
function RatingCard(props: Props) {
  const { row, updaterating } = props;
  const [editMode, setEditMode] = useState(false);
  const [rating, setRating] = useState(0);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const handleStarClick = (starNumber: number) => {
    setRating(starNumber);
    updaterating(row.id, starNumber);
  };

  if (editMode) {
    return (
      <>
      
        <div className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl cursor-pointer hover:ring-1 hover:ring-inset hover:ring-rose-400">
          {[1, 2, 3, 4, 5].map((starNumber) => (
            <div key={starNumber} onClick={() => handleStarClick(starNumber)}>
              <StarIcon active={starNumber <= rating} />
            </div>
          ))}
        </div>
    
      </>
    );
  }
    
  return (
    <div
    onClick={toggleEditMode}
    className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] w-full items-center flex text-left rounded-xl cursor-pointer"
  >
    {[1, 2, 3, 4, 5].map((starNumber) => (
      <div key={starNumber} onClick={() => handleStarClick(starNumber)}>
        <StarIcon active={starNumber <= rating} />
      </div>
    ))}
  </div>
  )
}

export default RatingCard
