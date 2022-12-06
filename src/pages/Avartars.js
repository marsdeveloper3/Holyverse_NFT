import React from 'react';
import Main from'../components/main';
import SplitPane from 'react-split-pane';
import '../css/Second.css';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import Avartarcard from '../components/avartarcard.js';
import {Stack,styled} from '@mui/system';
import '../css/Home.css';
import Grid from '@material-ui/core/Grid';
import '../App.css';
import AdjustIcon from '@material-ui/icons/Adjust';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import { Card, CardContent, CardMedia } from '@material-ui/core';

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
function Second(){
    const classes = useStyles();
    return (
        <div>
            <div>
                <Main/>
            </div>
            <Grid container >
                    {/* <div className="title"> */}
                    <Grid item xs={12} sm={6}>
                            <div className='titlecontent'>
                                <b>Upgrade your<br/>
                                 Holy Avartar</b> 
                            </div>
                    </Grid>
                    {/* </div> */}
                    {/* <div className="content"> */}
                    <Grid item xs={12} sm={6}>
                        <div className='contentscript'>
                            <b>
                            Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed<br/>  
                            do eiusmod tempor incididunt ut labore et dolore magna <br/>
                            aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet,<br/> 
                            consectetur adipiscing  elit, sed do eiusmod tempor incididunt <br/>
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam. <br/>
                            Lorem ipsum dolor sit amet, consecte tur adipiscing  elit, sed <br/>
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                            Ut enim ad minim veniam. Lorem ipsum dolor sit amet, <br/>
                            consectetur adipiscing  elit, sed do eiusmod tempor incididunt<br/> 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </b>
                        </div>
                        <button className='circlbelowbtn'><ArrowDownIcon /></button>
                    </Grid>
                    {/* </div> */}
            </Grid>
                
                
            
            <div className='avartars'>
                {/* <div className='avartarfield'>
                    {arrayTemp.map((list,i)=>(
                            <Avartarcard />
                        ))}
                </div> */}
                <Grid container >
                    
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
            </div>
            {/* <div className='intro'> */}
            <Grid container >
                <Grid item xs={12} md={6} p={20} >
                    {/* <div className='interusecase'> */}
                        <div className='intertitle'>   
                            <b>Insert Usecase<br/> here</b>
                        </div>
                        <div className='intercontent'>
                            <b>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>  
                            elit, sed do eiusmod tempor incididunt ut labore et <br/>
                            dolore magna aliqua. Ut enim ad minim veniam. <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing <br/> 
                            elit, sed do eiusmod tempor incididunt ut labore et <br/>
                            dolore magna aliqua. Ut enim ad minim veniam. <br/>
                            Lorem ipsum dolor sit amet, consecte tur adipiscing<br/>  
                            elit, sed do eiusmod tempor incididunt ut labore et<br/>
                            dolore magna aliqua.</b>
                        </div>
                    {/* </div> */}
                </Grid>
                <Grid item xs={12} md={6} p={20} >
                    <div className='blackimg'>
                            <img className='blackimage' src='black.png'/>
                    </div>
                </Grid>
                    
                {/* </Stack> */}
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
            </div>
            {/* </div> */}
            {/* <div className='lastgruop' style={{height:"400px"}}>
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
            </div> */}
        </div>
    );
}
export default Second;