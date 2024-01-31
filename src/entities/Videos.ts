import { Entity ,Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Categories } from "./Categories";
@Entity("videos")
export class Video {

    @PrimaryColumn()
    id: string;
    
    @Column()
    name:string;
    
    @Column()
    description:string;
    
    @Column()
    duration: number

    @CreateDateColumn()
    crated_at: Date;

    @Column()
    category_id:string

    @ManyToOne(()=> Categories)
    @JoinColumn({name:"category_id"})
    category:Categories;

constructor(){
    if(!this.id){
        this.id = uuid();
    }
}

}