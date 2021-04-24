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
        res:null
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
        this.setState({user:'💎'});
    }
    handlePaper(){
        this.handleBot();
        this.setState({user:'📰'});
    }
    handleScissor(){
        this.handleBot();
        this.setState({user:'✂️'});
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="stripe">
                    <br/><h1>Stone Paper Scissors</h1> <br/>
                    <div className=" col-sm-12 row" style={{alignContent:'center',paddingLeft:'20%',paddingRight:'20%'}}>
                        <div className="col-sm-12" style={{alignContent:'center',display:"inline",float:'right'}}>
                            <div>
                            {this.state.robonum!==null? "Robot pressed":""}
                            </div><br/>
                            <div className="choice">
                                {this.state.robonum!==null? this.state.robonum:""}
                            </div>                            
                        </div>
                        {/* <div className="col-sm-6" style={{display:"inline"}}>
                            <div>
                                {this.state.user!==null? "You pressed ":""}
                            </div>
                            <br/>
                            <div className="choice">
                                {this.state.user!==null? this.state.user:""}
                            </div>                            
                            
                        </div> */}
                    </div>
                    <p className="spsresult"> <br/>
                    </p>
                    <br/>
                    <button className="roundbtn" onClick={this.handleStone}>💎</button>
                    <button className="roundbtn" onClick={this.handlePaper}>📰</button>
                    <button className="roundbtn" onClick={this.handleScissor}>✂️</button>
                    
                </div >
            </React.Fragment>
         );
    }
}
 
export default SPSGame;