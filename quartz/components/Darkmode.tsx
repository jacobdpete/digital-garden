import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Darkmode: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "darkmode")}>
      <button class="darkmode-toggle" id="darkmode-toggle" aria-label="Toggle theme" title="Toggle theme (Auto / Light / Dark)">
        {/* Light Mode Icon (Sun) */}
        <svg class="theme-icon light-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        
        {/* Dark Mode Icon (Moon) */}
        <svg class="theme-icon dark-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        
        {/* System Auto Icon (Monitor) */}
        <svg class="theme-icon auto-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
      </button>
    </div>
  )
}

/* This script runs in the <head> to prevent flashing white screens on load */
Darkmode.beforeDOMLoaded = `
  window.quartzUpdateTheme = (theme) => {
    let activeTheme = theme;
    if (theme === 'auto') {
      activeTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', theme);
    }
    document.documentElement.setAttribute('saved-theme', activeTheme);
    document.documentElement.setAttribute('data-theme-preference', theme);
  };

  let currentPref = localStorage.getItem('theme') || 'auto';
  window.quartzUpdateTheme(currentPref);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      window.quartzUpdateTheme('auto');
    }
  });
`

/* This script attaches the click listener to cycle through the options */
Darkmode.afterDOMLoaded = `
  const toggle = document.getElementById("darkmode-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      let current = document.documentElement.getAttribute('data-theme-preference') || 'auto';
      if (current === 'auto') {
        window.quartzUpdateTheme('light');
      } else if (current === 'light') {
        window.quartzUpdateTheme('dark');
      } else {
        window.quartzUpdateTheme('auto');
      }
    });
  }
`

export default (() => Darkmode) satisfies QuartzComponentConstructor