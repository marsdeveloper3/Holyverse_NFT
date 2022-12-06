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
        maxWidth: "25%",
    },
    media: {
        height: "25%",
    },
});
function Home() {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Main />
            </div>
            <div style={{ height: "auto", display: "flex" }}>
                <SplitPane className="galaxySplit"
                    split="vertical"
                    minSize={100}
                    maxSize={-100}
                    defaultSize={"50%"}
                    style={{ position: "relative" }}
                >
                    {/* <div className="simulationDiv" style={{  height: '740px', width: '100%', background: 'url(./books.png)', backgroundSize: "100% 100%", }}>

                    </div> */}
                    <img src="books.png" style={{ width: "100%", height: "100%", margin: "0" }} />
                    <div className="statisticsDiv" style={{ backgroundColor: '#271948', height: '100%', display: "flex", padding: "10%" }}>
                        <Box
                            sx={{

                                position: 'absolute',
                                width: '80%',
                                height: 'auto',
                                borderRadius: '16px',
                                backgroundColor: '#fff',
                                // mt: '20%',
                                padding:"2%",
                                
                            }}
                        >
                            <Stack direction="row" spacing={5}>
                                <div style={{ width:"50%"}}>
                                    <div style={{ fontSize: "0.8vw",}}>
                                        <a>Collections</a>
                                        <Divider style={{display:"flex"}}>
                                            <AdjustIcon></AdjustIcon><a style={{ fontSize: "1vw" }}>Ho.ycomicsEPO</a>
                                        </Divider>
                                    </div>

                                </div>
                                <div style={{ fontSize: "0.8vw",display:"flex",width:"50%",justifyContent:"space-between" }}>
                                    <div>
                                        <b>Mintprice</b>
                                        <Divider style={{display:"flex"}}>
                                            <AdjustIcon></AdjustIcon><a style={{ fontSize: "1vw" }}>0.000123ETH</a>
                                        </Divider>
                                    </div>
                                    <div>    
                                        <AvatarGroup max={3}>
                                            <Avatar alt="R" src="" style={{width:"2vw",height:"2vw"}}/>
                                            <Avatar alt="T" src="" style={{width:"2vw",height:"2vw"}}/>
                                            <Avatar alt="C" src="" style={{width:"2vw",height:"2vw"}}/>
                                        </AvatarGroup>
                                    </div>
                                </div>
                            </Stack>
                        </Box>
                        <div style={{ position: 'absolute', fontSize: '5vw', color: 'white', marginTop: "35%", marginTop: "40%" }}>
                            The Planet8
                        </div>
                        <div style={{ position: 'absolute', marginTop: "60%", width: "80%" }}>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" sx={{ width: '50%', color: 'white', backgroundColor: '#271948', borderColor: 'white' }} >
                                    VIEW NFT
                                </Button>
                                <Button variant="contained" size="large" sx={{ width: '50%', color: '#271948', backgroundColor: 'white', borderColor: 'white' }}>
                                    MINT NOW
                                </Button>
                            </Stack>
                        </div>
                    </div>
                </SplitPane>
            </div>
            <div className='secondgroup'>
                <div style={{textAlign:"center"}}>
                    <b className='interactive'>Interactive Comics</b><br/>
                    <b className='script1'>
                            Each comic gives you a gamified, interactive experience<br/>
                            for your entertainment.
                    </b>
                </div>
                
                <div className='planets'>
                    <Stack direction="row" spacing={5}>
                        <div className='imgplanets'>
                            <img class="planetimg" src="planets.png" />
                        </div>
                        <div className='storyline'>
                            <div className='story'>
                                <a className="storytitle">Storyline</a><br/>
                                <a className='storycontent'>The HolyVerse story is about a perfectly</a><br/>
                                <a className='storycontent'>secure society taking place on Planet 8, one</a><br/>
                                <a className='storycontent'>of 24 different planets all apart of Holy Galaxy</a><br/>
                                <a className='storycontent'>147. All 24 planets live in peace with the Holy </a><br/>
                                <a className='storycontent'>Heroes Stability Party leading them. Various </a><br/>
                                <a className='storycontent'>smaller barbarian planets inhabited by the Holy </a><br/>
                                <a className='storycontent'>Villains intend to upset stability. </a><br/><br/>

                                <a className='storycontent'>Each faction fights for knowledge. Knowledge</a><br/>
                                <a className='storycontent'>separates the victorious from the defeated. </a><br/>
                                <a className='storycontent'>The constant fight for knowledge will unravel </a><br/>
                                <a className='storycontent'>throughout the story.</a>
                            </div>
                        </div>
                    </Stack>
                </div>
                <div className='blanks'>
                    <Stack direction="row" spacing={5}>
                        <div className='storyline'>
                            <div className='originalp'>
                                <a className="storytitle">Original</a><br/>
                                <a className='storycontent'>All content created within our comics includes</a><br/>
                                <a className='storycontent'>an original storyline with unique art.</a>
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
                                <a className="storytitle">Gamified</a><br/>
                                <a className='storycontent'>Each comic will provide a gamified experience</a><br/>
                                <a className='storycontent'>allowing you to customize and upgrade your avatars</a><br/>
                                <a className='storycontent'>with digital items, tokens, and more found throughout</a><br/>
                                <a className='storycontent'>the comic. You will embark on an adventure of </a><br/>
                                <a className='storycontent'>searching for various resources within the storyline</a><br/>
                                <a className='storycontent'>while learning more about the HolyVerse worlds.</a>
                            </div>
                        </div>
                    </Stack>
                </div>
            </div>
            <div className='thirdgroup'>
                <div className='upgrade'>
                    <div>
                        <a className='upgradetitle'>Upgrade your</a><br/>
                        <a className='upgradetitle'>Holy Avartar.</a>
                    </div>
                    <div className='upgradecontent'>
                        <div>
                            <p className='contentp'>Purchase a Holy Avatar now to start upgrading</p>
                            <p className='contentp'>and customizing them to your liking.</p>    
                        </div>
                        <div className='purchasebtn'>
                            <Button variant="contained"  sx={{ width: "100%",fontSize:"1vw" ,color: '#271948', backgroundColor: 'white', borderColor: 'white' }}>Purchase Now</Button>
                        </div>
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
                                                <Avatar sx={{ height: '1.4vw', width: '1.4vw' }} alt="R" src="../static/images/avatar/1.png" />
                                                <Avatar sx={{ height: '1.4vw', width: '1.4vw' }} alt="T" src="/static/images/avatar/2.png" />
                                                <Avatar sx={{ height: '1.4vw', width: '1.4vw' }} alt="C" src="/static/images/avatar/3.jpg" />
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
                    <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{ width: 60, height: 60, marginRight: "10px", color: 'white', backgroundColor: 'black', borderColor: 'white', borderRadius: "50%", }} >

                    </Button>
                    <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ width: 60, height: 60, marginLeft: "10px", color: 'white', backgroundColor: '#202025', borderRadius: "50%" }}>

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
                    <TextField id="standard-basic" label="" style={{ width: "90%", borderBottom: '1px solid white' }} />

                </div>
                <div className='dtinput'>
                    <p>Email</p>
                    <TextField id="standard-basic" label="" style={{ width: "90%", borderBottom: '1px solid white' }} />

                </div>
                <div className='subscribebtn'>
                    <Button variant="contained" sx={{ width: "90%", marginLeft: "10px", color: '#22193e', fontSize: "16px", backgroundColor: 'white' }}>
                        SUBSCRIBE NOW
                    </Button>
                </div>

            </div>
            <div className='lastgroup'>
                <Stack direction="row" spacing={5} style={{ justifyContent: 'space-between', marginTop: '150px' }}>
                    <div className='lastbarnd'>
                        <div className='lasttitle'><img src="logo-horizontal.png" /></div>
                        <div className='lastcontent'>
                            <p>COMICS REIMAGINED</p>
                        </div>
                    </div>
                    <div className='details'>
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

export default Home;