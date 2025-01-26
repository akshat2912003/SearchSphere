import React from 'react'

const Other = ({type, title, number, solution}) => {
    return <div className=' w-[70%] mx-auto mt-[30px]   flex flex-col items-center border-[1px] border-gary-700 gap-[15px] ' >
      <div className=' w-[100px] uppercase text-lg font-medium ' >
          {type}
      </div>
      <div className=' w-[85%] mx-auto text-center text-[15px] ' >
          Title. - {title}
      </div>
      <div className=' w-[85%] mx-auto text-center text-[15px] mb-[20px]' >
          {solution}
      </div>
    </div>
  }

export default Other