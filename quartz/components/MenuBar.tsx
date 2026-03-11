import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const MenuBar: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const slug = fileData.slug || ""
  
  // Top Row Logic
  const isHome = slug === "index"
  const isWiki = slug !== "index"

  // Bottom Row Logic - Checks if the current page path contains the category word
  const isCulture = slug.includes("Culture")
  const isEconomics = slug.includes("Economics") || slug.includes("Technology")
  const isHistory = slug.includes("History")
  const isCommentary = slug.includes("Commentary")
  const isPeople = slug.includes("People")
  const isPlaces = slug.includes("Places")
  const isPolitics = slug.includes("Politics")
  const isStates = slug.includes("States")

  return (
    <nav class={classNames(displayClass, "menu-bar")}>
      {/* Top Row: Main Tabs */}
      <ul class="top-tier">
        <li>
          <a href="/" class={isHome ? "active" : ""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            Home
          </a>
        </li>
        <li>
          <a href="/Wiki" class={isWiki ? "active" : ""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
            Wiki
          </a>
        </li>
      </ul>

      {/* Bottom Row: The Pill Container with Categories */}
      <div class="sub-tier-container">
        <ul class="sub-tier">
          <li>
            <a href="/Culture" class={isCulture ? "active" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
              Culture
            </a>
          </li>
          <li>
            <a href="/Economics-and-Technology" class={isEconomics ? "active" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 5.07 10 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 10 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 14 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 18.93-1 1.73"/></svg>
              Economics & Technology
            </a>
          </li>
          <li>
            <a href="/History/History-Index" class={isHistory ? "active" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              History
            </a>
          </li>
          <li>
            <a href="/Commentary" class={isCommentary ? "active" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
              Commentary
            </a>
          </li>
          <li>
            <a href="/People" class={isPeople ? "active" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              People
            </a>
          </li>
          <li>
            <a href="/Places" class={isPlaces ? "active" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>
              Places
            </a>
          </li>
          <li>
            <a href="/Politics" class={isPolitics ? "active" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 22 7"></polygon><rect x="4" y="9" width="4" height="9"></rect><rect x="16" y="9" width="4" height="9"></rect><rect x="10" y="9" width="4" height="9"></rect><line x1="2" y1="20" x2="22" y2="20"></line><line x1="2" y1="22" x2="22" y2="22"></line></svg>
              Politics
            </a>
          </li>
          <li>
            <a href="/States" class={isStates ? "active" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
              States
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default (() => MenuBar) satisfies QuartzComponentConstructor