// priority: 0

ServerEvents.recipes(event => { //listen for the "recipes" server event.
    let coral_name_list = ['tube', 'brain', 'bubble', 'fire', 'horn']
    let dye_name_list = ['blue', 'pink', 'magenta', 'red', 'yellow']
    for(let i=0;i<coral_name_list.length;i++){
        let coral_name = coral_name_list[i]
        let color_type = dye_name_list[i]

        event.shaped(`2x kubejs:${coral_name}_coral_fan_carpet`, [// arg 1: output
            'SBS',
            'AAA' 
        ], {
            A: 'minecraft:white_carpet', 
            B: `minecraft:${color_type}_dye`,
            S: 'minecraft:string'
            }
        ).id(`kubejs:${coral_name}_coral_fan_carpet`)

        event.shapeless(`kubejs:dead_${coral_name}_coral_fan_carpet`, [ // arg 1: output
            `kubejs:${coral_name}_coral_fan_carpet`,
            'minecraft:light_gray_dye'
        ]).id(`kubejs:dead_${coral_name}_coral_fan_carpet`)
    }
    
})