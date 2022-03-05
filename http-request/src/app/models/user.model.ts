export class User {
    
    private name:string;
    private job:string;

    public constructor(name:string, job:string) {
        this.name = name;
        this.job = job;
    }

    public get getName():string {
        return this.name;
    }

    public set setName(name:string) {
        this.name = name;
    }

    public get getJob():string {
        return this.job;
    }

    public set setJob(job:string) {
        this.job = job;
    }


}
