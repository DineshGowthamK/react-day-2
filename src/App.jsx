import React from 'react'
import Card from './components/Card'

function App() {
  let datas = [
    {
    "title":"Project One",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
   },
   {
    "title":"Project Two",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
   },
   {
    "title":"Project Three",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
   },
   {
    "title":"Project Four",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
   },
   {
    "title":"Project Five",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
   },
   {
    "title":"Project Six",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
   }
   ]
  return <>

<div className="container">

  {/* <!-- Page Heading --> */}
  <h1 className="my-4">Page Heading
    <small>Secondary Text</small>
  </h1>

  <div className="row">
    {
    datas.map((e,i)=> {
      return <Card cardData={e} key={i} />
    })
  }
  </div>
</div>
</>
}

export default App