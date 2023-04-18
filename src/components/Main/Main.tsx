import './Main.css'
import Account from './Account/Account';
import OverviewCard from './OverviewCard/OverviewCard';

import accountData from '../../data/accounts.json';
import overviewData from '../../data/overview.json';
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
