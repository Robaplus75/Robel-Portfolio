import { useState } from 'react'


const themes = [
  {
    '--color1': '#112935', 
    '--color2': '#ADEFD1FF',
    '--color3': '#ADEFD1FF',
    '--bgimage': "url(/sm-bg-image6.jpg)",
  },
  {
    '--color1': '#00203FFF',
    '--color2': '#ADEFD1FF',
    '--color3': '#ADEFD1FF',
    '--bgimage': "url(/sm-bg-image1.jpg)",
  },
  {
    '--color1': '#101820FF',
    '--color2': '#FEE715FF',
    '--color3': '#FEE715FF',
    '--bgimage': "url(/sm-bg-image2.jpg)",
  },
  {
    '--color1': 'black',
    '--color2': 'white',
    '--color3': 'white',
  },
];

export default function ThemeSwitcher() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleTheme = () => {
    const newIndex = (currentIndex + 1) % themes.length;
    setCurrentIndex(newIndex);

    const root = document.documentElement;
    const themeColors = themes[newIndex];
    Object.keys(themeColors).forEach((key) => {
      root.style.setProperty(key, themeColors[key]);
    });
  };

  return (
  		<li className="theme-btn" onClick={toggleTheme}>
            <a>
              <i class='bx bx-palette' ></i>
              <span className="links_name">Theme</span>
            </a>
            <span className="tooltip">Theme</span>
         </li>
  );
}