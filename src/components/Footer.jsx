import React from 'react';

const Footer = () => {
  return (
    <>
        <div className="blockcode mt-5 bg-dark text-white my-0">
            <footer className="shadow">
                <div
                className="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap"
                style={{width:"80%"}}
                >
                <a href="/#" className="d-flex align-items-center p-0 text-dark">
                    <img alt="logo" src='favicon.ico' width="30px" />
                    <span className="ms-4 h5 font-weight-bold">Subham Bhattacharya</span>
                </a>
                <small>&copy; Subhamb.com, 2023. All rights reserved.</small>
                </div>
            </footer>
            </div>
    </>
  );
};

export default Footer;