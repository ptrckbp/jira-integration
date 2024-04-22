import { IntegrationDefinition } from '@botpress/sdk'

import {
  configuration,
  states,
  user,
  channels,
  actions,
} from './src/definitions'

export default new IntegrationDefinition({
  name: "dude/jira",
  version: '0.2.0',
  readme: 'readme.md',
  icon: 'icon.svg',
  configuration,
  channels,
  user,
  actions,
  events: {},
  states,
})
