import React from 'react'
import { useState, useEffect } from 'react'
import Product from '../Components/Product'
import Spinner from '../Components/Spinner'





function Home() {
   const API_KEY = 'https://fakestoreapi.com/products'
   const [loading, setLoading] = useState(false)
   const [posts, setProducts] = useState([])
   
   
   
   async function fetchProductData() {
        setLoading(true)
         try {
            const response = await fetch(API_KEY)
            const data = await response.json()
            setProducts(data)
         }
         catch (error){
            console.error("Error fetching data:", error)
            alert("Error fetching data")
            setProducts([])
         }
         setLoading(false)
     }

    useEffect(() => {
        fetchProductData()
    }
    , [])
  return (
    <>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className='flex flex-wrap justify-center items-center max-w-[1080px] mx-auto gap-6 mt-2 '>
          {posts.map((post) => (
           <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <p>No post found</p>
        </div>
      )}
    </>
  )
}

export default Home