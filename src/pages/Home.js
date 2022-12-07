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
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import '../App.css';


const arrayTemp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const useStyles = makeStyles({
    root: {
        padding: "10px",
        background: "transparent",
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
            <Grid container >
                <Grid item xs={12} sm={6}>
                    <img src="books.png" style={{ width: "100%", height: "100%", margin: "0" }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="statisticsDiv">
                        <div className='collection_area'>
                            <Box
                                sx={{
                                    width: '80%',
                                    height: 'auto',
                                    borderRadius: '16px',
                                    backgroundColor: '#fff',
                                    padding: "2%",

                                }}
                            >
                                <Stack direction="row" spacing={5}>
                                    <div style={{ width: "50%" }}>
                                        <div style={{ fontSize: "15px", }}>
                                            <a>Collections</a>
                                            <Divider style={{ display: "flex" }}>
                                                <AdjustIcon></AdjustIcon><a style={{ fontSize: "15px" }}>Ho.ycomicsEPO</a>
                                            </Divider>
                                        </div>

                                    </div>
                                    <div style={{ fontSize: "15px", display: "flex", width: "50%", justifyContent: "space-between" }}>
                                        <div>
                                            <b>Mintprice</b>
                                            <Divider style={{ display: "flex" }}>
                                                <AdjustIcon></AdjustIcon><a style={{ fontSize: "15px" }}>0.000123ETH</a>
                                            </Divider>
                                        </div>
                                        <div>
                                            <AvatarGroup max={3}>
                                                <Avatar alt="R" src="" style={{ width: "2vw", height: "2vw" }} />
                                                <Avatar alt="T" src="" style={{ width: "2vw", height: "2vw" }} />
                                                <Avatar alt="C" src="" style={{ width: "2vw", height: "2vw" }} />
                                            </AvatarGroup>
                                        </div>
                                    </div>
                                </Stack>
                            </Box>
                        </div>
                        <div className='planet'>
                            The Planet8
                        </div>
                        <div className='btn-group'>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" sx={{ width: '50%', color: 'white', backgroundColor: '#271948', borderColor: 'white' }} >
                                    VIEW NFT<ArrowForwardIcon/>
                                </Button>
                                <Button variant="contained" size="large" sx={{ width: '50%', color: '#271948', backgroundColor: 'white', borderColor: 'white' }}>
                                    MINT NOW
                                </Button>
                            </Stack>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container style={{paddingBottom:"30px"}} >
                <Grid item xs={12}>
                    <div className='second_header'>
                        <b className='interactive'>Interactive Comics</b><br />
                        <b className='script1'>
                            Each comic gives you a gamified, interactive experience<br />
                            for your entertainment.
                        </b>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} p={20} >
                    <div>
                        <img class="planetimg" src="planets.png" />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='storyline'>
                        <div className='story'>
                            <p className="storytitle">Storyline</p>
                            <p className='storycontent'>The HolyVerse story is about a perfectly</p>
                            <p className='storycontent'>secure society taking place on Planet 8, one</p>
                            <p className='storycontent'>of 24 different planets all apart of Holy Galaxy</p>
                            <p className='storycontent'>147. All 24 planets live in peace with the Holy </p>
                            <p className='storycontent'>Heroes Stability Party leading them. Various </p>
                            <p className='storycontent'>smaller barbarian planets inhabited by the Holy </p>
                            <p className='storycontent'>Villains intend to upset stability. </p><br />

                            <p className='storycontent'>Each faction fights for knowledge. Knowledge</p>
                            <p className='storycontent'>separates the victorious from the defeated. </p>
                            <p className='storycontent'>The constant fight for knowledge will unravel </p>
                            <a className='storycontent'>throughout the story.</a>
                        </div>
                    </div>
                </Grid>


                <Grid item xs={12} md={6}>
                    <div className='storyline'>
                        <div className='story'>
                            <p className="storytitle">Original</p>
                            <p className='storycontent'>All content created within our comics includes</p>
                            <p className='storycontent'>an original storyline with unique art.</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} p={20} >
                    <div>
                        <img class="planetimg" src="blankimg.png" />
                    </div>
                </Grid>


                <Grid item xs={12} md={6} p={20} >
                    <div>
                        <img class="planetimg" src="keyboard.png" />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='storyline'>
                        <div className='story' style={{marginLeft:"10%"}}>
                            <p className="storytitle">Gamified</p>
                            <p className='storycontent'>Each comic will provide a gamified experience</p>
                            <p className='storycontent'>allowing you to customize and upgrade your avatars</p>
                            <p className='storycontent'>with digital items, tokens, and more found throughout</p>
                            <p className='storycontent'>the comic. You will embark on an adventure of  </p>
                            <p className='storycontent'>searching for various resources within the storyline </p>
                            <p className='storycontent'>smaller barbarian planets inhabited by the Holy </p>
                            <p className='storycontent'>while learning more about the HolyVerse worlds.</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className='thirdgroup'>

                <Grid container >
                    <Grid item xs={12}>
                        <div className='upgrade'>
                            <div className='upgrade_title'>
                                <a className='upgradetitle'>Upgrade your</a><br />
                                <a className='upgradetitle'>Holy Avartar.</a>
                            </div>
                            <div className='upgradecontent'>
                                <div>
                                    <p className='contentp'>Purchase a Holy Avatar now to start upgrading</p>
                                    <p className='contentp'>and customizing them to your liking.</p>
                                </div>
                                <div className='purchasebtn'>
                                    <Button variant="contained" sx={{ width: "100%", fontSize: "10px", color: '#271948', backgroundColor: 'white', borderColor: 'white' }}>Purchase Now</Button>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    {arrayTemp.map((list, i) => (
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.root}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    width="800"
                                    // image="/avartar1.png"
                                    image={`/art_iamges/avartar${i + 1}.png`}
                                    alt={`${i}`}
                                />
                                <CardContent style={{ backgroundColor: "black", color: "white" }}>
                                    <div className='avartarcontent'>
                                        <div className='nft_symbol'>
                                            <p>HolyHero#3236</p>
                                        </div>
                                        <div>
                                            <AvatarGroup>
                                                <Avatar alt="R" src="../static/images/avatar/1.png" />
                                                <Avatar alt="T" src="/static/images/avatar/2.png" />
                                                <Avatar alt="C" src="/static/images/avatar/3.jpg" />
                                            </AvatarGroup>
                                        </div>
                                    </div>
                                    <div className='nft_price'>
                                        <label>Lastsale</label>&nbsp;&nbsp;&nbsp;2500ETH
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>

                    ))}
                </Grid>
                        <div className='' style={{display: "flex",justifyContent: "center"}}>
                            <button className='btn1' ><ArrowBackIcon /></button>
                            <button className='btn2'><ArrowForwardIcon /></button>
                        </div>
            </div>

            <div className='newslettergroup'>
                <Grid container >
                    <Grid item xs={12}>
                        <div className='newtitle'>
                            <a>Newsletter</a>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='newscontent'>
                            <a>Get the latest Holyverse updates</a>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='dtinput'>
                            <p>Name</p>
                            <TextField id="cstandard-basi" label="" style={{ borderBottom: '1px solid white', color:"white",width: '100%' }} />

                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='dtinput'>
                            <p>Email</p>
                            <TextField id="standard-basic" label="" style={{ borderBottom: '1px solid white',color:"white" ,width: '100%' }} />

                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='subscribebtn'>
                            <Button variant="contained" style={{ color: '#22193e', fontSize: "16px", backgroundColor: 'white', width: '100%' }}>
                                SUBSCRIBE NOW
                            </Button>
                        </div>
                    </Grid>

                </Grid>
            </div>
            <div className='lastgroup'>
                <Grid container >
                    <Grid item xs={12} md={6}>
                        <div className='lastbrand'>
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
            {/* </Grid> */}
        </div>
    );
}

export default Home;