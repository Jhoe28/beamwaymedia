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
import accentImg_1 from './accentImg_1.png'
import accentImg_2 from './accentImg_2.png'
import accentImg_3 from './accentImg_3.png'
import accentImg_4 from './accentImg_4.png'
import accentImg_5 from './accentImg_5.png'
import accentImg_6 from './accentImg_6.png'
import accentImg_7 from './accentImg_7.png'
import accentImg_8 from './accentImg_8.png'

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
        accentImg: accentImg_1,
    },
    {
        id: 2,
        slug: "brand-storytelling",
        title: "Brand Storytelling",
        img: brandStoryTellingIcon,
        description: "We shape how your brand is understood by building clear, strategic narratives that communicate your identity, values, and purpose in a way that connects with your audience and strengthens perception.",
        accentImg: accentImg_2,
    },
    {
        id: 3,
        slug: "lead-generation",
        title: "Lead Generation",
        img: leadGenerationIcon,
        description: "We build systems that attract and filter the right audience for your brand, creating structured pathways that turn attention into qualified interest and potential customers.",
        accentImg: accentImg_3,
    },
    {
        id: 4,
        slug: "marketing-consultancy",
        title: "Marketing Consultancy",
        img: marketingConsultancyIcon,
        description: "We provide clear strategic direction to help brands make better marketing decisions, offering insight, structure, and guidance that improves clarity and long-term growth",
        accentImg: accentImg_4,
    },
    {
        id: 5,
        slug: "digital-marketing-services",
        title: "Digital Marketing Services",
        img: digitalMarketingIcon,
        description: "We develop structured marketing systems that improve how your brand reaches, targets, and engages its audience, focusing on visibility, positioning, and sustainable growth through intentional digital strategies.",
        accentImg: accentImg_5,
    },
    {
        id: 6,
        slug: "advertising-campaigns",
        title: "Advertising Campaigns",
        img: advertisingIcon,
        description: "We design and manage advertising campaigns that are built to drive visibility and reach the right audience through clear strategy, strong creative direction, and continuous performance tracking for better results.",
        accentImg: accentImg_6,
    },
    {
        id: 7,
        slug: "website-design-and-development",
        title: "Website Design and Development",
        img: websiteDesignIcon,
        description: "We design structured and purposeful websites that communicate your brand clearly, improve user experience, and guide visitors towards understanding your offer and taking meaningful action.",
        accentImg: accentImg_7,
    },
    {
        id: 8,
        slug: "pr-and-communication",
        title: "PR & Communication",
        img: consultancyIcon,
        description: "We manage and shape how your brand is perceived publicly through consistent messaging, strategic communication, and positioning that builds trust and strengthens reputation.",
        accentImg: accentImg_8,
    }
]

export { serviceData }