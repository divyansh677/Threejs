import React from 'react';
import { motion , AnimatePresence} from 'framer-motion';
import state from '../store';
import { useSnapshot } from 'valtio';
import {
    headContainerAnimation,
    headTextAnimation,
    headContentAnimation,
    slideAnimation

} from '../config/motion'


function Home() {
  const snap = useSnapshot(state);
  return (
   <AnimatePresence>
    {
      snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img
            src='./threejs.png'
            alt='logo'
            className='w-8 h-8 object-contain'/>

          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>

              <h1 className='text-[100px] font-semibold' >
                LET'S <br className='xl:block hidden'/> DO IT.
                
                
                
                 </h1>

            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>

            <p className='max-w-md  font-normal text-gray-600 text-base'>  Create your unique and exclusive shirt with our brand-new 3D Customization tool . <strong> unleash your imagination </strong> and define your own styles.</p>
            </motion.div>


          </motion.div>


        </motion.section>
      )
    }



   </AnimatePresence>
  )
}

export default Home
