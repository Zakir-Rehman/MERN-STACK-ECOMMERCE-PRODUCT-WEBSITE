import React from 'react'

function FotterCard() {
    return (
        <div className="main footer-cards flex justify-evenly translate-y-[80px] px-5 gap-5 max-lg:flex-col">
            <div className="card w-[30%] rounded-5 max-lg:w-[100%]">
                <div className="card-body flex flex-col gap-[10px]">
                    <h1 className="card-title text-center fs-2 ">Join with us</h1>
                    <form action="/" className='flex flex-col gap-[15px]'>
                        <button className='btn bg-[#2563EB] hover:bg-[#0B5ED7] text-white font-semibold'>Login</button>
                        <button className='btn bg-[#2563EB] hover:bg-[#0B5ED7] text-white font-semibold'>Sign Up</button>
                    </form>
                </div>
            </div>
            <div class="card rounded-5 w-[40%] px-2 flex gap-3 justify-center max-lg:w-[100%]">
                <h1 className='card-title text-center fs-2 '>Subscribe</h1>
                <form action="/" className='flex items-center relative max-lg:pb-[3rem]' >
                    <input name='emailOfSubs' className='w-[100%]  h-[70px]  rounded-[50px] form-control' type="text" placeholder='Enter email address' />
                    <button className='text-light rounded-[50px] absolute right-1 h-[60px] font-semibold w-[8rem] btn bg-[#2563EB] hover:bg-[#0B5ED7]'>Subscribe</button>
                </form>
            </div>
            <div class="card rounded-5 w-[30%] flex items-center relative justify-center gap-2 max-lg:w-[100%]" >
               <h1 className='card-title text-center fs-2 leading-none py-2'>Feedback</h1>
               <form action="/" className='w-[100%] relative flex flex-col px-2 items-center'>
                <textarea name="textarea" id="" className=' resize-none form-control w-[100%]'  rows='4'>
                    Thanks for visit ....
                </textarea>
                <button className=" bg-[#2563EB] font-semibold translate-y-[-20px] max-lg:translate-y-[0px] p-[1em] max-lg:w-[100%] max-lg:mb-[2rem]  rounded-[50px] text-light">Submit</button>
               </form>
            </div>
        </div>
    )
}

export default FotterCard
