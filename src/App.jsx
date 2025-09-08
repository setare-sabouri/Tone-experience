import "./styles/globals.scss"
import Experience from "./components/Experience/Experience"
import Interface from "./components/Interface/Interface"
import useBreakpoint from "./utils/useBreakpoint"
import useOrientation from "./utils/useOrientation"
import RotateOverlay from "./components/Interface/RotateOverlay"

function App() {
  const breakpoint = useBreakpoint()
  const orientation = useOrientation()
  const rotateIsNeeded = breakpoint==='mobile' && orientation==='portrait';
  console.log(rotateIsNeeded)

  return (
       <>

        <RotateOverlay show={rotateIsNeeded} />


        <Experience/>
        <Interface/>
       </>
  )
}

export default App
