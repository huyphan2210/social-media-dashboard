import './OverviewCard.css';
import arrowUp from '../../../assets/images/icon-up.svg';
import arrowDown from '../../../assets/images/icon-down.svg';

function OverviewCard(props: {
    title: string,
    img: string,
    number: number | string,
    isIncreased: boolean,
    changePercent: number
}) {
    return (
        <div className='overview-card'>
            <div className='overview-card-title'>
                <span>{props.title}</span>
                <img src={props.img} alt={props.img}></img>
            </div>
            <div className='numbers'>
                <h2>{props.number}</h2>
                <span className={props.isIncreased ? '' : 'decrease'}>
                    <img src={props.isIncreased ? arrowUp : arrowDown} alt='Arrow'></img>{props.changePercent}%
                </span>
            </div>
        </div>
    )
}

export default OverviewCard;
