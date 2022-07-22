import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import QuotesAPI from '../services/QuotesAPI'
import {Link} from "react-router-dom"

const Homepage = () => {


  return (
    <div className='homepage_container'> 
      <Navbar/>

      <div className="container"> 
        <h1>No one walks alone!</h1>
          <h6>Whether you're homeless, a victom of crime, misfortune, or abuse, whether you struggle with alchol or narcotics, know that you are not alone!
            here you will find both friends and resources to help get you back on track. <span style={{color:"brown"}}>  YOU ARE LOVED!</span>
          </h6>
        <div className='quote_borders'> 
        <QuotesAPI/>
        </div> 
        <h2 className='center_text'>Free resources to help</h2>
          <div className='row'> 

            <div className='column-1'  > 
              <h1 className='center_text_columns'>Substance </h1>
            <div className='hoverEffect'>
              <ul>
                <li> <a href="https://www.samhsa.gov/find-help/national-helpline"><h2 className='resource_text'>SAMHSA National Helpline</h2></a></li>
                  <p>Confidential free help, from public health agencies, to find substance use treatment and information. #800-662-4357</p>
                <li> <a href="https://drugabuse.com"><h2 className='resource_text'>American Addiction Centers</h2></a></li>
                  <p>DrugAbuse.com is a resource provided by American Addiction Centers (AAC)
                  that offers substance abuse information to help educate and guide you towards the right treatment programs. #877-969-3036</p>
                <li> <a href="https://drugfree.org/"><h2 className='resource_text'>American Addiction Centers</h2></a></li>
                  <p>For parents & caregivers
                  From tips on preventing substance use to guidance on managing recovery from addiction,
                  they have the information and resources you need at every step of the way.</p>
              </ul>
            </div>

            </div>
            <div className='column-2'  > 
              <h1  className='center_text_columns'>Trauma </h1>

            <div className='hoverEffect'>
              <ul>
                <li><a href="https://www.rainn.org/resources"><h2 className='resource_text'>National Sexual Assault Hotline</h2></a>  </li>
                  <p>RAINN is the nation's largest anti-sexual violence organization.
                    RAINN created and operates the National Sexual Assault Hotline in partnership with more than 
                    1,000 local sexual assault service providers across the country. # 800-656-4673</p>
                <li><a href="https://suicidepreventionlifeline.org/"><h2 className='resource_text'>National Suicide Prevention Lifeline</h2></a>  </li>
                  <p>We can all help prevent suicide. The Lifeline provides 24/7, free and confidential support for people in distress, prevention and crisis resources 
                    for you or your loved ones, and best practices for professionals in the United States.#800-273-8255 </p>
                <li><a href="https://www.psychguides.com/guides/ptsd-hotline/"><h2 className='resource_text'>Psych Guides, an American Addiction Centers Resource</h2></a>  </li>
                  <p>Mental health issues are more common than many people realize: approximately 1 in 5 American adults suffers from some form of one. Among this group are those with post-traumatic
                    stress disorder (PTSD), yet only 40% of people with a mental illness receive help.</p>
              </ul>
            </div>
            

            </div>
            <div className='column-3'  > 
              <h1  className='center_text_columns'>Shelter </h1>
            <div className='hoverEffect'>
              <ul>
                  <li><a href="https://www.hud.gov/ehv"><h2 className='resource_text'>U.S. Department ofHousing and Urban Development</h2></a>  </li>
                    <p>HUD is there to assist individuals and families who are homeless, at-risk of homelessness, fleeing, or attempting to flee, 
                      domestic violence, dating violence, sexual assault, stalking, or human trafficking, or were recently homeless or have a high risk of housing instability. #202-708-1112</p>
                <li><a href="https://www.samhsa.gov/homelessness-programs-resources/hpr-resources/housing-shelter"><h2 className='resource_text'>Homelessness Housing and Shelter</h2></a>  </li>
                    <p>Transitional or supportive housing and homeless shelters can help stabilize people
                      with mental health issues and substance use disorders who are experiencing homelessness.</p>
                  <li><a href="https://www.transitionalhousing.org/"><h2 className='resource_text'>Transitional Housing</h2></a>  </li>
                    <p>Transitional housing is supportive housing that helps fight the homeless problem in todays society. Transitional housing is generally for 
                      a limited time period. Stays can be from two weeks to twenty four months.</p>
              </ul>
          </div>

            </div>
          </div> 
      </div> 
    </div> 
  )
}

export default Homepage