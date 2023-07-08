import React, { useEffect, useState } from 'react'

import './friends.scss'
import * as friendImg from '../../../assets/img/ImgLib.js'

import { FaUserAltSlash } from 'react-icons/fa'
import { Avatar, Button, Card, CardActions, CardContent, IconButton, List, ListItem, Typography } from '@mui/material'

const Index = () => {
  return (
    <>
    <div className="row g-3">
        <div className="col-lg-3 col-md-6">
            <Card className='text-bg-dark'>
                <CardContent>
                    <div className="wrapper">
                        <div className="text-end">
                            <IconButton className='btn btn-light' color="light"><FaUserAltSlash /></IconButton>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <Avatar 
                                className='user-avatar'
                                alt='' 
                                src={ friendImg.userOne } 
                                sx={{ width: 65, height: 65, mb: 2 }} 
                            />
                            <div className="space"></div>
                            <span className="d-block text-light">Sudipto Chakraborty</span>
                            <span className="d-block text-light" style={{'--bs-text-opacity': '.4'}}>Sudipto_355073</span>
                        </div>
                    </div>
                </CardContent>
                <CardActions sx={{ flexDirection: "column" }}>
                    <List sx={{ display: 'flex', flex: '0 0 100%' }}>
                        <ListItem sx={{flexDirection: "column", flex: '1 1 auto'}}>
                            <Typography component="h6"><small>FRIENDS</small></Typography>
                            <Typography>1</Typography>
                        </ListItem>
                        <ListItem sx={{flexDirection: "column", flex: '1 1 auto'}}>
                            <Typography component="h6"><small>POSTS</small></Typography>
                            <Typography>1</Typography>
                        </ListItem>
                        <ListItem sx={{flexDirection: "column", flex: '1 1 auto'}}>
                            <Typography component="h6"><small>LIKES</small></Typography>
                            <Typography>1</Typography>
                        </ListItem>
                    </List>
                </CardActions>
            </Card>
        </div>

        <div className="col-lg-3 col-md-6">
            <Card className='text-bg-dark'>
                <CardContent>
                    <div className="wrapper">
                        <div className="text-end">
                            <IconButton className='btn btn-light' color="light"><FaUserAltSlash /></IconButton>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        
    </div>
    </>
  )
}

export default Index