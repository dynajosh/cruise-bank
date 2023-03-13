import {DataType, Model, Optional} from 'sequelize';
import sequelizeConnection from '../config/db/db';

interface TransactionAttributes {
    id: number;
    amount: number;
    description: string;
    sender_id: number;
    recipient_id: number;
    created_at: Date;
}

export interface TransactionModel extends Required<TransactionAttributes>{}


class Transaction extends Model<TransactionAttributes, TransactionModel> implements TransactionAttributes {
    public id!: number
    public amount!: number
    public description!: string
    public sender_id!: number
    public recipient_id!: number

    // Timestamps
    public created_at!: Date

}


