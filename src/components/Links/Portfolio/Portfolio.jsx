import CanvasGamesImg from '../../images/canvasgames.png'
import LearnKhmerImg from '../../images/learnkhmer.png'
import {
  PortfolioContainer,
  PortfolioItem,
  PortfolioImage,
  PortfolioLink,
} from './Portfolio.elements'

const Portfolio = () => {
  return (
    <>
      <PortfolioContainer>
        <PortfolioItem>
          <PortfolioImage src={CanvasGamesImg} />
          <PortfolioLink>Canvas Games Site</PortfolioLink>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioImage
            href='https://adamaksel.github.io/LearnKhmer/'
            src={LearnKhmerImg}
          />
          <PortfolioLink>Learn Khmer Study Buddy</PortfolioLink>
        </PortfolioItem>
      </PortfolioContainer>
    </>
  )
}

export default Portfolio
