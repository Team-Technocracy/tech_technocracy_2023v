// import file1 from '../images/eventImages/file1.webp'
// import file2 from '../images/eventImages/file2.webp'
// import file3 from '../images/eventImages/file3.webp'
// import file4 from '../images/eventImages/file4.webp'
// import file5 from '../images/eventImages/file5.webp'
// import file6 from '../images/eventImages/file6.webp'
// import file7 from '../images/eventImages/file7.webp'
// import file8 from '../images/eventImages/file8.webp'
// import file9 from '../images/eventImages/file9.webp'
// import file10 from '../images/eventImages/file10.webp'
// import file11 from '../images/eventImages/file11.webp'
// import file12 from '../images/eventImages/file12.webp'
// import file13 from '../images/eventImages/file13.webp'
// import file14 from '../images/eventImages/file14.webp' //Animatrix
// import file15 from '../images/eventImages/file15.webp' //Code Tag
// import file16 from '../images/eventImages/file16.webp' //Scavenger Hunt
// import file17 from '../images/eventImages/file17.webp' //Robotrec
// import file20 from '../images/eventImages/file20.webp'
import file1 from '../images/eventImages/Animatrix.webp'
import file2 from '../images/eventImages/BegBorrowSteal.webp'
import file3 from '../images/eventImages/BestOutofWaste.webp'
import file4 from '../images/eventImages/BlindCoding.webp'
import file5 from '../images/eventImages/Circuitrix.webp'
import file6 from '../images/eventImages/ClickOVartan.webp'
import file7 from '../images/eventImages/CodeTag.webp'
import file8 from '../images/eventImages/Hydrolift.webp'
import file9 from '../images/eventImages/Jenga.webp'
import file10 from '../images/eventImages/OpenMic.webp'
import file11 from '../images/eventImages/Robotrek.webp'
import file12 from '../images/eventImages/ScavengerHunt.webp'
import file13 from '../images/eventImages/Shipwreck.webp'
import file14 from '../images/eventImages/SpeedCubing.webp'
import file15 from '../images/eventImages/TheTechnomicQuotient.webp'
import file16 from '../images/eventImages/TreasureHunt.webp'
import file17 from '../images/eventImages/ValorantTournament.webp'
import file18 from '../images/eventImages/Vigyaan.webp'
import file19 from '../images/eventImages/VRShow.webp'
import file20 from '../images/eventImages/Ecopolis.webp'

