import React from 'react';
import Main from '../components/main.js';
import Paper from '@mui/material/Paper';

import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import '../css/Third.css';
import '../css/Home.css';
import Typography from '@mui/material/Typography';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import {Stack} from '@mui/system';
import Button from '@mui/material/Button';

  
 

function Third(){

    return (
        <div>
            <div className='navbar'>
                <Main/>
            </div>
            <Paper elevation={3} sx={{ width:"90%",height:"600px", backgroundColor:"#F1F1F3",borderRadius:"10px",marginLeft:"5%",marginTop:"50px",marginBottom:"100px"}} >
                <div className="makestuff">
                    <b>We Make Stuff<br/> Happen</b>
                </div>
                <div className='stuffscript'>
                    <a>We are laying the groundwork for web3 — the next generation<br/>
                        of the internet full of limitless possibilites.</a>
                </div>
                <button className='circlbelowbtn'><ArrowDownIcon /></button>
            </Paper>
            <div className='boxs'>
                    <ImageList variant="masonry" cols={2}>
                        <ImageListItem >
                            <div className='sm_box'></div>
                            <div className='lg_box'></div>
                            <div className='special1'>
                                <div className='holy'>
                                    <b>HolyComics#001</b>
                                </div>
                                <div className='holyscript'>
                                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do <br/>
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </b>
                                </div>
                            </div>
                            <div className='sm_box1'></div>
                            
                             
                        </ImageListItem>
                    </ImageList>
                    <ImageList variant="masonry" cols={2}>
                        <ImageListItem >
                            <div className='sm_box'></div>
                            <div className='lg_box'></div>
                            <div className='special2'></div>
                            <div className='sm_box1'></div>
                            
                        </ImageListItem>
                    </ImageList>
            </div>
            <div className='realchange'>
                <Stack direction="row" spacing={5}>
                    <div className='interusecase'>
                        
                        <div className='intertitle'>   
                        <div className='abovetitle'>
                            <b>LET’S BUILD THIS THING TOGETHER</b>
                        </div>
                            <b>Ready to<br/>
                                make a<br/>
                                Real Change?</b>
                        </div>
                        <div className='intercontent'>
                            <b>Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do<br/>
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. </b>
                        </div>
                        <Button variant="contained" sx={{backgroundColor:"#22193E",color:"white",marginLeft:"20%",marginBottom:"50px"}}>Contained</Button>
                    </div>
                    <div className='blackimg'>
                    </div>
                </Stack>
            </div>
            <div className='lastgruop' style={{height:"400px"}}>
                    <Stack direction="row" spacing={5} style = {{justifyContent:'space-between', marginTop:'150px'}}>
                        <div className='lastbarnd'>
                            <div className='lasttitle'><img  src="logo-horizontal.png" /></div>
                            <div className='lastcontent'>
                                <p>COMICS REIMAGINED</p>
                            </div>
                        </div>
                        <div  className='details'>
                            <div className='infos'>
                                <div>INFO</div>
                                <div>About</div>
                                <div>NFTsl</div>
                                <div>Whitepaper</div>
                                <div>FAQs</div>
                            </div>
                            <div className='socials'>
                                <div>SOCIALS</div>
                                <div>Instragram</div>
                                <div>Twitter</div>
                                <div>Tiktok</div>
                            </div>
                        </div>
                    </Stack>  
                    <hr className='footerline' />
            </div>
        </div>
    );
}

export default Third;