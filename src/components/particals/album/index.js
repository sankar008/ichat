import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup, faPen } from '@fortawesome/free-solid-svg-icons';
import { FaPlus } from 'react-icons/fa'


import { Box, Button, Card, IconButton, ImageList, ImageListItem, ImageListItemBar, Modal, Typography } from '@mui/material'
import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';





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
    width: '70vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Index = () => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const albumClose = () => setOpen(false);


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
            <Button>Close</Button>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
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
                    <FaPlus size="60"/>
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



const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 1,
      cols: 1,
    }
  ];

export default Index