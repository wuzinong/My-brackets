
export interface StoreState {
    layout: ILayout;
    products: IProduct[];
    product: IProductDetails;
}

// Layout
export interface ILayout {
    isBusy: boolean;
    email: string;
    firstName: string;
    lastName: string;
    company: string;
    notifications?: number, 
    urls: string
}

// Product
export interface IProduct {
    name: string;
    urlSlug: string;
    provider: IProductProvider;
    card: IProductCard;
}

export interface IProductCard {
    name: string;
    description: string;
    imageUrl: string;
    category: string;
}

// Product Details
export interface IProductDetails {
    name: string;
    banner: IProductDetailsBanner;
    features: IProductDetailsFeature[];
    sections: IProductDetailsSection[];
    testimonials: IProductDetailsTestimonial[];
    additionalInfo: IProductDetailsAdditionalInfoLink[];
    provider: IProductProvider;
}

export interface IProductDetailsBanner {
    imageUrl: string;
    text: string;
}

export interface IProductDetailsFeature {
    description: string;
    iconUrl: string;
}

export interface IProductDetailsSection {
    imageUrl: string;
    content: string;
}

export interface IProductDetailsTestimonial {
    authorImageUrl: string;
    author: string;
    content: string;
}

export interface IProductDetailsAdditionalInfoLink {
    title: string;
    description: string;
    url: string;
    iconUrl: string;
}

export interface IProductProvider {
    name: string;
    description: string;
    logoUrl: string;
}

// Spinner
export interface ISpinner {
    type: string;
    payload: boolean;
}