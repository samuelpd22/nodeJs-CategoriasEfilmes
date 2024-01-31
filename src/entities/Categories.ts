import { Entity ,Column, CreateDateColumn, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";
@Entity("categories")
export class Categories {

    @PrimaryColumn()
    id: string;

    @Column()
    name:string;
    
    @Column()
    description:string;
    
    @CreateDateColumn()
    crated_at: Date;

constructor(){
    if(!this.id){
        this.id = uuid();
    }
}

}