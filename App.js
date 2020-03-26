import React,{Component} from 'react';
import Cardlist from './Cardlist';
import {robot} from './robot';
import SearchBox from './SearchBox';
import './App.css'

class App extends Component{
	constructor(){
		super()
		this.state={
			 robot:robot,
	searchfield:''
		}
	}
	//random name
	onSearchChange=(event)=> {
		this.setState({ searchfield: event.target.value})
	}
	
	render(){
		
		const filteredRobots=this.state.robot.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

	  return(
	  <div className='tc'>
	  <h1>Robofriends</h1>
      <SearchBox  searchChange={this.onSearchChange} />
	  <Cardlist robot={filteredRobots}/>
	  </div>
	 	);
	 }
}
export default App;