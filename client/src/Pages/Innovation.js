import React, {useRef} from "react";
import Navbar from "../Components/mainfiles/Navbar";
import InnovationHome from "../Components/innovation/InnovationHome";
import Background from "../Assets/Images/innovation-bg-2.jpg";
import InnovationAbout from "../Components/innovation/InnovationAbout";
import FAQSection from "../Components/mainfiles/FAQinnovation";
import InnovationProcess from "../Components/innovation/InnovationProcess"; 
import InnovationHighlights from "../Components/innovation/InnovationHiglights";
import InnovationAnnoucements from "../Components/innovation/InnovationAnnoucements";
import InnovationContact from "../Components/innovation/InnovationContact";
function Innovation()
{

      const aboutSectionRef = useRef(null);
      const announcementsSectionRef = useRef(null); 
      const highlightsSectionRef = useRef(null);
      const faqsSectionRef = useRef(null);
      const contactSectionRef = useRef(null);
      const navbarItems = [
        { text: "HOME", href: "/" },
        { text: "ABOUT", href: "/innovation/#About", sectionRef: aboutSectionRef },
        { text: "ANNOUNCEMENTS", href: "/innovation/#Annoucements", sectionRef: announcementsSectionRef },
        { text: "HIGHLIGHTS", href: "/innovation/#Highlights", sectionRef: highlightsSectionRef },
        { text: "FAQs", href: "/innovation/#FAQS", sectionRef: faqsSectionRef },
        { text: "CONTACT", href: "/innovation/#Contact", sectionRef: contactSectionRef },
      ];
      const faqData=[
        {
          question: 'What is Innovation on wheels ?',
          answer: 'Answer 1',
        },
        {
          question: 'How to register ?',
          answer: 'Answer 2',
        },
        {
          question: 'What are the advantages in joining the program ?',
          answer: 'Answer 3',
        },
        {
          question: 'How the community works ?',
          answer: 'Answer 4',
        },
      ];
    return ( 
    <div className = "bg-black min-h-screen w-full flex flex-col" >
        <Navbar navbarItems={navbarItems} />
        <InnovationHome />
        <InnovationAbout  sectionRef={aboutSectionRef}/>
        <InnovationProcess/>,
        <InnovationAnnoucements sectionRef={announcementsSectionRef}/>
        <InnovationHighlights sectionRef={highlightsSectionRef}/>
        <FAQSection faqData={faqData } sectionRef={faqsSectionRef}/>
        <InnovationContact sectionRef={contactSectionRef} />
    </div>
     );
}
 
export default Innovation;