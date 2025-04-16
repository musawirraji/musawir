import { useEffect, useState } from 'react';
import { navLinks } from '../constants';

const NavBar = () => {
  const [scrollY, setScrollY] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrollY(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrollY ? 'scrolled' : 'not-scrolled'}`}>
      <div className='inner'>
        <a href='#hero' className='logo'>
          Musawir | Raji
        </a>
        <nav className='desktop'>
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className='group'>
                <a href={link} className=''>
                  <span>{name}</span>
                  <span className='underline' />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href='#contact' className='contact-btn group'>
          <div className='inner'>
            <span>Work with me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
