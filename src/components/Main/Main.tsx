import './Main.css'
import Account from './Account/Account';
import OverviewCard from './OverviewCard/OverviewCard';

import overviewData from '../../data/overview.json';
const accountData = [
  {
      "img": "../assets/images/icon-facebook.svg",
      "name": "@nathanf",
      "numOfFollowers": 1987,
      "isIncreased": true,
      "numOfChange": 12,
      "typeOfSocialMedia": "facebook"
  },
  {
      "img": "../assets/images/icon-twitter.svg",
      "name": "@nathanf",
      "numOfFollowers": 1044,
      "isIncreased": true,
      "numOfChange": 99,
      "typeOfSocialMedia": "twitter"
  },
  {
      "img": "../assets/images/icon-instagram.svg",
      "name": "@realnathanf",
      "numOfFollowers": "11k",
      "isIncreased": true,
      "numOfChange": 1099,
      "typeOfSocialMedia": "instagram"
  },
  {
      "img": "../assets/images/icon-youtube.svg",
      "name": "Nathan F.",
      "numOfFollowers": 8239,
      "isIncreased": false,
      "numOfChange": 144,
      "typeOfSocialMedia": "youtube"
  }
]

function Main() {

  return (
    <main>
      <section className='accounts'>
        {accountData.map((account, index) => <Account key={index} img={account.img} name={account.name} numOfChange={account.numOfChange} numOfFollowers={account.numOfFollowers} isIncreased={account.isIncreased} typeOfSocialMedia={account.typeOfSocialMedia} />)}
      </section>
      <section className='overview'>
        <h1>Overview - Today</h1>
        <div className='overview-analytics'>
          {overviewData.map((overview, index) => <OverviewCard key={index} img={overview.img} title={overview.title} changePercent={overview.changePercent} isIncreased={overview.isIncreased} number={overview.number} />)}
        </div>
      </section>
    </main>
  )
}

export default Main;
