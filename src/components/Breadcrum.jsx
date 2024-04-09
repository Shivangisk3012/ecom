import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrum = ({title}) => {
  return (
    <>
        <div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
            <h1 class="display-3 mb-4 animated slideInDown">{title}</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">{title}</li>
                </ol>
            </nav>
        </div>
    </div>

    </>
  )
}

export default Breadcrum