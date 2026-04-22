import logo from './logo.png'
import heroBg from './heroBg.png'
import brandStoryTellingIcon from './brandStoryTellingIcon.png'
import consultancyIcon from './consultancyIcon.png'
import digitalMarketingIcon from './digitalMarketingIcon.png'
import leadGenerationIcon from './leadGenerationIcon.png'
import marketingConsultancyIcon from './marketingConsultancyIcon.png'
import socialMediaIcon from './socialMediaIcon.jpg'
import websiteDesignIcon from './websiteDesignIcon.png'
import advertisingIcon from './advertisingIcon.png'
import about_1 from './about_1.png'
import projects from './projects.jpg'

const assets = {
    Logo: logo,
    HeroBg: heroBg,
    About_1: about_1,
    Projects: projects,
}

export default assets

const serviceData = [
    {
        id: 1,
        slug: "social-media-marketing-management",
        title: "Social Media Marketing/Management",
        img: socialMediaIcon,
    },
    {
        id: 2,
        slug: "brand-storytelling",
        title: "Brand Storytelling",
        img: brandStoryTellingIcon,
    },
    {
        id: 3,
        slug: "lead-generation",
        title: "Lead Generation",
        img: leadGenerationIcon,
    },
    {
        id: 4,
        slug: "marketing-consultancy",
        title: "Marketing Consultancy",
        img: marketingConsultancyIcon,
    },
    {
        id: 5,
        slug: "digital-marketing-services",
        title: "Digital Marketing Services",
        img: digitalMarketingIcon,
    },
    {
        id: 6,
        slug: "advertising-campaigns",
        title: "Advertising Campaigns",
        img: advertisingIcon,
    },
    {
        id: 7,
        slug: "website-design-and-development",
        title: "Website Design and Development",
        img: websiteDesignIcon,
    },
    {
        id: 8,
        slug: "pr-and-communication",
        title: "PR & Communication",
        img: consultancyIcon,
    }
]

export { serviceData }