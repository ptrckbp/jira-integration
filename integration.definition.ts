import { IntegrationDefinition } from '@botpress/sdk'

import {
  configuration,
  states,
  user,
  channels,
  actions,
} from './src/definitions'

export default new IntegrationDefinition({
  name: "plus/jira",
  title: "Jira actions",
  description: "This integration allows you to manipulate Jira issues and users.",
  version: '0.2.2',
  readme: 'readme.md',
  icon: 'icon.svg',
  configuration,
  channels,
  user,
  actions,
  events: {},
  states,
})
