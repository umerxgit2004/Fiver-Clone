import { useState } from "react"
import "./gigs.scss"
import {gigs} from "../../data.js"
import GigCard from "../../components/gigCards/GigCard"

const Gigs = () => {
  const [sort,setSort] = useState("sales")
  const [open,setOpen] = useState(false)

  const reSort = (type) =>{
    setSort(type)
    setOpen(false)
  }
  return (
    <div className='gigs'>
      <div className="container">
        <div className="breadcrumbs">
          <span>FIVERR: GRAPHICS & DESIGN</span>
          <h1>AI Artists</h1>
          <p>
            Explore the boundaries of art and tecgnology with Fiverr's AI Artists
          </p>
          <div className="menu">
            <div className="left">
              <span>Budged</span>
              <input type="text " placeholder='min' />
              <input type="text " placeholder='max' />
              <button>Apply </button>
            </div>
            <div className="right">
              <span className='sortBy'>SortBy</span>
              <span className='sortType'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
              <img src="./img/down.png" alt="" 
              onClick={() =>setOpen(!open)}/>
            {open && <div className="rightMenu">
        {   sort ==="sales"   ?  <span onClick = {() =>reSort("CreatedAt")}>Newest</span>
              :  <span onClick = {() =>reSort("sales")}>Best Selling</span>}
              </div>} 
            </div>
          </div>
        </div>
        <div className="cards">
          {gigs.map(gig =>(
            <GigCard key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Gigs
