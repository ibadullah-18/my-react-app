import Navigator from "./companents/Navigator"

import Homepage from "./pages/Homepage"

const App = () => {
  const { isDarkmodeEnabled } = useDarkmode()

  useEffect(() => {
    if(isDarkmodeEnabled) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkmodeEnabled])

  return (
      <div>
            <Navigator />
            
      </div>
  )
}

export default App
