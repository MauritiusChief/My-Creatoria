// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

// Listen to player interact event
BlockEvents.rightClicked(event => {
    let block = event.block
    // Check if the block being right-clicked is a dragon head or a wall dragon head
    if ( (block.id == 'minecraft:dragon_head' || block.id == 'minecraft:dragon_wall_head') &&
        event.item.id == 'create:builders_tea' // Check if the item in the player's hand is a bottle of builder's tea
    ) {
        let player = event.player
        let level = event.level
        // Give the player a bottle of dragon breath
        player.give('minecraft:dragon_breath');
        // Decrease the item stack of the empty bottle by 1
        if (!player.isCreative()) {item.count--};
        // Play a sound effect
        level.playSound(null, block.x, block.y, block.z, 'minecraft:entity.ender_dragon.ambient', 'ambient', 1.0, 1.0);
        level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bottle.fill_dragonbreath', 'ambient', 1.0, 1.0);
        // Spawn particles
        level.spawnParticles('minecraft:dragon_breath', true, block.x + 0.5, block.y + 0.5, block.z + 0.5, 0.1, 0.1, 0.1, 200, 0.1);
        // Cancel the default event to prevent further processing
        event.cancel();
    }
});