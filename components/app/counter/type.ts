
export interface ICategories{
    id:number;
    category_name:string;
    url:string;
}
export interface IProducts{
    /*{ID:string;
    Name:string;
    Description:string;
    url:string;
    Category:Category[];
    starCount:number;
    consultationCount:number;
}*/
    
    ID: string,
    Name: string,
    Description:string,
    Category: string,
    Rating: number,
    ServiceCount: number,
    PictureURL: string,
}
export type Category='Business'|'Legal'|'Marketing'|'Coaching'|'Politics'|'Counseling'|'Real Estate'|'Crypto'|'Social Media'|'Entrepreneurship'|'Sports'|'Finance'|'Technology'|'Health'|'Other'
