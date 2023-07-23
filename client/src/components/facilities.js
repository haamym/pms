import {Formik, useFormik} from 'formik'

export default function Facilities(){

const formik = useFormik({
    initialValues:{
        facility_name:''
    }
})

    return(
       <form className='outline'>
            <div>
                <input
                    id='facility_name'
                    name='facility_name'
                    type='text'
                    placeholder='Facility Name'
                    onChange={''}
                    value={''}
                
                />
            </div>
       </form>
    )
}