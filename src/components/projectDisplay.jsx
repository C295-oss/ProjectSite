import React from 'react';
// Tools should be an array

const ProjectDisplay = ({name, tools, photo, desc}) => {
    
    const DisplayTools = ({tool}) => {
        return (
            <div>
                {tool && tool.map(data => {
                    return (
                        <h3 className='inline-block px-2 mx-2 
                            font-bold text-whiteText' >
                            {data}
                        </h3>
                    );
                })}
            </div>
        );
    };


    return ( 

        <div className='bg-gradient-to-r from-textSelectColor  to-blue-700
                    w-90 h-fill p-2 rounded-md border-4 border-containerBlue mx-2 '>

            <div>

                {/* <div className='bg-red-500 h-52 m-1'></div> */}
                <img className='h-52'
                    src={photo}
                />

                <div className='flex-col mt-5 text-center'>

                    <h1 className=' text-pageColor text-2xl font-bold'>
                        {name}
                    </h1>

                    <DisplayTools tool={tools} />
                
                    <h2 className='text-center text-whiteText font-bold pt-4'>
                        {desc}
                    </h2>

                </div>
            </div>
        </div>
    );
}
 
export default ProjectDisplay;
