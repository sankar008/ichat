import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import './album.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup, faPen } from '@fortawesome/free-solid-svg-icons';
import { FaEye, FaPlus, FaTimes } from 'react-icons/fa'


import { Box, Button, Card, Container, FormControl, FormControlLabel, FormLabel, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Modal, Paper, Radio, RadioGroup, Switch, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import styled from '@emotion/styled';





function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));

  
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
    width: '70vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    pb: 0,
  };

  const initialvalue = {
    title: "",
    details: "",
    image: "",
    onlyMe: ""
  };

const Index = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const albumClose = () => setOpen(false);

    const [formData, setformData] = React.useState(initialvalue);

    const [imageData, setImagedata] = useState([]);

    const [imageArray, setImageArray] = useState([]);

    const handalerChanges = async (e) => {     
      const { name, value } = e.target;
      setformData({ ...formData, [name]: value });
    }

    const imageHandelar = async (e) => {
      let files = e.target.files;
      let fileReader = new FileReader();
      fileReader.readAsDataURL(files[0]);

      fileReader.onload = async (event) => {
          let imageurl = imageArray;
          imageurl.push(event.target.result);
          setImagedata(imageData)
          setImageArray(imageData)
      }

      console.log(imageData);
      
    };


  return (
    <>    
    <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={albumClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container spacing={2} sx={{ '& .MuiTextField-root': { width: '100%' }, }}>
                <Grid item xs={12} sx={{ borderBottom: '1px solid #f3f3f3' }}>
                    <Button sx={{ position: 'absolute', right: '0', top: '0' }} onClick={albumClose}>Close</Button>
                    <Typography id="spring-modal-title" className='mb-2' variant="h6" component="h2">
                        Create Your Album
                    </Typography>
                </Grid>
                <Grid item xs={3} sx={{ pr: '16px', py: 2, background: '#f3f3f3', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <TextField
                        id="fieldID-placed-here"
                        label="Album Name"
                        name="title"
                        placeholder="Album name"
                        defaultValue=""
                        size="small"
                        variant="outlined"
                        onChange={handalerChanges}
                    />
                    
                    <TextField
                        id="standard-helperText"
                        label="Description"
                        placeholder='Describe your album ...'
                        defaultValue=""
                        name="details"
                        size="small"
                        variant="outlined"
                        onChange={handalerChanges}
                    />

                    <TextField
                        id="fieldID-placed-here"
                        label=""
                        placeholder=""
                        type="file"
                        name="image"
                        size="small"
                        variant="outlined"
                        onChange={imageHandelar}
                        multiple
                    />
                    <FormControlLabel name="onlyMe" label="Public" labelPlacement="start" control={<Switch defaultChecked />} sx={{ display: 'flex', justifyContent: 'space-between' }} />   

                    <Button className='mt-auto' variant="contained" type="submit">Submit</Button>
                </Grid>
                <Grid item xs={9}>
                    <ImageList className='album-images' sx={{ width: 500, height: 450 }} cols={3} data-id={imageArray.length} rowHeight={164}>
                        {imageArray.map((item, key) => (
                            <ImageListItem key={key} sx={{ position: 'relative' }}>
                                <img
                                    src={item}
                                    loading="lazy"
                                />
                                <div className="actionBtns">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <IconButton
                                                className="text-end"
                                                sx={{ color: 'white' }}
                                            >
                                                <FaEye size="20" />
                                            </IconButton>
                                        </li>
                                        <li className="list-inline-item">
                                            <IconButton
                                                className="text-end"
                                                sx={{ color: 'white' }}
                                            >
                                                <FaTimes size="20" />
                                            </IconButton>
                                        </li>
                                    </ul>
                                </div>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>      
          </Box>
        </Fade>
      </Modal>


    <ImageList
        sx={{}}
        variant="quilted"
        cols={6}
        >
        <ImageListItem cols={1} rows={1}>
            <Link>
                <Card className="d-flex align-items-center justify-content-center text-light" sx={{ height: '100%', background: 'linear-gradient(45deg, #181818, #090909)', border: '1px solid #262626' }}>
                    <FaPlus size="60" onClick={handleOpen}/>
                </Card>
            </Link>
        </ImageListItem>
        
        {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
            />
            <ImageListItemBar
                sx={{
                    background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    flexDirection: 'row-reverse',
                }}
                // title={}
                position="top"
                actionIcon={
                    <>
                    <IconButton
                        className="text-end"
                        sx={{ color: 'white' }}
                        aria-label={`star ${item.title}`}
                    >
                        <FontAwesomeIcon icon={faTrashAlt} height="20px" width="20px" />
                    </IconButton>
                    <IconButton
                        sx={{ color: 'white' }}
                        aria-label={`star ${item.title}`} 
                        onClick={handleOpen}
                    >
                        <FontAwesomeIcon icon={faLayerGroup} height="20px" width="20px" />
                    </IconButton>
                    
                    <IconButton
                        sx={{ color: 'white' }}
                        aria-label={`star ${item.title}`}
                        onClick={handleOpen}
                    >
                        <FontAwesomeIcon icon={faPen}  height="20px" width="20px" />
                    </IconButton>
                    
                    
                    </>
                }
                actionPosition="left"
                />
                <Typography sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                padding: '.1em .5em',
                background: '#000000a5',
                borderRadius: '5px',
                textAlign: 'center' ,
                }}>{item.title}</Typography>
            </ImageListItem>
        ))}
    </ImageList>
    </>
  )
}



/* ==== Albums Data ==== */
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 1,
      cols: 1,
    },
  ];

/* ==== Modal Data ==== */
const modalData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1627012481660-64a3f3d8ebad',
      title: 'Breakfast',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1587040273238-9ba47c714796',
      title: 'Breakfast',
      rows: 1,
      cols: 1,
    },
  ];

export default Index