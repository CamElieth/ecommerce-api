import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Countries {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

}

