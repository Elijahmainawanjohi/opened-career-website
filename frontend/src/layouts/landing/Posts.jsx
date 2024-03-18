import React, { useState, useEffect, useRef  } from 'react';
import { Link, useParams } from 'react-router-dom';

function Posts() {

    const customStyle2 = {
        backgroundColor: `rgba(0, 0, 0, 0.702)`,
    }
    // Create a ref for the section you want to scroll to
    const articleSectionRef = useRef(null);

    // Scroll to the article section when the link is clicked
    const scrollToArticleSection = () => {
        articleSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const [articles, setArticles] = useState([]); // articles setArticles
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // Get the article id from the URL parameter
    const [article, setArticle] = useState(null); // article setArticle

    useEffect(() => {
        // Fetch articles
        fetch(import.meta.env.VITE_API_ARTICLE)
            .then(response => response.json())
            .then(data => {
                setArticles(data);
                setLoading(false); // Set loading to false when articles are fetched
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false); // Set loading to false in case of error
            });

        if (id) {
            // Fetch article content based on the id if the user clicks a link
            fetch(import.meta.env.VITE_API_ARTICLE + `${id}`)
                .then(response => response.json())
                .then(data => {
                    setArticle(data);
                    setLoading(false); // Set loading to false when the article is fetched
                })
                .catch(error => {
                    console.error('Error fetching article:', error);
                    setLoading(false); // Set loading to false in case of error
                });
        } else {
            // Fetch the list of articles to get the latest article ID
            fetch(import.meta.env.VITE_API_ARTICLE)
                .then(response => response.json())
                .then(data => {
                    // Get the latest article ID from the list of articles
                    const latestArticleId = data.length > 0 ? data[0].id : null;

                    if (latestArticleId) {
                        // Fetch article content based on the latest article ID
                        fetch(import.meta.env.VITE_API_ARTICLE + `${latestArticleId}`)
                            .then(response => response.json())
                            .then(data => {
                                setArticle(data);
                                setLoading(false); // Set loading to false when the default article is fetched
                            })
                            .catch(error => {
                                console.error('Error fetching default article:', error);
                                setLoading(false); // Set loading to false in case of error
                            });
                    } else {
                        console.error('No articles found.');
                        setLoading(false); // Set loading to false if no articles are available
                    }
                })
                .catch(error => {
                    console.error('Error fetching articles:', error);
                    setLoading(false); // Set loading to false in case of error
                });
        }
    }, [id]);

    // Share Content on social media
    const handleWhatsAppShare = () => {
        // Get the article header and content
        const articleHeader = document.getElementById('articleHeader').innerText;
        const articleContent = document.getElementById('articleContent').innerText;

        // Get the current page URL
        const currentPageUrl = window.location.href;

        // Customize the font
        const assistTitle = 'OPENed CAREER';
        const boldArticleHeader = `*${articleHeader}*`;
        const assistText = 'Explore more content and requirements by following the link below:';
        const boldAssistText = `*${assistText}*`;

        // Encode the article information for the URL
        const encodedArticle = encodeURIComponent(assistTitle + '\n\n' + boldArticleHeader + '\n\n' + articleContent + '\n\n' + boldAssistText + '\n' + currentPageUrl);

        // Generate the WhatsApp share URL
        const whatsappUrl = 'https://wa.me/?text=' + encodedArticle;

        // Open the share dialog
        window.open(whatsappUrl, '_blank');
    };

    const handleFacebookShare = () => {
        // Get the article header and content
        const articleHeader = document.getElementById('articleHeader').innerText;
        const articleContent = document.getElementById('articleContent').innerText;
        const assistTitle = 'OPENed CAREER';

        // Get the current page URL
        const currentPageUrl = window.location.href;

        // Encode the article information for the URL
        const encodedArticle = encodeURIComponent(assistTitle + '\n\n' + articleHeader + '\n\n' + articleContent + '\n\n' + currentPageUrl);
    
        // Generate the Facebook share URL
        const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + currentPageUrl + '&quote=' + encodedArticle;
    
        // Open the share dialog
        window.open(facebookUrl, '_blank');
    };

    const handleTwitterShare = () => {
        // Get the article header and content
        const articleHeader = document.getElementById('articleHeader').innerText;
        const articleContent = document.getElementById('articleContent').innerText;
    
        // Get the current page URL
        const currentPageUrl = window.location.href;
    
        // Construct the Twitter share URL
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(articleHeader)}&url=${encodeURIComponent(currentPageUrl)}`;
    
        // Open the share dialog
        window.open(twitterUrl, '_blank');
    };

  return (
    <div className="py-8 grid lg:grid-cols-2 gap-4">
        {/* Left */}
        <div className="bg-whity rounded-3xl px-6 py-4 shadow-2xl">
            <div className="text-center py-4">
                <h4 className="text-secondary font-semibold text-xl">Latest picks for you</h4>
            </div>

            {/* Post */}

            {loading ? (
                <div className="flex justify-center items-center py-4">
                    <span className="loading loading-dots loading-lg text-center text-primary"></span>
                </div>
            ):(
                <>
                    {articles.slice().reverse().slice(0, 4).map((article) => (
                        <div className="py-3" key={article.id}>
                            <Link to={`/${article.id}`} onClick={scrollToArticleSection} className="flex items-center space-x-4 shadow-2xl rounded-3xl">
                                <div className="px-14 py-20 sm:p-20 rounded-s-3xl bg-center bg-cover shadow-2xl" style={{backgroundImage: `url(${article.image})`,}} alt="Opportunities Meet Aspirations" title='Kenya Jobs | Opened Career'>
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
        <div className="bg-whity rounded-3xl px-6 py-4 shadow-2xl" ref={articleSectionRef}>
            <div className="py-8">
                {/* Job Post */}
                {loading ? (
                    <div className="flex justify-center items-center py-4">
                        <span className="loading loading-dots loading-lg text-center text-primary"></span>
                    </div>
                ):(
                    <>
                        {article && (
                            <div className="max-w-xl mx-auto mb-12 border-t-4 xl:border-t-0 xl:border-l-4 even:border-gold odd:border-primary py-6 px-8 rounded-3xl shadow-2xl">
                                <div className="my-2 px-6 py-24 rounded-3xl bg-center bg-cover shadow-2xl relative" style={{backgroundImage: `url(${article.image})`,}} alt="Opportunities Meet Aspirations" title='Kenya Jobs | Opened Career'>
                                    <div className="rounded-3xl absolute top-0 left-0 w-[100%] h-[100%]" style={customStyle2}></div>
                                    <div className='relative z-10'>
                                        <h2 id='articleHeader' className="text-whity text-2xl font-semibold">{article.title}</h2>
                                        <div className="py-2 flex items-center space-x-4 text-whity">
                                            <svg xmlns="http://www.w3.org/2000/svg" width='0.7rem' fill='#FFFFFF' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                            <p>{article.location}</p>
                                        </div>
                                    </div>
                                </div>
            
                                <div className="py-2 text-secondary font-semibold text-xs flex">
                                    <p className="border border-secondary py-2 px-4 rounded-3xl">{article.tags}</p>
                                </div>
            
                                <div className="py-2 text-secondary/80 italic text-sm">
                                    <h6 className='text-primary font-semibold italic py-2'>Description</h6>
                                    <p id='articleContent' dangerouslySetInnerHTML={{ __html: article.about }}></p>
                                </div>
            
                                <div className="py-2 text-secondary/80 italic text-sm">
                                    <h6 className='text-primary font-semibold italic py-2'>Requirements</h6>
                                    <p dangerouslySetInnerHTML={{ __html: article.requirements }}></p>
                                </div>
            
                                <div className="py-2 text-secondary/80 italic text-xs font-semibold">
                                    <h6>*More Information about Application click the link to job post below:</h6>
                                </div>
            
                                <div className="flex flex-row items-center text-xs text-secondary space-x-2 py-2">
                                    <p>by <span className="text-primary font-semibold italic">Elijah Maina</span></p>
                                    <p>{new Date(article.post_date).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                                </div>
            
                                <div className="py-4 flex flex-row justify-between items-center text-secondary">
                                    <div className="flex flex-row items-center text-sm space-x-4">
                                        <p className="text-primary font-semibold italic">Share</p>

                                        <button onClick={handleWhatsAppShare} aria-label="social icons" className="transition duration-200 transform hover:scale-150">
                                            <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#128C7E' viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                                        </button>

                                        <button onClick={handleFacebookShare} aria-label="social icons" className="transition duration-200 transform hover:scale-150">
                                            <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#4267B2' viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                                        </button>

                                        <button onClick={handleTwitterShare} aria-label="social icons" className="transition duration-200 transform hover:scale-150">
                                            <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#262626' viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                                        </button>
                                    </div>
                                    <div className="text-whity font-semibold text-xs transition duration-200 transform hover:scale-110">
                                        <a href={article.job_link} target='Job Link' className="grad-to-br focus:outline-none focus:ring focus:ring-cyan-300 py-2 px-4 rounded-3xl">More Details</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Posts