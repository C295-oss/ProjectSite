import WaveDown from '/src/assets/images/waveDown.svg';
import ProjectDisplay from "./projectDisplay.jsx";

// Photos
import PortfolioImage from '/src/assets/images/portfolioImg.png';
import Notebook from '/src/assets/images/notebook.png';
import GitPractice from '/src/assets/images/gitPractice.png';

// TODO: CHECK THIS


const portfolioDesc = 'The current site you are on! Used display current work done or in Progress.';
const gitPracticeDesc = 'Very basic repo full of git commands. Used to help me learn how to use git and Github.';
const noteBookDesc = 'Text editor than can run Python code, save, save as, and has light/dark mode.';
const moreDesc =  'As time passes, I will add more projects to this section. Currently, I\'m thinking of learning more about the backend side of development and networking.';

const Projects = () => {
    return ( 

        // Descriptions for text
        <div className='font-ubuntu font-bold bg-gradient-to-tr from-borderColor to-pageColor'>
            
            <section id='Projects' className=' text-center bg-textSelectColor h-auto'>

                <h1 className='text-whiteText font-typograph text-6xl my-6'>Projects</h1>
                
                <div className='flex flex-wrap justify-center h-auto'>

                    <ProjectDisplay name={'Portfolio Site'} tools={['JS', 'Tailwind', 'Vite']} photo={PortfolioImage} desc={portfolioDesc} />
                    <ProjectDisplay name={'Git Practice'} tools={['C++', 'Github', 'Git']} photo={GitPractice} desc={gitPracticeDesc}/>
                    <ProjectDisplay name={'NoteBook'} tools={['Python', 'Tkinter']} photo={Notebook} desc={noteBookDesc}/> 
                    <ProjectDisplay name={'And many more'} tools={['coming in the future']} desc={moreDesc}/>

                </div>

                <h2 className='text-whiteText font-typograph text-4xl mt-28'>
                    More Projects are on my Github. Feel free to check it out! 
                </h2>   

            </section>

            <img src={WaveDown} />

        </div>

    );
}
 
export default Projects;
