import { User } from "src/auth/entities/user.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Provider {
    @PrimaryGeneratedColumn('uuid')
        providerId?: string;
    @Column('text')
        providerName?: string;
    @Column('text', {
        unique: true
    })
        providerEmail?: string;
    @Column('text')
        providerPhoneNumber?: string;
    @OneToMany(() => Product, (product) => product.provider)
    products?: Product[];

    @OneToOne(() => User)
    @JoinColumn({
        name: 'UserId'
    })
    user?: User
}