import WorkFlow from './WorkFlow'
import Icon from './Icon'

const components = [WorkFlow, Icon]

const LanUI = {
  install(App: any) {
    components.forEach(component => {
      App.component('V' + component.name, component)
    })
  }
}

export default LanUI