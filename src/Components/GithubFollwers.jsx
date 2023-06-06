import React, { useState } from 'react';
import useFetchData from '../Hooks/useFetchData';
import Navbar from './Navbar';

const cardStyle = {
  "width": "15rem"
};

const GithubFollwers = () => {
  // eslint-disable-next-line
  const [data, isLoading, error] = useFetchData(
    "https://api.github.com/users/sambitraze/followers",
    50
  );

  const [click, setClick] = useState(false);

  if (error) {
    return (
      <>
        <p className='display-4 fw-bold text-center text-danger text-shadow-sm'>{error}</p>
      </>
    );
  }

  const handleClick = () => {
    // console.log(click);
    if (!click) {
      setClick(true);
      // console.log(click);
    } else {
      setClick(false);
      // console.log(click);
    }
  };

  return (
    <>
      <Navbar />
      {isLoading
        ? <div className='w-100 h-100 d-flex justify-content-center mt-5 align-items-center gap-4'>
          <strong className='display-5 fw-bolder text-dark'>Loading...</strong>
          <div className="spinner-border text-info text-center mt-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>

        : <div className="p-3 d-flex flex-wrap justify-content-center gap-3">
          {data.map((user, i) => {
            return (
              <div className="card align-items-center shadow-sm" style={cardStyle} key={i}>
                <div className='ratio ratio-1x1 w-75 h-75 mt-1'>
                  <img src={user.avatar_url} className="card-img-top rounded-circle" alt="user_photo" />
                </div>
                <div className="card-body d-flex flex-column align-items-center ps-0 pe-0">
                  <h5 className="card-title">Login: {user.login}</h5>
                  <p className="card-text">Login ID : {user.id}</p>
                  <p className="card-text">Type: {user.type}</p>
                  <button className="btn btn-primary shadow-sm" onClick={handleClick}>
                    <i className="bi bi-person-circle me-2"></i>
                    User Profile
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      }
    </>
  );
};

export default GithubFollwers;