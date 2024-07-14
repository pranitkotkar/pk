AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Machine Learning Intern",
    cardImage: "assets/images/experience-page/2.jpeg",
    place: "MedTourEasy",
    time: "(June - July, 2021)",
    desp: "<li>Leveraged expertise in Google Cloud technologies to enhance healthcare data analysis and integration capabilities.</li> <li>Collaborated with healthcare teams to analyze healthcare data, resulting in a 15% reduction in treatment planning time.</li> <li>Incorporated Power BI dashboards to present data-driven insights, raising treatment planning efficiency by 20%.</li> <li>Implemented automated data pipelines using Google Cloud technologies, thereby improving operational efficiency.</li>",
  },
  {
    title: "Data Science and Business Analytics Intern",
    cardImage: "assets/images/experience-page/1.png",
    place: "The Sparks Foundation",
    time: "(March - April, 2021)",
    desp: "<li>Implemented machine learning applications and created storyboards such as score prediction, EDA of global terrorism, stock market prediction, Covid-19 storyboard, etc.</li><li>Reviewed and guided fellow interns regarding their data science and business analytics tasks.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Social Media Volunteer (July, 2021 - present)",
    cardImage: "assets/images/experience-page/3.png",
    description:
      "Volunteering at OYE, an NGO for youth and the elderly, to spread awareness on health, environmental and educational events and activities.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">

      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>

      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "HPAIR Harvard Conference 2021",
    subtitle: "Delegate",
    image: "assets/images/experience-page/1.jpeg",
    desp: "Selected out of an applicant pool of 9100 people to attend a four-day conference. Networked directly with business executives and renowned figures. Actively contributed to the dialogues surrounding world problems by asking thoughtful questions. Formed meaningful relationships with fellow delegates from more than 60 countries.",
  },
  {
    title: "Sponsorship Advisor",
    subtitle: "VIT Student Council 20-21",
    image: "assets/images/experience-page/2.png",
    desp: "As the sponsorship advisory of the student council, I co-operatively worked along with the concerned heads to guide the sponsorship core members and strategize sponsorship plans.",
  },
  {
    title: "Core Member",
    subtitle: "VIT Student Council 19-20",
    image: "assets/images/experience-page/2.png",
    desp: "Managing the publicity extended members and planning the PR campaigns for various student council events. Worked diligently to get a monetary sponsorship of 50K rupees for the annual college fest- VERVE.",
  },
  {
    title: "Publicity Member",
    subtitle: "IETE-VIT 19-20",
    image: "assets/images/experience-page/3.jpeg",
    desp: "Dealing with inquiries from the students regarding new technical workshops and also speaking publicly at PR drives.",
  },
  {
    title: "Publicity Extended Member",
    subtitle: "VIT Student Council 18-19",
    image: "assets/images/experience-page/2.png",
    desp: "Providing students with information about new events and working under the core members to run PR campaigns.",
  }


];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
