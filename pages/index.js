import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Blog from '../model/schema'
import moment from 'moment'

//export default cant be used for both function
//not exporting will pass undefined as prop to page
//inorder for page component to serialize incoming data use JSON the parse to regular javascript objects when it arrives
export async function getServerSideProps(){
 
  const blogs = await Blog.find().limit(3)
  const data = JSON.stringify(blogs)

  return { 
    props: { data }
  }
}




function Home({data}){
  const blogs = JSON.parse(data)
  return (
    <>
      <Head>
        <title>dailydevdigest | Home</title>
      </Head>
      <NavBar />
      <div>
        <h1 className="text-6xl text-center my-48 font-bold word-break">Where Developers & Designers share ideas</h1>
      </div>
      
      <div>
        <h1 className="font-semibold text-3xl my-6 mx-12">Recent Blogs</h1>

        <div className="flex mx-12 space-x-4">
          {blogs.map((blog) => {
            return(
              <div key={blog.id} className="w-72 rounded shadow space-y-2">
                <img src={blog.image}></img>
                <div className="mx-5">
                  <p className="font-semibold">{blog.title}</p>
                  <p className="truncate">{blog.content}</p>
                  <p>{moment(blog.publication_date).fromNow()}</p>
                </div>
                
              </div>
            )
          })}
        </div>
      </div>
      <Footer />

    </>
  )
}
export default Home