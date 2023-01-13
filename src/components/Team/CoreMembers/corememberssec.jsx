import SideNav from '../SideNav/sidenav';
import CoreMemberCard from './coremembers/coremembercard';

import styles from './corememberssec.module.css';

// import corememberslist  from './corememberslist.json';

const corememberslist=[
	{
				"S.No.": "1",
				"Name": "Abhijeet Kumar Singh",
				"Branch": "",
				"Domain": "Sponsorship"
			},
	{
				"S.No.": "2",
				"Name": "C.Sriya",
				"Branch": "",
				"Domain": "Sponsorship"
			},
	{
				"S.No.": "3",
				"Name": "Kuldeep Verma",
				"Branch": "",
				"Domain": "Sponsorship"
			},
	{
				"S.No.": "4",
				"Name": "Harshit Singh",
				"Branch": "",
				"Domain": "Sponsorship"
			},
	{
				"S.No.": "5",
				"Name": "Shuja Haidar Rizvi",
				"Branch": "",
				"Domain": "Sponsorship"
			},
	{
				"S.No.": "6",
				"Name": "Ishan Nayak",
				"Branch": "",
				"Domain": "Sponsorship"
			},
	{
				"S.No.": "7",
				"Name": "Arpit Pandey",
				"Branch": "",
				"Domain": "Sponsorship"
			},
	{
				"S.No.": "8",
				"Name": " Aditi Nirala",
				"Branch": "",
				"Domain": "Sponsorship"
			},
	{
				"S.No.": "9",
				"Name": "Priyanshu Agrahari",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "10",
				"Name": " Vaibhav Sawant",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "11",
				"Name": " Vaibhav Kumar Jangid",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "12",
				"Name": " Satyam Singh",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "13",
				"Name": " Md Amaan",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "14",
				"Name": " Mansi Kumari",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "15",
				"Name": " Chirag Gajhbhiye",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "16",
				"Name": " Gaurav Kumar sahu",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "17",
				"Name": " Aela Chakri",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "18",
				"Name": " Chirag Singhal",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "19",
				"Name": " Suchit Kukuna",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "20",
				"Name": " Aral Bhagat",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "21",
				"Name": " Durgesh Verma",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "22",
				"Name": " Pramil Kesarwani",
				"Branch": "",
				"Domain": "Public Relation"
			},
	{
				"S.No.": "23",
				"Name": "Aanchal Sharma",
				"Branch": "",
				"Domain": "Event Management"
			},
	{
				"S.No.": "24",
				"Name": " Aparna Gupta",
				"Branch": "",
				"Domain": "Event Management"
			},
	{
				"S.No.": "25",
				"Name": " Sourabh Pratap Singh",
				"Branch": "Mech",
				"Domain": "Event Management"
			},
	{
				"S.No.": "26",
				"Name": " Nakshatra Singh",
				"Branch": "",
				"Domain": "Event Management"
			},
	{
				"S.No.": "27",
				"Name": " Shreya Borikar",
				"Branch": "",
				"Domain": "Event Management"
			},
	{
				"S.No.": "28",
				"Name": " Shivani Gupta",
				"Branch": "",
				"Domain": "Event Management"
			},
	{
				"S.No.": "29",
				"Name": " Manas Kumar",
				"Branch": "",
				"Domain": "Event Management"
			},
	{
				"S.No.": "30",
				"Name": " Shalini Kashyap",
				"Branch": "",
				"Domain": "Event Management"
			},
	{
				"S.No.": "31",
				"Name": " Shreyansh Agarwal",
				"Branch": "",
				"Domain": "Event Management"
			},
	{
				"S.No.": "32",
				"Name": " Akshat Shrivastava ",
				"Branch": "",
				"Domain": "Event Management"
			},
	{
				"S.No.": "33",
				"Name": " Shreyansh Sharma",
				"Branch": "",
				"Domain": "Event Management"
			},
	{
				"S.No.": "34",
				"Name": " Viplow Kumar Das",
				"Branch": "Mech",
				"Domain": "Event Management"
			},
	{
				"S.No.": "35",
				"Name": " Sumapriya",
				"Branch": "",
				"Domain": "Event Management"
			},
	{
				"S.No.": "36",
				"Name": " Paila Likhita",
				"Branch": "",
				"Domain": "Event Management"
			},
	{
				"S.No.": "37",
				"Name": "Pranshul Hatwar",
				"Branch": "",
				"Domain": "Vigyaan"
			},
	{
				"S.No.": "38",
				"Name": " Anushka Pant",
				"Branch": "",
				"Domain": "Vigyaan"
			},
	{
				"S.No.": "39",
				"Name": " Saransh Wakde",
				"Branch": "",
				"Domain": "Vigyaan"
			},
	{
				"S.No.": "40",
				"Name": " Vishakha Jha",
				"Branch": "",
				"Domain": "Vigyaan"
			},
	{
				"S.No.": "41",
				"Name": " Anushree Banerjee ",
				"Branch": "",
				"Domain": "Vigyaan"
			},
	{
				"S.No.": "42",
				"Name": " Pratham Gandhi",
				"Branch": "",
				"Domain": "Vigyaan"
			},
	{
				"S.No.": "43",
				"Name": "Sameer Trivedi",
				"Branch": "ECE",
				"Domain": "Documentation"
			},
	{
				"S.No.": "44",
				"Name": "Arkita Dam",
				"Branch": "ECE",
				"Domain": "Documentation"
			},
	{
				"S.No.": "45",
				"Name": "Kushal Jain",
				"Branch": "",
				"Domain": "Design"
			},
	{
				"S.No.": "46",
				"Name": " Suraj Jogani",
				"Branch": "",
				"Domain": "Design"
			},
	{
				"S.No.": "47",
				"Name": " Sujoy Banerjee ",
				"Branch": "",
				"Domain": "Design"
			},
	{
				"S.No.": "48",
				"Name": "Navneet Kaur",
				"Branch": "",
				"Domain": "Design"
			},
	{
				"S.No.": "49",
				"Name": "Shazma Siddiqui",
				"Branch": "",
				"Domain": "Tech"
			},
	{
				"S.No.": "50",
				"Name": " Rishav Gandhi",
				"Branch": "",
				"Domain": "Tech"
			},
	{
				"S.No.": "51",
				"Name": "Harsh Ranjan Sinha",
				"Branch": "",
				"Domain": "Tech"
			},
	{
				"S.No.": "52",
				"Name": "Premchand Maddikuntla",
				"Branch": "",
				"Domain": "Tech"
			}
			]

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
				{corememberslist.sort(compareDomain).map((core, index) => (
					<CoreMemberCard key={index} name={core.Name} domain={core.Domain} />
				))}
			</div>
		</div>
	);
};

export default CoreMemberSec;
