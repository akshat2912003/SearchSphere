import React from 'react'

const Alagram = ({type, title, number, blocks, solution}) => {
    return <div className=' w-[70%] mx-auto mt-[30px]   flex flex-col items-center border-[1px] border-gary-700 gap-[15px] ' >
      <div className=' w-[100px] uppercase text-lg font-medium ' >
          {type}
      </div>
      <div className=' w-[85%] mx-auto text-center text-[15px] ' >
          Que {number+1}. - {title}
      </div>
      <div className=' grid grid-cols-2 gap-4 w-[65%] mx-auto ' >
          {
              blocks.map((value, index) => {
                  return <div key={index} className={` text-center p-4 rounded-lg text-lg font-medium bg-gray-200 `} >
                      {value.text}
                  </div>
              })
          }
      </div>
      <div className=' w-[85%] mx-auto text-center text-[15px] mb-[20px]' >
        solution:- {solution}
      </div>
    </div>
  }

export default Alagram