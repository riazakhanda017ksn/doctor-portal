import React from 'react';
import './FeatureServices.css'
import childImage from '../../../images/Mask Group 3.png'
const FeatureServices = () => {
    return (
        <div className='container padding-need'>
            <div className="row">
                <div className="col-lg-6">
                    <div className="feature-services-images">
                        <img src={childImage} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center">
                    <div className="feature-services-rules">
                        <h1>Exceptional Dental <br/> 
                        Care, on your Term</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam voluptatem corporis nesciunt repudiandae aliquam, a tempora impedit quas! Expedita iure aut deleniti repudiandae ab, commodi asperiores repellat quae libero quam? Qui, eveniet ullam. Cum, sed. Eligendi fugiat excepturi possimus temporibus quam repudiandae odit soluta, hic modi vel aspernatur. Vero ipsa at quae, nihil est amet dignissimos non dicta consequuntur laborum, eius molestiae. Dicta nobis sequi, sint qui expedita ullam natus, nulla culpa harum excepturi et eum quibusdam aliquid adipisci ut officiis saepe modi iusto. Pariatur dolor, ipsum doloremque modi expedita quis explicabo enim autem, praesentium molestiae nostrum adipisci reiciendis aspernatur sequi possimus laudantium accusamus dolore, saepe ab ut cupiditate debitis voluptas! Commodi consequatur vitae inventore facere odio consectetur delectus beatae asperiores! Provident nemo ducimus quibusdam totam facere corporis incidunt, commodi voluptas sunt exercitationem quo accusantium nulla ad magnam facilis minus libero! Quo excepturi accusantium eaque aut magni earum quos?</p>
                        <button>Learn More </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureServices;