
Ponder.registry((event) => {
    event.create([
        "waystones:warp_stone",
        "minecraft:ender_pearl",
        "createutilities:void_casing",
        'waystones:waystone',
        'waystones:sandy_waystone',
        'waystones:mossy_waystone',
        'waystones:sharestone',
        'waystones:portstone'
    ]).scene("waystone_interact", "First example scene", (scene, util) => {

        scene.showStructure();
        
        /**
         * idle(ticks) or idleSeconds(seconds) is used to wait for a certain amount of time.
         * 20 ticks = 1 second
         */
        scene.world.showSection([0, 0, 0, 4, 4, 4], Facing.down);
        scene.idle(20); // 必须间隔这么长时间，不然会崩溃
        scene.world.hideSection([0, 1, 0, 3, 4, 3], Facing.up);
        scene.idle(10);
        /**
         * 50 -> the tick length of the instruction
         * [x, y, z] -> the position that the text should point at
         */
        scene.text(80, "Example text 1", [1.5, 3.5, 2.5]).attachKeyFrame();
        scene.idle(5);
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.world.setBlock([2, 1, 2], "createutilities:void_casing", false);
        scene.idle(5);
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.world.setBlock([2, 2, 2], "minecraft:stone_bricks", false);
        scene.idle(5);
        scene.world.showSection([2, 3, 2], Facing.DOWN);    
        scene.world.setBlock([2, 3, 2], "minecraft:stone_bricks", false);
        scene.idle(70);

        scene.text(80, "Example text 1", [2.0, 2.5, 2.5]).attachKeyFrame();
        scene.idle(60);
        /**
         * 120 -> the tick length of the instruction
         * [x, y, z] -> the position that the controls should point at
         * "down" -> the direction that is used by the controls for pointing
         */
        scene
            .showControls(20, [2.5, 2.5, 2.0], "right")
            .rightClick()
            .withItem("waystones:warp_stone");
        scene.idle(5);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("waystones:waystone").with("half", "lower"), true);
        scene.world.modifyBlock([2, 3, 2], () => Block.id("waystones:waystone").with("half", "upper"), true);

        scene.idle(60);
        scene.world.hideSection([0, 1, 0, 3, 4, 3], Facing.up);
        scene.idle(20);

        scene.text(100, "Example text 2", [2.0, 2.5, 2.5]).attachKeyFrame();;
        scene.world.setBlock([2, 1, 2], "createutilities:void_casing", false);
        scene.world.setBlocks([2, 2, 2, 2, 3, 2], "minecraft:stone_bricks", false);
        scene.world.showSection([2, 1, 2, 2, 3, 2], Facing.DOWN);
        scene.idle(40);
        scene
            .showControls(20, [2.5, 2.5, 2.0], "right")
            .rightClick()
            .withItem("minecraft:ender_pearl");
        scene.idle(30);
        scene
            .showControls(20, [2.5, 2.5, 2.0], "right")
            .rightClick()
            .withItem("minecraft:ender_pearl");
        scene.idle(30);
        scene
            .showControls(20, [2.5, 2.5, 2.0], "right")
            .rightClick()
            .withItem("minecraft:ender_pearl");
        scene.idle(5);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("waystones:waystone").with("half", "lower"), true);
        scene.world.modifyBlock([2, 3, 2], () => Block.id("waystones:waystone").with("half", "upper"), true);
    });

    event.create([
        "waystones:warp_stone",
        "minecraft:ender_pearl",
        "createutilities:void_casing",
        'waystones:waystone',
        'waystones:sandy_waystone',
        'waystones:mossy_waystone',
        'waystones:sharestone',
        'waystones:portstone'
    ]).scene("waystone_types", "2nd example scene", (scene, util) => {
        scene.showStructure();
        const WAYSTONE_INGREDIENT = new Map([
            ['waystones:waystone', [[4,0], 'minecraft:stone_bricks','minecraft:stone_bricks']],
            ['waystones:sandy_waystone', [[4,2], 'minecraft:chiseled_sandstone','minecraft:chiseled_sandstone']],
            ['waystones:mossy_waystone', [[4,4], 'minecraft:mossy_stone_bricks','minecraft:mossy_stone_bricks']],
            ['waystones:sharestone', [[2,4], 'minecraft:chiseled_stone_bricks','minecraft:chiseled_stone_bricks']],
            ['waystones:portstone', [[0,4], 'minecraft:stone_brick_stairs','minecraft:air']],
        ])

        WAYSTONE_INGREDIENT.forEach((ingredient, waystone) => {
            let pos = ingredient[0]
            scene.world.setBlock([pos[0], 1, pos[1]], "createutilities:void_casing", false);
            scene.world.setBlock([pos[0], 2, pos[1]], ingredient[1], false);
            scene.world.setBlock([pos[0], 3, pos[1]], ingredient[2], false);
        })
        scene.world.modifyBlock([0, 2, 4], (curState) => curState.with("facing", "south"), false);
        scene.text(100, "Example text 111", [0.5, 2.5, 4.0]).attachKeyFrame();;
        scene.idle(100);

        WAYSTONE_INGREDIENT.forEach((ingredient, waystone) => {
            let pos = ingredient[0]
            scene.idle(10);
            scene
                .showControls(10, [pos[0]+0.5, 2.5, pos[1]+0.5], "right")
                .rightClick()
                .withItem("waystones:warp_stone");
            scene.idle(5);
            scene.world.modifyBlock([pos[0], 2, pos[1]], () => Block.id(waystone).with("half", "lower"), true);
            scene.world.modifyBlock([pos[0], 3, pos[1]], () => Block.id(waystone).with("half", "upper"), true);
        })
        
    })

    event.create([
        "waystones:warp_stone",
        "minecraft:ender_pearl",
        "createutilities:void_casing",
        'waystones:waystone',
        'waystones:sandy_waystone',
        'waystones:mossy_waystone',
        'waystones:sharestone',
        'waystones:portstone'
    ]).scene("waystone_sharedstone_color", "3nd example scene", (scene, util) => {
        scene.showStructure();
        
        scene.world.setBlock([3, 1, 3], "createutilities:void_casing", false);
        scene.world.setBlocks([3, 2, 3, 3, 3, 3], "minecraft:chiseled_stone_bricks", false);
        scene.world.setBlock([1, 1, 3], "createutilities:void_casing", false);
        scene.world.setBlocks([1, 2, 3, 1, 3, 3], "minecraft:chiseled_stone_bricks", false);

        scene.idle(10);

        scene.text(120, "Example text 111", [0.5, 2.5, 4.0]).attachKeyFrame();;
        scene.idle(100);
        scene
            .showControls(20, [3.5, 2.5, 3.0], "right")
            .rightClick()
            .withItem("waystones:warp_stone");
        scene.idle(5);
        scene.world.modifyBlock([3, 2, 3], () => Block.id("waystones:sharestone").with("half", "lower"), true);
        scene.world.modifyBlock([3, 3, 3], () => Block.id("waystones:sharestone").with("half", "upper"), true);
        scene.idle(20);
        scene
            .showControls(20, [1.5, 2.5, 3.0], "right")
            .rightClick()
            .withItem("waystones:warp_stone");
        scene
            .showControls(20, [1.0, 2.5, 3.5], "left")
            .withItem("minecraft:red_dye");
        scene.idle(5);
        scene.world.modifyBlock([1, 2, 3], () => Block.id("waystones:red_sharestone").with("half", "lower"), true);
        scene.world.modifyBlock([1, 3, 3], () => Block.id("waystones:red_sharestone").with("half", "upper"), true);
        scene.idle(20);
        scene.text(100, "Example text 111", [0.5, 2.5, 4.0]).attachKeyFrame();
        scene.idle(100);
    })
});