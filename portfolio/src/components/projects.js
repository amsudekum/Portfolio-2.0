import React from 'react';

const Projects = () => {
    return (
        <div>
             <div id="mywork" class="mywork">
        <div class="mywork-head-row">
            <p class="myworkhead">MY WORK</p>
        </div>

        <div class="mywork-image-row">
            <div class="mywork-img-container">
                <img src="assets/images/Pink Loading.png" alt="Loading Work Placeholder" class="mywork-img"/>
                <div class="comingsoon">   
                    <h3>COMING SOON</h3>
                </div>
            </div>
            <div class="mywork-img-container">
                <img src="assets/images/Cream Loading.png" alt="Loading Work Placeholder" class="mywork-img"/>
                <div class="comingsoon">   
                    <h3>COMING SOON</h3>
                </div>
            </div>
            <div class="mywork-img-container">
                <img src="assets/images/Black Loading.png" alt="Loading Work Placeholder" class="mywork-img"/>
                <div class="comingsoon">   
                    <h3>COMING SOON</h3>
                </div>
            </div>
        </div>
    </div>
        </div>
       
    )
}

export default Projects;