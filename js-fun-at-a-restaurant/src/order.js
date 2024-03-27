function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i,1)
    }
  }
  return deliveryOrders
}

function listItems(deliveryOrders) {
  var orderNames = ""
  for (var i = 0; i < deliveryOrders.length -1; i++) {
    orderNames += deliveryOrders[i].item + ", "
  }
 
  return orderNames + deliveryOrders[deliveryOrders.length -1].item
}

function searchOrder(orderList, item) {
  return orderList.some(order => order.item === item)
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}