
ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event

	event.register(Commands.literal('cra-bro')
		.executes(c => bank(c.source.player))
	)
	let bank=(player)=>{
		// player.getLevel().getServer().runCommandSilent("/give @p minecraft:beacon 3")
		// player.getLevel().getServer().runCommandSilent("/give @p create:precision_mechanism 6")
		player.setStatusMessage("创哥理赔完成");
		return 1;
	}
})