import './Account.css';
import arrowUp from '../../../assets/images/icon-up.svg';
import arrowDown from '../../../assets/images/icon-down.svg';

function Account(props: {
    img: string,
    name: string,
    numOfFollowers: number | string,
    isIncreased: boolean,
    numOfChange: number,
    typeOfSocialMedia: string
}) {
    return (
        <div className={'account-card ' + props.typeOfSocialMedia}>
            <div className='account-card-title'>
                <img src={props.img} alt={props.typeOfSocialMedia}></img>
                <span>{props.name}</span>
            </div>
            <div className='num-of-followers'>
                <h1 id={`${props.typeOfSocialMedia}-number`}>{props.numOfFollowers}</h1>
                <label htmlFor={`${props.typeOfSocialMedia}-number`} className='social-label'>{props.typeOfSocialMedia === 'youtube' ? 'Subscribers' : 'Followers'}</label>
            </div>
            <span className={props.isIncreased ? 'change' : 'change decrease'}>
                {props.isIncreased ? <img src={arrowUp} alt='Up'></img> : <img src={arrowDown} alt='Down'></img>}{props.numOfChange} Today
            </span>
        </div>
    )
}

export default Account;
