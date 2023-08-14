import {Formik, useFormik} from 'formik'

export default function Facilities(){

const formik = useFormik({
    initialValues:{
        facility_name:'',
        location:'',
        description:''
    }
})

const cancelFormHandler = () =>{

}

    return(
       <form className='shadow-xl absolute w-2/3 m-auto left-0 right-0 px-4 py-4'>
            <div className='h-14 flex items-center bg-[#f7f5f574] rounded-md justify-center mb-4'>
                <p className='uppercase font-bold'>Create a new facility</p>
            </div>
            <div className='flex flex-col'>
                <label className='flex flex-col py-2'>
                    Name
                    <input
                        className='border border-[#c9c3c3] px-2 py-2 rounded-md'
                        id='facility_name'
                        name='facility_name'
                        type='text'
                        placeholder='Facility Name'
                        onChange={formik.handleChange}
                        value={formik.values.facility_name}

                    />
                </label>
                <label className='flex flex-col py-2'>
                    Location
                    <input
                        className='border border-[#c9c3c3] px-2 py-2 rounded-md'
                        id='location'
                        name='location'
                        type='text'
                        placeholder='Location'
                        onChange={formik.handleChange}
                        value={formik.values.location}
                    
                    />
                </label>
                <label className='flex flex-col py-2'>
                    Description
                    <textarea
                        className='border border-[#c9c3c3] px-2 py-2 rounded-md h-60'
                        id='description'
                        name='description'
                        placeholder='Description'
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    
                    />
                </label>
            </div>
            <div className='flex justify-between'>
                <button onClick={cancelFormHandler} className='bg-[#f7f5f5] active:bg-[#ede9e9] hover:shadow-inner hover:shadow-[#e1e1e1] border border-[#c9c3c3] px-4 py-2 rounded-md'>Cancel</button>
                <button className='bg-[#f7f5f5] active:bg-[#ede9e9] hover:shadow-inner hover:shadow-[#e1e1e1] border border-[#c9c3c3] px-4 py-2 rounded-md'>Save</button>
            </div>
            
       </form>
    )
}