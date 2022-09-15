import { useState } from "react"
import { Link } from "react-router-dom"
import { FaCocktail } from "react-icons/fa"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

const Meniu = () => {
  setIsOpen(!isOpen)
}

  return (
    <>
      <header className="absolute flex items-center justify-between px-10 pt-3 w-full">
        <div className="flex flex-col items-center border-solid border-white border-4 rounded-xl p-2">
          <div>
            <Link to="/">
              <FaCocktail className="text-8xl text-white" />
            </Link>
          </div>
          <div className="text-2xl text-white">Best Coctails</div>
        </div>

        <nav className={`${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link onClick={Meniu} to="/capsules" className="text-white text-2xl font-bold">
                Capsules
              </Link>
            </li>
            <li>
              <Link onClick={Meniu} to="/coctails" className="text-white text-2xl font-bold">
                Coctails
              </Link>
            </li>
            <li>
              <Link onClick={Meniu} to="/drinks" className="text-white text-2xl font-bold">
                Drinks
              </Link>
            </li>
            <li>
              <Link onClick={Meniu} to="/test" className="text-white text-2xl font-bold">
                Test
              </Link>
            </li>
            <li>
              <Link onClick={Meniu} to="/test2" className="text-white text-2xl font-bold">
                Test2
              </Link>
            </li>
            <li>
              <Link onClick={Meniu} to="/gin" className="text-white text-2xl font-bold">
                Gin
              </Link>
            </li>

          </ul> 
        </nav>

        <div className="lg:hidden">
          <button
            onClick={Meniu}
            className="text-white text-lg uppercase tracking-wider"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  )
}



// import React from "react";
// import { Link } from "react-router-dom";
// import { FaCocktail } from "react-icons/fa";

// export default function Header() {
//     return (
//         <>
//             <header className="text-white absolute flex items-center justify-between px-10 py-5 w-full">
//                 <div>
//                     <Link to="/"><FaCocktail className="text-6xl" /></Link>
//                 </div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/capsules">Capsules</Link>
//                             <Link to="/coctails">Coctails</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </header>

//         </>
//     )
// }