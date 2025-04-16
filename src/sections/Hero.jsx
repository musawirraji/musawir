import { useGSAP } from '@gsap/react';
import Button from '../components/Button';
import HeroExperience from '../components/Models/HeroModel/HeroExperience';
import { musawir, words } from '../constants';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      }
    );
  });
  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src='/images/bg.png' alt='background' />
      </div>
      <div className='hero-layout'>
        {/* left: hero content */}
        <header className='flex flex-col justify-center items-center md:w-full w-screen md:px-20 px-5'>
          <div className='flex flex-col gap-7 justify-center items-center'>
            <div className='hero-text'>
              <h1>
                Shapping
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word, index) => (
                      <span
                        className='flex items-center md:gap-3 gap-1 pb-2'
                        key={index}
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>{' '}
                into Real Projects that Deliver Results
              </h1>

              {/* <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1> */}
            </div>

            <div className=''>
              <div className='marquee h-16 md:h-52 '>
                <div className='marquee-box gap-3'>
                  {musawir.map((name) => (
                    <h1 className='text-3xl md:text-6xl xl:text-9xl uppercase font-extrabold'>
                      {name.name} -
                    </h1>
                  ))}
                </div>
              </div>
            </div>

            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none text-center px-5'>
              Crafting fast, scalable, and stunning web experiences with React,
              Next.js, Webflow, and modern UI design.
            </p>

            <Button
              className='md:w-80 md:h-16 w-60 h-12 mt-10'
              id='button'
              text='See my Work'
            />
          </div>
        </header>
        {/* Right: 3d Model */}
        {/* <figure>
          <div className='hero-3d-layout '>
            <HeroExperience />
          </div>
        </figure> */}
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