const events = [
    {
        id: 1,
        title: "Animatrix",
        details: "Bring your imagination to life. Animate your ideas and let them come alive in our competition. Unleash the power of animation and join us! Your creativity knows no bounds.",
        date: "04-02-23",
        time: "3 P.M. - 5 P.M.",
        img: file1,
        teamSize: 1,
        teamMin: 1,
        venue:"S4 Classroom",
        regis:1
    },
    {
        id: 2,
        title: "Best Out of Waste",
        details: "“Recycle it all, No matter how small! “ with this intent unveil your creativity, artistry, proficiency and dexterity, spawning marvelous adornments from discarded scrap. ",
        date: "04-02-23",
        time: "12 P.M. - 2 P.M.",
        img: file3,
        teamSize: 3,
        teamMin: 2,
        venue:"Left Garden",
        regis:1
    },
    {
        id: 3,
        title: "Blind Coding",
        details: " Even without sight, there is still a vision. Hold on tight for this electrifying coding escapade to appraise your skills, logic, and limits.",
        date: "04-02-23",
        time: "2:30 P.M. - 5 P.M.",
        img: file4,
        teamSize: 1,
        teamMin: 1,
        venue:"CSE Lab 2",
        regis:1
    },
    {
        id: 4,
        title: "Circuitrix",
        details: " A circuit-related game that will pique your interest. Get ready to step into the circuit realm.",
        date: "04-02-23 to 05-02-23",
        time: "Day 1: 1 P.M. - 2 P.M. , Day 2: 12 P.M. - 2:30 P.M.",
        img: file5,
        teamSize: 0,
        condition: '',
        venue:" Elex Gallery, ",
        regis:1
    },
    {
        id: 5,
        title: "CodeTag",
        details: "Get yourself prepared to scrutinize, perceive, and decode the problem statement from images. Make no provision to compete with the finest intellects of coding.",
        date: "05-02-23",
        time: "9:30 A.M. - 11 A.M.",
        img: file7,
        teamSize: 3,
        teamMin: 3,
        venue:"F-40",
        regis:1
    },
    {
        id: 6,
        title: "ECOPOLIS",
        details: "Plan! Execute! Deliver! in that order. Join us at the city planning event. Put your wit to work and design an urban planning layout of an upcoming city for a chance to get exciting rewards.",
        date: "04-02-23",
        time: "2 P.M.",
        img: file20,
        teamSize: 3,
        teamMin: 1,
        venue:"Studio 3, 4 (Architecture Building)",
        regis:1
    },
    {
        id: 7,
        title: "Hydrolift",
        details: "Experience the extraordinary at our one-of-a-kind event.This is that one time in life that pressure's good for you .Apply that pressure on the correct area and may the force be with you.",
        date: "05-02-23",
        time: "1 P.M. - 3 P.M.",
        img: file8,
        teamSize: 3,
        teamMin: 2,
        venue:"Football Ground",
        regis:1
    },
    {
        id: 8,
        title: "Robotrek",
        details: "Slow and steady wins the race”, but is it true for the robots as well? Find out in this extraordinary racing event where the self made robot cars will compete to accomplish the race. ",
        date: "04-02-23",
        time: " Quiz: 12 P.M. to 12:30 P.M. , Final Race: 2 P.M. - 5 P.M.",
        img: file11,
        teamSize: 3,
        venue:"S42 Ellex Gallery",
        regis:1
    },
    {
        id: 9,
        title: "Scavenger Hunt",
        details: "A box with no hinges, key or lid, yet has a golden treasure hidden in it. Solve this riddle, and you may be the one to uncover the exceptional treasure within.",
        date: "05-02-23",
        time: "Round 1 :- 11:30 A.M. - 11:45 A.M. , Round 2 :- 12:15 P.M. - 3:15 P.M.",
        img: file12,
        teamSize: 4,
        teamMin: 4,
        venue:"Stage 1 : Central Garden , Stage 2 : Central Garden to whole Campus",
        regis:1
    },
    {
        id: 10,
        title: "Shipwreck",
        details: " A fun-driving event where one has to portray the personality of an eminent person, and save oneself from a sinking ship, beating out others.        ",
        date: "05-02-23",
        time: "11 A.M. - 1 P.M.",
        img: file13,
        teamSize: 5,
        venue:"In front of Central Garden",
        regis:1
    },
    {
        id: 11,
        title: "Treasure Hunt",
        details: "Find the blackbox lost in space-time by decoding cryptic signals",
        date: "04-02-23",
        time: "12 P.M. - 4 P.M.",
        img: file16,
        teamSize: 5,
        venue:"Amul Parlour",
        regis:1
    },

    {
        id: 12,
        title: "Valo Tournament",
        details: "Buckle Up! As easy as this event may seem ,the harder it is in actuality. Can you last everyone out in this 5v5 face-off ? ",
        date: "04-02-23",
        time: "9 A.M. - 5 P.M.",
        img: file17,
        teamSize: 5,
        teamMin: 5,
        venue:"CCC Lab 1",
        regis:1
    },
    {
        id: 13,
        title: "VR Show",
        details: " Get yourself ready for a thrilling chance to explore the world of Virtual Reality through VR headsets recreating the images in our mind.",
        date: "04-02-23",
        time: "12 P.M. - 4 P.M.",
        img: file19,
        teamSize: 1,
        venue: "Foundry Lab",
        regis:0
    },
    {
        id:14, 
        title: "Beg Borrow Steal",
        details:"Beg! Borrow! Steal! Whatever it takes, succeed at all costs! Come on down to this epic activity and have a truly memorable experience.",
        date: "04-02-23",
        time:"3 P.M. - 6 P.M.",
        img: file2,
        venue:"Central Garden",
        regis:1
        // teamSize:
    },
    {
        id: 15,
        title: "Open Mic",
        details:'“Just give me a mic, and I will rock it”, is often what we think in our confident minds. Now get a chance to showcase your talent and skills, through the power of a mic, and your words! ',
        date: "05-02-23",
        time: "9 A.M. - 6 P.M.",
        img: file10,
        teamSize:1,
        venue:"Amul Parlour",
        regis:1
    },
    {
        id:16,
        title: "Click O Vartan",
        details:'"A photograph is worth a thousand words." Capture the moment and it shall become undead. Hold your cameras tight! and get ready to capture the entire event in your lens. May the best Capture win!',
        date: "04-02-23 to 05-02-23",
        time:"Whole fest",
        img: file6,
        venue:"Whole Campus",
        regis:1
        // teamSize:,
    },
    {
        id:17,
        title:"Technomic Quotient",
        details:'Participate in this entertaining yet educational event to show off your mastery of trivia. Do you have what it takes to be one of the "Remainders" of the Technomic “Quotients” ?',
        date: "05-02-23",
        time:"12 P.M. - 3:30 P.M.",
        img: file15,
        regis:0,
        venue:"G4 Lecture Hall"
        // teamSize:,
    },
    {
        id:20,
        title:"Jenga",
        details:'Do you have what it takes to stand at the top() of the tower ? If yes then grace us with your presence at the Jenga event and push() all your rivals down to win it all! ',
        date: "04-02-23",
        time: "4 P.M. - 6 P.M.",
        img:file9,
        venue:"Left Garden",
        regis:0
        // teamSize:,
    },
    {
        id:20,
        title:"Speed Cubing",
        details:'"Time is a storm in which we are all lost." Can you find your way out of the storm and be the fastest to win the speedcubing competition ?',
        date: "05-02-23",
        time:"1 P.M. - 2 P.M.",
        img:file14,
        venue:"Left Garden",
        regis:1
        // teamSize:,
    }
];

export default events;
