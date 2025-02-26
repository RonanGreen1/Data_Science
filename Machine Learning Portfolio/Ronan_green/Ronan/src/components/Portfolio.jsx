import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "Desing",
    BRAND: "Brand",
    PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "Linear Regression Model",
      projectInfo:
        "This project explores the application of a linear regression model to predict trends and relationships within datasets. It includes data preprocessing, feature selection, and model evaluation with visual insights.",
      technologies: "Python, Jupyter Notebook, pandas, NumPy, scikit-learn, Matplotlib",
      url: {
        name: "GitHub Repository",
        link: "https://github.com/RonanGreen1/Data_Science/blob/main/Linear%20Regression/LR.ipynb",
      },
      thumbImage: "images/projects/project-1.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Decision Tree Model",
      projectInfo:
        "A decision tree model implemented to classify data and analyse decision-making processes. The project showcases feature importance, hyperparameter tuning, and pruning to improve model performance.",
      technologies: "Python, Jupyter Notebook, pandas, scikit-learn, Graphviz, Matplotlib",
      url: {
        name: "GitHub Repository",
        link: "https://github.com/RonanGreen1/Data_Science/blob/main/Decision%20tree/DS.ipynb",
      },
      thumbImage: "images/projects/project-2.jpg",
      sliderImages: [
        "images/projects/project-2.jpg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Random Forest Model",
      projectInfo:
        "This project delves into ensemble learning using the Random Forest algorithm. It addresses class imbalance, hyperparameter tuning, and performance evaluation for robust predictions.",
      technologies: "Python, Jupyter Notebook, pandas, scikit-learn, Matplotlib, seaborn",
      url: {
        name: "GitHub Repository",
        link: "https://github.com/RonanGreen1/Data_Science/blob/main/Random%20Forest/RF.ipynb",
      },
      thumbImage: "images/projects/project-3.jpg",
      sliderImages: [
        "images/projects/project-3.jpg",
      ],
      categories: [filters.PHOTOS],
    },

    {
      title: "Bayesian Classifier Model",
      projectInfo:
        "Implementation of a Bayesian classifier for probabilistic classification tasks. The project includes data preprocessing, model training, and evaluation using confusion matrices and accuracy metrics.",
      technologies: "Python, Jupyter Notebook, pandas, NumPy, scikit-learn, Matplotlib",
      url: {
        name: "GitHub Repository",
        link: "https://github.com/RonanGreen1/Data_Science/tree/main/Bay_Class",
      },
      thumbImage: "images/projects/project-4.jpg",
      sliderImages: [
        "images/projects/project-4.jpg",
      ],
      categories: [filters.ANALYTICS],
    },
    {
      title: "K-Means Clustering Model",
      projectInfo:
        "A clustering model using K-Means to identify patterns and natural groupings within data. The project explores the Elbow Method, PCA for dimensionality reduction, and visualization of clustered data.",
      technologies: "Python, Jupyter Notebook, pandas, scikit-learn, Matplotlib, seaborn",
      url: {
        name: "GitHub Repository",
        link: "https://github.com/RonanGreen1/Data_Science/tree/main/K_Clustering",
      },
      thumbImage: "images/projects/project-5.jpg",
      sliderImages: [
        "images/projects/project-5.jpg",
      ],
      categories: [filters.CLUSTERING],
    },
    {
      title: "K-Nearest Neighbour Model",
      projectInfo:
        "This project applies the K-Nearest Neighbour (KNN) algorithm for classification. It includes hyperparameter tuning, distance metrics comparison, and handling imbalanced datasets using SMOTE and weighted KNN.",
      technologies: "Python, Jupyter Notebook, pandas, NumPy, scikit-learn, Matplotlib",
      url: {
        name: "GitHub Repository",
        link: "https://github.com/RonanGreen1/Data_Science/tree/main/K_Nearest",
      },
      thumbImage: "images/projects/project-6.jpg",
      sliderImages: [
        "images/projects/project-6.jpg",
      ],
      categories: [filters.CLASSIFICATION],
    },
    {
      title: "Support Vector Machine (SVM) Model",
      projectInfo:
        "Implementation of an SVM classifier for data classification, exploring different kernels (linear and polynomial). The project examines hyperparameter tuning and evaluates performance with precision-recall metrics.",
      technologies: "Python, Jupyter Notebook, pandas, scikit-learn",
      url: {
        name: "GitHub Repository",
        link: "https://github.com/RonanGreen1/Data_Science/tree/main/SVM",
      },
      thumbImage: "images/projects/project-7.jpg",
      sliderImages: [
        "images/projects/project-7.jpg",
      ],
      categories: [filters.MACHINE_LEARNING],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
