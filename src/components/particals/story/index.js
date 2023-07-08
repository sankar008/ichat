import React from 'react'

import Story from './Story'
import { usersImg } from '../../../assets/img/ImgLib'
import { FaPlus } from 'react-icons/fa'

import { Box, List, Card, IconButton, ImageListItemBar, Modal, Typography, Button } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';




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
  
  
  

const Index = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
  return (
    <>
    <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
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
            <Typography id="spring-modal-title" variant="h6" component="h2">
            Text in a modal
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>

            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <Button className="mt-4" variant="contained">Submit</Button>
            </form>
        </Box>
        </Fade>
    </Modal>
    
    <div className="d-flex">
        <div className="card border border-2 border-dashed h-150px px-4 px-sm-5 shadow-none d-flex align-items-center justify-content-center text-center" onClick={handleOpen}>
            <div>
                <a className="stretched-link btn btn-light rounded-circle icon-md" href="#">
                    <FaPlus />
                </a>
                <h6 className="mt-2 mb-0 small">Add Story</h6>
            </div>
        </div>
        <List
            className=""
            sx={{
                width: '100%',
                // maxWidth: 360,
                bgcolor: 'transparent',
                border: 'none',
                borderColor: 'primary.main',
                borderRadius: 1,
                display: 'flex'
            }}
            >
            <Story 
                userName="Samera"
                storyImg={ usersImg.u1 }
                userStatus="active"
            />
            <Story 
                userName="Julien"
                storyImg={ usersImg.u2 }
                userStatus="inactive"
            />
            <Story 
                userName="Mariane"
                storyImg={ usersImg.u3 }
                userStatus="inactive"
            />
            <Story 
                userName="Rayan Jonson"
                storyImg={ usersImg.u4 }
                userStatus="active"
            />
        </List>
    </div>
    </>
  )
}

export default Index