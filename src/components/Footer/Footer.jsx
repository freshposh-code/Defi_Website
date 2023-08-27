import React from 'react'
import './Footer.css'
import { footer } from '../../footerData'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                   {footer.map((element , index)=>(
                       <div className="col">
                        <h4>
                            {element.Head}
                        </h4>
                  {element.links.map((link)=>(
                    <p>
                        {
                            link.Link
                        }
                    </p>
                  ))}
       
                </div>
                    ))}
            </div>
        </div>
    )
}

export default Footer