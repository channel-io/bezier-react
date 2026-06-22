import fs from 'fs/promises'
import path from 'path'

const MERGED_CSS_FILE = 'styles.css'
const DARK_THEME_CSS_FILE = 'darkTheme.css'
const DARK_THEME_SELECTOR = '[data-bezier-theme="dark"]'
const SYSTEM_DARK_THEME_FALLBACK_SELECTOR =
  ':where(:root:not([data-bezier-theme]), :host(:not([data-bezier-theme])))'

interface MergeCssOptions {
  addSystemDarkThemeFallback?: boolean
}

function createSystemDarkThemeFallbackCss(css: string) {
  if (!css.includes(DARK_THEME_SELECTOR)) {
    throw new Error(`Dark theme CSS must include ${DARK_THEME_SELECTOR}`)
  }

  return `@media (prefers-color-scheme: dark) {\n${css.replace(
    DARK_THEME_SELECTOR,
    SYSTEM_DARK_THEME_FALLBACK_SELECTOR
  )}}\n`
}

export async function mergeCss(
  buildPath: string,
  { addSystemDarkThemeFallback = false }: MergeCssOptions = {}
) {
  try {
    const destination = path.join(buildPath, MERGED_CSS_FILE)
    const files = await fs.readdir(buildPath)
    const result: string[] = []
    let darkThemeCss: string | null = null

    for (const file of files.filter((file) => file.endsWith('.css'))) {
      if (file === path.basename(destination)) continue

      const filePath = path.join(buildPath, file)
      const data = await fs.readFile(filePath, 'utf8')
      result.push(data)

      if (file === DARK_THEME_CSS_FILE) {
        darkThemeCss = data
      }

      await fs.unlink(filePath)
    }

    if (addSystemDarkThemeFallback && !darkThemeCss) {
      throw new Error(
        `${DARK_THEME_CSS_FILE} is required to create system dark theme fallback`
      )
    }

    if (addSystemDarkThemeFallback && darkThemeCss) {
      // Append after light theme defaults so system-dark users do not see a
      // light first paint before data-bezier-theme is set by the app.
      result.push(createSystemDarkThemeFallbackCss(darkThemeCss))
    }

    await fs.writeFile(destination, result.join('\n'))

    console.log(`\n✔︎ Merged CSS saved to ${destination}`)
  } catch (error) {
    throw error
  }
}
