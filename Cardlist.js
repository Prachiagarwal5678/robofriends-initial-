import React from 'react';
import Card from './Card';
const Cardlist =({robot}) =>{
	const cardcomp=robot.map((user,i)=>{
		return <Card key={i} id={robot[i].id} name={robot[i].name} email={robot[i].email}/> 
	})
	return(
	<div>
	{cardcomp}
	</div>);
}
export default Cardlist; 