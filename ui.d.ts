import { DefineComponent, Plugin } from 'vue'

declare const Ui: Exclude<Plugin['install'], undefined>
export default Ui

export const UiSample: DefineComponent
export const DemoButton: DefineComponent
