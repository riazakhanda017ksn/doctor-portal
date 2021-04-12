import React from 'react';
import './Blog.css'
import doctorChuki from '../../../images/doctor_PNG15977.png'
import doctorHeader from '../../../images/doctor_PNG15990.png'
import doctorEmaWatson from '../../../images/doctor_PNG16043.png'
import BlogPost from '../BlogPost/BlogPost';
const Blog = () => {
    const blogs=[
        {
            title : 'Check at least a doctor in a year for your teeth',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam',
            name:'Dr. Cudi',
            img:doctorChuki,

        },
        {
            title : 'Two time brush in a day can keep you healthy',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam',
            name:'Dr. Alex',
            img:doctorHeader,

        },
        {
            title : 'The tooth cancer is taking a challenge',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam',
            name:'Dr. Ema Watson',
            img:doctorEmaWatson,

        }
    ]
    return (
        <div className='text-center extra-customize'>
            <h6>OUR BLOG</h6>
            <h1>From Our Blog News</h1>

            <div className="container mt-5">
                <div className="row mt-3">
                  {
                      blogs.map(blog=><BlogPost blogsItem={blog}></BlogPost>)
                  }
                </div>
            </div>
        </div>
    );
};

export default Blog;