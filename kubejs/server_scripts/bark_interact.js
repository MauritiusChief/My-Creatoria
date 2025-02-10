// priority: 0

const LOG_OR_WOOD = ["_log", "_wood"]
const STEM_OR_HYPHAE = ["_stem", "_hyphae"]
const VD_MAGIC_VINE = ["", "_block"]

const FUNG_TYPE = ["minecraft:warped", "minecraft:crimson"]
const TREE_TYPE = [
    "minecraft:dark_oak",
    "minecraft:oak",
    "minecraft:acacia",
    "minecraft:birch",
    "minecraft:jungle",
    "minecraft:spruce",
    "minecraft:mangrove",
    "minecraft:cherry",
    "vintagedelight:magic_vine"
]

function applyTreeBark(event, namespace, tree, suffixes, bark) {
    suffixes.forEach(suffix => {
        let strippedId = `${namespace}:stripped_${tree}${suffix}`;
        let originalId = `${namespace}:${tree}${suffix}`;
        let block = event.block

        if (block.id == strippedId && event.item.id == bark) {
            let blockState = block.getBlockState();
            let property0 = blockState.getProperties().toArray()[0]
            let axis = blockState.getValue(property0).name().toLowerCase();
            let level = event.level
            let player = event.player

            if (!player.isCreative()) {event.item.count--;}
            event.server.runCommandSilent(`execute in ${event.level.dimension} run setblock ${block.x} ${block.y} ${block.z} ${originalId}[axis=${axis}]`)
            // Play a sound effect
            level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bone_meal.use', 'ambient', 1.0, 1.0);
            // Spawn particles
            level.spawnParticles('minecraft:happy_villager', true, block.x + 0.5, block.y + 0.5, block.z + 0.5, 0.5, 0.5, 0.5, 10, 0.1);

            // Cancel further processing
            event.cancel();
        }
    });
}
function giveTreeBark(event, namespace, tree, suffixes) {
    suffixes.forEach(suffix => {
        let originalId = `${namespace}:${tree}${suffix}`;
        
        if (event.block.id == originalId && event.item.hasTag('minecraft:axes')) {
            event.player.give('farmersdelight:tree_bark');
        }
    })
}

BlockEvents.rightClicked(event => {

    TREE_TYPE.forEach(tree_type => {
        let [namespace, tree] = tree_type.split(":");
        if (event.block.id.contains(tree)) {
            applyTreeBark(event, namespace, tree, LOG_OR_WOOD, 'farmersdelight:tree_bark');
            applyTreeBark(event, namespace, tree, LOG_OR_WOOD, 'minecraft:bone_meal');
            applyTreeBark(event, namespace, tree, VD_MAGIC_VINE, 'minecraft:bone_meal');

            giveTreeBark(event, namespace, tree, LOG_OR_WOOD);
        }
    });
    FUNG_TYPE.forEach(fung_type => {
        let [namespace, fung] = fung_type.split(":");
        if (event.block.id.contains(fung)) {
            applyTreeBark(event, namespace, fung, STEM_OR_HYPHAE, 'minecraft:bone_meal');
        }
    });
});