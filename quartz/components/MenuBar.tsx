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
        <li><a href="/" class={isHome ? "active" : ""}>🏠 Home</a></li>
        <li><a href="/Wiki" class={isWiki ? "active" : ""}>📚 Wiki</a></li>
      </ul>

      {/* Bottom Row: The Pill Container with Categories */}
      <div class="sub-tier-container">
        <ul class="sub-tier">
          {/* Note: Update the href="" links back to your exact URLs if I guessed them wrong! */}
          <li><a href="/Culture" class={isCulture ? "active" : ""}>🎭 Culture</a></li>
          <li><a href="/Economics-and-Technology" class={isEconomics ? "active" : ""}>⚙️ Economics & Technology</a></li>
          <li><a href="/History/History-Index" class={isHistory ? "active" : ""}>📜 History</a></li>
          <li><a href="/Commentary" class={isCommentary ? "active" : ""}>🖋️ Commentary</a></li>
          <li><a href="/People" class={isPeople ? "active" : ""}>👥 People</a></li>
          <li><a href="/Places" class={isPlaces ? "active" : ""}>🗺️ Places</a></li>
          <li><a href="/Politics" class={isPolitics ? "active" : ""}>🏛️ Politics</a></li>
          <li><a href="/States" class={isStates ? "active" : ""}>🏳️ States</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default (() => MenuBar) satisfies QuartzComponentConstructor