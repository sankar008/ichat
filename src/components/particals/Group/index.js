import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './group.scss'
import * as groupImg from '../../../assets/img/ImgLib.js'

import { FaHeartbeat, FaShare, FaUserAltSlash, FaEllipsisV } from 'react-icons/fa'
import { AvatarGroup, Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, List, ListItem, Typography, Menu, MenuItem, ImageListItem, Modal, Box, createTheme, ThemeProvider, TextField, FormControlLabel, FormControl, InputLabel, Select } from '@mui/material'
import styled from '@emotion/styled'

import { FaEye, FaPlus, FaTimes } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'





  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 700,
    bgcolor: '#212121',
    color: '#aaaaaa',
    border: '2px solid #000',
    boxShadow: 24,
  };
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const Index = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [popopen, setPopopen] = React.useState(false);
    const handleOpen = () => setPopopen(true);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModOpen = () => setModalOpen(true);
    const handleModClose = () => setModalOpen(false);
    const [modCategory, setModCategory] = React.useState('');

    const modalSelectItem = (event) => {
        setModCategory(event.target.value);
    };
    
  return (
    <>
    <Modal
        keepMounted
        open={modalOpen}
        onClose={handleModClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
            <ThemeProvider theme={darkTheme}>
                <Box sx={{ px: 4, py: 1, borderBottom: '1px solid #424242' }}>
                    <Button sx={{ position: 'absolute', right: '2em', top: '5px' }} onClick={handleModClose}><IoMdClose size="20" /> &nbsp; Close</Button>
                    <Typography id="spring-modal-title" className='' variant="h6" component="h2">
                        Create Your Album
                    </Typography>
                </Box>
                <Box sx={{ px: 4, py: 2, display: 'flex', flexDirection: 'column' }}>
                    <div class="profile-pic-wrapper mb-3">
                        <div className="pic-holder">
                            <img id="profilePic" className="pic" src={ groupImg.banProfile } alt="" />
                            <form className='d-none' enctype="multipart/form-data">
                                <input type="file" accept="image/*" id="newProfilePhoto" className="uploadProfileInput" />
                            </form>
                            <label htmlFor="newProfilePhoto" className="upload-file-block">
                                <div className="text-center">
                                    <div className="mb-2"></div>
                                    <div className="text-uppercase">Upload <br /> Groups Photo</div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <TextField
                        id="fieldID-placed-here"
                        className="mb-3"
                        label="Album Name"
                        name="title"
                        placeholder="Album name"
                        defaultValue=""
                        size="small"
                        variant="outlined"
                        //   onChange={handalerChanges}
                    />

                    <FormControl className='mb-3' fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={modCategory}
                            label="Select Category"
                            onChange={modalSelectItem}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    
                    <TextField
                        id="standard-helperText"
                        className='mb-3'
                        label="Description"
                        placeholder='Describe your album ...'
                        defaultValue=""
                        name="details"
                        size="small"
                        variant="outlined"
                        multiline
                        maxRows={4}
                        //   onChange={handalerChanges}
                    />

                        <Button className='mt-auto' variant="contained" type="submit">Submit</Button>
                </Box>
            </ThemeProvider>
        </Box>
    </Modal>
    <div className="row g-3">

        <div className="col-lg-3 col-md-6">

            <ImageListItem cols={1} rows={1} sx={{ display: 'flex'}} style={{ height: '100%'}} >
                <Link style={{ flex: '1 1 auto' }} onClick={handleModOpen}>
                    <Card className="d-flex align-items-center justify-content-center text-light" sx={{ height: '100%', background: 'linear-gradient(45deg, #181818, #090909)', border: '1px solid #262626' }}>
                        <FaPlus size="60"/>
                    </Card>
                </Link>
            </ImageListItem>
        </div>


        <div className="col-lg-3 col-md-6">

            <Card className='text-bg-dark'>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe" src={ groupImg.userOne }>
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton 
                        id="demo-positioned-button"
                        className="btn btn-light" 
                        aria-label="settings" 
                        sx={{ color: '#cecece8a' }} 
                        style={{'--bs-text-opacity': '.4'}}
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <FaEllipsisV />
                    </IconButton>
                    }
                    title="Group Title"
                    subheader={
                        <>
                        <Typography className="text-light" variant="body2" style={{'--bs-text-opacity': '.4'}}>September 14, 2016</Typography>
                        </>
                    }
                />
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose}>Edit Group</MenuItem>
                    <MenuItem onClick={handleClose}>Exit Group</MenuItem>
                    <MenuItem onClick={handleClose}>Remove Group</MenuItem>
                </Menu>

                <CardMedia
                    component="img"
                    image={ groupImg.banProfile }
                    alt="Paella dish"
                    sx={{ height: '10em' }}
                />
                <CardContent>
                    <Typography variant="body2">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                    </Typography>
                </CardContent>
                <CardActions sx={{ padding: '16px' }}>
                    <Typography className="text-light" variant="body2" style={{'--bs-text-opacity': '.4'}}>5.7k members</Typography>
                    <AvatarGroup className="ms-auto" max={4} spacing="small">
                        <Avatar alt="Remy Sharp" src={ groupImg.userOne } />
                        <Avatar alt="Travis Howard" src={ groupImg.userOne } />
                        <Avatar alt="Cindy Baker" src={ groupImg.userOne } />
                        <Avatar alt="Agnes Walker" src={ groupImg.userOne } />
                        <Avatar alt="Trevor Henderson" src={ groupImg.userOne } />
                    </AvatarGroup>
                </CardActions>
            </Card>            
        </div>        
    </div>
    </>
  )
}

export default Index