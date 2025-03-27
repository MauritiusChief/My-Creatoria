
ServerEvents.tags('item', event => {
    event.add('forge:seeds', ['vintagedelight:oat_seeds', 'vintagedelight:ghost_pepper_seeds', 'vintagedelight:cucumber_seeds'])
    event.add('forge:plates/zinc', ['createdeco:zinc_sheet'])
})

ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/pickaxe', ['createdeco:industrial_iron_bars', 'createdeco:industrial_iron_bars_overlay'])
})