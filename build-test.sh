set -e

# Builds, installs to `example` folder and runs the library

runCommand() {
  echo "=== $1 ==="
  $1
  echo ""
}

runCommand "yarn clean"
runCommand "yarn build"
runCommand "yarn pack --filename make-ink-app.tgz"
runCommand "cd example"
runCommand "yarn refresh"
runCommand "yarn make-ink-app test-app"
runCommand "cd test-app"
runCommand "yarn start"
