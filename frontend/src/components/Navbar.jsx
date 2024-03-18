import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';

function Navbar({activeLink}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_CATEGORY)
          .then(response => response.json())
          .then(data => setCategories(data))
          .catch(error => console.error('Error fetching job categories:', error));
      }, []);

  return (
    <nav className="shadow-xl sticky top-0 bg-cream z-50">
        <div className="navbar max-w-7xl mx-auto">
            {/* Nav-item-left */}
            <div className="navbar-start text-secondary font-semibold">
                <div className="dropdown">
                    <button tabIndex="0" type='button' name='button' aria-label="toggle navbar" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-cream rounded-box w-52">
                        <li><Link to="/" className="text-primary">Home</Link></li>
                        <li><Link to="/category/3">Online Jobs</Link></li>
                        <li><Link to="/category/10">Internships</Link></li>
                        <li><Link to="/category/11">International Jobs</Link></li>
                        <li>
                            <summary>More</summary>
                            <ul className="p-2">
                                <li><Link to="/about">About Us</Link></li>
                                <li><a href="#contact-us">Contact Us</a></li>
                                <li><Link to="/forums">Forums</Link></li>
                                <li><Link to="/partnerships">Partnerships</Link></li>
                                <li><Link to="/advice">Advice</Link></li>
                                <li><Link to="/training">Training</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-sm lg:text-xl text-primary">OPENed CAREER</Link>
            </div>

            {/* Nav-item-right */}
            <div className="navbar-center hidden lg:flex text-secondary font-semibold">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className="text-primary">Home</Link></li>
                    <li><Link to="/category/3">Jobs</Link></li>
                    <li><Link to="/category/10">Internships</Link></li>
                    <li><Link to="/category/11">International Jobs</Link></li>
                    <li>
                        <details>
                            <summary>More</summary>
                            <ul className="p-2 bg-cream">
                                <li><Link to="/about">About Us</Link></li>
                                <li><a href="#contact-us">Contact Us</a></li>
                                <li><Link to="/forums">Forums</Link></li>
                                <li><Link to="/partnerships">Partnerships</Link></li>
                                <li><Link to="/advice">Advice</Link></li>
                                <li><Link to="/training">Training</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>

            {/* Nav-iems-end */}
            <div className="navbar-end">
                <div className="dropdown dropdown-hover dropdown-end">
                    <div tabIndex="0" role="button" className="btn m-1 bg-white text-sm hover:bg-primary hover:text-white border-0">Search Category</div>
                    <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow-2xl bg-cream text-secondary font-semibold rounded-box w-52">
                        
                        {categories.map((category) => (
                            <li key={category.id}>
                                <Link to={`/category/${category.id}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>

        {/* Colored hr */}
        <div className="flex flex-row w-full items-center">
            <div className="bg-primary h-0.5 md:h-1 w-1/4"></div>
            <div className="bg-gold h-0.5 md:h-1 w-1/4"></div>
            <div className="bg-primary h-0.5 md:h-1 w-1/4"></div>
            <div className="bg-gold h-0.5 md:h-1 w-1/4"></div>
        </div>
    </nav>
  )
}

export default Navbar;