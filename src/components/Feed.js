import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './feed.scss'
import * as imgFeed from '../assets/img/ImgLib'
import { postSlider } from '../assets/img/ImgLib';

import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

import { Zuck } from 'zuck.js';
import 'zuck.js/css';
import 'zuck.js/skins/snapgram';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';


import { MdHomeFilled, MdOutlineExplore, MdMenu, MdVerified } from "react-icons/md"
import { BiSearch, BiVideo } from "react-icons/bi"
import { BsMessenger, BsHeart, BsEmojiSmile } from "react-icons/bs"
import { FiPlusSquare } from 'react-icons/fi'
import { FaPlus, FaVideo } from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import SuggestionCard from './particals/SuggestionCard';



const Feed = () => {
    let [ feedList, setFeedList ] = useState(stories)
    useEffect(() => {
        document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', 'dark')
        autoResize()
    }, [])
    
    function autoResize() {
        document.querySelectorAll('[data-autoresize]').forEach(function (element) {
			var offset = element.offsetHeight - element.clientHeight;
            console.log(offset)
			element.addEventListener('input', function (event) {
				event.target.style.height = 'auto';
				event.target.style.height = event.target.scrollHeight + offset + 'px';
			});
		});
    }

  return (
    <>
        <main className='py-5'>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <a href="/"><img className='img-fluid' src={ imgFeed.logoLight } alt="" /></a>
                        </div>

                        <nav className="navbar navbar-expand-lg mx-0">
                            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasSideNavbar">

                                <div className="offcanvas-header">
                                    <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas"
                                        aria-label="Close">
                                    </button>
                                </div>


                                <div className="offcanvas-body d-block px-2 px-lg-0">
                                    <div className="card overflow-hidden bg-transparent border-0">

                                        <div className="card-body navLeft">


                                            <ul className="nav nav-link-secondary flex-column fw-bold gap-3">
                                                <li className="nav-item">
                                                    <Link className="nav-link" to=""> 
                                                        <MdHomeFilled className="navIcon" size="1.6em" />
                                                        <span>Home </span>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="">
                                                        <BiSearch className="navIcon" size="1.6em" />
                                                        <span>Search </span>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="">
                                                        <MdOutlineExplore className="navIcon" size="1.6em" />
                                                        <span>Explore </span>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="" >
                                                        <BsMessenger className="navIcon" size="1.45em" />
                                                        <span>Messages </span>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="">
                                                        <BsHeart className="navIcon" size="1.4em" />
                                                        <span>Notifications </span>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="">
                                                        <FiPlusSquare className="navIcon" size="1.4em" />
                                                        <span>Create </span>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="">
                                                        <Avatar className="navIcon" alt="" src={ imgFeed.userDefault } sx={{ width: 22, height: 22 }} />
                                                        <span>Profile </span>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="">
                                                        <MdMenu className="navIcon" size="1.4em" />
                                                        <span>More </span>
                                                    </Link>
                                                </li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>



                    <div className="col-md-8 col-lg-6 vstack gap-4">
                        <div className="d-flex gap-2 mb-n3">
                            <div className="position-relative">
                                <div
                                    className="card border border-2 border-dashed h-150px px-4 px-sm-5 shadow-none d-flex align-items-center justify-content-center text-center">
                                    <div>
                                        <a className="stretched-link btn btn-light rounded-circle icon-md" href="#!">
                                            <FaPlus />
                                        </a>
                                        <h6 className="mt-2 mb-0 small">Add Story</h6>
                                    </div>
                                </div>
                            </div>


                            <div id="stories" className="storiesWrapper stories-square stories user-icon carousel scroll-enable stories user-icon carousel snapgram ">
                                {feedList.map((fl) => 
                                <div key={fl.id} className="story " data-id="user-1" data-photo={ fl.photo } data-last-updated="1687118471.136">
                                    <Link className="item-link" to="#">
                                        <span className="item-preview">
                                            <img lazy="eager" src={ fl.photo } alt={ fl.name } height="32px" width="32px" />
                                        </span>
                                        <span className="info" itemProp="author" itemScope="" itemType="http://schema.org/Person">
                                            <strong className="name" itemProp="name">{ fl.name }</strong>
                                            <span className="time"></span>
                                        </span>
                                    </Link>

                                    <ul className="items">
                                        <li className="" data-id="user1-story1">
                                            <a href={ imgFeed.userTwo } data-link="" data-linktext=""
                                                data-time="1687118471.136" data-type="photo" data-length="5">
                                                <img loading="auto" src={ imgFeed.userTwo } alt="" />
                                            </a>
                                        </li>
                                        <li className="" data-id="user1-story2">
                                            <a href={ imgFeed.userThree } data-link="" data-linktext=""
                                                data-time="1687118471.136" data-type="video" data-length="">
                                                <img loading="auto" src={ imgFeed.userThree } alt="" />
                                            </a>
                                        </li>
                                        <li className="" data-id="user1-story3">
                                            <a href={ imgFeed.userFour } data-link="https://webestica.com/"
                                                data-linktext="Visit my Portfolio" data-time="1687118471.136" data-type="photo"
                                                data-length="5">
                                                <img loading="auto" src={ imgFeed.userFour } alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                )}
                                
                                
                            </div>

                            
                        </div>



                        <div className="card card-body mb-5">
                            <div className="d-flex mb-3">

                                <div className="avatar avatar-xs me-2">
                                    <Link to=""> <img className="avatar-img rounded-circle" src={ imgFeed.userDefault } alt="" /> </Link>
                                </div>

                                <form className="w-100">
                                    <textarea className="form-control pe-4 border-0" rows="2" onInput={autoResize()} data-autoresize="" placeholder="Say something....."></textarea>
                                </form>
                            </div>

                            <ul className="nav nav-pills nav-stack small fw-normal">
                                <li className="nav-item me-2">
                                    <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionVideo">
                                        <BiVideo size="20" /> Video
                                    </a>
                                </li>
                               
                                <li className="nav-item">
                                    <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#modalCreateFeed">
                                        <BsEmojiSmile /> Activity
                                    </a>
                                </li>
                                <li className="nav-item dropdown ms-lg-auto">
                                    <div className="d-flex align-items-center">
                                        <Link className="nav-link bg-light py-1 px-2 mb-0 me-2" to="#" id="feedActionShare" data-bs-toggle="dropdown" aria-expanded="false">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </Link>
                                        <Link className="nav-link bg-light py-1 px-2 mb-0" to="#" id="feedActionShare" data-bs-toggle="dropdown" aria-expanded="false">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="d-flex align-items-center">
                                            <Avatar className='me-2' />
                                            <span className="h5 me-2">fauxrivererian</span>
                                            <MdVerified className='text-primary'/>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <Swiper
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            // centeredSlides={true}
                                            //fadeEffect={fade}
                                            effect={"fade"}
                                            speed="1500"
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Autoplay, EffectFade, Navigation, Pagination]}
                                            //onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            className='feed-post-carousel'
                                            // style={{maxWidth: '600px'}}
                                            >
                                            <SwiperSlide>
                                                <div className="feed-media-wrapper">
                                                    <img className="img-fluid" src={ postSlider.img1 } alt='' />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="feed-media-wrapper">
                                                    <img className="img-fluid" src={ postSlider.img2 } alt='' />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="feed-media-wrapper">
                                                    <img className="img-fluid" src={ postSlider.img3 } alt='' />
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <p>Talk about one of the features of your application & how it will help your users</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="py-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h5 className="sugg">Suggestions for you</h5>
                                        <Link className=''>See all</Link>
                                    </div>
                                    <SuggestionCard />
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className="col-lg-3">
                        <div className="row g-4">

                            <div className="col-sm-6 col-lg-12">
                                <div className="card bg-transparent border-0" style={{'--bs-card-bg': 'transparent !important'}}>

                                    <div className="card-header bg-transparent px-0 d-flex align-items-center justify-content-between">
                                        <h5 className="card-title fs-6 mb-0">Suggestions for you</h5>
                                        <Link className="link-light fs-6 link-underline-opacity-0">See All</Link>
                                    </div>


                                    <div className="card-body px-0">

                                        <List
                                            sx={{
                                                width: '100%',
                                                maxWidth: 360,
                                                bgcolor: 'transparent',
                                                border: 'none',
                                                borderColor: 'primary.main',
                                                borderRadius: 1
                                            }}
                                            >
                                            <ListItem className="px-0">
                                                <ListItemAvatar>
                                                    <Avatar src={ imgFeed.userDefault } />
                                                </ListItemAvatar>
                                                <ListItemText primary="imkir" secondary="Follows you" />
                                            </ListItem>
                                            {/* <Spacer variant="inset" component="li" space="12px"/> */}
                                            <ListItem className="px-0">
                                                <ListItemAvatar>
                                                    <Avatar src={ imgFeed.userDefault } />
                                                </ListItemAvatar>   
                                                <ListItemText primary="organic__al" secondary="Followed by chirag_singla17" />
                                            </ListItem>
                                                {/* <Spacer component="li" sx={{marginLeft: '5%', marginRight: '5%'}} space="12px"/> */}
                                            <ListItem className="px-0">
                                                <ListItemAvatar>
                                                    <Avatar src={ imgFeed.userDefault } />
                                                </ListItemAvatar>
                                                <ListItemText primary="im_gr" secondary="Followed by chirag_singla17" />
                                            </ListItem>
                                            <ListItem className="px-0">
                                                <ListItemAvatar>
                                                    <Avatar src={ imgFeed.userDefault } />
                                                </ListItemAvatar>
                                                <ListItemText primary="abh952" secondary="Follows you" />
                                            </ListItem>
                                            <ListItem className="px-0">
                                                <ListItemAvatar>
                                                    <Avatar src={ imgFeed.userDefault } />
                                                </ListItemAvatar>
                                                <ListItemText primary="sakbrl" secondary="Follows you" />
                                            </ListItem>
                                        </List>


                                    </div>

                                </div>
                            </div>

                            

                            <ul className="nav small mt-4 lh-1">
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Help</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Press</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" target="_blank" to="#">API</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" target="_blank" to="#">Jobs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Privacy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Terms</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Locations</Link>
                                </li>
                            </ul>
                            


                            <p className="small mt-1">©2023 <Link className="text-body" target="_blank" to="#"> ichat </Link>
                            </p>

                        </div>
                    </div>


                </div>
            </div>


        </main>
    </>
  )
}


