
const WAYSTONE_INGREDIENT = new Map([
    ['waystones:waystone', ['minecraft:stone_bricks','minecraft:stone_bricks']],
    ['waystones:sandy_waystone', ['minecraft:chiseled_sandstone','minecraft:chiseled_sandstone']],
    ['waystones:mossy_waystone', ['minecraft:mossy_stone_bricks','minecraft:mossy_stone_bricks']],
    ['waystones:sharestone', ['minecraft:chiseled_stone_bricks','minecraft:chiseled_stone_bricks']],
    ['waystones:portstone', ['minecraft:stone_brick_stairs','minecraft:air']],
])

BlockEvents.rightClicked(event => {
    
    WAYSTONE_INGREDIENT.forEach((ingredient, waystone) => {
        if (event.item.id == "waystones:warp_stone" && event.block.id == ingredient[0]) {
            // console.log(event.item.id)
            // console.log(event.block.id)
            let block = event.block
            if (
                event.level.getBlock(block.x, block.y + 1, block.z).id != ingredient[1] && 
                event.level.getBlock(block.x, block.y - 1, block.z).id != "minecraft:obsidian"
            ) return;
            if (!event.player.isCreative()) {event.item.count--;}
            event.server.runCommandSilent(`setblock ${block.x} ${block.y + 1} ${block.z} ${waystone}[half=upper]`);
            event.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} ${waystone}[half=lower]`);
            // event.server.runCommandSilent(`fill ${block.x} ${block.y} ${block.z} ${block.x} ${block.y + 1} ${block.z} air`);
            // event.server.runCommandSilent(`summon item ${block.x + 0.5} ${block.y + 0.5} ${block.z + 0.5} {Item:{id:"${waystone}",Count:1b}}`);
            
            // Play a sound effect
            event.level.playSound(null, block.x, block.y, block.z, 'minecraft:block.portal.travel', 'ambient', 0.1, 1.0);
            // Spawn particles
            event.level.spawnParticles('minecraft:portal', true, block.x + 0.5, block.y + 0.5, block.z + 0.5, 0.1, 0.2, 0.1, 20, 5.0);

            event.cancel();
        }
    })
})