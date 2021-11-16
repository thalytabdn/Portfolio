import { introductionData, skillsData,projectsData,aboutMeData } from '../data/data.js';


function render() {

    //=====================================================================
    //                INTRODUCTION 
    //======================================================================

    // TEMPLATE YOURNAME <.header-apresentation>
    //---------------------------------------------------
    const templateNameApresentation = function (data) { //yourName
        return `
    Hi, my name is <span class="gradient">${data}</span>
    `
    }

    const $windowNameApresentation = document.querySelector(".header-apresentation")

    $windowNameApresentation.innerHTML = templateNameApresentation(introductionData.yourName)


    //  TEMPLATE ICONS SOCIAL NETWORKS  <.header-icons>
    //---------------------------------------------------------
    const templateSocialNetwors = function (data) {   // socialNetwork
        return `
        <a class="icon gradient fade" aria-label="${data.nameSocialNetwork}" target="_blank" href="${data.url}">
        <i class="${data.icon}"></i>
    </a>
        `
    }

    const $windowIconSocialNetworks = document.querySelector(".header-icons")

    $windowIconSocialNetworks.innerHTML = introductionData.socialNetwork.map((data) => {
        return templateSocialNetwors(data);
    }).join("");


    //  TEMPLATE OPTIONS NAV  <.nav>
    //---------------------------------------------------------

    const templateNav = function (data) { // nav
        return `
        <a class="btn" href="#${data.idSection}">
        ${data.optionNav}
    </a>
        `
    }

    const $windowNav = document.querySelector(".nav")

    $windowNav.innerHTML = introductionData.nav.map((data) => {
        return templateNav(data);
    }).join("");



    //==================================================
    //                      ABOUT ME
    //==================================================

    const templateAboutMe = function (data) {  //description
        return `
        <div class="container">
        <h2 class="section-title">${data.title}</h2>

        <div class="description">
           <p> ${data.description}</p>
        </div>
        <!--<a href="assets/Resume.pdf" target="_blank"><button class="project-button gradient-btn fade" ><h4>My Resume</h4></button></a>-->
        <section class="buttons">
            <div class="container-btn">

                <a href="${data.urlCV}" class="btn-cv btn-1">
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%" />
                    </svg>
                   ${data.titleURL}
                </a>

            </div>
        </section>
    
    </div>
        `
    }

    const $windowAboutMe = document.querySelector(".section-style")

    $windowAboutMe.innerHTML = templateAboutMe(aboutMeData);
  




    //==================================================
    //                       SKILLS
    //==================================================

    //  TEMPLATE SKILLS <.cards-main>
    //---------------------------------------------------------
    const templateSkills = function (data) {
        return `
        <div class="card shadow">
        <div>
            <img class="img-card" src="${data.img}" alt="logo python">
            <p>${data.nameSkill}</p>
        </div>
    </div>
        `
    }

    const $windowSkills = document.querySelector(".cards-main")

    $windowSkills.innerHTML = skillsData.map((data) => {
        return templateSkills(data);
    }).join("");


 //==================================================
    //                    PROJECTS
    //==================================================

    //  TEMPLATE PROJECTS  <.projects-main>
    //---------------------------------------------------------
    const templateProjects = function (data) {
        return `
        <div class="project">
        <div class="project-informations" data-aos="fade-right">
            <h3>${data.title}</h3>
            <p>${data.describe}</p>

            <!--<button class="project-button gradient-btn fade" onclick="alert('Will be updated soon.');">See more</button>-->
            <div class="wrapper">
                <div class="link_wrapper">
                    <a href="${data.url}">View Project</a>
                    <div class="project-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                            <path
                                d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="project-img" data-aos="fade-left">
            <img class="shadow" src="${data.img}" alt="code">
        </div>
    </div>
        `
    }

    const $windowProject = document.querySelector(".projects-main")

    $windowProject.innerHTML = projectsData.map((data) => {
        return templateProjects(data);
    }).join("");





}

render();

