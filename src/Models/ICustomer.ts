import { IKeyValue } from "./IKeyValue";

export interface ICustomer{
    keyValuePairs:Array<IKeyValue>;
    hasError:boolean;
}