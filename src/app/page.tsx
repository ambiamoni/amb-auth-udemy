import UserCard from "@/components/UserCard";

export  async function getData(){
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await response.json();
   return(data);
}
export default async function Home() {
  const users = await getData();
  return <div>    
    <h1 className="text-3xl font-bold text-red-400">Home page</h1> 
      <div className='flex flex-col gap-5'>
               {users.map((user: any)=>(
                 <UserCard key={user.id} user={user} />                      
                ))}
          </div>
  </div>
}

