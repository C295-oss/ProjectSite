import { motion } from "framer-motion";
import profile_img from '/src/assets/images/profile.png';

const Intro = () => {

    const NAME = "Thomas Bitsky";
    const ROLE = 'Aspiring Software Engineer';
    const SCHOOL = 'University of Illinois Chicago';

    return (  

        <section id='Intro' className='bg-pageColor flex flex-row text-whiteText flex-wrap'>


            {/* Left div: Holds information */}
            <div className='flex flex-col w-1/2 font-ubuntu font-bold 
                        text-center justify-center pb-20 pl-8'>

                <h1 className='italic text-8xl'>{NAME}</h1>
                <h2 className='text-4xl'>{ROLE}</h2>
                <h3 className='text-2xl'>{SCHOOL}</h3>

            </div>

            {/* Right div: holds photo */}
            <div className='flex items-center justify-center h-screen w-1/2 pb-32 '>

                <motion.div className=' bg-whiteText w-96 h-96 rounded-full 
                        outline-dashed outline-whiteText outline-8 outline-offset-8
                        justify-center align-middle absolute hidden md:block' 
                        animate={{rotate: 360}} transition={{ repeat: Infinity, duration: 5 }} />

                <img src={profile_img} alt={'Profile Photo'}
                            className='w-92 h-92 rounded-full
                            justify-center align-middle absolute hidden md:block' />

            </div>

        </section>
    );
}
 
export default Intro;
