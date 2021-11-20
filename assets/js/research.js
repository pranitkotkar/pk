/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Biometrics Classification using Audio Data and Machine Learning",
        authors : "Pranit Kotkar",
        researchYr : 2021,
        citebox : "popup1",
        image : "assets/images/research-page/vb.jpeg",
        citation: {
            vancouver: "Pranit Kotkar. Biometrics Classification of Audio Data Using Machine Learning. The IUP Journal ofComputer Sciences, Vol. XV, No. 2, April 2021, pp. 7-19."
        },
        abstract: "Audio signal processing is an important aspect of the latest technological developments and has emerged as a leading element of research. It is gaining immense traction in the virtual assistant/BPO industry for designing Artificial Intellingence (AI) solutions. The paper focuses on the development of classification strategies based on the information pulled from voice data. The linear Support Vector Machine (SVM) and Random Forest (RF) classifiers render the best results for gender identification. The methodology that suited the requirements for age classification was Ridge Regression with costs, wherein the age groups were distributed among three classes. It was observed that the data imbalance fetched disappointing results, and it was concluded from the literature review that the Synthetic Minority Oversampling Technique (SMOTE) could potentially improve the output. Identity recognition involved open and closed classification, and the closed set delivered high returns. It was found that the size of the dataset was a limiting factor and stood in the way of securing higher accuracy. The findings also suggest that the models are trained more efficiently based on subject familiarization.",
        absbox: "absPopup1"
    },
    {
        title : "A Hybrid Classification Method for Heart Disease Detection",
        authors : "Swapnil Ashtekar, Pranit Kotkar, Sakshat Patil",
        researchYr : 2021,
        citebox : "popup2",
        image : "assets/images/research-page/heart.png",
        citation: {
            vancouver: "Swapnil Ashtekar, Pranit Kotkar, Sakshat Patil. “A Hybrid Classification Method for Heart Disease Detection”. International Journal of Applied Engineering Research, Vol. 16, No.8, 2021, pp. 685-689."
        },
        abstract: "The hybrid model development technique is penetrating the newest technological developments and has emerged as part of the analysis. It’s gaining vast traction for planning AI solutions. The work applied during this paper is to develop a hybrid model which may predict heart disease expeditiously. Heart disease or cardiovascular disease (CVD) is a primary reason behind death worldwide, and the traditional diagnostic ways like electrocardiography (ECG) or Electron-Beam Computed Tomography (EBCT) or coronary angiography (CA), etc. may be defective. Also, detection of those vast diseases could be a cumbersome task for a physician. To assist physicians, create fast choices and minimize errors in identification, hybrid systems change physicians to look at the medical knowledge in substantial detail. We tend to use the present model of logistic regression and collaborated with artificial neural networks within the prediction. The results proved to be outstanding after integrating both models compared to once singly enforced. ",
        absbox: "absPopup2"
    },

];
AOS.init();
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left">
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a>
                    <div> ${authors} </div>
                        <div class="researchY">${researchYr}</div>
                    </div>

                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);
