
$(document).ready(main);

function main() {
    projectGridHTML = store.map(item => createProjectCard(item)).join("");
    $("#projects-grid").html(projectGridHTML);
}

function createProjectCard(item) {
    let title = item.title;
    let description = item.description;
    let imageURL = item.imageURL;
    let imageAlt = item.imageAlt;
    let githubLink = item.githubLink;
    let liveDemo = item.liveDemo;

    let projectLinks = "";
    if(githubLink) {
        projectLinks += `<a href=${githubLink} target="_blank" aria-label="link to this project on GitHub"><i class="fab fa-github"></i></a>`;
    }
    if(liveDemo) {
        projectLinks += `<a href=${liveDemo} target="_blank" aria-label="link to the live demo of this project"><i class="fa fa-eye"></i></a>`;
    }

    let imageProjectLink = liveDemo ? liveDemo : githubLink;
    
    return `
    <div class="project-container">
        <a class="image-link" href=${imageProjectLink} target="_blank" aria-label="link to this project">
            <img src=${imageURL} alt='${imageAlt}' class="project-image">
        </a>
        <div class="project-description">
            <h4>
                ${title}
            </h4>
            <p>
                ${description}
            </p>
            <div class="project-links">
                ${projectLinks}
            </div>
        </div>
    </div>    
    `;
}