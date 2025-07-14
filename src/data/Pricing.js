import { features } from "./features";

export const pricingPlans = [
    {
        title: "Free Plan",
        price: 0,
        description: "For individuals and hobbyists",
        features: [
            "Basic form creation with limited templates",
            "Up to 100 form submissions per month",
            "AI-powered auto-fill suggestions",
            "Email notifications for new submissions",
            "Basic data export (CSV format)"
        ],
        isPopular:false,
    },
    {
        title: "Hobby Plan",
        price: 15,
        description: "For enthusiasts and small projects",
        features: [
            "Access to premium form templates",
            "Up to 1,000 form submissions per month",
            "Conditional logic for dynamic forms",
            "Advanced data export (CSV & Excel)",
            "Custom branding and theme options"
        ],
        isPopular:true,
    },
    {
        title: "Pro Plan",
        price: 89,
        description: "For businesses and professionals",
        features: [
            "Unlimited form submissions",
            "Integration with third-party apps (Google Sheets, Zapier, etc.)",
            "Advanced AI-powered analytics and reporting",
            "Team collaboration and user management",
            "Priority customer support with live chat"
        ],
        isPopular:false,
    }
];
