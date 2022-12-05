import React from 'react';
import SplitPane from "react-split-pane";
import ReactDOM from "react-dom";
import Main from '../components/main.js';
import Imagefield from '../components/ablock.js';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Box';
// import AdjustIcon from '@mui/icons-material/Adjust';
import AdjustIcon from '@material-ui/icons/Adjust';
import { styled, Stack } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import '../css/Home.css';
import { Card, CardContent, CardMedia } from '@material-ui/core';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';



const arrayTemp = [1, 2, 3, 4];
const useStyles = makeStyles({
    root: {
      maxWidth: 400,
    },
    media: {
      height: 140,
    },
  });
function Home() {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Main />
            </div>
            <div style={{ height: "740px" }}>
                <SplitPane
                    split="vertical"
                    minSize={100}
                    maxSize={-100}
                    defaultSize={"50%"}

                >
                    <div className="simulationDiv" style={{ height: '740px', width: '100%', background: 'url(./books.png)', backgroundSize: "100% 100%", }}>

                    </div>
                    <div className="statisticsDiv" style={{ position: 'relative', backgroundColor: '#271948', height: '740px' }}>
                        <Box
                            sx={{

                                position: 'absolute',
                                width: '606px',
                                height: '60px',
                                borderRadius: '16px',
                                backgroundColor: '#fff',
                                mt: '100px',
                                ml: '25%',
                                mr: 'auto',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],

                                },
                            }}
                        >
                            <Stack direction="row" spacing={5}>
                                <div style={{ fontSize: "13px", marginLeft: "10px", marginBottom: "3px" }}>
                                    Collections
                                    <Divider>
                                        <AdjustIcon></AdjustIcon><a style={{ fontSize: "18px" }}>Ho.ycomicsEPO</a>
                                    </Divider>

                                </div>
                                <div style={{ fontSize: "13px" }}>
                                    Mintprice
                                    <Divider>
                                        <AdjustIcon></AdjustIcon><a style={{ fontSize: "18px" }}>0.000123ETH</a>
                                    </Divider>

                                </div>
                                <div>
                                    <AvatarGroup max={4}>
                                        <Avatar alt="R" src="../static/images/avatar/1.png" />
                                        <Avatar alt="T" src="/static/images/avatar/2.png" />
                                        <Avatar alt="C" src="/static/images/avatar/3.jpg" />
                                        <Avatar alt="A" src="../static/images/avatar/4.jpg" />
                                    </AvatarGroup>
                                </div>
                            </Stack>
                        </Box>
                        <div style={{ position: 'absolute', fontSize: '70px', color: 'white', marginTop: "35%", marginLeft: "25%" }}>
                            The Planet8
                        </div>
                        <div style={{ position: 'absolute', marginTop: "45%", marginLeft: "25%" }}>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" sx={{ width: '250px', color: 'white', backgroundColor: '#271948', borderColor: 'white' }} >
                                    VIEW NFT
                                </Button>
                                <Button variant="contained" size="large" sx={{ width: '250px', color: '#271948', backgroundColor: 'white', borderColor: 'white' }}>
                                    MINT NOW
                                </Button>
                            </Stack>
                        </div>
                    </div>
                </SplitPane>
            </div>
            <div className='secondgroup'>
                <div className='interactive'>
                    Interactive Comics
                    <p className='script1'>
                        Each comic gives you a gamified, interactive experience
                        <p>for your entertainment.</p>
                    </p>
                </div>
                <div className='planets'>
                    <Stack direction="row" spacing={5}>
                        <div className='imgplanets'>
                            <img class="planetimg" src="planets.png" />
                        </div>
                        <div className='storyline'>
                            <div className='story'>
                                <p className="storytitle">Storyline</p>
                                <p className='storycontent'>The HolyVerse story is about a perfectly</p>
                                <p className='storycontent'>secure society taking place on Planet 8, one</p>
                                <p className='storycontent'>of 24 different planets all apart of Holy Galaxy</p>
                                <p className='storycontent'>147. All 24 planets live in peace with the Holy </p>
                                <p className='storycontent'>Heroes Stability Party leading them. Various </p>
                                <p className='storycontent'>smaller barbarian planets inhabited by the Holy </p>
                                <p className='storycontent'>Villains intend to upset stability. </p>

                                <p className='storycontent'>Each faction fights for knowledge. Knowledge</p>
                                <p className='storycontent'>separates the victorious from the defeated. </p>
                                <p className='storycontent'>The constant fight for knowledge will unravel </p>
                                <p className='storycontent'>throughout the story.</p>
                            </div>
                        </div>
                    </Stack>
                </div>
                <div className='blanks'>
                    <Stack direction="row" spacing={5}>
                        <div className='storyline'>
                            <div className='originalp'>
                                <p className="storytitle">Original</p>
                                <p className='storycontent'>All content created within our comics includes</p>
                                <p className='storycontent'>an original storyline with unique art.</p>
                            </div>
                        </div>
                        <div className='imgblank'>
                            <img class="blankimg" src="blankimg.png" />
                        </div>
                    </Stack>
                </div>
                <div className='keyboard'>
                    <Stack direction="row" spacing={5}>
                        <div className='imgplanets'>
                            <img class="planetimg" src="keyboard.png" />
                        </div>
                        <div className='storyline'>
                            <div className='story3'>
                                <p className="storytitle">Gamified</p>
                                <p className='storycontent'>Each comic will provide a gamified experience</p>
                                <p className='storycontent'>allowing you to customize and upgrade your avatars</p>
                                <p className='storycontent'>with digital items, tokens, and more found throughout</p>
                                <p className='storycontent'>the comic. You will embark on an adventure of </p>
                                <p className='storycontent'>searching for various resources within the storyline</p>
                                <p className='storycontent'>while learning more about the HolyVerse worlds.</p>
                            </div>
                        </div>
                    </Stack>
                </div>
            </div>
            <div className='thirdgroup'>
                <div className='upgrade'>
                    <p className='upgradetitle'>Upgrade your</p>
                    <p className='upgradetitle'>Holy Avartar.</p>
                </div>
                <div className='upgradecontent'>
                    <div>
                        <p className='contentp'>Purchase a Holy Avatar now to start upgrading</p>
                        <p className='contentp'>and customizing them to your liking.</p>
                    </div>
                    <div className='purchasebtn'>
                        <Button variant="contained" size="large" sx={{ width: "230px", color: '#271948', backgroundColor: 'white', borderColor: 'white' }}>Purchase Now</Button>
                    </div>
                </div>
                <div className='imgshowblock'>
                    <Stack direction="row" spacing={10}>
                        {arrayTemp.map((list, i) => (
                            <Card className={classes.root}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    width="800"
                                    image="/avartar1.png"
                                    alt="1"
                                />
                                <CardContent style={{ backgroundColor: "black", color: "white" }}>
                                    <div className='avartarcontent'>
                                        <div className='namesize'>
                                            <p>HolyHero#3236</p>
                                        </div>
                                        <div>
                                            <AvatarGroup max={3}>
                                                <Avatar sx={{ height: '21px', width: '21px' }} alt="R" src="../static/images/avatar/1.png" />
                                                <Avatar sx={{ height: '21px', width: '21px' }} alt="T" src="/static/images/avatar/2.png" />
                                                <Avatar sx={{ height: '21px', width: '21px' }} alt="C" src="/static/images/avatar/3.jpg" />
                                            </AvatarGroup>
                                        </div>
                                    </div>
                                    <div className='lastsale'>
                                        Lastsale 2500ETH
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </div>
                <div className='imgshowblock'>
                    <Stack direction="row" spacing={10}>
                        {arrayTemp.map((list, i) => (
                            <Card className={classes.root}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    width="800"
                                    image="/avartar1.png"
                                    alt="1"
                                />
                                <CardContent style={{ backgroundColor: "black", color: "white" }}>
                                    <div className='avartarcontent'>
                                        <div className='namesize'>
                                            <p>HolyHero#3236</p>
                                        </div>
                                        <div>
                                            <AvatarGroup max={3}>
                                                <Avatar sx={{ height: '21px', width: '21px' }} alt="R" src="../static/images/avatar/1.png" />
                                                <Avatar sx={{ height: '21px', width: '21px' }} alt="T" src="/static/images/avatar/2.png" />
                                                <Avatar sx={{ height: '21px', width: '21px' }} alt="C" src="/static/images/avatar/3.jpg" />
                                            </AvatarGroup>
                                        </div>
                                    </div>
                                    <div className='lastsale'>
                                        Lastsale 2500ETH
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </div>
                <div className='imgshowblock'>
                    <Stack direction="row" spacing={10}>
                        {arrayTemp.map((list, i) => (
                            <Card className={classes.root}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    width="800"
                                    image="/avartar1.png"
                                    alt="1"
                                />
                                <CardContent style={{ backgroundColor: "black", color: "white" }}>
                                    <div className='avartarcontent'>
                                        <div className='namesize'>
                                            <p>HolyHero#3236</p>
                                        </div>
                                        <div>
                                            <AvatarGroup max={3}>
                                                <Avatar sx={{ height: '21px', width: '21px' }} alt="R" src="../static/images/avatar/1.png" />
                                                <Avatar sx={{ height: '21px', width: '21px' }} alt="T" src="/static/images/avatar/2.png" />
                                                <Avatar sx={{ height: '21px', width: '21px' }} alt="C" src="/static/images/avatar/3.jpg" />
                                            </AvatarGroup>
                                        </div>
                                    </div>
                                    <div className='lastsale'>
                                        Lastsale 2500ETH
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </div>
                <div className='bottombtn'>
                    <Button  variant="outlined" startIcon={<ArrowBackIcon />} sx={{ width:60, height:60,marginRight:"10px" ,color: 'white', backgroundColor: 'black', borderColor: 'white',borderRadius: "50%", }} >
                    
                    </Button>
                    <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ width: 60, height:60,marginLeft:"10px", color: 'white', backgroundColor: '#202025', borderRadius: "50%" }}>
                        
                    </Button>
                </div>
            </div>
            <div className='newslettergroup'>
                <div className='newtitle'>
                    <p>Newsletter</p>
                </div>
                <div className='newscontent'>
                    <p>Get the latest Holyverse updates</p>
                </div>
                <div className='dtinput'>
                    <p>Name</p>
                    <TextField id="standard-basic" label="" style={{ width: "90%", borderBottom:'1px solid white' }} />
                    
                </div>
                <div className='dtinput'>
                    <p>Email</p>
                    <TextField id="standard-basic" label="" style={{ width: "90%", borderBottom:'1px solid white' }} />
                    
                </div>
                <div className='subscribebtn'>
                    <Button variant="contained" sx={{ width: "90%", marginLeft:"10px", color: '#22193e',fontSize:"16px" ,backgroundColor: 'white'}}>
                        SUBSCRIBE NOW
                    </Button>
                </div>
                
            </div>
            <div className='lastgroup'>
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
                    <Divider variant="middle" />
            </div>
        </div>
    );
}

export default Home;