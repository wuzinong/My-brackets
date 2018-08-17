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