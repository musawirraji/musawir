import CountUp from 'react-countup';
import { counterItems } from '../constants';

const AnimatedCounter = () => {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
      <div className='mx-auto grid-4-cols'>
        {counterItems.map((item) => (
          <div className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
            <div
              className='counter-number text-white text-5xl font-bold mb-2'
              key={item.label}
            >
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className='text-white-50'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
