import { useState } from 'react'
import { movies } from './data'

function Movies() {
  const [movieList, setmovieList] = useState(movies)
 const filterbtcat=(cat) =>{
  setmovieList(movies.filter(data=>data.category == cat))
 }


  return (
    
    <>
    <div className="my-3 btn_btn  " style={{width:'1000px' , margin:'auto', display:'flex', justifyContent:'space-between' }}>
    <button onClick={()=>setmovieList(movies)} type="button" className="btn btn-outline-primary mx-3">All</button>
<button onClick={()=>filterbtcat("Action")} type="button" className="btn btn-outline-primary mx-3">Action</button>
<button onClick={()=>filterbtcat("Thriller")} type="button" className="btn btn-outline-success mx-3">Thriller</button>
<button onClick={()=>filterbtcat("Animation")} type="button" className="btn btn-outline-info mx-3">Animation</button>
<button onClick={()=>filterbtcat("Horror")} type="button" className="btn btn-outline-warning mx-3">Horror</button>
<button onClick={()=>filterbtcat("Drama")} type="button" className="btn btn-outline-info mx-3">Drama</button>
<button onClick={()=>filterbtcat("Sci-Fi")} type="button" className="btn btn-outline-light mx-3">Sci-Fi</button>
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      textAlign: 'center',
      width: '1300px',
      margin: 'auto',
      // gap:'2rem'
       marginTop: '1.5rem'

    }}>
      {movieList.map((data) =>
        
        
        <div key={data.id} style={{ maxWidth: '280px' }}>

        <div style={{ padding: '10px' }} className='Hover_effect'>
          <img src={data.poster_path} alt="" style=
          {{ width: '200px', 
          height: '280px', 
          borderRadius: '10px', 
          border: '1px solid yellow',
           }} />
        </div>
        <h5>{data.title}</h5>
        <p>{data.release_date}</p>
      </div>)}
    </div>
    </>
  )
}


export default Movies
