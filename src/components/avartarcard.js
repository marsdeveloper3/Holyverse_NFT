import React from 'react';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { makeStyles } from '@material-ui/core/styles';
import '../css/Second.css';
import { ClassNames } from '@emotion/react';
import { styled, Stack } from '@mui/system';


const arrayTemp = [1,2,3,4];
const useStyles = makeStyles({
    root:{
        maxwidth: 400,
    },
    media:{
        height:140,
    }
});
function Avartarcard(){
    return (
        <Stack direction="row" spacing={5}>
            {arrayTemp.map((list,i)=>(
                    <Card className={ClassNames.root}>
                    <CardMedia
                        component="img"
                        height="200"
                        width="800"
                        image="/avartar1.png"
                        alt="2"
                    />
                    <CardContent style={{ backgroundColor: "black", color: "white" }}>
                        <div className='avartarcontent'>
                            <div className='namesize'>
                                <p>HolyHero#3066</p>
                            </div>
                            <div>
                                <AvatarGroup max={3}>
                                    <Avatar sx={{ height: '21px', width: '21px' }} alt="R" src="" />
                                    <Avatar sx={{ height: '21px', width: '21px' }} alt="T" src="" />
                                    <Avatar sx={{ height: '21px', width: '21px' }} alt="C" src="" />
                                </AvatarGroup>
                            </div>
                        </div>
                        <div className='lastsale'>
                            Lastsale: 1900ETH
                        </div>
                    </CardContent>
                </Card>
            ))}
        </Stack>
    );
}

export default Avartarcard;