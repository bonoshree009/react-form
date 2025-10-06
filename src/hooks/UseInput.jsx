import { useState } from "react"

const useInput =(defaultValue)=>{
    const [inputvalue,setinputvalue] = useState(defaultValue)
    const handleInput = (e) =>{
        setinputvalue(e.target.value)

    }
    return [inputvalue, handleInput]

}
export default useInput