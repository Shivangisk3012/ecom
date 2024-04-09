import React, { useEffect, useState } from 'react';
import Breadcrum from '../../Breadcrum';
import SideBar from '../SideBar';
import formValidation from '../../Validation/formValidation';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMainCateogary, getMainCateogary } from '../../../store/ActionCreator/MainCateogaryActionCreator';

const CreateMaincateogary = () => {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('Name Field is mandatory');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const MainCateogaryStateData = useSelector((state) => state.MaincateogaryStateData)  // Update the selector

  console.log('MainCateogaryState');

  function getInputData(e) {
    setName(e.target.value);
    setErrorMessage(formValidation(e));
  }

  function postData(e) {
    e.preventDefault();
    if(name === '') { 
      setShow(true);
      return;
    }
    let item = MainCateogaryStateData.find((x) => x && x.name && x.name.toLowerCase() === name.toLowerCase());

    if (item) {
      setShow(true);
      setErrorMessage('Name already exists');
    } else {
      dispatch(addMainCateogary({ name: name }));
      console.log('Data:', name);
      navigate('/admin/maincateogary');
    }
  }

  function getApiData() {
    dispatch(getMainCateogary());
  }

  useEffect(() => {
    getApiData();
  }, [MainCateogaryStateData.length]);

  return (
    <>
      <Breadcrum title="Admin" />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <SideBar />
          </div>
          <div className='col-lg-9 col-md-6'>
            <h5 className='bg-primary text-light text-center p-2'>
              Create
              <button className='float-end text-light border-0' style={{ background: "none" }} >
                <i className='fa fa-arrow-left'> </i>
              </button>
            </h5>

            <form className='p-4' onSubmit={postData}>
              <div className="mb-3">
                <label> Name<span className='text-danger'>*</span></label>
                <input
                  type="text"
                  name='name'
                  placeholder='Name'
                  value={name}
                  onChange={getInputData}
                  className='form-control'
                />
                {show ? <p className='text-danger px-2 text-capitalize'>{errorMessage}</p> : ""}
              </div>
              <button type="submit" className="btn btn-primary">Create </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateMaincateogary;
