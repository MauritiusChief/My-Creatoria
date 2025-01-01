// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('block', event => {
    let coral_name_list = ['tube', 'brain', 'bubble', 'fire', 'horn']
    let coral_loc_list = ['管', '脑纹', '气泡', '火', '鹿角']
    let prefix_name = ''
    let prefix_loc = ''
    for(let j=0;j<2;j++){
        if (j==0) {
            prefix_name = 'dead_'
            prefix_loc = '灰色'
        } else {
            prefix_name = ''
            prefix_loc = ''
        }
        for(let i=0;i<coral_name_list.length;i++){
            let coral_name = coral_name_list[i]
            let coral_loc = coral_loc_list[i]
            event.create(`${prefix_name}${coral_name}_coral_fan_carpet`)
            .displayName(`${prefix_loc}${coral_loc}珊瑚扇地毯`) // Set a custom name
            .soundType('wool')
            .hardness(0.1) // Set hardness (affects mining time)
            .resistance(0.1) // Set resistance (to explosions, etc)
            .renderType('cutout')
            .notSolid()
            .fullBlock(false)
            .waterlogged()
            .model(`minecraft:block/${prefix_name}${coral_name}_coral_fan`)
            .item(item => {
                item.modelJson({
                    "parent": "minecraft:item/generated",
                    "textures": {
                        "layer0": `minecraft:block/${prefix_name}${coral_name}_coral_fan`
                    }
                })
            })
            .noCollision()
            .redstoneConductor(false)
            .box(0, 0, 0, 16, 1, 16, true)
        }
    }
})