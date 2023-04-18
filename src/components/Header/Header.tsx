import { MouseEvent, useEffect } from 'react';
import './Header.css'

function Header() {
  const darkBg = 'hsl(230, 17%, 14%)';
  const darkTopBg = 'hsl(232, 19%, 15%)';
  const darkCardbg = 'hsl(228, 28%, 20%)';
  const darkText = 'hsl(228, 34%, 66%)';
  const darkText2 = 'white';

  function hanldeToggle(e: MouseEvent<HTMLDivElement>) {
    const root = document.querySelector(':root') as HTMLElement;
    const circle = e.currentTarget.getElementsByClassName('circle')[0]
    const toggle = e.currentTarget;
    const circleStyle = circle.getAttribute('style');

    if (circleStyle) {
      localStorage.setItem('bg', '');
      circle.setAttribute('style', '');
      toggle.style.background = '';
      root.style.setProperty('--bg', '');
      root.style.setProperty('--top-bg', '');
      root.style.setProperty('--card-bg', '');
      root.style.setProperty('--text', '');
      root.style.setProperty('--text-2', '');
    } else {
      localStorage.setItem('bg', 'dark');
      root.style.setProperty('--bg', darkBg);
      root.style.setProperty('--top-bg', darkTopBg);
      root.style.setProperty('--card-bg', darkCardbg);
      root.style.setProperty('--text', darkText);
      root.style.setProperty('--text-2', darkText2);
      circle.setAttribute('style', 'left: 0.2rem;');
      toggle.setAttribute('style', 'background: linear-gradient(to right, var(--toggle-dark-start), var(--toggle-dark-end));');
    }
  }
  useEffect(() => {
    const theme = localStorage.getItem('bg');
    if (theme) {
      const root = document.querySelector(':root') as HTMLElement;
      const toggle = document.getElementsByClassName('custom-input')[0];
      const circle = toggle.getElementsByClassName('circle')[0];

      root.style.setProperty('--bg', darkBg);
      root.style.setProperty('--top-bg', darkTopBg);
      root.style.setProperty('--card-bg', darkCardbg);
      root.style.setProperty('--text', darkText);
      root.style.setProperty('--text-2', darkText2);
      circle.setAttribute('style', 'left: 0.2rem;');
      toggle.setAttribute('style', 'background: linear-gradient(to right, var(--toggle-dark-start), var(--toggle-dark-end));');
    }
  })
  return (
    <header>
      <div className='title'>
        <h1 id='dashboard-title'>Social Media Dashboard</h1>
        <label htmlFor='dashboard-title'>Total follower: 23,004</label>
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
