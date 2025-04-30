
ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event

	event.register(Commands.literal('creative-bro')
		.executes(c => crtbro(c.source.player))
	)
})

let crtbro = (player) => {
	let server = player.getLevel().getServer()
	// server.runCommandSilent("/give @p create:schedule")
	// server.runCommandSilent(`/give @p create:andesite_alloy ${(8+4)/4+16/8+9*2+20+63}`)
	// server.runCommandSilent(`/give @p minecraft:iron_ingot ${(64*2+5+36+60+24)/4+14+8/2}`)
	// server.runCommandSilent(`/give @p minecraft:iron_ingot ${(60)/4+64+20+64+57}`)
	// server.runCommandSilent(`/give @p create:andesite_alloy ${(64+3)*2}`)
	// server.runCommandSilent(`/give @p minecraft:torch ${(64+3)}`)
	// server.runCommandSilent(`/give @p minecraft:iron_ingot ${(3)*2}`)
	// server.runCommandSilent(`/give @p minecraft:torch ${(3)}`)
	// server.runCommandSilent(`/give @p create:zinc_ingot ${16}`)
	
	// server.runCommandSilent("/give @p minecraft:beacon 3")
	// server.runCommandSilent("/give @p create:precision_mechanism 6")

	// server.runCommandSilent("/give @p waystones:warp_stone")
	// server.runCommandSilent("/tp @e[type=wither] 0 -1000 0")
	player.setStatusMessage("创哥理赔完成");
	return 1;
}