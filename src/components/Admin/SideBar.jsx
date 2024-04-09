import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
      <ul class="list-group list">
        <Link to='/admin'><li class="list-group-item list-group-action active ">Admin Home</li></Link>
        <Link to='/admin/users' class="list-group-item list-group-action">
          <i className='fa fa-users'> </i>
          <span className='float-end text-primary'>
            Users
          </span>
        </Link>
        {/* <Link to='/adminhome' class="list-group-item list-group-action">
          <i className='fa fa-plus'> </i>
          <span className='float-end text-primary'>
            Add User
          </span>
        </Link>
        <Link to='/adminhome' class="list-group-item list-group-action">
          <i className='fa fa-edit'> </i>
          <span className='float-end text-primary'>
            Edit User
          </span>
        </Link>
        <Link to='/adminhome' class="list-group-item list-group-action">
          <i className='fa fa-trash'> </i>
          <span className='float-end text-primary'>
            Delete User
          </span>
        </Link> */}
        <Link to='/admin/maincateogary' class="list-group-item list-group-action">
          <i className='fa fa-list  text-primary'> </i>
          <span className='float-end text-primary'>
            Main Cateogary
          </span>
        </Link>
        <Link to='/admin/subcateogary' class="list-group-item list-group-action">
          <i className='fa fa-product-hunt text-primary'> </i>
          <span className='float-end text-primary'>
            Sub Cateogary
          </span>
        </Link>
        <Link to='/admin/brand' class="list-group-item list-group-action">
          <i className='fa fa-trash text-primary'> </i>
          <span className='float-end text-primary'>
            Brand
          </span>
        </Link>
        <Link to='/admin/product' class="list-group-item list-group-action">
          <i className='fa fa-product-hunt text-primary'> </i>
          <span className='float-end text-primary'>
            Product
          </span>
        </Link>
        <Link to='/admin/testimonial' class="list-group-item list-group-action">
          <i className='fa fa-users text-primary'> </i>
          <span className='float-end text-primary'>
            Testimonial
          </span>
        </Link>
        <Link to='/admin/mewsletter' class="list-group-item list-group-action">
          <i className='fa fa-envelope text-primary'> </i>
          <span className='float-end text-primary'>
            Newsletter
          </span>
        </Link>
        <Link to='/admin/contact' class="list-group-item list-group-action">
          <i className='fa fa-phone text-primary'> </i>
          <span className='float-end text-primary'>
            Contact Us
          </span>
        </Link>
        <Link to='/admin/checkout' class="list-group-item list-group-action">
          <i className='fa-solid fa-bag-shopping text-primary'> </i>
          <span className='float-end text-primary'>
            Checkout
          </span>
        </Link>



      </ul>
    </>
  )
}

export default SideBar