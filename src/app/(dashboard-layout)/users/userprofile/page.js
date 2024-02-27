import { RiVerifiedBadgeFill } from "react-icons/ri";

const userProfile = () => {
    return (
        <div className=''>
            <div className=''>   <img
            src="https://i.ibb.co/HP28p9X/Cover-photo.png"
            alt="Profile Image"
            className="w-full "
            />
            </div>
           <div className="p-5">
           <div className='p-10 bg-white rounded-md -bottom-30 w-full'>
            <div className='flex justify-between '>
                    <div className='flex gap-5'>
                        <div>
                        <img
                src="https://i.ibb.co/HP28p9X/Cover-photo.png"
                alt="Profile Image"
                className="rounded-full h-10 w-10"
                />  
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                            <h1 className='text-3xl font-bold'>Chelsie Haley </h1>
                            <RiVerifiedBadgeFill className='text-xl' />
                            </div>
                            <p>Dream big. Think different. Do great!</p>
                        </div>
                    </div>
                    <div>
                        <button className='btn bg-[#2A85FF]'>Edit Profile</button>
                    </div>
                    
                </div>
                <hr className='my-10' />
                    <button className='btn'>Basic Info</button>
            </div>
           </div>
          <div className='p-5'> 
            <div className='p-10 bg-white rounded-md -bottom-30 w-full mt-5'>
            <div className='flex justify-between '>
                    <div className='flex gap-5'>
                        <div>
                        <img
                src="https://i.ibb.co/HP28p9X/Cover-photo.png"
                alt="Profile Image"
                className="rounded-full h-10 w-10"
                />  
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                            <h1 className='text-3xl font-bold'>Chelsie Haley </h1>
                            <RiVerifiedBadgeFill className='text-xl' />
                            </div>
                            <p>Dream big. Think different. Do great!</p>
                        </div>
                    </div>
                    <div>
                        <button className='btn bg-[#2A85FF]'>Edit Profile</button>
                    </div>
                    
                </div>
                <hr className='my-10' />
                    <button className='btn'>Basic Info</button>
            </div>
            </div>

        </div>
    );
};

export default userProfile;