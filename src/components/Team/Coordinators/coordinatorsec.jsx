import React from 'react';
import SideNav from '../../utils/Header/Headers';
// import CoordinatorsNew from './coordinators/CoordinatorsNew';
import Card from './coordinators/Card';
import styles from './coordinatorsec.module.css';
import { coordinatorsList } from './coordinatorsList';

const CoOrdinatorSec = (props) => {
	const {title,list} = props
	return (
		<section className={styles.coordinatorsec}>
			<SideNav name={title} />
			<div className={title==="Overall Coordinators"?styles.ov_container:styles.co_container}>
				{list.map((item) => {
					return (
						<Card
							key={item.id}
							name={item.name}
							domain={item.domain}
							img={item.imgUrl}
							linkedin={item.linkedinUrl}
							github={item.githubUrl}
							insta={item.instaUrl}
							facebook={item.facebookUrl}
						/>
					);
				})}
			</div>
		</section>
	);
};

const coordinatorsSecCombined = ()=>{
	const [overallcoordinatorslist,headcoordinatorslist] = splitarray(coordinatorsList,3)
	return(
		<>
		<CoOrdinatorSec title="Overall Coordinators" list={overallcoordinatorslist} />
		<CoOrdinatorSec title="Head Coordinators" list={headcoordinatorslist} />
		</>
	)
}

export default coordinatorsSecCombined;

const splitarray = (array,i)=>{
	const a=[],b=[]
	for(let j=0;j<array.length;j++){
		if(j<i) a.push(array[j])
		else b.push(array[j])
	}
	return [a,b]
}