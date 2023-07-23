import { useFormik } from "formik"

export default function MaintananceReq(){

    const formik = useFormik({
        initialValues:{
            facility:'',
            request_date:'',
            description:''
        }
    })

    return(
        <form className='shadow-xl absolute w-2/3 m-auto left-0 right-0 px-4 py-4'>
            <div className='h-14 flex items-center bg-[#f7f5f574] rounded-md justify-center mb-4'>
                <p className='uppercase font-bold'>Create a new Maintanance Request</p>
            </div>
            <div className='flex flex-col'>
                <label className='flex flex-col py-2'>
                    Select Facility
                    <select
                        className='border border-[#c9c3c3] px-2 py-2 rounded-md'
                        id='facility_name'
                        name='facility_name'
                        type='text'
                        placeholder='Facility Name'
                        onChange={formik.handleChange}
                        value={formik.values.facility}

                    >
                        
                        <option value=''>Facility 1</option>
                        <option value=''>Facility 2</option>
                        <option value=''>Facility 3</option>
                    </select>
                </label>
                <label className='flex flex-col py-2'>
                    Request Date
                    <input
                        className='border border-[#c9c3c3] px-2 py-2 rounded-md'
                        id='request_date'
                        name='request_date'
                        type='text'
                        placeholder='request_date'
                        onChange={formik.handleChange}
                        value={formik.values.request_date}
                    
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
                <button className='bg-[#f7f5f5] active:bg-[#ede9e9] hover:shadow-inner hover:shadow-[#e1e1e1] border border-[#c9c3c3] px-4 py-2 rounded-md'>Cancel</button>
                <button className='bg-[#f7f5f5] active:bg-[#ede9e9] hover:shadow-inner hover:shadow-[#e1e1e1] border border-[#c9c3c3] px-4 py-2 rounded-md'>Save</button>
            </div>
            
       </form>
    )
    
}