import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const packageJson = require('../package.json')
const lockfile = require('../package-lock.json')

const pinnedReact = packageJson.dependencies.react
const pinnedReactDom = packageJson.dependencies['react-dom']
const lockedReact = lockfile.packages['node_modules/react']?.version
const lockedReactDom = lockfile.packages['node_modules/react-dom']?.version

if (
  pinnedReact !== pinnedReactDom ||
  lockedReact !== lockedReactDom ||
  pinnedReact !== lockedReact
) {
  console.error(
    `React version mismatch: package.json react=${pinnedReact}, react-dom=${pinnedReactDom}; lockfile react=${lockedReact}, react-dom=${lockedReactDom}`,
  )
  process.exit(1)
}

const installedVersion = (name) =>
  JSON.parse(readFileSync(require.resolve(`${name}/package.json`), 'utf8')).version

const installedReact = installedVersion('react')
const installedReactDom = installedVersion('react-dom')

if (installedReact !== installedReactDom || installedReact !== pinnedReact) {
  console.error(
    `Installed React version mismatch: react=${installedReact}, react-dom=${installedReactDom}; expected=${pinnedReact}`,
  )
  process.exit(1)
}

console.log(`React and React DOM versions match: ${installedReact}`)
