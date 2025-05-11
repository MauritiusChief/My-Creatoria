const $String = Java.loadClass('java.lang.String')

const WAYSTONE_INGREDIENT = new Map([
    ['waystones:waystone', ['minecraft:stone_bricks','minecraft:stone_bricks']],
    ['waystones:sandy_waystone', ['minecraft:chiseled_sandstone','minecraft:chiseled_sandstone']],
    ['waystones:mossy_waystone', ['minecraft:mossy_stone_bricks','minecraft:mossy_stone_bricks']],
    ['waystones:sharestone', ['minecraft:chiseled_stone_bricks','minecraft:chiseled_stone_bricks']],
    ['waystones:portstone', ['minecraft:stone_brick_stairs','minecraft:air']],
])

BlockEvents.rightClicked(event => {
    const level = event.level;
    
    WAYSTONE_INGREDIENT.forEach((ingredient, waystone) => {
        if ((event.item.id == "waystones:warp_stone" || event.item.id == "minecraft:ender_pearl") && event.block.id == ingredient[0]) {
            // console.log(event.item.id)
            // console.log(event.block.id)
            let block = event.block
            if (
                level.getBlock(block.pos.above()).id != ingredient[1] || 
                level.getBlock(block.pos.below()).id != 'createutilities:void_casing'
            ) return;
            // console.log(event.item.id)
            // console.log(event.block.id)

            // Ender pearl is a primitive igredient, so chancely success
            if (event.item.id == "minecraft:ender_pearl" && Math.random() > (1/16)) {
                level.playSound(null, block.x, block.y, block.z, 'minecraft:entity.ender_eye.death', 'ambient', 1.0, 1.0);
                return
            }
            if (!event.player.isCreative()) {event.item.count--;}

            // Color dye for sharestone
            let offhandItem = event.player.getOffHandItem()
            if (offhandItem && offhandItem.id.endsWith('_dye') && waystone == 'waystones:sharestone') {
                let itemId = offhandItem.id
                let color = itemId.replace('_dye', '').split(':').pop() // Extracts color from ID
                waystone = `waystones:${color}_sharestone`
            }

            // 未能成功，还是用指令法吧，简单高效
            // block.set(waystone)
            // let stateLower = Block.getBlock(waystone).defaultBlockState()
            // console.log(stateLower)
            // level.setBlock(block.pos, stateLower, 1)
            // let blockAbove = level.getBlock(block.pos.above())
            // blockAbove.set(waystone)
            // let stateUpper = Block.getBlock(waystone).defaultBlockState()
            // stateUpper.setValue(BlockProperties.H, 'upper')
            // console.log(stateUpper.getProperties().toArray()[1])
            // console.log(stateUpper.getProperties().toArray()[1].name)
            // let EnumProperty_half = stateUpper.getProperties().toArray()[1]
            // console.log(stateUpper.getValue(EnumProperty_half))
            // stateUpper.setValue(EnumProperty_half, $String("upper"))
            // level.setBlock(blockAbove.pos, stateUpper, 1)

            let command_upper = `execute in ${level.dimension} run setblock ${block.x} ${block.y + 1} ${block.z} ${waystone}[half=upper]`
            let command_lower = `execute in ${level.dimension} run setblock ${block.x} ${block.y} ${block.z} ${waystone}[half=lower]`
            event.server.runCommandSilent(command_upper);
            // console.log(command_upper)
            event.server.runCommandSilent(command_lower);
            // console.log(command_lower);
            // event.server.runCommandSilent(`fill ${block.x} ${block.y} ${block.z} ${block.x} ${block.y + 1} ${block.z} air`);
            // event.server.runCommandSilent(`summon item ${block.x + 0.5} ${block.y + 0.5} ${block.z + 0.5} {Item:{id:"${waystone}",Count:1b}}`);
            
            // Play a sound effect
            level.playSound(null, block.x, block.y, block.z, 'minecraft:block.portal.travel', 'ambient', 0.1, 1.0);
            // Spawn particles
            level.spawnParticles('minecraft:portal', true, block.x + 0.5, block.y + 0.5, block.z + 0.5, 0.1, 0.2, 0.1, 20, 5.0);

            event.success();
        }
    })
})