const timestamp = function () {
    let timeIndex = 1678166046264 / 1000;
    let random = Math.floor(Math.random() * 1000);
  
    return Math.round(timeIndex - random);
  };

let stories = [
    {
      id: 'ramon',
      photo: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/1.jpg',
      name: 'Ramon',
      time: timestamp(),
      items: [
        {
          id: 'ramon-1',
          type: 'photo',
          length: 3,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/1.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/1.jpg',
          link: '',
          linkText: false,
          time: timestamp()
        },
        {
          id: 'ramon-2',
          type: 'video',
          length: 0,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/2.mp4',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/2.jpg',
          link: '',
          linkText: false,
          time: timestamp()
        },
        {
          id: 'ramon-3',
          type: 'photo',
          length: 3,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/3.png',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/3.png',
          link: 'https://ramon.codes',
          linkText: 'Visit my Portfolio',
          time: timestamp()
        }
      ]
    },
    {
      id: 'gorillaz',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/2.jpg',
      name: 'Gorillaz',
      time: timestamp(),
      items: [
        {
          id: 'gorillaz-1',
          type: 'video',
          length: 0,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/4.mp4',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/4.jpg',
          link: '',
          linkText: false,
          time: timestamp()
        },
        {
          id: 'gorillaz-2',
          type: 'photo',
          length: 3,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/5.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/5.jpg',
          link: '',
          linkText: false,
          time: timestamp()
        }
      ]
    },
    {
      id: 'ladygaga',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/3.jpg',
      name: 'Lady Gaga',
      time: timestamp(),
      items: [
        {
          id: 'ladygaga-1',
          type: 'photo',
          length: 5,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/6.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/6.jpg',
          link: '',
          linkText: false,
          time: timestamp()
        },
        {
          id: 'ladygaga-2',
          type: 'photo',
          length: 3,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/7.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/7.jpg',
          link: 'http://ladygaga.com',
          linkText: false,
          time: timestamp()
        }
      ]
    },
    {
      id: 'starboy',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/4.jpg',
      name: 'The Weeknd',
      time: timestamp(),
      items: [
        {
          id: 'starboy-1',
          type: 'photo',
          length: 5,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/8.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/8.jpg',
          link: '',
          linkText: false,
          time: timestamp()
        }
      ]
    },
    {
      id: 'riversquomo',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/5.jpg',
      name: 'Rivers Cuomo',
      time: timestamp(),
      items: [
        {
          id: 'riverscuomo-1',
          type: 'photo',
          length: 10,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg',
          link: '',
          linkText: false,
          time: timestamp()
        }
      ]
    }
]

export default Feed