  import {useEffect} from 'react'
  import axios from 'axios'
  import Header from '../Header'
  import {useState} from 'react'
  import axiosInstance from '../AxiosInstancce'

  const Dashoard = () => {

    // const [message, setMessage] = useState('')

    useEffect(() => {
      const fetchProtactedData = async () => {
        try {
          const response =await axiosInstance.get('/protected-view', {
            // headers: {
            //   Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
          })
          console.log('success')
          console.log(response.data)
          // setMessage(response.data)
          
        } catch (error) {
          console.error(error,'this error is fetching data')
          // setMessage(error.response.data.message)
          
        }
      }

      fetchProtactedData();
    }, [])
    return (
      <>
      <h1>This is DASHoarD</h1>
      {/* <h3 >{message.data}</h3> */}
      
      </>
    )
  }

  export default Dashoard