import Card from "./cards";
import "./timeline.css"
import "./timeline-function";

function Timeline() {
    return (
        
      <div className="maincontainer">
        <div class="headings">
          <h2> Our Journey</h2>
        </div>
        <div class="containers">
  
          <div class="timeline">
            <ul>
              <Card year='2007' heading='Heading 1' about=' The grand fest of Aavartan had its seed sown back in 2007, when few
            Technical enthusiasts came up with the idea of "Vigyaan"-the
            national level science exhibition, single event back then which
            eventually transformed into magnificent Aavartan as we see it today.'  />
              <Card year='2011' heading='Heading 2' about=' It was 2011, when people witnessed the massive transition of
            Vigyaan, a platform for innovative ideas, into a complete fest,
            Aavartan. The consistent efforts and out of the box ideas of the
            team members laid the foundation for what now is called as the
            trademark of tech-fests!'  />
              <Card year='2019' heading='Heading 3' about=' Team Technocracy took it to the next level as Aavartan 19 witnessed
            a footfall of over 10,000. The family of 200+ members left no stones
            unturned in creating a paradise for any tech-savvy. Their efforts
            bore a golden fruit as Aavartan reached the milestone of being
            recognized as the Central India s largest tech-fest. '  />
              <Card year='2023' heading='Heading 4' about='  Aavartan will be back with its new edition with stellar range of
            exciting tech savvy events and evening shows. Stay tuned with us
            through our social media handles to make sure you don t miss out on
            the next big tech revolution!'  />
            </ul>
          </div>
        </div>
        <div id="down" class="disp"></div>
      </div>
    );
  }
  
  export default Timeline;