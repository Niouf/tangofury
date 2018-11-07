    export interface IMaestro {
        key:string;
        id: number;
        name: string;
        surname: string;
        nickname: string;
        role : string;
        image : string;
        imageDisplay:string;
        siteweb:string;
        facebook:string;
        wikipedia:string;
        homonyme:boolean;
        description:string;
        slug:string;
        videos();
        newvideos:number;
        isFavorite:boolean;
    }
