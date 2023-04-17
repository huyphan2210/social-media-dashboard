import { MouseEvent } from 'react';
import './Header.css'

function Header() {

  function hanldeToggle(e: MouseEvent<HTMLDivElement>) {
    const body = document.getElementsByTagName('body')[0];
    const circle = e.currentTarget.getElementsByClassName('circle')[0]
    const toggle = e.currentTarget;
    const circleStyle = circle.getAttribute('style');

    if (circleStyle) {
      circle.setAttribute('style', '');
      toggle.style.background = '';
      body.style.background = '';
    } else {
      circle.setAttribute('style', 'left: 0.1rem;');
      toggle.setAttribute('style', 'background: linear-gradient(to right, var(--toggle-dark-start), var(--toggle-dark-end));');
      body.setAttribute('style', 'background: linear-gradient(to bottom, var(--dark-top-bg) 0vh, var(--dark-top-bg) 25vh, var(--dark-bg) 25vh, var(--dark-bg) 100%);');
    }
  }
  return (
    <header>
      <div className='title'>
        <h1>Social Media Dashboard</h1>
        <p>Total follower: 23,004</p>
      </div>
      <div className='light-dark-toggle'>
        <label htmlFor='custom-input'>Dark mode</label>
        <div className='custom-input' onClick={hanldeToggle}>
          <div className='circle'></div>
        </div>
      </div>
    </header>
  )
}

export default Header;
