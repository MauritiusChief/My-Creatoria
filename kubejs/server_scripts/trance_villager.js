// priority: 0
const LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity')
const TargetingConditions = Java.loadClass('net.minecraft.world.entity.ai.targeting.TargetingConditions')

LevelEvents.tick(event => {
    event.level.getEntities().forEach( entity => {
        // console.log(entity)
        // console.log(entity === undefined)
        if (!entity) return

        if (entity.type == 'minecraft:villager') {
            var nearest_player = entity.getLevel().getNearestPlayer(
                TargetingConditions.forNonCombat(), 
                entity
            )
            if (!nearest_player) return
            // console.log(nearest_player.handSlots[0].id)
            if (
                is_in_range(10, 
                    [nearest_player.x, nearest_player.y, nearest_player.z], 
                    [entity.x, entity.y, entity.z]
                )
                && (nearest_player.handSlots[0].id == 'create:haunted_bell' || nearest_player.handSlots[1].id == 'create:haunted_bell')
            ) {
                entity.navigation.moveTo(nearest_player.x, nearest_player.y, nearest_player.z, 0.3);
            }
            // 不知道如何取消moveTo的效果
        }
    })
})

function is_in_range(range, arr_1, arr_2) {
    // console.log(arr_1.toString())
    // console.log(arr_2.toString())
    let dist = Math.sqrt( Math.pow(arr_1[0]-arr_2[0],2) + Math.pow(arr_1[1]-arr_2[1], 2) + Math.pow(arr_1[2]-arr_2[2], 2) )
    // console.log(`range = ${range}, dist = ${dist}`)
    // console.log(range > dist)
    return range > dist
}