import PersonalPhoto from '/src/assets/images/PersonalPhoto Square.jpg';
import Wave from '/src/assets/images/waveUp.svg';

const About = () => {

    const Current = "Student studying Computer Science at (UIC). Currently working in level one IT support for the university. ";
    const Enjoys = "Enjoy working on designing and implementing websites, with a goal of fullstack. Enjoys learing new things within the vast CS field.";
    const FreeTime = "Outside of CS, I also enjoy exploring new places, playing video games, soccer, and programming in my free time.";

    const DisplayText = ({text}) => {
        return(
            <h3 className={' py-4 text-textSelectColor font-kanit font-bold text-2xl'}>
                {text}
            </h3>
        );
    };  

    return ( 
        
        <div id='About' className='bg-whiteText my-0'>
            <section className='flex flex-row'> 

                <div className='hidden md:block flex-col justify-center text-center items-center w-1/3 pl-8'>

                    <h1 className='font-ubuntu font-bold text-textSelectColor text-8xl pt-24'>About me</h1> 

                    <img className='w-22 h-1/2'
                            src={PersonalPhoto} alt={'Personal Image'} 
                    />

                </div>

                <div className='flex flex-col justify-center align-middle text-center mx-auto w-1/2'>

                    <DisplayText text={Current}  />
                    <DisplayText text={Enjoys}   />
                    <DisplayText text={FreeTime} />

                </div>

            </section>

            <img src={Wave} />

        </div>

    
    );
}
 
export default About;


