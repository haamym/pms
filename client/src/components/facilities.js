import {Formik, useFormik} from 'formik'

export default function Facilities(){

const formik = useFormik({
    initialValues:{
        facility_name:''
    }
})

    return(
       <form className='shadow absolute w-2/3 m-auto left-0 right-0 px-4 py-4'>
            <div className='h-14 flex items-center bg-[#f7f5f5] rounded-md justify-center mb-4'>
                <p className='uppercase font-bold'>Create a new facility</p>
            </div>
            <div className='flex flex-col'>
                <label className='flex flex-col'>
                    Name
                    <input
                        className='border border-[#c9c3c3] px-2 py-2 rounded-md'
                        id='facility_name'
                        name='facility_name'
                        type='text'
                        placeholder='Facility Name'
                        onChange={''}
                        value={''}

                    />
                </label>
                <label className='flex flex-col'>
                    Location
                    <input
                        className='border border-[#c9c3c3] px-2 py-2 rounded-md'
                        id='location'
                        name='location'
                        type='text'
                        placeholder='Location'
                        onChange={''}
                        value={''}
                    
                    />
                </label>
                
            </div>

            
       </form>
    )
}