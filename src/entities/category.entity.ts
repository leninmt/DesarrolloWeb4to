import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('categorys', {schema: 'categoriaVentas'} )


export class CategoryEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
        @CreateDateColumn({
            name: 'create_at',
            type: 'timestamp',
            default: ()=> 'CURRENTE_TIMESTAMP',

         })

         createAt: Date;

         @UpdateDateColumn({
            name: 'Update_at',
            type: 'timestamp',
            default: ()=> 'CURRENTE_TIMESTAMP',
    
        })
        updateAt: Date;    
        
        @DeleteDateColumn({
            name: 'delete_at',
            type: 'timestamp',
            nullable: true,
    
        })
        
            deleteeAt: Date;    


            @Column('varchar',{
                name: 'title',
                nullable: false,
                comment: 'product title'
             })
             nombre: string;

            
                 @Column('varchar',{
                    name: 'image',
                    nullable: false,
                    comment: 'product image'
                 })
                 description: string;

        @BeforeInsert()
        @BeforeUpdate() 
            async setNombre(){
                if(!this.nombre){
                 return;
            }
                       this.nombre = this.nombre.toUpperCase(); 
                   } 


        @BeforeInsert()
        @BeforeUpdate() 
             async setDescription(){
                 if(!this.description){
                return;
            }
               this.description = this.description.toLocaleUpperCase(); 
                }            

                }

