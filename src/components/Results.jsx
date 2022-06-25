import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
    //getResults, results, searchTerm, setSearchTerm, isLoading
    const { getResults, results: { results, image_results, entries:news }, searchTerm, isLoading } = useResultContext();
    const location = useLocation();



    useEffect(() => {
        if(searchTerm){
            const limit = location.pathname == '/video' ? 9 : 30;
            if(location.pathname === '/'){
                getResults(`/search/q=${searchTerm}&num=${limit}`);
            }else{
                getResults(`${location.pathname}/q=${searchTerm}&num=${limit}`);
            }
        }

    //anytime searchTerm or location.pathnamechanges, it will be executed
    }, [searchTerm, location.pathname]);

    if(isLoading) return <Loading/>
    // console.log(location.pathname);
    switch (location.pathname) {
        case '/':
            return (
                <div className="container mx-auto px-5 space-y-6">
                    <div className='grid grid-cols-2'>
                        <div>
                            {results?.map(({link, title, description, additional_links}, index) => (
                                <div key={index} className="w-full px-3 my-6">
                                    <a href={ link } target="_blank" rel="noreferrer">
                                        <p className='text-sm'>
                                            { link.length > 30 ? link.substring(0, 30) : link }
                                        </p>
                                        <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                            { title }
                                        </p>
                                        <p>
                                            { description }
                                        </p>
                            {/* {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href} controls height="200px" width="100%" />} */}
                                        
                                        
                                    </a>
                                    <div className={ additional_links?.[2]?.href ? 'mt-3' : 'hidden' }>
                                        <a href={ additional_links?.[2]?.href } className="ml-3 text-bold dark:text-blue-300 text-blue-700" target='_blank'>
                                            ➡ { additional_links?.[2]?.text }
                                        </a>
                                    </div>
                                    <div className={ additional_links?.[3]?.href ? 'mt-3' : 'hidden' }>
                                        <a href={ additional_links?.[3]?.href } className="ml-3 text-bold dark:text-blue-300 text-blue-700" target='_blank'>
                                            ➡ { additional_links?.[3]?.text }
                                        </a>
                                    </div>
                                    <div className={ additional_links?.[4]?.href ? 'mt-3' : 'hidden' }>
                                        <a href={ additional_links?.[4]?.href } className="ml-3 text-bold dark:text-blue-300 text-blue-700" target='_blank'>
                                            ➡ { additional_links?.[4]?.text }
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )

        case '/image':
            return(
                <div className='flex flex-wrap justify-center items-center'>
                    {image_results?.map(({ image, link: { href, title } }, index) => (
                        <a className='sm:p-3 p-5' href={ href } key={ index } target="_blank" rel="noreferrer">
                            <img src={ image?.src } alt={ title } loading="lazy" />
                            <p className='w-36 break-words text-sm mt-2'>
                                { title }
                            </p>
                        </a>
                    )) }
                </div>
            )
        case '/news':
            return (
                <div className="container mx-auto px-5 space-y-6">
                    <div className='grid grid-cols-2'>
                        <div>
                            {news?.map(({ links, id, source, title, summary, published_parsed }) => (
                                <div key={ id } className="w-full px-3 my-5">
                                    <div className='flex gap-4 text-gray-500'>
                                        <a href={ source?.href }>
                                            📰 { source?.title }
                                        </a>
                                    </div>
                                    <a href={ links?.[0].href } className="hover:underline" target="_blank" rel="noreferrer">
                                        <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                            { title }
                                        </p>
                                        {/* <div dangerouslySetInnerHTML={{ __html: summary }} /> */}
                                    </a>

                                    <div className='text-gray-500'>
                                        { published_parsed[1] + '/' + published_parsed[2] + '/' + published_parsed[0]  }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        
        case '/video':
            return (
                <div className='grid grid-cols-3 gap-3'>
                    {results?.map((video, index) => (
                        <div key={ index } className='p-2'>
                            { video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href } controls height="200px" width="100%" />}
                        </div>
                    ))}
                </div>
            )
        default:
            return "ERROR";
    }

    return (
        <div>Results</div>
    )
}
