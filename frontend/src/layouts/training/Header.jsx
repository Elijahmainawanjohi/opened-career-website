import React from 'react'

const Header = () => {
  return (
    <>
        <section>
            <div className="my-4 py-8 grad-to-br rounded-full">
            <div className="text-center">
                <h3 className="text-whity font-semibold text-2xl">Trainings Coming Soon</h3>
            </div>
            </div>
        </section>

        <section>
            <div className='flex justify-center'>
                <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="404 Content Not Found" className='rounded-3xl'/>
            </div>
        </section>
    </>
  )
}

export default Header