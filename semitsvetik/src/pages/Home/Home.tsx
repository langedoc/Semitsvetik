import style from './Home.module.css';
import ButtonFlower from '../../components/ButtonsFlower/ButtonFlower';
import LandingLogo from '../../components/LandingLogo/LandingLogo';
import InstaLogo from '../../components/InstaLogo/InstaLogo';
import bgImage from '../../assets/images/bg_landing.png';
import WhatsappLogo from '../../components/WhatsappLogo/WhatsappLogo';

export default function Home() {
  return (
    <div
      className={style.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <LandingLogo />
      <ButtonFlower />
      <InstaLogo />
      <WhatsappLogo />
    </div>
  )
}