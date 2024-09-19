
const projects = [
    {
        id: 1,  
        name: 'Adversarial Training and Observational Fairness on COMPAS Dataset',
        date: new Date('2022-01-01'),
        imageurl:'/assets/img/justice-vs-fairness.jpeg',
        description: 'Developed linear regression model in Python using features provided by COMPAS dataset and obtained accuracy equivalent to that of the commercial risk assessment software COMPAS.',
        tools: 'Python, Pandas, NumPy, SkLearn and PyTorch',
        accomplishment: 'Compared accuracy, calibration, and false positive parity of Linear Regression model to that of adversarial trained Neural Network. Demonstrated improved observational fairness without accuracy impairment.',
        collablinks: 'https://drive.google.com/file/d/1BN0gBdj-YYLn46Mamb9UTtcevggUXESQ/view?usp=sharing'
    }, 
    {
        id: 2,  
        name: 'Movie Recommendation System',
        date: new Date('2022-04-01'),
        imageurl: '/assets/img/movie-recommender-picture.png',
        description: 'Designed Movie Recommender System which utilized graph neural network to reocmmend movies between similar users.',
        tools: 'Python, Pandas, NumPy, SkLearn and PyTorch',
        accomplishment:'Recommended top-150 movies for each user. Investigated use of Node2Vec to improve Recall@150 of Neural Network', 
        collablinks: 'https://colab.research.google.com/drive/1sGRxw6qVEi5SCKm6EyHOX8whg16j8oal?usp=sharing'

    },
    {
        id: 3,
        name:'Designing and Tunning and CNN',
        date: new Date('2019-04-01'),
        imageurl: 'assets/img/cnn-image.png',
        description: 'Designed, tuned and tested a convolutional neural network to classify a corpus of images into 10 categories.',
        tools: 'Python, Pandas, NumPy, SkLearn and PyTorch',
        accomplishment: "Achieved 86% accuracy in classification while testing and minimizing false positive and false negative rates.",
        collablinks: 'https://github.com/sarahagib/ECE421-Introduction-to-Machine-Learning-/blob/main/Designing%20and%20Tuning%20a%20Convolutional%20Neural%20Network.ipynb'

    }
];

function sortProjects(projects){
    projects.sort((a,b) => b.date - a.date)
    return projects; 
}; 

function renderProjects(projects){

    sortedProjects = sortProjects(projects); 

    latestProject = sortedProjects[0]; 

    document.getElementById("latestProject").innerHTML = `
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="project image" src="${latestProject.imageurl}" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator purple-text hoverline">${latestProject.name}<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  ${latestProject.description}
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li><b>Tools:</b> ${latestProject.tools}</li>
                  <li>${latestProject.accomplishment}</li>
                </ul>
                <div class="card-action">
                  <a aria-label="Visit " href="${latestProject.collablinks}" target="_blank" data-position="top"
                    data-tooltip="View Online"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-external-link"></i></a>
                  <a aria-label="Visit the Google Colab for this project" href="${latestProject.collablinks}"
                    target="_blank" data-position="top" data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-github"></i></a>
                </div>
              </div>
            </div>`
}

function loadMoreProjects(){

    for (var i=1; i<projects.length; i++){
        
        document.getElementById("myprojects").innerHTML += `
            <div class="card medium project">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="project image" src="${projects[i].imageurl}" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator purple-text hoverline">${projects[i].name}<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  ${projects[i].description}
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li><b>Tools:</b> ${projects[i].tools}</li>
                  <li>${projects[i].accomplishment}</li>
                </ul>
                <div class="card-action">
                  <a aria-label="Visit " href="${projects[i].collablinks}" target="_blank" data-position="top"
                    data-tooltip="View Online"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-external-link"></i></a>
                  <a aria-label="Visit the Google Colab for this project" href="${projects[i].collablinks}"
                    target="_blank" data-position="top" data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-github"></i></a>
                </div>
              </div>
            </div>`
    };
    document.getElementById("LoadMore").style.display = "none"
}

renderProjects(projects)
