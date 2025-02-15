
StartupEvents.registry('item', e => {
    e.create('incomplete_waystone').texture('waystones:item/waystone/portstone').displayName("未完成的传送石碑")
    e.create('incomplete_warp_plate').parentModel('kubejs:incomplete_warp_plate').displayName("未完成的传送石板")
})
