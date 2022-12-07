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
            
            <Paper elevation={3} sx={{ width:"95%",height:"auto", alignItem:"center",backgroundColor:"#F1F1F3",borderRadius:"10px",margin:"auto",marginTop:"10% "}} >
                <div className="makestuff">
                    <p>We Make Stuff<br/> Happen</p>
                </div>
                <div className='stuffscript'>
                    <a>We are laying the groundwork for web3 — the next generation<br/>
                        of the internet full of limitless possibilites.</a>
                </div>
                <button className='circlbelowbtn' style={{marginBottom:"10%"}}><ArrowDownIcon /></button>
            </Paper>

            <Grid container style={{margin:"auto"}}>
                <Grid item xs={12} md={6} p={5}>
                    
                        <div className='sm_box'></div>
                        <div className='lg_box'></div>
                        <div className='sm_box'></div>
                        <div className='lg_box1'></div>
                    
                </Grid>
                <Grid item xs={12} md={6} p={5}>
                    
                        <div className='special1'>
                            <div className='holy'>
                                <b>HolyComics#001</b>
                            </div>
                            <div className='holyscript'>
                                <b>Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do <br/>
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim </b>
                            </div>
                        </div>
                    
                        <div className='sm_box1'></div>
                        <div className='special2'></div>
                            <div className='sm_box1'></div>
                    
                </Grid>
            </Grid>


          
            
                 <Grid container style={{margin:"auto"}}>
                    
                    <Grid item xs={12} md={6} p={5} >
                        
                        <div className='intertitle' >   
                            <div className='abovetitle'>
                                <b>LET'S BUILD THIS THING TOGETHER</b>
                            </div>
                                <p>Ready to<br/>
                                    make a<br/>
                                    Real Change?</p>
                        </div>
                        <div className='intercontent'>
                            <b>Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do<br/>
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. </b>
                        </div>
                        <Button variant="contained" sx={{ backgroundColor: "#22193E", color: "white", fontSize: '20px', marginLeft: "10%", marginBottom: "50px", width: "30%", padding:"20px" }}><b>MINT AN NFT</b></Button>
                    </Grid>
                    <Grid item xs={12} md={6} p={5} >
                    </Grid>
                </Grid>
            
            <div className='lastgroup' style={{marginTop:"-5%"}}>
                <Grid container >
                    <Grid item xs={12} md={8}>
                        <div className='lastbrand'>
                            <div className='lasttitle'><img src="logo-horizontal.png" /></div>
                            <div className='lastcontent'>
                                <p>COMICS REIMAGINED</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        {/* <Grid container > */}
                            <div className='details'>
                                <Grid item xs={12} md={6}>
                                    <div className='infos'>
                                        <div>INFO</div>
                                        <div>About</div>
                                        <div>NFTs</div>
                                        <div>Whitepaper</div>
                                        <div>FAQs</div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>

                                    <div className='socials'>
                                        <div>SOCIALS</div>
                                        <div>Instragram</div>
                                        <div>Twitter</div>
                                        <div>Tiktok</div>
                                    </div>
                                </Grid>
                            </div>
                        {/* </Grid>  */}
                    </Grid>
                </Grid>
                <hr style={{margin:"20px"}}/>
            </div>
        </div>
    );
}

export default Third;