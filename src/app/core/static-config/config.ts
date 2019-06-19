import { environment } from 'src/environments/environment';

export class Config {
    public static production: boolean = environment.production;
    public static urlAddress: string = environment.urlAddress;
}
