/* External dependencies */
import { ReactElement } from 'react'
import ReactDOM from 'react-dom'

class ReactNodeProvider {
  private containers: Set<HTMLElement> = new Set()

  add(
    content: ReactElement,
    container: HTMLElement,
  ) {
    this.containers.add(container)

    ReactDOM.render(content, container)
  }

  delete(container: HTMLElement) {
    if (this.containers.has(container)) {
      ReactDOM.unmountComponentAtNode(container)
      this.containers.delete(container)
    }
  }

  clear() {
    this.containers.forEach(container => {
      ReactDOM.unmountComponentAtNode(container)
    })

    this.containers.clear()
  }
}

export default ReactNodeProvider
