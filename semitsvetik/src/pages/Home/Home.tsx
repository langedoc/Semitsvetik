import style from './Home.module.css';
import ButtonFlower from '../../components/ButtonsFlower/ButtonFlower';
import LandingLogo from '../../components/LandingLogo/LandingLogo';
import InstaLogo from '../../components/InstaLogo/InstaLogo';

export default function Home() {
  return (
    <div className={style.container}>
      <LandingLogo />
      <ButtonFlower />
      <InstaLogo />
    </div>
  )
}