import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LangContext } from './LanguageContext'

export const Userapplication = () => {
  const[data,setdata]=useState('')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
  }
  let handlesubmit=(event)=>{
    event.preventDefault()
  }
  let value=useContext(LangContext)
  console.log(value.lang);
  return (
    
<div className='bg-[#CCDAF6] w-[100%] pt-10 h-[655px]'>


<div className='text-center'>

  <h2 className='text-[30px] font-bold'>Application for certificate to apply for new ration card</h2>
</div>

<form onSubmit={handlesubmit} class=" w-[70%] m-auto ">
  <div class="relative z-0 w-full mb-5 h-fit group ">
      <input onChange={handlechange} type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{value.lang ? <span className=''>നിലവിൽ ഏതെങ്കിലും റേഷൻ കാർഡിന് കീഴിലാണോ? ഉണ്ടെങ്കിൽ അതിനെക്കുറിച്ചുള്ള വിവരങ്ങൾ</span> : <span>Corrently covered under any ration card?if yes information about it</span>}</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input onChange={handlechange} type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{value.lang  ?<span>ഏത് ഓഫീസാണ് അവതരിപ്പിക്കേണ്ടത് എന്നതിനെക്കുറിച്ചുള്ള വിവരങ്ങൾ</span> : <span>Information about which office to present </span>}</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input onChange={handlechange} type="text" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{value.lang  ? <span>പിതാവിൻ്റെ പേര്</span>:<span>  fathers name</span>}</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{value.lang ? <span>നിങ്ങൾ എത്ര വർഷമായി പഞ്ചായത്ത് പരിധിയിൽ സ്ഥിരതാമസമാക്കി?</span> : <span>How many years you have settled in panchayath limits?</span>}</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input onChange={handlechange} type="file" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">copy of election id</label>
  </div>
 
  
 <Link to='/user/userpayment'> <button type="submit" class="text-white m-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button></Link>
</form>
</div>
  )
}
