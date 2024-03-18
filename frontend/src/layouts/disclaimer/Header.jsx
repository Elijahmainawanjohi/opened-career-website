import React from 'react'

const Header = () => {
  return (
    <>
      <section>
        <div className="my-4 py-8 grad-to-br rounded-full">
          <div className="text-center">
            <h3 className="text-whity font-semibold text-2xl">Disclaimer Page</h3>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="bg-whity rounded-3xl shadow-2xl p-4 sm:px-8">
          <div>
            <div className="flex justify-start px-8 md:px-16">
              <h1 className="-mt-12 text-2xl text-secondary italic py-4 px-6 font-semibold bg-whity rounded-3xl shadow-2xl">Disclaimer</h1>
            </div>

            <div className="py-4 text-secondary text-justify text-sm md:text-base">
              <p className="italic py-2">
                Openedcareer.com is a platform designed to connect job seekers with potential employers. While we strive to provide accurate 
                and up-to-date information, we do not guarantee the completeness, reliability, or suitability of the job listings, company profiles, 
                or any other content posted on our website. <br /><br />

                We urge users to exercise caution and conduct their own research before applying for any 
                job or engaging with any employer listed on Openedcareer.com. We do not endorse any specific employers or job opportunities and 
                disclaim any liability for any damages or losses incurred as a result of reliance on information provided on our platform. <br /><br />
                
                Additionally, Openedcareer.com does not take responsibility for the accuracy or legality of job postings, nor do we verify the identity 
                of employers or the validity of their offers. Users are advised to verify the legitimacy of any job opportunity and to use their own 
                judgment when interacting with potential employers. <br /><br />
                
                Furthermore, Openedcareer.com is not involved in the actual transaction between employers and job seekers and cannot guarantee the outcome 
                of any job application or employment arrangement facilitated through our platform. <br /><br />
                
                By using Openedcareer.com, users agree to hold harmless and indemnify Openedcareer.com and its affiliates, officers, directors, employees, 
                and agents from any claims, liabilities, or damages arising from the use of our services. <br /><br />
                
                We reserve the right to modify, update, or remove any content on our website without prior notice. Users are encouraged to review our terms 
                of service and privacy policy regularly for any changes. <br /><br />
                
                If you have any concerns about the accuracy or legitimacy of any content on Openedcareer.com, please contact us immediately at [contact email/phone number]. <br /><br />
                
                Thank you for using Openedcareer.com. We wish you success in your job search endeavors. <br /><br />
                
                <span className='font-semibold'>Message from our CEO</span> <br />
                It really hurts when seeing young individuals struggling to find job. It’s my prayer that you finds the right job soon
              </p>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header