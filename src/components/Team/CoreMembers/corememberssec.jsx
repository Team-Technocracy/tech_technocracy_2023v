import SideNav from '../SideNav/sidenav';
import CoreMemberCard from './coremembers/coremembercard';

import styles from './corememberssec.module.css';

import { corememberslist as CoreMembersList } from './corememberslist.json';

const CoreMemberSec = () => {
	const compareDomain = (memberFirst, memberSecond) => {
		if (memberFirst.Domain.toLowerCase() < memberSecond.Domain.toLowerCase()) {
			return -1;
		}
		if (memberFirst.Domain.toLowerCase() > memberSecond.Domain.toLowerCase()) {
			return 1;
		}
		return 0;
	};

	return (
		<div className={styles.coresec}>
			<SideNav name='Core Members' />
			<div className={styles.corecontainer}>
				{CoreMembersList.sort(compareDomain).map((core, index) => (
					<CoreMemberCard key={index} name={core.Name} domain={core.Domain} />
				))}
			</div>
		</div>
	);
};

export default CoreMemberSec;
