import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
export default  async function Home() {
  const url = await fetch(`https://jsonplaceholder.typicode.com/todos`,  { method: "GET" })
  const response = await url.json()
  console.log(response)
  return (
    <main>
      {response.map((todo:any)=>(
        <div className="flex flex-col items-center justify-center"> 
          <Link href={`${todo.userId}`} >
          <h1 className="text-2xl  ">
            {todo.id} &nbsp; &nbsp; {todo.title}
          </h1>
          

          
          </Link>
        </div>
      ))}
    </main>
  );
}
