import { useState } from "react";
import React from "react";


function Filter ({handlesearch}) {
    const [value,setValue]=useState("")

return (
    <div>
<input  type="text" onChange={(e)=>setValue(e.target.value)}/>
<button onClick={()=>handlesearch(value)}>search</button>
</div>
)

}





export default Filter