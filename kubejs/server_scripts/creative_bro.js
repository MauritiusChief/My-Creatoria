
ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event

	event.register(Commands.literal('cra-bro')
		.executes(c => bank(c.source.player))
	)
	let bank=(player)=>{
		// player.getLevel().getServer().runCommandSilent("/give @p create:schedule")
		
		// player.getLevel().getServer().runCommandSilent("/give @p minecraft:beacon 3")
		// player.getLevel().getServer().runCommandSilent("/give @p create:precision_mechanism 6")

		// player.getLevel().getServer().runCommandSilent("/give @p waystones:warp_stone")
		player.getLevel().getServer().runCommandSilent("/tp @e[type=wither] 0 -1000 0")
		player.setStatusMessage("创哥理赔完成");
		return 1;
	}
})