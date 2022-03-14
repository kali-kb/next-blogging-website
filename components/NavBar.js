// import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

function Nav(){
	// const { data: session } = useSession()

	return (
		<div className="shadow-sm flex p-6 justify-between">
			<div className="space-x-6 flex">
				<Link href="/"><h1 className="font-bold">DailyDevDigest</h1></Link>
				<Link href='/blog/blogs'><a>Blogs</a></Link>
			</div>
			<div className="bg-green-700 text-white px-2 py-1">
				<Link className="" href="/blog/create"><a>Create Blog</a></Link>	
			</div>
			
		</div>
	)
}

export default Nav