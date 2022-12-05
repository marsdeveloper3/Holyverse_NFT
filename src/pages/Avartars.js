import React from 'react';
import Main from'../components/main';
import SplitPane from 'react-split-pane';
import '../css/Second.css';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import Avartarcard from '../components/avartarcard.js';
import {Stack,styled} from '@mui/system';
import '../css/Home.css';
const arrayTemp = [1,2,3];
function Second(){
    return (
        <div>
            <div>
                <Main/>
            </div>
            <div className='description'>
            <SplitPane
                    split="vertical"
                    minSize={100}
                    maxSize={-100}
                    defaultSize={"50%"}

                >
                    <div className="title">
                            <div className='titlecontent'>
                                <b>Upgrade your<br/>
                                 Holy Avartar</b> 
                            </div>
                    </div>
                    <div className="content">
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
                    </div>
                </SplitPane>
            </div>
            <div className='avartars'>
                <div className='avartarfield'>
                    {arrayTemp.map((list,i)=>(
                            <Avartarcard />
                        ))}
                </div>
            </div>
            <div className='intro'>
                <Stack direction="row" spacing={5}>
                    <div className='interusecase'>
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
                    </div>
                    <div className='blackimg'>
                            <img className='blackimage' src='black.png'/>
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
            </div>
        </div>
    );
}
export default Second;