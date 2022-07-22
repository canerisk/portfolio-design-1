import Link from 'next/link'

export default function Footer(){   
    return (
<>
<div className='pt-8 flex  lg:gap-3 md:gap-3 sm:gap-3 gap-7 lg:justify-start  md:justify-start sm:justify-start justify-center flex-wrap'>
              <Link href='https://rabelcode.net'>
                <a>
                <div className=' hover:ring-2 ring-offset-4 hover:shadow-xl hoverbgborder rounded-lg'>
                <div style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #F3F4F6) ,url(https://cdn.discordapp.com/attachments/811951570857230376/999317085337427999/unknown.png)', backgroundPosition: 'center' }} className='w-72  hoverbg rounded-t-xl h-36 bg-red-500'></div>
                <div className='  bg-gray-100 flex items-center h-20 rounded-b-xl w-auto'>
                  <div className='px-5'>
                  <h1 className='font-extrabold text-xl'>RabeL Code</h1>
                  <h4 className='text-sm'>Turkey's best code sharing site</h4>
                  </div>
                </div> 
              </div>
                </a>
              </Link>
              <Link href='https://github.com/raqzid/raqzid-about-site'>
                <a>
                <div className=' hover:ring-2 ring-offset-4 hover:shadow-xl hoverbgborder rounded-lg'>
                <div style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #F3F4F6 97%) ,url(https://replit.com/cdn-cgi/image/width=1920,quality=80/https://storage.googleapis.com/replit/images/1654930544817_d6f6669076e268b2625c2ec70a0a4521.png)', backgroundPosition: 'center' }} className='w-72  hoverbg rounded-t-xl h-36 bg-red-500'></div>
                <div className='  bg-gray-100 flex items-center h-20 rounded-b-xl w-auto'>
                  <div className='px-5'>
                  <h1 className='font-extrabold text-xl'>Personel Site</h1>
                  <h4 className='text-sm'>Unique personal site</h4>
                  </div>
                </div> 
              </div>
                </a>
              </Link>
              <Link href='https://klavyeefendisi.com/'>
                <a>
                <div className=' hover:ring-2 ring-offset-4 hover:shadow-xl hoverbgborder rounded-lg'>
                <div style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #F3F4F6 97%) ,url(https://cdn.discordapp.com/attachments/964124997503307776/999032513408286832/Ekran_Alnts.PNG)', backgroundPosition: 'center' }} className='w-72  hoverbg rounded-t-xl h-36 bg-red-500'></div>
                <div className='  bg-gray-100 flex items-center h-20 rounded-b-xl w-auto'>
                  <div className='px-5'>
                  <h1 className='font-extrabold text-xl'>Klavye Efendisi</h1>
                  <h4 className='text-sm'>Turkey's Best Game Market</h4>
                  </div>
                </div> 
              </div>
                </a>
              </Link>
            </div>
</>

    )
}