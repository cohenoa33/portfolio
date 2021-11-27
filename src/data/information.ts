const information = {
  education: [
    {
      school: "Flatiron School",
      degree:
        "Full Stack Web Development, Ruby on Rails, and JavaScript Certificate Program",
      graduated: "October 2020",
      location: "Seattle, WA",
      description:
        "Completed Flatiron School's 15-week Software Engineering boot camp, with a focus on Ruby, Ruby on Rails, JavaScript, and React. I built five projects, ranging from a Ruby-based command-line interface to my final solo project built in React/Redux with a Ruby on Rails back end."
    },
    {
      school: "The College of Management Academic Studies, Israel",
      degree: "Bachelor's degree, Media Studies & Management ",
      graduated: "July 2011",
      location: "Israel",
      description: ""
    }
  ],
  work: [
    {
      company: "Anchor Technologies",
      title: "Full Stack Developer",
      years: "2021 - Present",
      location: "Remote",
      about:
        "Developing a series of integrated web apps allowing for an entirely new product to be launched. Collaborating with the product owner, stack holders, and other engineers to translate requirements into technical design, review application functionality, and define project requirements and execution plans. Working with Typescript, Javascript, Express, Webpack, GraphQL,  Apollo server.",
      job_description: [
        {
          title: undefined,
          description:
            "Developing and implementing the product end-to-end features. Building reusable front-end components to improve readability and maintainability by abstracting code, and simplifying methods. Utilizing React framework with styled-components and Material-UI."
        },
        {
          title: undefined,
          description:
            "engineering Node.js server/backend systems to support data-intensive systems. Architecting schemas to create complex relationships between models and manipulate data to optimize requests."
        },
        {
          title: undefined,
          description:
            "Building and designing innovative admin web app to manage customers, manage customers databases, and update other servers."
        }
      ]
    },
    {
      company: "Zappa Group",
      title: "Operations Manager | Project Manager",
      years: "2011 - 2018",
      location: "Israel and Remote",
      about:
        "The Zappa Group owns music clubs located in major cities in Israel, a production company that is responsible for local and international festivals and music events, and a ticket office that sells more than one million tickets a year for a variety of performances. Promoted into Project Manager role based on relationship management skills.",
      job_description: [
        {
          title: "Operations Strategy",
          description:
            "Designed, planned, executed, and managed a large-scale project of an online box-office/ticketing platform website. Implement processes to ease remote working using cloud technologies. Designed and maintained company data sets.  Subsidiary eventually became one of Israel's biggest ticketing companies."
        },
        {
          title: "Project Management",
          description:
            "Planned and managed more than 30 project schedules, timelines, and budgets of $100k - $1M annually. Resulted in 30% growth in new projects each year."
        },
        {
          title: "Training",
          description:
            "Supported Representatives in troubleshooting complicated calls as well as technical support and software issues. Improved overall retention and reduced hiring costs. Managed 15 employees directly and oversaw over 100."
        }
      ]
    },
    {
      company: "Zappa Group",
      title: "Ticketing Call Center Shift Lead",
      years: "2009 - 2011",
      location: "Tel-Aviv, Israel",
      about:
        "Shifted career focus to build direct customer service leadership experience, marketing, and event management experience.",
      job_description: [
        {
          title: "Customer Relationship Management",
          description:
            "Managed and operated the VIP membership club (e.g. communications, billing, tracking membership renewal, event coordination, and data analysis). Increased new memberships by 10% monthly and improved membership retention by 5% yearly."
        }
      ]
    },
    {
      company: "Ankona Advertising",
      title: "Advertising Account Executive",
      years: "2008 - 2009",
      location: "Tel-Aviv, Israel",
      job_description: [
        {
          title: "Coordination | Advertising | Collaboration",
          description:
            "Coordinated high-profile corporate agency clients (such as Microsoft Israel and Office Depot Israel) Creatives and Account Executives to create marketing and advertising campaigns with budgets of $20K - $50K. Integral part of team that developed advertising for retails stores."
        }
      ]
    }
  ],
  skills: [
    {
      name: "ActiveRecord"
    },
    {
      name: "Node.Js"
    },
    {
      name: "AWS"
    },
    {
      name: "Next.Js"
    },
    {
      name: "CSS"
    },
    {
      name: "HTML"
    },
    {
      name: "JavaScript"
    },
    {
      name: "PostgreSQL"
    },
    {
      name: "GraphQL"
    },
    {
      name: "React"
    },
    {
      name: "Redux"
    },
    {
      name: "Git"
    },
    {
      name: "GitHub"
    },
    {
      name: "Ruby"
    },
    {
      name: "Rails"
    },
    {
      name: "Express"
    },
    {
      name: "JWT"
    },
    {
      name: "TypeScript"
    },
    {
      name: "SQL"
    }
  ],

  projects: [
    {
      name: "FollowDoc",
      github: "https://github.com/cohenoa33/follow-doc-frontend",
      youtube: "https://youtu.be/RfApZrbvUic",
      demo: "RfApZrbvUic",
      live: "https://follow-doc.surge.sh/",
      description: [
        "Developed and designed React application to help the user keep track of medical issues and doctor appointments.",
        "Built complex Rails API backend with PostgreSQL using JSON Web Token (JWT) and Bcrypt to establish relationships between users, appointments, and doctors.",
        "Utilized ActiveStorage and AWS to store user files and Google Maps API to display appointment locations.",
        "Created and designed user interface using React and Redux, and CSS for styling."
      ]
    },
    {
      name: "Appointment List",
      github: "https://github.com/cohenoa33/appointments",
      youtube: "https://youtu.be/kYwYuTt2f5w",
      demo: "kYwYuTt2f5w",
      live: "https://cohenoa33.github.io/appointments/",
      description: [
        "Created a Multi-Language Website based on React Hooks and React Context, allows the user to track medical appointments.",
        "Formed a functional search engine that allows users to narrow down their list based on name,  doctor, and other information.",
        "Designed fully responsive user interface using CSS and  SASS."
      ]
    },
    {
      name: "QPQ",
      github: "https://github.com/cohenoa33/qpq-frontend",
      youtube: "https://youtu.be/rYNZHStJLsk",
      live: "https://qpq-client.herokuapp.com/",
      demo: "rYNZHStJLsk",
      description: [
        "Collaborated with three engineers to build React web application allowing users to trade services.",
        "Developed Rails API and PostgreSQL backend with endpoints for users and services.",
        "Produced React Js frontend with CSS to display services information."
      ]
    },
    {
      name: "What Should We Do",
      github: "https://github.com/cohenoa33/what-should-we-do-frontend",
      youtube: "https://youtu.be/ewwRIRbCr8w",
      live: "https://what-sholud-we-do.surge.sh/",
      demo: "ewwRIRbCr8w",
      description: [
        "Created an activity journal to helps users log everywhere they visit and add reviews for those places.",
        "Built a single page application with HTML, CSS, and vanilla JavaScript.",
        "Generated Rails API backend to track activities and users."
      ]
    },
    {
      name: "Favfest",
      github: "https://github.com/cohenoa33/favfest",
      youtube: "https://youtu.be/VXQRUEcJHs0",
      live: "https://favfest.herokuapp.com/",
      demo: "VXQRUEcJHs0",
      description: [
        "Built Rails Application provides users with information about music festivals, allowing an interactive diary.",
        "Utilized MVC structure and RESTful conventions, HTML Forms, ActiveRecord Models, and Relationship using Postgres Database. Added custom validations to increase security.",
        "Embedded seeded YouTube links that rendered fully interactive videos on rendered pages."
      ]
    }
  ]
};
export default information;
