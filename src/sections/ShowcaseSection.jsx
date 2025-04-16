import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: 'top bottom-=100',
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);
  return (
    <section id='work' className='app-showcase' ref={sectionRef}>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* LEFT */}
          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <img src='/images/project1.png' alt='ride' />
            </div>
            <div className='text-content'>
              <h2 className='text-2xl font-bold'>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>
              <p className='md:text-xl text-white-50'>
                An app built with React Native, Expo, & TailwindCss for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div
            className='project-list-wrapper overflow-hidden'
            ref={project2Ref}
          >
            <div className='project'>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img
                  src='/images/project2.png'
                  alt='Library management platform'
                />
              </div>
              <h2>Library Management Platform</h2>
            </div>

            <div className='project' ref={project3Ref}>
              <div className='image-wrapper bg-[#ffe7eb]'>
                <img
                  src='/images/project3.png'
                  alt='Library management platform'
                />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
