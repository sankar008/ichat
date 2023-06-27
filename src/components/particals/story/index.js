import React from 'react'

import Story from './Story'
import { usersImg } from '../../../assets/img/ImgLib'
import { List } from '@mui/material'
import { FaPlus } from 'react-icons/fa'

const index = () => {
  return (
    <>
    <div className="d-flex">
        <div className="card border border-2 border-dashed h-150px px-4 px-sm-5 shadow-none d-flex align-items-center justify-content-center text-center">
            <div>
                <a className="stretched-link btn btn-light rounded-circle icon-md" href="#!">
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

export default index