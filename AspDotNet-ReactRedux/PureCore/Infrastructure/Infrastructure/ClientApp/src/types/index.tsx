export interface demo{
    languageName:string;
    enthusiasmLevel?:number;
}
export interface StoreState {
    demo?:demo;
    list:ListData
}

//list
export interface ListData{
    listData:string[];
    listComponent?:any;
    initList?:any;
} 

//userProfile
export interface UserProfile {
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    country: string;
    language: string;
    mobile: string;
    showSpinner?:boolean;
}

export interface errorHandler {
    hasError: boolean;
    errorMsg?: string;
}

export interface ReturnMessage{
    status:number;
    msg:string;
    payload:UserProfile;
}