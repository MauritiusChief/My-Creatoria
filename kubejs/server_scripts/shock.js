// priority: 0

LevelEvents.tick(event => {
    // Check if the entity is a Creeper
    event.level.getEntities().forEach( entity => {
        if (
            entity.type == 'minecraft:creeper' &&
            entity.hasEffect('createaddition:shocking')
        ) {
            // console.log("creeper shocking")
            let nbt = entity.getNbt();
            nbt.powered = 1;
            entity.mergeNbt(nbt);
        }
    })
});