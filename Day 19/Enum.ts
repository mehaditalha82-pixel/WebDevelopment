enum days {
    Sunday, 
    Monday,
    Tuesday,
}

console.log(days.Sunday);

enum Roles {
    Admin = 'Admin',
}

const nandu = {
    name : "chandu",
    role : Roles.Admin,
}

// 1. Define the Enum
enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED",
}

// 2. Use it in an Interface
interface Order {
  id: string;
  total: number;
  status: OrderStatus;
}

// 3. Create a state-handling function
function updateOrderStatus(order: Order, newStatus: OrderStatus): void {
  order.status = newStatus;
  console.log(`Order ${order.id} status changed to ${newStatus}`);
}

// 4. Usage
const myOrder: Order = {
  id: "ORD-1042",
  total: 59.99,
  status: OrderStatus.Pending,
};

// Safe update with autocomplete
updateOrderStatus(myOrder, OrderStatus.Shipped);

// ❌ TypeScript Error: Argument of type '"in_transit"' is not assignable to parameter of type 'OrderStatus'.
// updateOrderStatus(myOrder, "in_transit");