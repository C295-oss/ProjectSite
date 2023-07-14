// import WaveDown from '/src/assets/images/waveDown.svg';

// Import company images:
import Github from '/src/assets/images/github-mark-white.png';
import LiDn from '/src/assets/images/LI-In-Bug.png';
import Insta from '/src/assets/images/Instagram_Glyph_Gradient.png';


const QuickLink = ({name, image, link}) => {
    return (
        <a href={link}>
                
            <div className='flex content-center align-middle p-2 rounded-2xl my-6
                bg-gradient-to-r from-blue-800 to-sky-500'>
                
                <img
                    src={image}
                    className='w-12'
                />

                <h2 className='m-auto font-bold text-2xl text-whiteText'>
                    {name}
                </h2>
            </div>
        </a>
    );
};



const Contact = () => {
    return ( 

        <div id="Contact" className=' bg-gradient-to-br font-ubuntu font-bold from-borderColor to-pageColor text-center'>

            <section className='flex flex-wrap h-max w-screen pb-8'>

                <div className='px-4 sm:px-6 md:px-8 items-center 
                    sm:w-screen md:w-1/2 align-middle justify-between'>

                    <h1 className='text-textSelectColor font-bold text-8xl mb-16'>
                        Contact
                    </h1>

                    <QuickLink 
                        className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
                        name={'GitHub'} 
                        image={Github}
                        link={'https://github.com/C295-oss'}/>
                    
                    
                    <QuickLink name={'Linkedin'} image={LiDn}
                        link={'https://www.linkedin.com/in/thomas-bitsky-3334b1249/'} />
                    
                    
                    <QuickLink name={'Instagram'} image={Insta}
                        link={'https://www.instagram.com/cbits3/'} />

                </div>

                {/* Send an email to me! */}
                <div className='px-4 sm:px-6 md:px-8 h-screen sm:w-screen w-full md:w-1/2 align-middle justify-center'>


                    <form
                        action='https://getform.io/f/b5da5be3-f6ad-474f-901b-12e269780228'
                        method="POST"
                    >

                        <h1 className=' text-6xl text-textSelectColor'>
                            Email
                        </h1>

                        
                        <input type='text' name='name'  placeholder=' Name ' required={true}></input>
                         
                        <input type='email' name='email' placeholder=' Email ' required={true}></input>
                        
                        <textarea type='text' name='text' rows={12}  placeholder=' Description' required={true}></textarea>

                        <button className=' text-whiteText bg-gradient-to-r from-blue-800 to-sky-500' type='submit'>Let's Work Together!</button>

                    </form> 

                </div>

            </section>

        </div>
    );
}

export default Contact;




