import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';

import footerlogo from '../assets/images/logo.webp'

function Footer() {

    const [socials, setSocials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch articles
        fetch(import.meta.env.VITE_API_SOCIALS)
            .then(response => response.json())
            .then(data => {
                setSocials(data);
                setLoading(false); // Set loading to false when socials are fetched
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false); // Set loading to false in case of error
            });
    }, []);

  return (
    <footer id="footer">
        <div className="max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-2 pt-8 pb-5">
            <div className="flex flex-col items-center xl:flex-row xl:justify-between">
                <div className="mb-6 xl:mb-0">
                    <Link to="/">
                        <div className='py-24 px-32 rounded-3xl bg-center bg-cover' style={{backgroundImage: `url(${footerlogo})`}} alt="Footer Logo" title='Kenya Jobs | Opened Career' loading='lazy'></div>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-primary uppercase">Resources</h2>
                        <ul className="text-secondary font-medium">
                            <li className="mb-4">
                                <Link to="/" className="hover:underline">Home</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/category/6" className="hover:underline">Internships</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/about" className="hover:underline">About Open Jobs</Link>
                            </li>
                            <li>
                                <a href="#contact-us" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-primary uppercase">Follow us</h2>
                        <ul className="text-secondary font-medium">
                            {socials.map((social) => (
                                <li className="mb-4" key={social.id}>
                                    <a href={social.social_media_link} target='official site' className="hover:underline capitalize">{social.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-primary uppercase">Legal</h2>
                        <ul className="text-secondary font-medium">
                            <li className="mb-4">
                                <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/policy" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/conditions" className="hover:underline">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Colored hr */}
            <div className="flex flex-row w-full items-center my-6 lg:my-8">
                <div className="bg-primary h-0.5 md:h-1 w-1/4"></div>
                <div className="bg-gold h-0.5 md:h-1 w-1/4"></div>
                <div className="bg-primary h-0.5 md:h-1 w-1/4"></div>
                <div className="bg-gold h-0.5 md:h-1 w-1/4"></div>
            </div>
            
            <div className="flex items-center flex-col sm:flex-row sm:justify-between">
                <span className="text-sm text-secondary font-medium italic sm:text-center">© 2024 <a href="#" className="hover:underline">Open
                        Career™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                    {socials.map((social) => (
                        <a href={social.social_media_link} key={social.id} target='official site' className="transition duration-200 transform hover:scale-150">
                            {social.title === 'facebook' && (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#4267B2' viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                                    <span className="sr-only">Facebook page</span>
                                </>
                            )}

                            {social.title === 'whatsapp' && (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#128C7E' viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                                    <span className="sr-only">WhatsApp</span>
                                </>
                            )}

                            {social.title === 'instagram' && (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#E1306C' viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                    <span className="sr-only">Instagram page</span>
                                </>
                            )}

                            {social.title === 'twitter' && (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#262626' viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                                    <span className="sr-only">X page</span>
                                </>
                            )}
                        </a>
                    ))}
                    {/* <a href="#" className="transition duration-200 transform hover:scale-150">
                        <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#128C7E' viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                        <span className="sr-only">WhatsApp</span>
                    </a>
                    <a href="#" className="transition duration-200 transform hover:scale-150">
                        <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#4267B2' viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#" className="transition duration-200 transform hover:scale-150">
                        <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#E1306C' viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        <span className="sr-only">Instagram page</span>
                    </a>
                    <a href="#" className="transition duration-200 transform hover:scale-150">
                        <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#262626' viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                        <span className="sr-only">X page</span>
                    </a> */}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer