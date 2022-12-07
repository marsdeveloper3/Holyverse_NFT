import React from 'react';
import '../css/Home.css';
import '../css/Second.css';

import Main from '../components/main.js';
import SplitPane from 'react-split-pane';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import {Stack,styled} from '@mui/system';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@mui/material/Button';
const avatarStyle = {
    color: "green",
    fontSize: "10rem"
  };
const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  const SmallAvatar = withStyles((theme) => ({
    root: {
        
      width: 25,
      height: 25,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }))(Avatar);
 
function Last(){
    //const classes = useStyles();

    return(
        <div>
            <div>
            <Main/>
            </div>

             <Grid container>
                    <Grid item xs={12} sm={6} className={'title'}>
                            
                    </Grid>
                    <Grid item xs={12} sm={6} className={"content"}>
                        <div className='titlecontent'>
                                <b>Ready to<br/>
                                    make a<br/>
                                    Real Change?</b> 
                            </div>
                        <button className='circlbelowbtn1'><ArrowDownIcon /></button>
                    </Grid>
            </Grid>
            {/* <div className='laststuff'> */}
            <Grid container className={'laststuff'}>

                     <Grid item xs={12} sm={6}>
                    
                        <div className='laststufftitle'>   
                            <b>We Make<br/>
                            Stuff Happen</b>
                        </div>
                        <div style={{display:"flex"}}>
                            <img className='whiterectangle' src='blankimg.png'/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className='contenttitle'>   
                                <b>Our Approach</b><br/><br/><br/>
                                <b className='ringtcontent'>Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do <br/>
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>
                                ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing  <br/>
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br/>
                                aliqua. Ut enim ad minim veniam.</b>
                        </div>
                        <div >
                        <img className='bigwhiterectangle' src='blankimg.png'/>
                        </div>
                        <div className='ringtcontent2'>
                                <b>
                                Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do <br/>
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br/> 
                                ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing  <br/>
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br/>
                                aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consecte <br/>
                                tur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et <br/>
                                dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit <br/>
                                amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt <br/>
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam.<br/><br/><br/>

                                Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do <br/>
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>
                                ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing  <br/>
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br/>
                                aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consecte <br/>
                                tur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et <br/>
                                dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit <br/>
                                amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt <br/>
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam.<br/>
                                </b>
                        </div>
                    </Grid>
             </Grid>
            {/* </div> */}
            <div className='teamintro'>
                    <div className='teamtile'>
                        <b>The Team</b><br/>
                    </div>
                    <div className='teamcontent'>
                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do <br/>
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. </b>
                    </div>
                    <div className='avartashow'>
                        <Stack direction="row" spacing={5}>
                            <div className='stuffleft'>
                                <Badge
                                    overlap="circular"
                                    anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                    }}
                                    badgeContent={<SmallAvatar alt="Remy Sharp" src="1.png" />}
                                >
                                    <Avatar alt="Travis Howard" src="2.png" />
                                </Badge>
                                
                                   <br/><b>Team Member1<br/> Position</b>
                                
                            </div>
                            <div className='stuffleft'>
                            <Badge
                                overlap="circular"
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                badgeContent={<SmallAvatar alt="Remy Sharp" src="1.png" />}
                            >
                                <Avatar alt="Travis Howard" src="2.png" />
                            </Badge>
                            <br/><b>Team Member1<br/> Position</b>
                            </div>
                            <div className='stuffleft'>
                            <Badge
                                overlap="circular"
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                badgeContent={<SmallAvatar alt="Remy Sharp" src="1.png" />}
                            >
                                <Avatar alt="Travis Howard" src="2.png" />
                            </Badge>
                            <br/><b>Team Member1<br/> Position</b>
                            </div>
                        </Stack>
                    </div>
            </div>
            
            <Grid container className='greatdesign'>
                <Grid item xs={12} md={6} p={5}>
                    <div className='interusecase'>
                        
                        <div className='intertitle1'>   
                        
                            <b>Make Your Design<br/>
                                Great Again</b>
                        </div>
                    </div>
                        <div className='intercontent'>
                            <b>Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do<br/>
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. </b>
                        </div>

                        <Button variant="contained" sx={{backgroundColor:"#22193E",color:"white",marginLeft:"30%",marginBottom:"50px"}}>MINT AN NFT</Button>
                    </Grid>
                    <Grid item xs={12} md={6} p={5} >
                    </Grid>
                
            </Grid>
            <div className='lastgroup'>
                <Grid container >
                    <Grid item xs={12} md={6}>
                        <div className='lastbarnd'>
                            <div className='lasttitle'><img src="logo-horizontal.png" /></div>
                            <div className='lastcontent'>
                                <p>COMICS REIMAGINED</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* <Grid container > */}
                            <div className='details'>
                                <Grid item xs={12} md={6}>
                                    <div className='infos'>
                                        <div>INFO</div>
                                        <div>About</div>
                                        <div>NFTsl</div>
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

export default Last;