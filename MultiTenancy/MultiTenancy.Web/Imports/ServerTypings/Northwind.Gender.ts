namespace MultiTenancy.Northwind {
    export enum Gender {
        Male = 1,
        Female = 2
    }
    Serenity.Decorators.registerEnumType(Gender, 'MultiTenancy.Northwind.Gender', 'MultiTenancy.Northwind.Entities.Gender');
}
