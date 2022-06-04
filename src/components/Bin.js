import {useState } from "react";
import PostItItem from "./Post-It/PostItItem";
import { MdDeleteForever } from 'react-icons/md';

const Bin = ({ id, text}) => {

  const[postitBin, setBin] = useState([{
        idBin: id,
        textBin: text,
        dateBin: new Date(),
  }]);

  const handleRestore = (idBin) => {
    setBin(postitBin.filter((item)=> item.idBin !== idBin));
  }

  const binState = () => {
    let state = true;
    if(postitBin > 0) {
      state = false;
    }
    return state;
  }

  const completeDelete = (id) => {
      const newBin = [...postitBin];
      const index = postitBin.findIndex((item)=> item.id === id);
      newBin.splice(index, 1);
      setBin(newBin);
  }

  return (
      <div className="bin">
        
        <div className='postit'>
          {postitBin.map((postit) =>(
            <PostItItem
              key = {postit.id}
              text={postit.textBin} 
              date={postit.dateBin}
              handleBinState={binState}
              handleCompleteDelete={completeDelete}
            >
              <small>{postitBin.dateBin}</small>
              <MdDeleteForever className="delete-icon" size='1.3em'/>
              <button 
                className="restore-icon" 
                onClick={handleRestore}
              >
                Restore
              </button>
            </PostItItem>
          ))}
          </div>
      </div>
  )
}

export default Bin;