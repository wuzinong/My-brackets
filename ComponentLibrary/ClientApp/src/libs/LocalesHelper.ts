import http from 'axios';
import intl from 'react-intl-universal';
import _ from 'lodash';
import { getSessionItem, setSessionItem } from 'libs/storageHelper';

export const SUPPOER_LOCALES = [
    {
        name: 'English',
        value: 'en'
    },
    {
        name: '简体中文',
        value: 'zh-Hans'
    },
    {
        name: 'Norsk - Norwegian',
        value: 'no'
    }
];

const VERACITY_CDN = '';

export const COMMON_LOCALE_DATA_URLS = {
    en: VERACITY_CDN + 'locale-data/1.0.0/en.js',
    zh: VERACITY_CDN + 'locale-data/1.0.0/zh.js',
    fr: VERACITY_CDN + 'locale-data/1.0.0/fr.js',
    fa: VERACITY_CDN + 'locale-data/1.0.0/fa.js',
    ja: VERACITY_CDN + 'locale-data/1.0.0/ja.js',
    de: VERACITY_CDN + 'locale-data/1.0.0/de.js',
    es: VERACITY_CDN + 'locale-data/1.0.0/es.js',
    ko: VERACITY_CDN + 'locale-data/1.0.0/ko.js',
    pt: VERACITY_CDN + 'locale-data/1.0.0/pt.js',
    it: VERACITY_CDN + 'locale-data/1.0.0/it.js',
    ru: VERACITY_CDN + 'locale-data/1.0.0/ru.js',
    pl: VERACITY_CDN + 'locale-data/1.0.0/pl.js',
    nl: VERACITY_CDN + 'locale-data/1.0.0/nl.js',
    sv: VERACITY_CDN + 'locale-data/1.0.0/sv.js',
    tr: VERACITY_CDN + 'locale-data/1.0.0/tr.js',
};

export const loadLocales = async (language: string): Promise<boolean> => {
    //TODO get user's default language and set currentLocale
    let currentLocale = language;
    // let currentLocale = intl.determineLocale({
    //     currentLocale: language, // Current locale such as 'en-US'
    //     urlLocaleKey: "lang",// URL's query Key to determine locale. Example: if URL=http://localhost?lang=en-US, then set it 'lang'
    //     cookieLocaleKey: "lang"// Cookie's Key to determine locale. Example: if cookie=lang:en-US, then set it 'lang'
    //   });
    if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
        currentLocale = "en";
    }
    if (!getSessionItem(currentLocale)) {
        return http
            .get(`/locales/${currentLocale}.json`)
            .then(res => {
                setSessionItem(currentLocale, res.data);
                return intl.init({
                    currentLocale,
                    commonLocaleDataUrls: COMMON_LOCALE_DATA_URLS,
                    locales: {
                        [currentLocale]: res.data
                    }
                });
            })
            .then(() => {
                // this.setState({
                //     initDone:true
                // })
                return true;
            }).catch(() => {
                return false
            });
    } else {
        intl.init({
            currentLocale,
            commonLocaleDataUrls: COMMON_LOCALE_DATA_URLS,
            locales: {
                [currentLocale]: getSessionItem(currentLocale)
            }
        });
        return true;
    }
}

export const getBrowserLanguage = (): string => {
    let type = navigator.appName;
    let lang = "en"
    if (type == "Netscape") {
        lang = navigator.language;
    } else {
        lang = (navigator as any).userLanguage;
    };
    if (lang.length > 2) {
        lang = lang.substr(0, 2);
    }
    if (lang.toLocaleLowerCase().indexOf("zh") == 0) {
        lang = "zh-Hans";
    }
    if (lang.toLowerCase() == "zh-TW".toLowerCase()) {
        lang = "zh-Hant";
    }
    return lang;
}


export const changeLocale = (language: string): any => {
    let result = false;
    let currentLocale = language;
    return http
        .get(`locales/${currentLocale}.json`)
        .then(res => {
            return intl.init({
                currentLocale,
                locales: {
                    [currentLocale]: res.data
                }
            });
        })
        .then((resolve: any) => {
            result = true;
            return result;
        }).catch((exception) => {
            console.log(exception)
            return result;
        });

}