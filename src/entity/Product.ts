import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column({ nullable: true })
  price?: number;
}

export default Product;
