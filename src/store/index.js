import makeStore from '@thefrontend/contextstore'

const state = {
  message: 'Full-Stack Developer.'
}

export const { Provider, useStore } = makeStore(state)
