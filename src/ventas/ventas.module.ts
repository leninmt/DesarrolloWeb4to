import { Module } from '@nestjs/common';
import { VentasController } from './ventas.controller';
import { VentasService } from './ventas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './products.entity';
import { CategoryEntity } from './category.entity';
import { ClientEntity } from './clients.entity';
import { SaleEntity } from './sales.entity';
import { SupplierEntity } from './suppliers.entity';
import { BillEntity } from './bills.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        ProductEntity,
        CategoryEntity,
        ClientEntity,
        SaleEntity, 
        SupplierEntity, 
        BillEntity,
      ]
      )
    
  ],
  controllers: [VentasController],
  providers: [VentasService]
})
export class VentasModule {}
