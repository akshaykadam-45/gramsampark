import { create } from 'zustand';

const translations = {
  en: {
    welcome: 'Welcome, Villager!',
    portalDescription: 'Your one-stop portal for all village-related information.',
    informationCategories: 'Information Categories',
    villageAnnouncement: 'Village Announcement',
    announcementText: 'Village meeting on Sunday at 10 AM to discuss water supply. All are requested to attend.',
    farmerSchemes: 'Farmer Schemes',
    farmerSchemesDesc: 'Latest government schemes for farmers.',
    jobUpdates: 'Job Updates',
    jobUpdatesDesc: 'Find local and government job openings.',
    healthWellness: 'Health & Wellness',
    healthWellnessDesc: 'Health camps and important updates.',
    education: 'Education',
    educationDesc: 'Information on schools and scholarships.',
    localNews: 'Local News',
    localNewsDesc: 'Updates and news from your area.',
    villageDirectory: 'Village Directory',
    villageDirectoryDesc: 'Contact info for local services.',
    login: 'Login',
    english: 'English',
    marathi: 'मराठी',
    changeLanguage: 'Change language',
    openMenu: 'Open menu',
    copyright: `© ${new Date().getFullYear()} GramSampark. All rights reserved.`
  },
  mr: {
    welcome: 'नमस्कार, ग्रामस्थ!',
    portalDescription: 'सर्व गाव-संबंधित माहितीसाठी आपले एक-स्टॉप पोर्टल.',
    informationCategories: 'माहिती श्रेणी',
    villageAnnouncement: 'गावाची घोषणा',
    announcementText: 'पाणीपुरवठ्यावर चर्चा करण्यासाठी रविवारी सकाळी १० वाजता ग्रामसभा. सर्वांनी उपस्थित रहावे ही विनंती.',
    farmerSchemes: 'शेतकरी योजना',
    farmerSchemesDesc: 'शेतकऱ्यांसाठी नवीनतम सरकारी योजना.',
    jobUpdates: 'नोकरीच्या बातम्या',
    jobUpdatesDesc: 'स्थानिक आणि सरकारी नोकरीच्या संधी शोधा.',
    healthWellness: 'आरोग्य आणि निरोगीपणा',
    healthWellnessDesc: 'आरोग्य शिबिरे आणि महत्त्वपूर्ण अद्यतने.',
    education: 'शिक्षण',
    educationDesc: 'शाळा आणि शिष्यवृत्तीबद्दल माहिती.',
    localNews: 'स्थानिक बातम्या',
    localNewsDesc: 'तुमच्या परिसरातील अद्यतने आणि बातम्या.',
    villageDirectory: 'गाव निर्देशिका',
    villageDirectoryDesc: 'स्थानिक सेवांसाठी संपर्क माहिती.',
    login: 'लॉगिन',
    english: 'English',
    marathi: 'मराठी',
    changeLanguage: 'भाषा बदला',
    openMenu: 'मेनू उघडा',
    copyright: `© ${new Date().getFullYear()} ग्रामसंपर्क. सर्व हक्क राखीव.`
  }
};

type Language = 'en' | 'mr';
export type TranslationKey = keyof typeof translations.en;


interface LocalizationStore {
  language: Language;
  translations: typeof translations.en;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

export const useLocalization = create<LocalizationStore>((set, get) => ({
  language: 'en',
  translations: translations.en,
  setLanguage: (language: Language) => {
    set({ language, translations: translations[language] });
  },
  t: (key: TranslationKey) => {
    return get().translations[key] || translations.en[key];
  },
}));
