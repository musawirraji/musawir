const Button = ({ className, id, text }) => {
  return (
    <a
      className={`cta-wrapper ${className ?? ''}`}
      href='#projects'
      id={id}
      onClick={(e) => {
        e.preventDefault();
        const target = document.querySelector('#counter');
        if (target && id) {
          const offset = window.innerWidth * 0.15;
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top,
            behavior: 'smooth',
          });
        }
      }}
    >
      <div className='cta-button group'>
        <div className='bg-circle' />
        <p className='text'>{text}</p>
        <div className='arrow-wrapper'>
          <img src='/images/arrow-down.svg' alt='arrow' />
        </div>
      </div>
    </a>
  );
};

export default Button;
