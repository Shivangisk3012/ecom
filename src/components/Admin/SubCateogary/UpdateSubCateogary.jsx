import React, { useEffect, useState } from "react";
import Breadcrum from "../../Breadcrum";
import SideBar from "../SideBar";
import formValidation from "../../Validation/formValidation";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubCateogary,
  updateSubCateogary,
} from "../../../store/ActionCreator/SubCateogaryActionCreator";

const UpdateSubcateogary = () => {
  const [name, setName] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  let { id } = useParams();
  let dispatch = useDispatch();
  let UpdateSubcateogaryStateData = useSelector(
    (state) => state.UpdateSubcateogaryStateData
  );

  function getInputData(e) {
    setName(e.target.value);
    setErrorMessage(formValidation(e));
  }

  async function postData(e) {
    e.preventDefault();
    console.log(errorMessage);

    if (errorMessage.length === 0) {
      let item = UpdateSubcateogaryStateData.find(
        (x) => x.name.toLowerCase() === name.toLowerCase()
      );
      if (item) {
        setShow(true);
        setErrorMessage("Name already exist");
        setShow(true);
      } else {
        dispatch(updateSubCateogary({ id, name }));
        navigate("/admin/UpdateSubcateogary");
      }
    } else {
      setShow(true);
    }
  }
  function getAPIData() {
    dispatch(getSubCateogary());
    if (UpdateSubcateogaryStateData.length) {
      let item = UpdateSubcateogaryStateData.find((x) => x.id === id);
      setName(item.name);
    }
  }

  useEffect(() => {
    getAPIData();
  }, [UpdateSubcateogaryStateData.length]);

  return (
    <>
      <Breadcrum title="Admin" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <SideBar />
          </div>
          <div className="col-lg-9 col-md-6">
            <h5 className="bg-primary text-light text-center p-2">
              Update
              <button
                className="float-end text-light border-0"
                style={{ background: "none" }}
              >
                <i className="fa fa-arrow-left"> </i>
              </button>
            </h5>

            <form className="p-4" onSubmit={postData}>
              <div className="mb-3">
                <label>
                  {" "}
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Name"
                  onChange={getInputData}
                  className="form-control"
                />
                {show ? (
                  <p className="text-danger px-2 text-capitalize">
                    {errorMessage}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateSubcateogary;
