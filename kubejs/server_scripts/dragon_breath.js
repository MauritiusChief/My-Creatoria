// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

// Listen to player interact event
BlockEvents.rightClicked(event => {
    // Check if the block being right-clicked is a dragon head or a wall dragon head
    if (event.block.id == 'minecraft:dragon_head' || event.block.id == 'minecraft:dragon_wall_head') {
        // Check if the item in the player's hand is a bottle of builder's tea
        if (event.item.id == 'create:builders_tea') {
            // Give the player a bottle of dragon breath
            event.player.give('minecraft:dragon_breath');
            // Decrease the item stack of the empty bottle by 1
            event.player.mainHandItem.count--;
            // Play a sound effect
            event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'minecraft:entity.ender_dragon.ambient', 'ambient', 1.0, 1.0);
            event.level.playSound(null, event.player.x, event.player.y, event.player.z, 'minecraft:item.bottle.fill_dragonbreath', 'ambient', 1.0, 1.0);
            // Spawn particles
            event.level.spawnParticles('minecraft:dragon_breath', true, event.block.x + 0.5, event.block.y + 0.5, event.block.z + 0.5, 0.1, 0.1, 0.1, 200, 0.1);
            // Cancel the default event to prevent further processing
            event.cancel();
        }
    }
});