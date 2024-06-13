import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './App.css';
import Project from './Project';

function App() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const projectData =[
    {
      id:1,
      imageurl:'rafah.jpg',
      name:'Fund For Gaza',
      cause:"To provide families with access to basic necessities like food, clean water, and medical care.Join us in making a difference. It is also associated with people supporting ceasefire.",
      
    },
    {
      id:2,
      imageurl:'img2.jpeg',
      name:'Plastic Waste Reduction Campaign',
      cause:'Fund campaigns that aim to reduce plastic waste through education, advocacy, and community clean-up events.',
    },
    {
      id:3,
      imageurl:'img3.jpg',
      name:'Sustainable Fashion Project',
      cause:'Launch initiatives that promote sustainable fashion, such as clothing recycling programs or eco-friendly fashion lines.',
    },
    {
      id:4,
      imageurl:'img4.jpg',
      name:'Green Technology Training Program',
      cause:'Create training programs for green technology skills, like solar panel installation, electric vehicle maintenance.',
    },
    {
      id:5,
      imageurl:'img5.jpg',
      name:'Waste -to- Energy Project',
      cause:'Provide a sustainable energy source and reduce landfill waste. Develop projects that convert waste materials into energy, such as biogas plants or waste incineration facilities.',
    },
    {
      id:6,
      imageurl:'img6.jpg',
      name:'Community Recycling Center',
      cause:'Reduce waste, create local jobs, and educate the community about recycling and waste management.',
    },
  ];


const project = projectData.map(item => (
          <Project 
          name={item.name} 
          url={item.imageurl} 
          cause={item.cause}
          
          />
  ));


  return (
    <div className="App">
      <h1>Projects</h1>
     <Carousel responsive={responsive}>
          {project}
          
     </Carousel>;
      
    </div>
  );
}

export default App;