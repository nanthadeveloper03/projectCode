import RiskDisclosure from './riskdisclosure'; 

export async function generateMetadata () {
    return {
        title: 'Risk Disclosure – Ultrapro Exchange',
        description: "Read Ultrapro Exchange's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy and security are our top priorities.",
        keywords: 'Risk Disclosure, Ultrapro Exchange, Data Protection, User Privacy, Personal Information, Privacy Practices, Data Security, Crypto Exchange Privacy, Blockchain Security, Digital Assets, User Data, Information Protection, Cryptocurrency Privacy, Secure Transactions, Privacy Guidelines.',
        openGraph: {
            title: 'Risk Disclosure – Ultrapro Exchange',
            description: "Read Ultrapro Exchange's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy and security are our top priorities.",
            url: new URL('https://www.ultraproex.com/privacy-policy'),
            siteName: 'Ultrapro Crypto Exchange',
            images: [
            {
                url: '/assets/images/logo/logo.png',
                alt: 'ultrapro-logo'
            },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Risk Disclosure – Ultrapro Exchange',
            description: "Read Ultrapro Exchange's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy and security are our top priorities.",
            // url: 'https://www.ultraproex.com/',
        },
    }
 };
export default function RiskDisclosureInn() {
    return (
        <div>
            <RiskDisclosure />
        </div>
    );
}
