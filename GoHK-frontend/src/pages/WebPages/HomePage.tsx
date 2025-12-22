import {useState, type FC} from 'react'
import ESimAndOctopus from '../../components/eSimAndOctopus';
import Transportation from '../../components/transportation';
import Hotels from '../../components/Hotels';
import Food from '../../components/Food';
import VisitingPlaces from '../../components/VisitingPlaces';

const HomePage: FC = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const stages = ["esim", "transport", "hotel", "food", "visit_places"];

  const next_stage = () => {
    setCurrentStage((currentStage + 1) % stages.length);
  }

  const previous_stage = () => {
    setCurrentStage((currentStage - 1) % stages.length);
  }

  if (currentStage == 0) {
    return <ESimAndOctopus />
  } else if (currentStage == 1) {
    return <Transportation />
  } else if (currentStage == 2) {
    return <Hotels />
  } else if (currentStage == 3) {
    return <Food />
  } else if (currentStage == 4) {
    return <VisitingPlaces />
  }
}

export default HomePage
