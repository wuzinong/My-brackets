export interface demo{
    languageName:string;
    enthusiasmLevel?:number;
}
export interface StoreState {
    demo?:demo
}

//list
export interface ListData{
    listData:string[];
    listComponent?:any
} 