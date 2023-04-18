import './Main.css';
import facebook from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import youtube from '../../assets/images/icon-youtube.svg';

import Account from './Account/Account';
import OverviewCard from './OverviewCard/OverviewCard';

const accountData = [
  {
      "img": facebook,
      "name": "@nathanf",
      "numOfFollowers": 1987,
      "isIncreased": true,
      "numOfChange": 12,
      "typeOfSocialMedia": "facebook"
  },
  {
      "img": twitter,
      "name": "@nathanf",
      "numOfFollowers": 1044,
      "isIncreased": true,
      "numOfChange": 99,
      "typeOfSocialMedia": "twitter"
  },
  {
      "img": instagram,
      "name": "@realnathanf",
      "numOfFollowers": "11k",
      "isIncreased": true,
      "numOfChange": 1099,
      "typeOfSocialMedia": "instagram"
  },
  {
      "img": youtube,
      "name": "Nathan F.",
      "numOfFollowers": 8239,
      "isIncreased": false,
      "numOfChange": 144,
      "typeOfSocialMedia": "youtube"
  }
]

const overviewData = [
  {
      "title": "Page Views",
      "img": facebook,
      "number": 87,
      "isIncreased": true,
      "changePercent": 3
  },
  {
      "title": "Likes",
      "img": facebook,
      "number": 52,
      "isIncreased": false,
      "changePercent": 2
  },
  {
      "title": "Likes",
      "img": instagram,
      "number": 5462,
      "isIncreased": true,
      "changePercent": 2257
  },
  {
      "title": "Profile Views",
      "img": instagram,
      "number": "52k",
      "isIncreased": true,
      "changePercent": 1375
  },
  {
      "title": "Retweets",
      "img": twitter,
      "number": 117,
      "isIncreased": true,
      "changePercent": 303
  },
  {
      "title": "Likes",
      "img": twitter,
      "number": 507,
      "isIncreased": true,
      "changePercent": 553
  },
  {
      "title": "Likes",
      "img": youtube,
      "number": 107,
      "isIncreased": false,
      "changePercent": 19
  },
  {
      "title": "Total Views",
      "img": youtube,
      "number": 1407,
      "isIncreased": false,
      "changePercent": 12
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
