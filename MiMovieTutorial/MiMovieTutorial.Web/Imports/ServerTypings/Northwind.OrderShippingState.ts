namespace MiMovieTutorial.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'MiMovieTutorial.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}
