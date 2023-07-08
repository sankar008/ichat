import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Friends from './particals/Friends'
import * as imgProfile from '../assets/img/ImgLib.js';
import './profile.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEye, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup, faPen, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FaPlus, FaPaperPlane, FaPen } from 'react-icons/fa'
import { PiPaperPlaneRightFill, PiX, PiXBold } from 'react-icons/pi'
import { IoImages, IoIosCloudOutline } from 'react-icons/io'


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Avatar, Badge, Box, Button, ButtonGroup, Card, IconButton, ImageListItemBar, Modal, Typography } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import AccountType from './AccountType.js';


import Album from './particals/album'
import { IoIosImages } from 'react-icons/io';
import { IoMdImages } from 'react-icons/io';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};






export default function Profile() {

  /* const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); */

  let [ focusedInputAbout, setFocusedInputAbout ] = useState(false);

  const imageUploading = () => {
    /* profile image upload */
  }

  
  useEffect(() => {
    const skipPost = (event) => {
      if (event.key === 'Escape') {
          setFocusedInputAbout(false);
          document.getElementById('postField').value = '';
          document.getElementById('postField').blur();
      }
    };
    document.body.classList.toggle('readyPost', focusedInputAbout);
    document.addEventListener('keydown', skipPost);

    return () => {
        document.body.classList.remove('readyPost');
        document.removeEventListener('keydown', skipPost);
    };
  }, [focusedInputAbout]);



  return (
    
    JSON.parse(localStorage.getItem("isLoginCheck"))?
    <>
      <section className="banner" style={{'--imgBan': 'url("' + imgProfile.banProfile + '")'}}>
        <h1 className="display-6 opacity-0">Mandy Richardson - Profile iCHAT</h1>
      </section>
      <section className="sec-main">
        <div className="container">
          <div className="row">
            <div className='dtl-profile mb-md-4'>
              <div className="imgUser-wrapper">
                <Badge
                    className="userAvator"
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                      <>
                      {/* <IconButton sx={{ background: '#f3f3f3' }}><FaPen /></IconButton> */}
                      <input
                        type="file"
                        id="imageUpload"
                        accept=".png, .jpg, .jpeg"
                        onChange={imageUploading}
                        hidden
                      />
                      <label className="imageUpload" htmlFor="imageUpload">
                        <FaPen />
                      </label>
                      </>
                    }
                  >
                      <Avatar src={ imgProfile.imgProfileU } alt={`Mandy Richardson`} sx={{
                        width: '21.75rem', 
                        height: '21.75rem', 
                        borderRadius: 5, 
                        }} 
                      />
                </Badge>
              </div>
              <div className="user-holder">
                <h1 className="userName">{`Mandy Richardson`}</h1>
                <div className="chat">
                  <p className="m-0 me-4"><small>Leave a message</small></p>
                  <Link className='btn btn-theme btn-outline-light py-2'>Chat</Link>
                </div>
              </div>
            </div>
            {/* <div className="col-12">
                <h4 className="display-6">This is your profile</h4>
            </div> */}
          </div>
          { focusedInputAbout? (
            <div className="active-overlay"></div>
          ):"" }
          <div className="row">
            <div className="col-md-7">
              <h5 className='titleAbout'>About Me</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolorem mollitia itaque aspernatur tempore maiores, amet reiciendis iure consectetur facilis, explicabo delectus vero deleniti. Accusantium possimus quia quis illo repudiandae!
              Eligendi tenetur suscipit perspiciatis doloremque omnis, nobis cumque eum, dolores optio officiis consectetur beatae, adipisci praesentium ut sapiente exercitationem aut quisquam necessitatibus? Vel expedita doloribus magni iste facere! Inventore, dicta.</p>

              <div className="share-something">
                <div className="editor-top">
                { focusedInputAbout ?
                      <div className="position-absolute" style={{right: '5px', top: '5px'}}>
                          <Button style={{minWidth: 'auto'}} onClick={() => { setFocusedInputAbout(false) }} sx={{
                            borderRadius: '50px',
                              color: 'var(--bs-gray-400)',
                          }}><PiXBold /></Button>
                      </div>
                  :
                  '' }
                  <img className="userIcon img-fluid" src={ imgProfile.imgProfileU } alt="" />
                  <textarea className='form-control' name="" id="postField" placeholder='Say something.....' onFocus={() => { setFocusedInputAbout(true) }}></textarea>
                </div>
                <div className="share-footer">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <small>Share to</small>
                    </li>
                    <li className="list-inline-item">
                      <Link className='link-theme link-light link-underline-opacity-0'><FontAwesomeIcon icon={faTwitter} /></Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className='link-theme link-light link-underline-opacity-0'><FontAwesomeIcon icon={faInstagram} /></Link>
                    </li>
                  </ul>
                  { focusedInputAbout ? (
                    <ButtonGroup spacing="0.5rem" aria-label="spacing button group">
                      <IconButton sx={{ color: 'white' }}><IoMdImages /></IconButton>
                      <IconButton sx={{ color: 'white' }}><PiPaperPlaneRightFill /></IconButton>
                    </ButtonGroup>
                  )
                  :""}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <hr className='my-5' />

        <div className="container">
          <div className="row">
            <div className="col-12">      

              <Tabs
                  defaultActiveKey="photos"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                  variant="pills"
                  fill
                >
                  <Tab eventKey="photos" title="Photos">
                      <Album />                      
                  </Tab>                  
                  <Tab eventKey="friends" title="Friends">
                      <Friends />
                  </Tab>

                  <Tab eventKey="clubs" title="Clubs">
                      <Typography>Here will be joined members</Typography>
                  </Tab>
              </Tabs>

            </div>
          </div>
        </div>
      </section>
    </>:<AccountType/>
  )
}



const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 1,
    cols: 1,
  }
];