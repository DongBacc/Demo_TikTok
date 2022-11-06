import { memo } from "react";

function Memo({onIncrease}){
    console.log('memo')
   return(
    <div>
        <h1>Chào mọi người đến với buổi thuyết trình của nhóm 1 </h1>
        <button
                onClick={onIncrease}
            >
            Click
            </button>
    </div>
   )
}

export default memo(Memo)