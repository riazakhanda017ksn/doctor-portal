import React from 'react';
import './BlogPost.css'
const BlogPost = (props) => {
    const { title, description, img, name } = props.blogsItem
    const date = new Date();
    console.log(date);
    return (
        <div className="col-lg-4">
            <div className="blogPOst-container">
                <div className="maain-div">
                    <div className="flex-direction-item text-center">
                        <div className="bloger-img">
                            <img src={img} alt="" />
                        </div>

                        <div className="date-and-name">
                            <h6>{name}</h6>
                            <p>{(new Date().getFullYear())}</p>


                        </div>
                    </div>
                    <div className="description-div">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;