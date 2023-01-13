import React from 'react';
import SideNav from '../SideNav/sidenav';
import CoOrdinatorCard from '../Coordinators/coordinators/coordinators';
import styles from './headcoordinatorsec.module.css';

import { coordinatorsList } from '../Coordinators/coordinatorsList';

const HeadCoordinatorSec = () => {
	return (
		<section className={styles.headco_section}>
			<SideNav name='Overall Coordinators' />
			<div className={styles.headco_container}>
				{coordinatorsList.map((item) => {
					if (item.id <= 4) {
						return (
							<CoOrdinatorCard
								key={item.id}
								name={item.name}
								image={item.imgUrl}
								insta={item.instaUrl}
								linkedin={item.linkedinUrl}
								desi={item.desi}
							/>
						);
					}

					return null;
				})}
			</div>
		</section>
	);
};

export default HeadCoordinatorSec;
