import React, { Component } from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.css';

class SPSGame extends Component {
    constructor(){
        super();
        this.handlePaper = this.handlePaper.bind(this);
        this.handleStone = this.handleStone.bind(this);
        this.handleScissor=this.handleScissor.bind(this);
    }
    state = { 
        robonum:null,
        stone:'💎',
        paper:'📰',
        scissor:'✂️',
        user:null,
        botscore:0,
        userscore:0,
        text:null
    }
    handleBot(){
        var get=Math.floor(Math.random() * (3))+1;
        if(get===1){
            this.setState({robonum:this.state.stone});    
        }
        else if(get===2){
            this.setState({robonum:this.state.paper});    
        }
        else{
            this.setState({robonum:this.state.scissor});
        }
    }
    handleStone(){
        this.handleBot();
        this.setState({user:'💎'}, () => {                              
            //callback
            this.handleResult();
          });
    }

    handlePaper(){
        this.handleBot();
        this.setState({user:'📰'}, () => {                              
            //callback
            this.handleResult();
          });        
    }

    handleScissor(){
        this.handleBot();
        this.setState({user:'✂️'}, () => {                              
            //callback
            this.handleResult();
          });
    }

    handleResult(){
        var bot = this.state.robonum;
        var user= this.state.user;
        if(bot===user){
            this.setState({res:1,text:"It's a tie"});
        }
        else if( (bot===this.state.stone && user===this.state.scissor) ||
            (bot===this.state.scissor && user===this.state.paper) || 
            (bot===this.state.paper && user===this.state.stone)){
                this.setState({res:0,text:"Robot Wins",botscore:this.state.botscore+1});
            }
        else{
            this.setState({res:2,text:"You Win",userscore:this.state.userscore+1});
        }
    }

    render() { 
        
        return ( 
            <React.Fragment>
                <div className="stripe">
                    <br/><h1>Stone Paper Scissors</h1> <br/>
                    <div className=" col-sm-12 row" style={{alignContent:'center',paddingLeft:'20%',paddingRight:'20%'}}>
                        <div className="col-sm-6" style={{alignContent:'center',display:"inline",float:'right'}}>
                            <div>
                            {this.state.robonum!==null? "Robot pressed":""}
                            </div><br/>
                            <div className="choice">
                                {this.state.robonum!==null? this.state.robonum:""}
                            </div>                            
                        </div>
                        <div className="col-sm-6" style={{display:"inline"}}>
                            <div>
                                {this.state.user!==null? "You pressed ":""}
                            </div>
                            <br/>
                            <div className="choice">
                                {this.state.user!==null? this.state.user:""}
                            </div>                            
                            
                        </div>
                    </div>
                    <p className={this.state.res===0?"spsresult redText":(this.state.res===1?"spsresult yellowText":"spsresult greenText")}> {this.state.text}<br/>
                    </p>
                    <br/>
                    <div className=" col-sm-12 row" style={{alignContent:'center',paddingLeft:'20%',paddingRight:'20%'}}>
                        <div className="col-sm-6" style={{alignContent:'center',display:"inline",float:'right'}}>
                            
                            <div className="choice">
                                {this.state.robonum!==null? this.state.botscore:""}
                            </div><br/>
                            <div>
                                {this.state.robonum!==null? "Robot's Score":""}
                            </div>

                        </div>
                        <div className="col-sm-6" style={{display:"inline"}}>                            
                            <div className="choice">
                                {this.state.user!==null? this.state.userscore:""}
                            </div>
                            <br/>                            
                            <div>
                                {this.state.user!==null? "Your Score ":""}
                            </div>
                        </div>
                    </div>
                    <br/>
                    <button className="roundbtn" onClick={this.handleStone}>💎</button>
                    <button className="roundbtn" onClick={this.handlePaper}>📰</button>
                    <button className="roundbtn" onClick={this.handleScissor}>✂️</button>
                    <br/>
                    <i>{this.state.user===null ? "Choose a stone, paper or scissor to play.":""}</i>
                    
                </div >
            </React.Fragment>
         );
    }
}
 
export default SPSGame;