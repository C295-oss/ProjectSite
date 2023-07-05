import { motion } from "framer-motion";

import greenIcon from '/src/assets/icons/favicon-32x32 green.png';
import Resume from '/src/assets/docs/resume.pdf';

const NavBar = ({idList}) => {

    const idList_without_img = idList.slice(1);
    const idList_img = idList[0];

    const LinkTo = ({ goTo, display }) => {
        return (
            <motion.button
                className='text-xl font-bold font-kanit text-textSelectColor cursor-pointer'
                type='button'
                onClick={() => {
                    const target = document.getElementById(goTo);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }}

                whileHover={{scale: 1.1}}
                whileTap={{scale: .5}}
            >
                {display}
            </motion.button>
        );
    };

    return (
        <header className='flex flex-row justify-between items-center bg-pageColor px-10'>
            
            <LinkTo goTo={idList_img} display={<img src={greenIcon} alt='Site Logo' className='w-16' />} />

            <div className='flex space-x-10 items-center'>

                <div className={'hidden-mobile'}>
                    {idList_without_img.map(id => (
                        <LinkTo key={id} goTo={id} display={id} />
                    ))}
                </div>
            
                <motion.a 
                    type='button'
                    className='text-2xl bg-textSelectColor text-pageColor
                        p-2 rounded-md font-bold font-kanit cursor-pointer'
                    whileHover={{scale : 1.1}}
                    whileTap={{scale: .5}}
                    
                    href={Resume}
                    target='_blank'
                >
                    Resume
                </motion.a>

            </div>


        </header>
    );
};

export default NavBar;
