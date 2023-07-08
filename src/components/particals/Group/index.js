import React, { useEffect, useState } from 'react'

import './group.scss'
import * as groupImg from '../../../assets/img/ImgLib.js'

import { FaHeartbeat, FaShare, FaUserAltSlash, FaEllipsisV } from 'react-icons/fa'
import { AvatarGroup, Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, List, ListItem, Typography, Menu, MenuItem } from '@mui/material'
import styled from '@emotion/styled'





const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Index = () => {

    const [expanded, setExpanded] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    
  return (
    <>
    <div className="row g-3">
        <div className="col-lg-4 col-md-6">
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
                    <Typography>5.7k members</Typography>
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