import React, { useEffect, useState } from 'react';
import Breadcrum from '../../Breadcrum';
import SideBar from '../SideBar';
import { Link } from 'react-router-dom';

const Maincateogary = () => {
  let [data, setData] = useState([]);

  async function deleteData(id) {
    if (window.confirm('Are you sure you want to delete')) {
      let response = await fetch(`http://localhost:8000/maincateogary/${id}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      response = await response.json();
      getData();
    }
  }

  async function getData() {
    let response = await fetch('http://localhost:8000/maincateogary', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let result = await response.json();

    // Check the structure of the data and modify it if needed
    let formattedData = result.map(item => ({
      id: item.id,
      name: item.name,
    }));

    setData(formattedData.reverse());
  }

  useEffect(() => {
    getData();
  }, []);

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
              Main Category
              <Link to='/admin/maincateogary/create'>
                <i className='fa fa-plus text-light float-end'> </i>
              </Link>
            </h5>
            <div className='table-responsive'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>

                      <td>
                        <Link to={`/admin/maincateogary/update/${item.id}`} className='btn btn-primary'>
                          <i className='fa fa-edit'></i>
                        </Link>
                      </td>
                      <td>
                        <button className='btn btn-danger' onClick={() => deleteData(item.id)}>
                          <i className='fa fa-trash'></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincateogary;


// import React, { useEffect } from 'react';
// import Breadcrum from '../../Breadcrum';
// import SideBar from '../SideBar';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMainCateogary, deleteMainCateogary } from '../../../store/ActionCreator/MainCateogaryActionCreator';

// const Maincateogary = () => {
//   let [data, setData] = useState([]);
//   let [s, setS] = useState([
//     {
//       "id": "086a",
//       "payload": {
//         "name": "shivangi karn"
//       }
//     },
//     {
//       "id": "03f3",
//       "payload": {
//         "name": "yjggdsj"
//       }
//     }
//   ]
//   );
//   let dispatch = useDispatch();
//   let MaincateogaryStateData = useSelector(state => state.MaincateogaryStateData);



//   const columns = [
//     { field: 'id', headerName: 'id', width: 90 },
//     {
//       field: 'name',
//       headerName: 'Name',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'edit',
//       headerName: 'Edit',
//       width: 110,
//       sortable: false,
//       renderCell: ({ row }) => (
//         <Link to={`/admin/maincateogary/update/${row.id}`} className='btn btn-primary'>
//           <i className='fa fa-edit'></i>
//         </Link>
//       ),
//     },
//     {
//       field: 'delete',
//       headerName: 'Delete',
//       width: 110,
//       sortable: false,
//       renderCell: ({ row }) => (
//         <button className='btn btn-danger' onClick={() => { deleteData(row.id) }}>
//           <i className='fa fa-trash'></i>
//         </button>
//       ),
//     },
//   ];




//   function deleteData(id) {
//     if (window.confirm('Are you sure you want to delete')) {
//       dispatch(deleteMainCateogary({ id: id }))
//       getApiData();
//     }
//   }

//   function getApiData() {
//     dispatch(getMainCateogary())
//     if (MaincateogaryStateData.length)
//       setData(MaincateogaryStateData.reverse());
//   }

//   useEffect(() => {
//     getApiData();
//   }, [MaincateogaryStateData.length]);
//   console.log("data from main cateogary", data)
//   return (
//     <>
//       <Breadcrum title="Admin" />
//       <div className='container-fluid'>
//         <div className='row'>
//           <div className='col-lg-3 col-md-6'>
//             <SideBar />
//           </div>
//           <div className='col-lg-9 col-md-6'>
//             <h5 className='bg-primary text-light text-center p-2'>
//               Main Category
//               <Link to='/admin/maincateogary/create'>
//                 <i className='fa fa-plus text-light float-end'> </i>
//               </Link>
//             </h5>
//             {/* <div className='table-responsive'>
//               <DataGrid
//                 rows={s}
//                 columns={columns}
//                 initialState={{
//                   pagination: {
//                     paginationModel: {
//                       pageSize: 5,
//                     },
//                   },
//                 }}
//                 pageSizeOptions={[5, 10, 15]}
//                 checkboxSelection={false}
//                 disableRowSelectionOnClick
//               />
//             </div> */}
//             <div>
//               <p>
//                 {
//                   data.map((item) => (
//                     <div key={item.id}>
//                       <p>{item.id}</p>
//                       <p>{item.name}</p>
//                     </div>
//                   ))
                
//                 }
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Maincateogary;
