import {Bookmark} from 'lucide-react'

const Card = (props) =>{
  return(
     <div className='maincard'>
        <div className="top">
        <img src={props.comapnyLogo} alt="" />
      <h4>save  <Bookmark size={12}/> </h4>
      </div>
      <div className="center">
        <div className='company'>
        <h3> {props.companyName} </h3>
        <h4>{props.postDate}</h4>
        </div>
        <h2>{props.jobTital}</h2>
        <div className='tags'>        
          <p className="tag1">
          {props.jobtype1}
        </p>
        <p className="tag2">
          {props.jobtype2}
        </p>
        </div>
      </div>
      <div className="bottom">
        <div className='rightb'>
            <h4>{props.pay}</h4>
            <h5>{props.address}</h5>
        </div>
        <div className="buttonb">
          <button>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}
export default Card
