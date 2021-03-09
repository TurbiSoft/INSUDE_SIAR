namespace MultiTenancy.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'MultiTenancy.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}
