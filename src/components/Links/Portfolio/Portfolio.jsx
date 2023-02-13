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
    <PortfolioContainer>
      <PortfolioLink
        target='_blank'
        href='https://adamaksel.github.io/CanvasGames/'
      >
        <PortfolioItem>
          <PortfolioImage src={CanvasGamesImg} />
          Canvas Games Site
        </PortfolioItem>
      </PortfolioLink>
      <PortfolioLink
        target='_blank'
        href='https://adamaksel.github.io/LearnKhmer/'
      >
        <PortfolioItem>
          <PortfolioImage src={LearnKhmerImg} />
          Learn Khmer Study Buddy
        </PortfolioItem>
      </PortfolioLink>
    </PortfolioContainer>
  )
}

export default Portfolio
