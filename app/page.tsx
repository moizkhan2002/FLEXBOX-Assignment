export default function Home(){
return(
  <div>
    <header>
    <nav className="flex justify-center bg-purple-950 h-45 w-full place-items-center">
    <div className="flex justify-center h-10"></div>

      <div className="flex justify-center bg-yellow-300 h-10 w-40"></div>
      <div className="flex justify-center bg-sky-300 h-10 w-40">Header</div>
      <div className="flex justify-center bg-green-300 h-10 w-40"></div>
      </nav>

    <nav className="flex justify-center mt-2 h-96 bg-sky-950 gap-3">

    <div className="flex bg-yellow-200 h-60 w-80 mt-16"></div>
    <div className="flex bg-fuchsia-400 h-60 w-80 mt-16"></div>
    <div className="flex bg-red-300 h-60 w-80 mt-16"></div>
      </nav>

      <nav className="flex justify-center h-96 bg-sky-950 gap-3">

      <div className="flex bg-white h-60 w-96 mt-16"></div>
      <div className="flex bg-emerald-200 h-60 w-96 mt-16"></div>
      </nav>

      <nav className="flex justify-center bg-teal-400 h-30 w-full place-items-center:">

      <div className="flex justify-center items-center h-8"></div>
      
      <div className="flex justify-center bg-yellow-600 h-10 w-40"></div>
      <div className="flex justify-center font-extrabold bg-red-600 h-10 w-70">Footer Maded MoizKhan @2024 </div>
      <div className="flex justify-center bg-green-600 h-10 w-40"></div>
      </nav>

    </header>
  </div>
)
}