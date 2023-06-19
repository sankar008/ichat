import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import './feed.scss'
import * as imgFeed from '../assets/img/ImgLib'

import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

import { MdHomeFilled, MdOutlineExplore, MdMenu } from "react-icons/md"
import { BiSearch } from "react-icons/bi"
import { BsMessenger, BsHeart } from "react-icons/bs"
import { FiPlusSquare } from 'react-icons/fi'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Feed = () => {
    useEffect(() => {
        document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', 'dark')
    }, [])
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
                                            <i className="fa-solid fa-plus">
                                            </i>
                                        </a>
                                        <h6 className="mt-2 mb-0 small">Add Story</h6>
                                    </div>
                                </div>
                            </div>


                            <div id="stories" className="storiesWrapper stories-square stories user-icon carousel scroll-enable stories user-icon carousel snapgram ">
                                <div className="story " data-id="user-1" data-photo={ imgFeed.userOne }
                                    data-last-updated="1687118471.136">
                                    <a className="item-link" href="">
                                        <span className="item-preview">
                                            <img lazy="eager" src={ imgFeed.userOne } />
                                        </span>
                                        <span className="info" itemProp="author" itemScope=""
                                            itemType="http://schema.org/Person">
                                            <strong className="name" itemProp="name">Samera</strong>
                                            <span className="time">
                                            </span>
                                        </span>
                                    </a>

                                    <ul className="items">
                                        <li className="" data-id="user1-story1">
                                            <a href={ imgFeed.userTwo } data-link="" data-linktext=""
                                                data-time="1687118471.136" data-type="photo" data-length="5">
                                                <img loading="auto" src={ imgFeed.userTwo } />
                                            </a>
                                        </li>
                                        <li className="" data-id="user1-story2">
                                            <a href={ imgFeed.userThree } data-link="" data-linktext=""
                                                data-time="1687118471.136" data-type="video" data-length="">
                                                <img loading="auto" src={ imgFeed.userThree } />
                                            </a>
                                        </li>
                                        <li className="" data-id="user1-story3">
                                            <a href={ imgFeed.userFour } data-link="https://webestica.com/"
                                                data-linktext="Visit my Portfolio" data-time="1687118471.136" data-type="photo"
                                                data-length="5">
                                                <img loading="auto" src={ imgFeed.userFour } />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="story " data-id="user-2" data-photo="assets/images/post/1by1/03.jpg"
                                    data-last-updated="1687118471.137">
                                    <a className="item-link" href="">
                                        <span className="item-preview">
                                            <img lazy="eager" src="assets/images/post/1by1/03.jpg" />
                                        </span>
                                        <span className="info" itemProp="author" itemScope=""
                                            itemType="http://schema.org/Person">
                                            <strong className="name" itemProp="name">Julien</strong>
                                            <span className="time">
                                            </span>
                                        </span>
                                    </a>

                                    <ul className="items">
                                        <li className="" data-id="user2-story1">
                                            <a href="assets/images/albums/03.jpg" data-link="" data-linktext=""
                                                data-time="1687118471.137" data-type="photo" data-length="5">
                                                <img loading="auto" src="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="story " data-id="user-3" data-photo="assets/images/post/1by1/04.jpg"
                                    data-last-updated="1687118471.137">
                                    <a className="item-link" href="">
                                        <span className="item-preview">
                                            <img lazy="eager" src="assets/images/post/1by1/04.jpg" />
                                        </span>
                                        <span className="info" itemProp="author" itemScope=""
                                            itemType="http://schema.org/Person">
                                            <strong className="name" itemProp="name">Mariane</strong>
                                            <span className="time">
                                            </span>
                                        </span>
                                    </a>

                                    <ul className="items">
                                        <li className="" data-id="user3-story1">
                                            <a href="assets/images/albums/04.jpg" data-link="" data-linktext=""
                                                data-time="1687118471.137" data-type="photo" data-length="5">
                                                <img loading="auto" src="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="story " data-id="user-4" data-photo="assets/images/post/1by1/05.jpg"
                                    data-last-updated="1687118471.137">
                                    <a className="item-link" href="">
                                        <span className="item-preview">
                                            <img lazy="eager" src="assets/images/post/1by1/05.jpg" />
                                        </span>
                                        <span className="info" itemProp="author" itemScope=""
                                            itemType="http://schema.org/Person">
                                            <strong className="name" itemProp="name">Lori Stevens</strong>
                                            <span className="time">
                                            </span>
                                        </span>
                                    </a>

                                    <ul className="items">
                                        <li className="" data-id="user4-story1">
                                            <a href="assets/images/albums/05.jpg" data-link="" data-linktext=""
                                                data-time="1687118471.137" data-type="photo" data-length="5">
                                                <img loading="auto" src="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="story " data-id="user-5" data-photo="assets/images/post/1by1/06.jpg"
                                    data-last-updated="1687118471.137">
                                    <a className="item-link" href="">
                                        <span className="item-preview">
                                            <img lazy="eager" src="assets/images/post/1by1/06.jpg" />
                                        </span>
                                        <span className="info" itemProp="author" itemScope=""
                                            itemType="http://schema.org/Person">
                                            <strong className="name" itemProp="name">Samuel Bishop</strong>
                                            <span className="time">
                                            </span>
                                        </span>
                                    </a>

                                    <ul className="items">
                                        <li className="" data-id="user5-story1">
                                            <a href="assets/images/albums/06.jpg" data-link="" data-linktext=""
                                                data-time="1687118471.137" data-type="photo" data-length="5">
                                                <img loading="auto" src="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="story " data-id="user-6" data-photo="assets/images/post/1by1/07.jpg"
                                    data-last-updated="1687118471.137">
                                    <a className="item-link" href="">
                                        <span className="item-preview">
                                            <img lazy="eager" src="assets/images/post/1by1/07.jpg" />
                                        </span>
                                        <span className="info" itemProp="author" itemScope=""
                                            itemType="http://schema.org/Person">
                                            <strong className="name" itemProp="name">Joan Wallace</strong>
                                            <span className="time">
                                            </span>
                                        </span>
                                    </a>

                                    <ul className="items">
                                        <li className="" data-id="user6-story1">
                                            <a href="assets/images/albums/06.jpg" data-link="" data-linktext=""
                                                data-time="1687118471.137" data-type="photo" data-length="5">
                                                <img loading="auto" src="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="story " data-id="user-7" data-photo="assets/images/albums/05.jpg"
                                    data-last-updated="">
                                    <a className="item-link" href="">
                                        <span className="item-preview">
                                            <img lazy="eager" src="assets/images/albums/05.jpg" />
                                        </span>
                                        <span className="info" itemProp="author" itemScope=""
                                            itemType="http://schema.org/Person">
                                            <strong className="name" itemProp="name">Carolyn Ortiz</strong>
                                            <span className="time">
                                            </span>
                                        </span>
                                    </a>

                                    <ul className="items">
                                        <li className="" data-id="user7-story1">
                                            <a href="assets/images/albums/05.jpg" data-link="" data-linktext="" data-time=""
                                                data-type="photo" data-length="3">
                                                <img loading="auto" src="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>



                        <div className="card card-body">
                            <div className="d-flex mb-3">

                                <div className="avatar avatar-xs me-2">
                                    <Link to=""> <img className="avatar-img rounded-circle" src={ imgFeed.userDefault } alt="" /> </Link>
                                </div>

                                <form className="w-100">
                                    <textarea className="form-control pe-4 border-0" rows="2" data-autoresize="" placeholder="Say something....."></textarea>
                                </form>
                            </div>

                            <ul className="nav nav-pills nav-stack small fw-normal">
                                <li className="nav-item">
                                    <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal"
                                        data-bs-target="#feedActionVideo"> <i
                                            className="bi bi-camera-reels-fill text-info pe-2">
                                        </i>Video</a>
                                </li>
                               
                                <li className="nav-item">
                                    <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal"
                                        data-bs-target="#modalCreateFeed"> <i
                                            className="bi bi-emoji-smile-fill text-warning pe-2">
                                        </i>Activity</a>
                                </li>
                                <li className="nav-item dropdown ms-lg-auto">
                                    <div className="d-flex align-items-center">
                                        <a className="nav-link bg-light py-1 px-2 mb-0 me-2" href="#" id="feedActionShare"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        <a className="nav-link bg-light py-1 px-2 mb-0" href="#" id="feedActionShare"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </div>
                                </li>
                            </ul>

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
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Help</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Press</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="#">API</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="#">Jobs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Privacy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Terms</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Locations</a>
                                </li>
                            </ul>
                            


                            <p className="small mt-1">©2023 <a className="text-body" target="_blank"
                                    href="#"> ichat </a>
                            </p>

                        </div>
                    </div>


                </div>
            </div>


        </main>
    </>
  )
}

export default Feed