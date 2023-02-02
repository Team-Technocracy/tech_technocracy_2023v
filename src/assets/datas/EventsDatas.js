import file1 from '../images/eventImages/file1.webp'
import file2 from '../images/eventImages/file2.webp'
import file3 from '../images/eventImages/file3.webp'
import file4 from '../images/eventImages/file4.webp'
import file5 from '../images/eventImages/file5.webp'
import file6 from '../images/eventImages/file6.webp'
import file7 from '../images/eventImages/file7.webp'
import file8 from '../images/eventImages/file8.webp'
import file9 from '../images/eventImages/file9.webp'
import file10 from '../images/eventImages/file10.webp'
import file11 from '../images/eventImages/file11.webp'
import file12 from '../images/eventImages/file12.webp'
import file13 from '../images/eventImages/file13.webp'
import file14 from '../images/eventImages/file14.webp' //Animatrix
import file15 from '../images/eventImages/file15.webp' //Code Tag
import file16 from '../images/eventImages/file16.webp' //Scavenger Hunt
import file17 from '../images/eventImages/file17.webp' //Robotrec
import file20 from '../images/eventImages/file20.webp'

const events = [
    {
        id: 1,
        title: "Animatrix",
        details: "Bring your imagination to life. Animate your ideas and let them come alive in our competition. Unleash the power of animation and join us! Your creativity knows no bounds.",
        date: "04-02-23",
        time: "3 PM - 5 P.M.",
        venue: "S4",
        img: file14,
        teamSize: 1,
        teamMin: 1
    },
    {
        id: 2,
        title: "Best Out of Waste",
        details: "“Recycle it all, No matter how small! “ with this intent unveil your creativity, artistry, proficiency and dexterity, spawning marvelous adornments from discarded scrap. ",
        date: "04-02-23",
        time: "12 PM -2 PM",
        venue: "Left Garden",
        img: file6,
        teamSize: 3,
        teamMin: 2
    },
    {
        id: 3,
        title: "Blind Coding",
        details: " Even without sight, there is still a vision. Hold on tight for this electrifying coding escapade to appraise your skills, logic, and limits.",
        date: "04-02-23",
        time: "2:30 PM - 5 PM",
        venue: "CSE Lab 2",
        img: file7,
        teamSize: 1,
        teamMin: 1
    },
    {
        id: 4,
        title: "Circuitrix",
        details: " A circuit-related game that will pique your interest. Get ready to step into the circuit realm.",
        date: "04-02-23",
        time: "12 PM",
        venue: "G4",
        img: file2,
        teamSize: 0,
        condition: ''
    },
    {
        id: 5,
        title: "CodeTag",
        details: "Get yourself prepared to scrutinize, perceive, and decode the problem statement from images. Make no provision to compete with the finest intellects of coding.",
        date: "05-02-23",
        time: "9 A.M.",
        venue: "CCC",
        img: file15,
        teamSize: 3,
        teamMin: 3
    },
    // {
    //     id: 6,
    //     title: "ECOPOLIS",
    //     details: "Plan! Execute! Deliver! in that order. Join us at the city planning event. Put your wit to work and design an urban planning layout of an upcoming city for a chance to get exciting rewards.",
    //     date: "04-02-23",
    //     time: "2 P.M.",
    //     img: file12,
    //     teamSize: 3,
    //     teamMin: 1
    // },
    {
        id: 7,
        title: "Hydrolift",
        details: "Experience the extraordinary at our one-of-a-kind event.This is that one time in life that pressure's good for you .Apply that pressure on the correct area and may the force be with you.",
        date: "05-02-23",
        time: "3 P.M.",
        img: file9,
        venue:"Football Ground",
        teamSize: 3,
        teamMin: 2
    },
    {
        id: 8,
        title: "Robotrek",
        details: "Slow and steady wins the race”, but is it true for the robots as well? Find out in this extraordinary racing event where the self made robot cars will compete to accomplish the race. ",
        date: "04-02-23",
        time: "2 PM -5 P.M.",
        venue:"Basketball Ground",
        img: file17,
        teamSize: 3
    },
    {
        id: 9,
        title: "Scavenger Hunt",
        details: "A box with no hinges, key or lid, yet has a golden treasure hidden in it. Solve this riddle, and you may be the one to uncover the exceptional treasure within.",
        date: "05-02-23",
        time: "12 P.M.",
        venue:"Stage 1: G4, Stage 2 :  Central Garden then whole campus",
        img: file16,
        teamSize: 4,
        teamMin: 4
    },
    {
        id: 10,
        title: "Shipwreck",
        details: " A fun-driving event where one has to portray the personality of an eminent person, and save oneself from a sinking ship, beating out others.        ",
        date: "05-02-23",
        time: "11 A.M.",
        venue:"In front of Central Garden",
        img: file5,
        teamSize: 5
    },
    {
        id: 11,
        title: "Treasure Hunt",
        details: "Find the blackbox lost in space-time by decoding cryptic signals",
        date: "04-02-23",
        time: "12 P.M. - 4 PM",
        venue:"Amul Parlour",
        img: file1,
        teamSize: 5,
    },

    {
        id: 12,
        title: "Valo Tournament",
        details: "Buckle Up! As easy as this event may seem ,the harder it is in actuality. Can you last everyone out in this 5v5 face-off ? ",
        date: "05-02-23",
        time: "9 A.M.",
        img: file13,
        teamSize: 5,
        teamMin: 5
    },
    {
        id: 13,
        title: "VR Show",
        details: " Get yourself ready for a thrilling chance to explore the world of Virtual Reality through VR headsets recreating the images in our mind.",
        date: "05-02-23",
        time: "9 A.M.",
        venue:"Foundary Lab",
        img: file4,
        teamSize: 1
    },
    {
        id:14, 
        title: "Beg Borrow Steal",
        details:"Beg! Borrow! Steal! Whatever it takes, succeed at all costs! Come on down to this epic activity and have a truly memorable experience.",
        date: "04-02-23",
        time:"3 P.M.",
        venue:"Central Garden",
        img: file3,
        // teamSize:
    },
    {
        id: 15,
        title: "Open Mic",
        details:'“Just give me a mic, and I will rock it”, is often what we think in our confident minds. Now get a chance to showcase your talent and skills, through the power of a mic, and your words! ',
        date: "05-02-23",
        time: "9 A.M.",
        venue:"Amul Parlour",
        img: file8,
        teamSize:1,
    },
    {
        id:16,
        title: "Click O Vartan",
        details:'"A photograph is worth a thousand words." Capture the moment and it shall become undead. Hold your cameras tight! and get ready to capture the entire event in your lens. May the best Capture win!',
        date: "04-02-23",
        time:"Whole fest",
        img: file10,
        // teamSize:,
    },
    {
        id:17,
        title:"Technomic Quotient",
        details:'Participate in this entertaining yet educational event to show off your mastery of trivia. Do you have what it takes to be one of the "Remainders" of the Technomic “Quotients” ?',
        date: "05-02-23",
        // time:"",
        img: file11,
        // teamSize:,
    },
    {
        id:20,
        title:"Jenga",
        details:'Do you have what it takes to stand at the top() of the tower ? If yes then grace us with your presence at the Jenga event and push() all your rivals down to win it all! ',
        date: "04-02-23",
        time:"9:30 A.M.",
        venue:"Left Garden",
        img:file20,
        // teamSize:,
    }
];

export default events;