import { useRouter } from "next/router"
import { useState } from "react"
import styles from "./SearchBar.module.css";

export default function SearchBar() {
const router = useRouter()
const [min, setMin] = useState("")
const [max, setMax] = useState("")
    function searchHandler() {
        if (min && max) {
        router.push(`/filter/${min}/${max}`)
        } else {
            alert("Please Enter minimum and maximum price!");
    }
    
}

  return (
    <div  className={styles.container}>
          <div>
              
          <input
              value={min}
              onChange={(e)=> setMin(e.target.value)}
              placeholder="Inter min price" />
          
          <input
              value={max}
              onChange={e=>setMax(e.target.value)}
              placeholder="Inter max-price"
          />
        </div>
        <button onClick={searchHandler}>Search</button>
    </div>
  )
}
