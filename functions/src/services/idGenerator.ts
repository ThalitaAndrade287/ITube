import { IdGeneratorGateway } from './../business/gateway/auth/generateId';
import { v4 } from 'uuid';

export default class IdGenerator implements IdGeneratorGateway{
    public generateId(): string {
        return v4()
    }
}