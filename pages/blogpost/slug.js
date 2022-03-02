import React from 'react'
import { useRouter } from 'next/router'
const slug = () => {
  useEffect(() => {
    const {slug}=router.query
    fetch(`http://localhost:3000/api/getblog/slug=${slug}`).then((a)=>{
      return a.json();})
      .then((data)=>{
        

      
      console.log(parsed);
      setblogs(parsed)
    
    })
  
    
  }, [])
  
    const router=useRouter();
    const {slug}=router.query
    // console.log(slug);
  return (
      
    <div>
      <h1>
        Title of the page {slug}
      </h1>
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In atque fuga eos nihil harum fugiat. Qui, atque ipsa quaerat sed aperiam cum magnam.
        <hr />
      </div>
    </div>
  )
}

export default slug