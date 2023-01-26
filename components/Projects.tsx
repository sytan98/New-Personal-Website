import * as React from 'react';
import ProjectCard, { IProject } from './ProjectCard';
import FYP from '../public/assets/projects/fyp.png';
import Eurobot from '../public/assets/projects/eurobot.jpg';
import Fashion from '../public/assets/projects/fashion_detection.jpg';
import PathPlan from '../public/assets/projects/path_planning.jpg';
import StudyApp from '../public/assets/projects/study_planning.jpg';


const ProjectList: IProject[] = [
  {
    title: "Camera Pose Estimation FYP", 
    backgroundImg: FYP,
    projectUrl: "https://github.com/sytan98/imumapnet",
    desc: "For my BEng Final Year Project, I explored the problem of Camera Pose Regression. I explored approaches to incorporate inertial measurement unit (IMU) data into deep learning-based camera pose estimation as an additional supervision signal, with the aim of ensuring robust pose estimation learning against inaccurate pseudo ground truths. This project involved data collection from simulation and modifying and training machine learning models."
  },
  {
    title: "Eurobot", 
    backgroundImg: Eurobot,
    projectUrl: "https://icrs.github.io/eurobot2022-UK/",
    desc: "This project was part of ICRS's attempt at Eurobot. I was in charged of the localisation of the robot through computer vision. I used ARUCO tags to estimate robot's position in a known map environment."
  },
  {
    title: "Fashion Detection", 
    backgroundImg: Fashion,
    projectUrl: "https://github.com/sytan98/Fashion-Detection-Brainhack2020",
    desc: "This project was part of BrainHack Today I Learned AI Camp 2020 Qualifier stage. We created an ensemble of object detection models to detect and recognise types of clothes and utilised NLP to identify gender and clothes-specific words from text. We were given images of people wearing certain types of fashion items (tops, trousers, outerwear, dresses and skirts) as well as bounding boxes for the different categories. We needed to train an object detection model for this."
  },
  {
    title: "Path Planning", 
    backgroundImg: PathPlan,
    projectUrl: "https://github.com/sytan98/Rover-Path-Planning-Brainhack2020",
    desc: "This project was part of BrainHack Today I Learned AI Camp 2020 Final stage. With a Tello API drone and a DJI Robomaster EP rover, our objective was to use the drone to fly and capture a bird's eye view of the arena and to plot out a path for the rover. The arena has routes that are black in colour which the rover is allowed to travel on and has obstacles littered around the arena. Thus, we will need to process the picture taken by the drone and plan a path from the start point to the end point that avoids the obstacles."
  },
  {
    title: "Study Planning App", 
    backgroundImg: StudyApp,
    projectUrl: "https://github.com/sytan98/study-planner-app",
    desc: "The plan for this project is to create a full stack application to learn how to use Flask as a backend to create an API for my react frontend. It should give the functionality of recording different subjects as well as the tasks for each subject."
  },



  
]
export default function Projects() {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {ProjectList.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                backgroundImg={project.backgroundImg}
                projectUrl={project.projectUrl}
                desc={project.desc}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}
