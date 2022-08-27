import banner from '../../assets/banner.svg'
import { BannerImg } from './styles'

export function Home() {
  return (
    <div>
      <BannerImg src={banner} alt="" />
    </div>
  )
}
