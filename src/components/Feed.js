import React, { useEffect, useState } from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom';

import Sidebar from './particals/sudebar'
import Story from './particals/story';
import './feed.scss'
import * as imgFeed from '../assets/img/ImgLib'
import { postSlider } from '../assets/img/ImgLib';
import AccountType from "../components/AccountType";

import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

// import { Zuck } from 'zuck.js';
// import 'zuck.js/css';
// import 'zuck.js/skins/snapgram';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';


import { MdVerified } from "react-icons/md"
import { BiVideo } from "react-icons/bi"
import { BsHeart, BsEmojiSmile, BsChat, BsSend, BsHeartFill, BsBookmark, BsBookmarkFill } from "react-icons/bs"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import SuggestionCard from './particals/SuggestionCard';




/* ====*** Design Support ***==== *//*

https://mui.com/material-ui/react-skeleton/#animations
https://mui.com/material-ui/react-progress/

*//* ====*** Design Support ***==== */



const Feed = () => {
  
    // let [ feedList, setFeedList ] = useState(stories)
    let [ isFocusPost, setIsFocusPost ] = useState(false);
    useEffect(() => {

        document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', 'dark');
        autoResize();
        // focusPost()
    }, []);
    
    function autoResize() {
        document.querySelectorAll('[data-autoresize]').forEach(function (element) {
			var offset = element.offsetHeight - element.clientHeight;
            console.log(offset)
			element.addEventListener('input', function (event) {
				event.target.style.height = 'auto';
				event.target.style.height = event.target.scrollHeight + offset + 'px';
			});
		});
    };
    const focusPost = () => {
        setIsFocusPost(!isFocusPost)
        /* const isFocusPost = props.isFocusPost;
        if( isFocusPost ) {
            document.body.classList.add('readyPost')
            // return (
            //     <></>
            // )
        }
        return */
        document.body.classList.add('readyPost')
        const elOverlay = document.createElement('div')
        elOverlay.classList.add('post-overlay')
        const getElBefore = document.querySelector('.vstack')
        console.log(getElBefore)
        getElBefore.insertBefore(elOverlay, null)
        // elOverlayFull.insertBefore(getElBefore, null)
    };

  return (
    JSON.parse(localStorage.getItem("isLoginCheck"))?
    <>
        <main className='py-5'>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <Link href="/"><img className='img-fluid' src={ imgFeed.logoLight } alt="" /></Link>
                        </div>
                        <Sidebar />
                    </div>
                    <div className="col-md-8 col-lg-6 vstack gap-4">
                        <Story />
                        



                        <div className="card card-body card-post mb-5">
                            <div className="d-flex mb-3">

                                <div className="avatar avatar-xs me-2">
                                    <Link to=""> <img className="avatar-img rounded-circle" src={ imgFeed.userDefault } alt="" /> </Link>
                                </div>

                                <form className="w-100">
                                    <textarea className="form-control pe-4 border-0" rows="2" onInput={autoResize()} onClick={ focusPost } data-autoresize="" placeholder="Say something....."></textarea>
                                </form>
                            </div>

                            <ul className="nav nav-pills nav-stack small fw-normal">
                                <li className="nav-item me-2">
                                    <a className="nav-link rounded-pill bg-light text-white py-1 px-4 mb-0" href="#!">
                                        <BiVideo size="20" /> Video
                                    </a>
                                </li>
                               
                                <li className="nav-item">
                                    <a className="nav-link rounded-pill bg-light text-white py-1 px-4 mb-0" href="#!" >
                                        <BsEmojiSmile /> Activity
                                    </a>
                                </li>
                                <li className="nav-item dropdown ms-lg-auto">
                                    <div className="d-flex align-items-center">
                                        <span className='me-3'>Share to</span>
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
                                            <Avatar className='me-3' />
                                            <span className="h5 mb-0 me-2">fauxrivererian</span>
                                            <MdVerified className='text-primary'/>
                                            <span className='ms-2'>&#8226; 5h</span>
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
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item"><Link className='link-light'><BsHeart size="20" /></Link></li>
                                                <li className="list-inline-item"><Link className='link-light'><BsChat size="20" /></Link></li>
                                                <li className="list-inline-item"><Link className='link-light'><BsSend size="20" /></Link></li>
                                            </ul>

                                            <Button className='text-light' style={{minWidth: 'auto'}}><BsBookmark size="20" /></Button>
                                        </div>
                                    </div>
                                </div>
                                <span className="d-block my-2">741,368 likes</span>
                                <p><b>lewishamilton</b> For every video we upload to YouTube we create different versions of the final thumbnail. <Button size="small" sx={{textTransform: 'capitalize'}}><span>...more</span></Button></p>
                                <span className="d-block text-muted my-2">View all 37 comments</span>
                                <textarea className="form-control" name="" id="" placeholder='Add a comment…'></textarea>
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

                            <div className="col-12">
                                <div className="card bg-transparent border-0" style={{'--bs-card-bg': 'transparent !important'}}>

                                    <div className="card-header bg-transparent px-0 d-flex align-items-center justify-content-between">
                                        <h5 className="card-title fs-6 mb-0">Suggestions for you</h5>
                                        <Link className="link-light fs-6 link-underline-opacity-0">See All</Link>
                                    </div>


                                    <div className="card-body p-0">

                                        <List
                                            className="suggListUser"
                                            sx={{
                                                width: '100%',
                                                // maxWidth: 360,
                                                bgcolor: 'transparent',
                                                border: 'none',
                                                borderColor: 'primary.main',
                                                borderRadius: 1
                                            }}
                                            >
                                            <ListItem className="px-0"
                                                secondaryAction={
                                                    <Button variant="text" edge="end" sx={{textTransform: 'capitalize'}}>Follow</Button>
                                                }
                                            >
                                                <ListItemAvatar>
                                                    <Avatar src={ imgFeed.userDefault } />
                                                </ListItemAvatar>
                                                {/* <ListItemText primary="imkir" secondary="Follows you" /> */}
                                                <ListItemText
                                                    primary={
                                                        <Typography className="" color="var(--bs-light-text-emphasis)">
                                                            imkir
                                                        </Typography>
                                                    }
                                                    secondary={
                                                        <Typography component="span" variant="body2" color="var(--bs-gray-300)">
                                                            Follows you
                                                        </Typography>
                                                    }
                                                />
                                            </ListItem>
                                            <ListItem className="px-0"
                                                secondaryAction={
                                                    <Button variant="text" edge="end" sx={{textTransform: 'capitalize'}}>Follow</Button>
                                                }
                                            >
                                                <ListItemAvatar>
                                                    <Avatar src={ imgFeed.userDefault } />
                                                </ListItemAvatar>
                                                {/* <ListItemText primary="imkir" secondary="Follows you" /> */}
                                                <ListItemText
                                                    primary={
                                                        <Typography className="" color="var(--bs-light-text-emphasis)">
                                                            organic__al
                                                        </Typography>
                                                    }
                                                    secondary={
                                                        <Typography component="span" variant="body2" color="var(--bs-gray-300)">
                                                            Followed by chirag_singla17
                                                        </Typography>
                                                    }
                                                />
                                            </ListItem>
                                            <ListItem className="px-0"
                                                secondaryAction={
                                                    <Button variant="text" edge="end" sx={{textTransform: 'capitalize'}}>Follow</Button>
                                                }
                                            >
                                                <ListItemAvatar>
                                                    <Avatar src={ imgFeed.userDefault } />
                                                </ListItemAvatar>
                                                {/* <ListItemText primary="imkir" secondary="Follows you" /> */}
                                                <ListItemText
                                                    primary={
                                                        <Typography className="" color="var(--bs-light-text-emphasis)">
                                                            im_gr
                                                        </Typography>
                                                    }
                                                    secondary={
                                                        <Typography component="span" variant="body2" color="var(--bs-gray-300)">
                                                            Followed by chirag_singla17
                                                        </Typography>
                                                    }
                                                />
                                            </ListItem>
                                            <ListItem className="px-0"
                                                secondaryAction={
                                                    <Button variant="text" edge="end" sx={{textTransform: 'capitalize'}}>Follow</Button>
                                                }
                                            >
                                                <ListItemAvatar>
                                                    <Avatar src={ imgFeed.userDefault } />
                                                </ListItemAvatar>
                                                {/* <ListItemText primary="imkir" secondary="Follows you" /> */}
                                                <ListItemText
                                                    primary={
                                                        <Typography className="" color="var(--bs-light-text-emphasis)">
                                                            abh952
                                                        </Typography>
                                                    }
                                                    secondary={
                                                        <Typography component="span" variant="body2" color="var(--bs-gray-300)">
                                                            Follows you
                                                        </Typography>
                                                    }
                                                />
                                            </ListItem>
                                            <ListItem className="px-0"
                                                secondaryAction={
                                                    <Button variant="text" edge="end" sx={{textTransform: 'capitalize'}}>Follow</Button>
                                                }
                                            >
                                                <ListItemAvatar>
                                                    <Avatar src={ imgFeed.userDefault } />
                                                </ListItemAvatar>
                                                {/* <ListItemText primary="imkir" secondary="Follows you" /> */}
                                                <ListItemText
                                                    primary={
                                                        <Typography className="" color="var(--bs-light-text-emphasis)">
                                                            sakbrl
                                                        </Typography>
                                                    }
                                                    secondary={
                                                        <Typography component="span" variant="body2" color="var(--bs-gray-300)">
                                                            Follows you
                                                        </Typography>
                                                    }
                                                />
                                            </ListItem>

                                        </List>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="col-12">
                                <ul className="nav small mt-4 lh-1 footer-quick-link">
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
                            </div>
                            


                            <p className="small mt-2">© 2023 <Link className="text-body" target="_blank" to="#"> iCHAT </Link>
                            </p>

                        </div>
                    </div>


                </div>
            </div>


        </main>
    </>:<AccountType/>
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