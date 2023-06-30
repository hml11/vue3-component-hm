import Dialog from './Dialog'

const components = [Dialog]

const LanUI = {
  install(App: any) {
    components.forEach(component => {
      console.log('component', component)
      App.component(component.name, component)
    })
  }
}

export default LanUI