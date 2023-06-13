import React from 'react'
import { Link } from 'react-router-dom';

import * as imgProfile from '../assets/img/ImgLib.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
// import {  } from '@fortawesome/free-solid-svg-icons'



import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}



export default function Profile() {

  return (
    <>
      <section className="banner" style={{'--imgBan': 'url("' + imgProfile.banProfile + '")'}}>
        <h1 className="display-6 opacity-0">Mandy Richardson - Profile iCHAT</h1>
      </section>
      <section className="sec-main">
        <div className="container">
          <div className="row">
            <div className='dtl-profile mb-md-4'>
              <div className="imgUser-wrapper">
                <div className="userImg">
                  <img className="img-fluid" src={ imgProfile.imgProfileU } alt={`Mandy Richardson`} />
                </div>
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
          <div className="row">
            <div className="col-md-7">
              <h5 className='titleAbout'>About Me</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolorem mollitia itaque aspernatur tempore maiores, amet reiciendis iure consectetur facilis, explicabo delectus vero deleniti. Accusantium possimus quia quis illo repudiandae!
              Eligendi tenetur suscipit perspiciatis doloremque omnis, nobis cumque eum, dolores optio officiis consectetur beatae, adipisci praesentium ut sapiente exercitationem aut quisquam necessitatibus? Vel expedita doloribus magni iste facere! Inventore, dicta.</p>

              <div className="share-something">
                <div className="editor-top">
                  <img className="userIcon img-fluid" src={ imgProfile.imgProfileU } alt="" />
                  <textarea className='form-control' name="" id="" placeholder='Say something.....'></textarea>
                </div>
                <div className="share-footer">
                  <ul className="list-inline mb-0">
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
                      <ImageList
                        sx={{}}
                        variant="quilted"
                        cols={6}
                        //rowHeight={121}
                      >
                        {itemData.map((item) => (
                          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                              {...srcset(item.img, 121, item.rows, item.cols)}
                              alt={item.title}
                              loading="lazy"
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                  </Tab>
                  
                  <Tab eventKey="friends" title="Friends">
                      <ImageList
                        sx={{}}
                        variant="quilted"
                        cols={6}
                        //rowHeight={121}
                      >
                        {itemData.map((item) => (
                          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                              {...srcset(item.img, 121, item.rows, item.cols)}
                              alt={item.title}
                              loading="lazy"
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                  </Tab>

                  <Tab eventKey="clubs" title="Clubs">
                      <ImageList
                        sx={{}}
                        variant="quilted"
                        cols={6}
                        //rowHeight={121}
                      >
                        {itemData.map((item) => (
                          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                              {...srcset(item.img, 121, item.rows, item.cols)}
                              alt={item.title}
                              loading="lazy"
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                  </Tab>
              </Tabs>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}



const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];