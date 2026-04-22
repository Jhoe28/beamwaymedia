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
        description: "We manage and structure your brand presence across social platforms through intentional content planning, consistent publishing, and engagement strategies that build visibility, strengthen recognition, and keep your brand active in front of the right audience.",
    },
    {
        id: 2,
        slug: "brand-storytelling",
        title: "Brand Storytelling",
        img: brandStoryTellingIcon,
        description: "We shape how your brand is understood by building clear, strategic narratives that communicate your identity, values, and purpose in a way that connects with your audience and strengthens perception.",
    },
    {
        id: 3,
        slug: "lead-generation",
        title: "Lead Generation",
        img: leadGenerationIcon,
        description: "We build systems that attract and filter the right audience for your brand, creating structured pathways that turn attention into qualified interest and potential customers.",
    },
    {
        id: 4,
        slug: "marketing-consultancy",
        title: "Marketing Consultancy",
        img: marketingConsultancyIcon,
        description: "We provide clear strategic direction to help brands make better marketing decisions, offering insight, structure, and guidance that improves clarity and long-term growth",
    },
    {
        id: 5,
        slug: "digital-marketing-services",
        title: "Digital Marketing Services",
        img: digitalMarketingIcon,
        description: "We develop structured marketing systems that improve how your brand reaches, targets, and engages its audience, focusing on visibility, positioning, and sustainable growth through intentional digital strategies.",
    },
    {
        id: 6,
        slug: "advertising-campaigns",
        title: "Advertising Campaigns",
        img: advertisingIcon,
        description: "We design and manage advertising campaigns that are built to drive visibility and reach the right audience through clear strategy, strong creative direction, and continuous performance tracking for better results.",
    },
    {
        id: 7,
        slug: "website-design-and-development",
        title: "Website Design and Development",
        img: websiteDesignIcon,
        description: "We design structured and purposeful websites that communicate your brand clearly, improve user experience, and guide visitors towards understanding your offer and taking meaningful action.",
    },
    {
        id: 8,
        slug: "pr-and-communication",
        title: "PR & Communication",
        img: consultancyIcon,
        description: "We manage and shape how your brand is perceived publicly through consistent messaging, strategic communication, and positioning that builds trust and strengthens reputation.",
    }
]

export { serviceData }