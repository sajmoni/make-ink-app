import React from 'react'
import { Box, Text } from 'ink'

type AppProps = {
  name?: string
}

const App = ({ name = 'stranger' }: AppProps) => {
  return (
    <Box>
      <Text>{` Hello ${name} from React!`}</Text>
    </Box>
  )
}

export default App
