import { useEffect, useState } from 'react'
import axios from 'axios'


// const [Data, setData] = useState('usman');
const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
async  function getData() {
    const response= await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
    setUserData(response.data)
    // console.log(response.data)
  }
  useEffect(() => {
    getData()

  },[page])
  let printuserData = userData.map(
    function(elem,index){
      return <div className=' h-50 w-50 p-1.5 justify-center  rounded'>
        <img className='h-40 w-50 rounded' src={elem.download_url} alt="" />
        <div>
     <h4 className='text-base font-bold'>{elem.author}</h4>
        </div>
    
      </div>
    }
  )

  return (
    <div className='bg-black  text-amber-50 w-full h-screen overflow-auto ' >
      <h2>{}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
  {printuserData}
</div>

  <button 
   className='bg-gray-600 px-6 py-1 rounded'
   onClick={()=>{
    if(page > 1)
    setPage(page-1)
   }}
   > prev </button>
   <span className='mx-10'>Page {page}</span>
   <button 
   className='bg-gray-600 px-6 py-1 rounded'
   onClick={()=>{
    setPage(page+1)
   }}
   > next </button>
</div>
  
  )
}

export default App
