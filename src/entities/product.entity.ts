import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity('products', {schema: 'ventas'} )

export class ProductEntity{
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
                 title: string;
                 @Column('number',{
                    name: 'price',
                    nullable: false,
                    comment: 'product price'
                 })

                 price: number;
                 @Column('varchar',{
                    name: 'description',
                    nullable: true,
                    comment: 'Product description'
                 })

                 description: string;
                 @Column('varchar',{
                    name: 'image',
                    nullable: false,
                    comment: 'product image'
                 })
                 image: string;

              @BeforeInsert()
              @BeforeUpdate() 
                async setTitle(){
                    if(!this.title){
                        return;
                    }
                    this.title = this.title.toUpperCase(); 
                } 






                
                //     @BeforeInsert()
                //     @BeforeUpdate() 
                //     async setEmail(){
                
                //         if(!this.email){
                //              return;
                //          }
                //          this.email = this.email.toLowerCase().trim();
                //      } 
                
                @BeforeInsert()
                @BeforeUpdate() 
                  async setDescription(){
                      if(!this.description){
                          return;
                      }
                      this.description = this.description.toUpperCase(); 
                  } 

            //      @BeforeInsert()
            //      @BeforeUpdate()
            //      async hashPassword(){
            //         if(!this.hashPassword)
            //         return;
            //         },
            //         this.password = Bcrypt.hash(this.password, 12); 
    
             }
            
            