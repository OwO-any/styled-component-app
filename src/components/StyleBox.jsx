import { Box } from "../UI/Box"
import Container from "../UI/Container"

const StyleBox = () => {
  const boxColor = ['orange', 'yellow', 'violet'];

  const getBoxName = (color) => {
    switch (color) {
      case 'orange':
        return 'ORANGE BOX';
      case 'yellow':
        return 'YELLOW BOX';
      case 'violet':
        return 'VIOLET BOX';
      default:
        return 'BLACK BOX';
    }
  }

  return (
    <>
      <Container>
        {
          boxColor.map((color) => (
            <Box borderColor={ color }>{ getBoxName(color) }</Box>
          ))
        }
      </Container>
    </>
  )
}

export default StyleBox
