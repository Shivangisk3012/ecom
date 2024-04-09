import React from 'react'
import Breadcrum from '../../Breadcrum'
import SideBar from '../SideBar'

const AdminHome = () => {
  return (
    <>
    <Breadcrum  title="Admin"/>
    <div className='container-fluid'>
    <div className='row'>
        <div className='col-lg-3 col-md-6'>
         <SideBar/>
        </div>
         <div className='col-lg-9 col-md-6'>
            <h5 className='bg-primary text-light text-center p-2'>Admin Home</h5>
            <div className='row'>
              <div className='col-md-6'>
                <img src='https://www.w3schools.com/howto/img_avatar.png' style={{height:"150",width:"50%"}} alt='shivangi' className='img-fluid rounded-circle'/>
              </div>
              <div className='col-md-6'>
                <table className='table table-bordered'>
                  <tbody>
                  <tr>
                    <th>Name</th>
                    <td>Shivangi</td>
                  </tr>
                  <tr>
                    <th>UserName</th>
                    <td>shivangi</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>shivangijnv30@gmail.com</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>9643632767</td>
                  </tr>

                  </tbody>
                </table>
                
              </div>
              </div>

          </div>



    </div>
    </div>



    </>
  )
}

export default AdminHome