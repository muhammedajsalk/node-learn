const event=require("events")

const eventEmitter=new event.EventEmitter()

eventEmitter.on("order_placed",(order)=>{
    console.log(`Email sent to ${order.email} for order ${order.id}`);
})

eventEmitter.on('order_placed', (order) => {
    console.log(`Inventory updated for product: ${order.product}`);
});


const data={
    email:"ajsalmuhammed45@gmail.com",
    id:'231452',
    product:"car"
}


eventEmitter.emit("order_placed",data)
