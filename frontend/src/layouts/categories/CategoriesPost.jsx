import React, { useState, useEffect, useRef  } from 'react';
import { Link, useParams } from 'react-router-dom';

function CategoriesPost() {

  const [categories, setCategories] = useState([]);

  const { id } = useParams(); // Get the category id from the URL parameter
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Fetch articles
      fetch(import.meta.env.VITE_API_ARTICLE + `by_category/?category=${id}`)
          .then(response => response.json())
          .then(data => {
              setArticles(data);
              setLoading(false); // Set loading to false when articles are fetched
          })
          .catch(error => {
              console.error('Error fetching articles:', error);
              setLoading(false); // Set loading to false in case of error
          });
  }, [id]);

  useEffect(() => {
    // Fetch categories
    fetch(import.meta.env.VITE_API_CATEGORY)
        .then(response => response.json())
        .then(data => {
            setCategories(data);
            setLoading(false); // Set loading to false when categories are fetched
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
            setLoading(false); // Set loading to false in case of error
        });
  }, []);

  // Create a ref for the section you want to scroll to
  const articleSectionRef = useRef(null);

  // Scroll to the article section when the link is clicked
  const scrollToArticleSection = () => {
    articleSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <section>
        <div className='py-4'>
            <div className="text-center">
                <h4 className="text-secondary font-semibold text-xl">Categories</h4>
            </div>

            <div  className="max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
              {loading ? (
                  <div className="flex justify-center items-center py-4">
                      <span className="loading loading-dots loading-lg text-center text-primary"></span>
                  </div>
              ):(
                <div className="categories-carousel py-4 flex flex-row flex-wrap justify-start space-x-2 px-4 text-xs sm:text-sm shadow-2xl rounded-3xl">
                  {categories.map((category) => (
                    <Link to={`/category/${category.id}`} key={category.id} onClick={scrollToArticleSection} className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl my-1 focus:outline-none focus:ring focus:ring-primary transition duration-200 transform hover:scale-110">{category.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <div className="py-8 grid lg:grid-cols-5 gap-4" ref={articleSectionRef}>
                {/* Left */}
                <div className="col-span-3 bg-whity rounded-3xl px-6 py-4 shadow-2xl">
                    <div className="text-center py-4">
                        <h4 className="text-secondary font-semibold text-lg">Available Positions</h4>
                    </div>

                    {/* Post */}
                    {loading ? (
                        <div className="flex justify-center items-center py-4">
                            <span className="loading loading-dots loading-lg text-center text-primary"></span>
                        </div>
                    ):(
                        <>
                            {articles.map((article) => (
                                <div className="py-3">
                                    <Link to={`/article/${article.id}`}  className="flex items-center justify-start space-x-4 shadow-2xl rounded-3xl">
                                        <div className="px-14 py-20 sm:p-20 rounded-s-3xl bg-center bg-cover shadow-2xl" style={{backgroundImage: `url(${article.image})`,}}>
                                        </div>
                                        <div className="flex flex-col justify-evenly">
                                            <div>
                                                <h6 className="text-secondary font-semibold text-md">{article.title}</h6>
                                            </div>

                                            <div className="py-1 flex items-center space-x-2 text-primary text-xs">
                                                <svg xmlns="http://www.w3.org/2000/svg" width='0.7rem' fill='#00008B' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                                <p>{article.location}</p>
                                            </div>

                                            <div className="py-1 text-secondary font-semibold text-xs flex">
                                                <p className="border border-secondary py-2 px-4 rounded-3xl">{article.tags}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </>
                    )}

                </div>

                {/* Right */}
                <div className="col-span-2 bg-whity rounded-3xl px-6 py-4 shadow-2xl">
                    {/* Welcome */}
                    <section className="py-8">
                        <div className="max-w-2xl mx-auto text-whity grad-to-br rounded-3xl py-6 px-6 sm:px-12 shadow-2xl mt-4 xl:mt-0">
                            <h1 className="text-xl py-4 font-semibold text-center">Welcome to <span className="italic text-whity">Opened Career</span></h1>
                        </div>
                    </section>

                    {/* Objectives */}
                    <section className="py-8">
                        <div className="bg-whity rounded-3xl shadow-2xl p-4 sm:px-8">
                            <div>
                                <div className="flex justify-center px-8 md:px-16">
                                    <h1 className="-mt-12 text-lg text-secondary italic py-4 px-6 font-semibold bg-whity rounded-3xl shadow-2xl">OUR OBJECTIVES</h1>
                                </div>
                                <div className="py-4 text-secondary text-justify">
                                    <p className="text-sm">
                                      At Opened Career, we prioritize inclusivity, diversity, and equal opportunities 
                                      for all individuals, regardless of their backgrounds or experiences. 
                                      We believe in creating a level playing field where every candidate has the 
                                      chance to showcase their skills and potential, and every employer has access to a 
                                      diverse pool of qualified candidates. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Core Values */}
                    <section className="py-8">
                        <div className="bg-whity rounded-3xl shadow-2xl p-4 sm:px-8">
                            <div>
                                <div className="flex justify-center px-8 md:px-16">
                                    <h1 className="-mt-12 text-lg text-secondary italic py-4 px-6 font-semibold bg-whity rounded-3xl shadow-2xl">CORE VALUES</h1>
                                </div>
                                <div className="py-4 flex items-center justify-evenly flex-wrap px-2 text-sm text-white space-x-1 space-y-2">
                                    <p className="odd:bg-gradient-to-br from-[#108eb1] to-[#1e3a8a] even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Innovation</p>
                                    <p className="odd:bg-gradient-to-br from-[#108eb1] to-[#1e3a8a] even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Integrity</p>
                                    <p className="odd:bg-gradient-to-br from-[#108eb1] to-[#1e3a8a] even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Team Work</p>
                                    <p className="odd:bg-gradient-to-br from-[#108eb1] to-[#1e3a8a] even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Excellence</p>
                                    <p className="odd:bg-gradient-to-br from-[#108eb1] to-[#1e3a8a] even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Customer Focus</p>
                                    <p className="odd:bg-gradient-to-br from-[#108eb1] to-[#1e3a8a] even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Professionalism</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

        </div>
      </section>
  )
}

export default CategoriesPost