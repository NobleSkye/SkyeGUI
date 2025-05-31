// Minecraft items data with categories and simple text representations
const MINECRAFT_ITEMS = {
    // Blocks
    'STONE': { name: 'Stone', category: 'blocks' },
    'COBBLESTONE': { name: 'Cobblestone', category: 'blocks' },
    'DIRT': { name: 'Dirt', category: 'blocks' },
    'GRASS_BLOCK': { name: 'Grass Block', category: 'blocks' },
    'OAK_LOG': { name: 'Oak Log', category: 'blocks' },
    'OAK_PLANKS': { name: 'Oak Planks', category: 'blocks' },
    'BIRCH_LOG': { name: 'Birch Log', category: 'blocks' },
    'SPRUCE_LOG': { name: 'Spruce Log', category: 'blocks' },
    'JUNGLE_LOG': { name: 'Jungle Log', category: 'blocks' },
    'ACACIA_LOG': { name: 'Acacia Log', category: 'blocks' },
    'DARK_OAK_LOG': { name: 'Dark Oak Log', category: 'blocks' },
    'BEDROCK': { name: 'Bedrock', category: 'blocks' },
    'SAND': { name: 'Sand', category: 'blocks' },
    'GRAVEL': { name: 'Gravel', category: 'blocks' },
    'GOLD_ORE': { name: 'Gold Ore', category: 'blocks' },
    'IRON_ORE': { name: 'Iron Ore', category: 'blocks' },
    'COAL_ORE': { name: 'Coal Ore', category: 'blocks' },
    'DIAMOND_ORE': { name: 'Diamond Ore', category: 'blocks' },
    'EMERALD_ORE': { name: 'Emerald Ore', category: 'blocks', icon: ''
    'NETHERITE_BLOCK': { name: 'Netherite Block', category: 'blocks', icon: ''
    'GLASS': { name: 'Glass', category: 'blocks', icon: ''
    'OBSIDIAN': { name: 'Obsidian', category: 'blocks', icon: ''
    'ICE': { name: 'Ice', category: 'blocks', icon: ''
    'SNOW': { name: 'Snow', category: 'blocks', icon: ''
    'CLAY': { name: 'Clay', category: 'blocks', icon: ''
    'PUMPKIN': { name: 'Pumpkin', category: 'blocks', icon: ''
    'NETHERRACK': { name: 'Netherrack', category: 'blocks', icon: ''
    'SOUL_SAND': { name: 'Soul Sand', category: 'blocks', icon: ''
    'GLOWSTONE': { name: 'Glowstone', category: 'blocks', icon: ''
    'END_STONE': { name: 'End Stone', category: 'blocks', icon: ''

    // Tools
    'WOODEN_SWORD': { name: 'Wooden Sword', category: 'tools', icon: ''
    'STONE_SWORD': { name: 'Stone Sword', category: 'tools', icon: ''
    'IRON_SWORD': { name: 'Iron Sword', category: 'tools', icon: ''
    'GOLDEN_SWORD': { name: 'Golden Sword', category: 'tools', icon: ''
    'DIAMOND_SWORD': { name: 'Diamond Sword', category: 'tools', icon: ''
    'NETHERITE_SWORD': { name: 'Netherite Sword', category: 'tools', icon: ''
    'WOODEN_PICKAXE': { name: 'Wooden Pickaxe', category: 'tools', icon: ''
    'STONE_PICKAXE': { name: 'Stone Pickaxe', category: 'tools', icon: ''
    'IRON_PICKAXE': { name: 'Iron Pickaxe', category: 'tools', icon: ''
    'GOLDEN_PICKAXE': { name: 'Golden Pickaxe', category: 'tools', icon: ''
    'DIAMOND_PICKAXE': { name: 'Diamond Pickaxe', category: 'tools', icon: ''
    'NETHERITE_PICKAXE': { name: 'Netherite Pickaxe', category: 'tools', icon: ''
    'WOODEN_AXE': { name: 'Wooden Axe', category: 'tools', icon: ''
    'STONE_AXE': { name: 'Stone Axe', category: 'tools', icon: ''
    'IRON_AXE': { name: 'Iron Axe', category: 'tools', icon: ''
    'GOLDEN_AXE': { name: 'Golden Axe', category: 'tools', icon: ''
    'DIAMOND_AXE': { name: 'Diamond Axe', category: 'tools', icon: ''
    'NETHERITE_AXE': { name: 'Netherite Axe', category: 'tools', icon: ''
    'WOODEN_SHOVEL': { name: 'Wooden Shovel', category: 'tools', icon: ''
    'STONE_SHOVEL': { name: 'Stone Shovel', category: 'tools', icon: ''
    'IRON_SHOVEL': { name: 'Iron Shovel', category: 'tools', icon: ''
    'GOLDEN_SHOVEL': { name: 'Golden Shovel', category: 'tools', icon: ''
    'DIAMOND_SHOVEL': { name: 'Diamond Shovel', category: 'tools', icon: ''
    'NETHERITE_SHOVEL': { name: 'Netherite Shovel', category: 'tools', icon: ''
    'WOODEN_HOE': { name: 'Wooden Hoe', category: 'tools', icon: ''
    'STONE_HOE': { name: 'Stone Hoe', category: 'tools', icon: ''
    'IRON_HOE': { name: 'Iron Hoe', category: 'tools', icon: ''
    'GOLDEN_HOE': { name: 'Golden Hoe', category: 'tools', icon: ''
    'DIAMOND_HOE': { name: 'Diamond Hoe', category: 'tools', icon: ''
    'NETHERITE_HOE': { name: 'Netherite Hoe', category: 'tools', icon: ''
    'BOW': { name: 'Bow', category: 'tools', icon: ''
    'CROSSBOW': { name: 'Crossbow', category: 'tools', icon: ''
    'TRIDENT': { name: 'Trident', category: 'tools', icon: ''
    'FISHING_ROD': { name: 'Fishing Rod', category: 'tools', icon: ''
    'SHEARS': { name: 'Shears', category: 'tools', icon: ''
    'FLINT_AND_STEEL': { name: 'Flint and Steel', category: 'tools', icon: ''

    // Combat/Armor
    'LEATHER_HELMET': { name: 'Leather Helmet', category: 'combat', icon: ''
    'LEATHER_CHESTPLATE': { name: 'Leather Chestplate', category: 'combat', icon: ''
    'LEATHER_LEGGINGS': { name: 'Leather Leggings', category: 'combat', icon: ''
    'LEATHER_BOOTS': { name: 'Leather Boots', category: 'combat', icon: ''
    'CHAINMAIL_HELMET': { name: 'Chainmail Helmet', category: 'combat', icon: ''
    'CHAINMAIL_CHESTPLATE': { name: 'Chainmail Chestplate', category: 'combat', icon: ''
    'CHAINMAIL_LEGGINGS': { name: 'Chainmail Leggings', category: 'combat', icon: ''
    'CHAINMAIL_BOOTS': { name: 'Chainmail Boots', category: 'combat', icon: ''
    'IRON_HELMET': { name: 'Iron Helmet', category: 'combat', icon: ''
    'IRON_CHESTPLATE': { name: 'Iron Chestplate', category: 'combat', icon: ''
    'IRON_LEGGINGS': { name: 'Iron Leggings', category: 'combat', icon: ''
    'IRON_BOOTS': { name: 'Iron Boots', category: 'combat', icon: ''
    'GOLDEN_HELMET': { name: 'Golden Helmet', category: 'combat', icon: ''
    'GOLDEN_CHESTPLATE': { name: 'Golden Chestplate', category: 'combat', icon: ''
    'GOLDEN_LEGGINGS': { name: 'Golden Leggings', category: 'combat', icon: ''
    'GOLDEN_BOOTS': { name: 'Golden Boots', category: 'combat', icon: ''
    'DIAMOND_HELMET': { name: 'Diamond Helmet', category: 'combat', icon: ''
    'DIAMOND_CHESTPLATE': { name: 'Diamond Chestplate', category: 'combat', icon: ''
    'DIAMOND_LEGGINGS': { name: 'Diamond Leggings', category: 'combat', icon: ''
    'DIAMOND_BOOTS': { name: 'Diamond Boots', category: 'combat', icon: ''
    'NETHERITE_HELMET': { name: 'Netherite Helmet', category: 'combat', icon: ''
    'NETHERITE_CHESTPLATE': { name: 'Netherite Chestplate', category: 'combat', icon: ''
    'NETHERITE_LEGGINGS': { name: 'Netherite Leggings', category: 'combat', icon: ''
    'NETHERITE_BOOTS': { name: 'Netherite Boots', category: 'combat', icon: ''
    'SHIELD': { name: 'Shield', category: 'combat', icon: ''
    'ARROW': { name: 'Arrow', category: 'combat', icon: ''
    'SPECTRAL_ARROW': { name: 'Spectral Arrow', category: 'combat', icon: ''

    // Food
    'APPLE': { name: 'Apple', category: 'food', icon: ''
    'GOLDEN_APPLE': { name: 'Golden Apple', category: 'food', icon: ''
    'ENCHANTED_GOLDEN_APPLE': { name: 'Enchanted Golden Apple', category: 'food', icon: ''
    'BREAD': { name: 'Bread', category: 'food', icon: ''
    'PORKCHOP': { name: 'Raw Porkchop', category: 'food', icon: ''
    'COOKED_PORKCHOP': { name: 'Cooked Porkchop', category: 'food', icon: ''
    'BEEF': { name: 'Raw Beef', category: 'food', icon: ''
    'COOKED_BEEF': { name: 'Steak', category: 'food', icon: ''
    'CHICKEN': { name: 'Raw Chicken', category: 'food', icon: ''
    'COOKED_CHICKEN': { name: 'Cooked Chicken', category: 'food', icon: ''
    'MUTTON': { name: 'Raw Mutton', category: 'food', icon: ''
    'COOKED_MUTTON': { name: 'Cooked Mutton', category: 'food', icon: ''
    'COD': { name: 'Raw Cod', category: 'food', icon: ''
    'COOKED_COD': { name: 'Cooked Cod', category: 'food', icon: ''
    'SALMON': { name: 'Raw Salmon', category: 'food', icon: ''
    'COOKED_SALMON': { name: 'Cooked Salmon', category: 'food', icon: ''
    'CAKE': { name: 'Cake', category: 'food', icon: ''
    'COOKIE': { name: 'Cookie', category: 'food', icon: ''
    'MELON_SLICE': { name: 'Melon Slice', category: 'food', icon: ''
    'PUMPKIN_PIE': { name: 'Pumpkin Pie', category: 'food', icon: ''
    'CARROT': { name: 'Carrot', category: 'food', icon: ''
    'GOLDEN_CARROT': { name: 'Golden Carrot', category: 'food', icon: ''
    'POTATO': { name: 'Potato', category: 'food', icon: ''
    'BAKED_POTATO': { name: 'Baked Potato', category: 'food', icon: ''
    'BEETROOT': { name: 'Beetroot', category: 'food', icon: ''
    'BEETROOT_SOUP': { name: 'Beetroot Soup', category: 'food', icon: ''
    'MUSHROOM_STEW': { name: 'Mushroom Stew', category: 'food', icon: ''
    'RABBIT_STEW': { name: 'Rabbit Stew', category: 'food', icon: ''
    'SUSPICIOUS_STEW': { name: 'Suspicious Stew', category: 'food', icon: ''

    // Items/Materials
    'COAL': { name: 'Coal', category: 'items', icon: ''
    'CHARCOAL': { name: 'Charcoal', category: 'items', icon: ''
    'DIAMOND': { name: 'Diamond', category: 'items', icon: ''
    'EMERALD': { name: 'Emerald', category: 'items', icon: ''
    'IRON_INGOT': { name: 'Iron Ingot', category: 'items', icon: ''
    'GOLD_INGOT': { name: 'Gold Ingot', category: 'items', icon: ''
    'NETHERITE_INGOT': { name: 'Netherite Ingot', category: 'items', icon: ''
    'STICK': { name: 'Stick', category: 'items', icon: ''
    'STRING': { name: 'String', category: 'items', icon: ''
    'FEATHER': { name: 'Feather', category: 'items', icon: ''
    'GUNPOWDER': { name: 'Gunpowder', category: 'items', icon: ''
    'WHEAT': { name: 'Wheat', category: 'items', icon: ''
    'WHEAT_SEEDS': { name: 'Wheat Seeds', category: 'items', icon: ''
    'FLINT': { name: 'Flint', category: 'items', icon: ''
    'BONE': { name: 'Bone', category: 'items', icon: ''
    'LEATHER': { name: 'Leather', category: 'items', icon: ''
    'RABBIT_HIDE': { name: 'Rabbit Hide', category: 'items', icon: ''
    'SLIME_BALL': { name: 'Slimeball', category: 'items', icon: ''
    'ENDER_PEARL': { name: 'Ender Pearl', category: 'items', icon: ''
    'BLAZE_ROD': { name: 'Blaze Rod', category: 'items', icon: ''
    'GHAST_TEAR': { name: 'Ghast Tear', category: 'items', icon: ''
    'NETHER_STAR': { name: 'Nether Star', category: 'items', icon: ''
    'PRISMARINE_SHARD': { name: 'Prismarine Shard', category: 'items', icon: ''
    'PRISMARINE_CRYSTALS': { name: 'Prismarine Crystals', category: 'items', icon: ''
    'NAUTILUS_SHELL': { name: 'Nautilus Shell', category: 'items', icon: ''
    'HEART_OF_THE_SEA': { name: 'Heart of the Sea', category: 'items', icon: ''
    'SCUTE': { name: 'Scute', category: 'items', icon: ''
    'PHANTOM_MEMBRANE': { name: 'Phantom Membrane', category: 'items', icon: ''
    'HONEYCOMB': { name: 'Honeycomb', category: 'items', icon: ''
    'HONEY_BOTTLE': { name: 'Honey Bottle', category: 'items', icon: ''

    // Redstone
    'REDSTONE': { name: 'Redstone Dust', category: 'redstone', icon: ''
    'REDSTONE_TORCH': { name: 'Redstone Torch', category: 'redstone', icon: ''
    'REDSTONE_BLOCK': { name: 'Redstone Block', category: 'redstone', icon: ''
    'REPEATER': { name: 'Redstone Repeater', category: 'redstone', icon: ''
    'COMPARATOR': { name: 'Redstone Comparator', category: 'redstone', icon: ''
    'PISTON': { name: 'Piston', category: 'redstone', icon: ''
    'STICKY_PISTON': { name: 'Sticky Piston', category: 'redstone', icon: ''
    'DISPENSER': { name: 'Dispenser', category: 'redstone', icon: ''
    'DROPPER': { name: 'Dropper', category: 'redstone', icon: ''
    'LEVER': { name: 'Lever', category: 'redstone', icon: ''
    'STONE_BUTTON': { name: 'Stone Button', category: 'redstone', icon: ''
    'OAK_BUTTON': { name: 'Oak Button', category: 'redstone', icon: ''
    'STONE_PRESSURE_PLATE': { name: 'Stone Pressure Plate', category: 'redstone', icon: ''
    'OAK_PRESSURE_PLATE': { name: 'Oak Pressure Plate', category: 'redstone', icon: ''
    'HEAVY_WEIGHTED_PRESSURE_PLATE': { name: 'Heavy Weighted Pressure Plate', category: 'redstone', icon: ''
    'LIGHT_WEIGHTED_PRESSURE_PLATE': { name: 'Light Weighted Pressure Plate', category: 'redstone', icon: ''
    'DAYLIGHT_DETECTOR': { name: 'Daylight Detector', category: 'redstone', icon: ''
    'TRIPWIRE_HOOK': { name: 'Tripwire Hook', category: 'redstone', icon: ''
    'TNT': { name: 'TNT', category: 'redstone', icon: ''
    'NOTE_BLOCK': { name: 'Note Block', category: 'redstone', icon: ''
    'JUKEBOX': { name: 'Jukebox', category: 'redstone', icon: ''

    // Decoration
    'TORCH': { name: 'Torch', category: 'decoration', icon: ''
    'LANTERN': { name: 'Lantern', category: 'decoration', icon: ''
    'SOUL_LANTERN': { name: 'Soul Lantern', category: 'decoration', icon: ''
    'CRAFTING_TABLE': { name: 'Crafting Table', category: 'decoration', icon: ''
    'FURNACE': { name: 'Furnace', category: 'decoration', icon: ''
    'CHEST': { name: 'Chest', category: 'decoration', icon: ''
    'ENDER_CHEST': { name: 'Ender Chest', category: 'decoration', icon: ''
    'BOOKSHELF': { name: 'Bookshelf', category: 'decoration', icon: ''
    'ENCHANTING_TABLE': { name: 'Enchanting Table', category: 'decoration', icon: ''
    'ANVIL': { name: 'Anvil', category: 'decoration', icon: ''
    'BED': { name: 'Red Bed', category: 'decoration', icon: ''
    'WHITE_BED': { name: 'White Bed', category: 'decoration', icon: ''
    'PAINTING': { name: 'Painting', category: 'decoration', icon: ''
    'ITEM_FRAME': { name: 'Item Frame', category: 'decoration', icon: ''
    'GLOW_ITEM_FRAME': { name: 'Glow Item Frame', category: 'decoration', icon: ''
    'FLOWER_POT': { name: 'Flower Pot', category: 'decoration', icon: ''
    'CAULDRON': { name: 'Cauldron', category: 'decoration', icon: ''
    'BREWING_STAND': { name: 'Brewing Stand', category: 'decoration', icon: ''
    'END_CRYSTAL': { name: 'End Crystal', category: 'decoration', icon: ''
    'DRAGON_EGG': { name: 'Dragon Egg', category: 'decoration', icon: ''
    'BEACON': { name: 'Beacon', category: 'decoration', icon: ''
    'CONDUIT': { name: 'Conduit', category: 'decoration', icon: ''

    // Common GUI items
    'BARRIER': { name: 'Barrier', category: 'items', icon: ''
    'STRUCTURE_VOID': { name: 'Structure Void', category: 'items', icon: ''
    'WHITE_STAINED_GLASS_PANE': { name: 'White Stained Glass Pane', category: 'decoration', icon: ''
    'BLACK_STAINED_GLASS_PANE': { name: 'Black Stained Glass Pane', category: 'decoration', icon: ''
    'GRAY_STAINED_GLASS_PANE': { name: 'Gray Stained Glass Pane', category: 'decoration', icon: ''
    'GREEN_STAINED_GLASS_PANE': { name: 'Green Stained Glass Pane', category: 'decoration', icon: ''
    'RED_STAINED_GLASS_PANE': { name: 'Red Stained Glass Pane', category: 'decoration', icon: ''
    'BLUE_STAINED_GLASS_PANE': { name: 'Blue Stained Glass Pane', category: 'decoration', icon: ''
    'YELLOW_STAINED_GLASS_PANE': { name: 'Yellow Stained Glass Pane', category: 'decoration', icon: ''
    'LIME_STAINED_GLASS_PANE': { name: 'Lime Stained Glass Pane', category: 'decoration', icon: ''
    'PINK_STAINED_GLASS_PANE': { name: 'Pink Stained Glass Pane', category: 'decoration', icon: ''
    'PURPLE_STAINED_GLASS_PANE': { name: 'Purple Stained Glass Pane', category: 'decoration', icon: ''
    'ORANGE_STAINED_GLASS_PANE': { name: 'Orange Stained Glass Pane', category: 'decoration', icon: ''
    'LIGHT_BLUE_STAINED_GLASS_PANE': { name: 'Light Blue Stained Glass Pane', category: 'decoration', icon: ''
    'MAGENTA_STAINED_GLASS_PANE': { name: 'Magenta Stained Glass Pane', category: 'decoration', icon: ''
    'CYAN_STAINED_GLASS_PANE': { name: 'Cyan Stained Glass Pane', category: 'decoration', icon: ''
    'LIGHT_GRAY_STAINED_GLASS_PANE': { name: 'Light Gray Stained Glass Pane', category: 'decoration', icon: ''
    'BROWN_STAINED_GLASS_PANE': { name: 'Brown Stained Glass Pane', category: 'decoration', icon: ''
};

// Helper function to generate mcicons URL
function getMcIconUrl(materialId) {
    // Convert material ID to lowercase and handle special cases
    const trimmedID = materialId.toLowerCase();
    return `https://raw.githubusercontent.com/jacobsjo/mcicons/refs/heads/icons/item/${trimmedID}.png`;
}

// Helper function to generate mcicons URL
function getMcIconUrl(materialId) {
    // Convert material ID to lowercase and handle special cases
    const trimmedID = materialId.toLowerCase();
    return `https://raw.githubusercontent.com/jacobsjo/mcicons/refs/heads/icons/item/${trimmedID}.png`;
}

// Helper function to get all items in a category
function getItemsByCategory(category) {
    if (category === 'all') {
        return Object.keys(MINECRAFT_ITEMS);
    }
    return Object.keys(MINECRAFT_ITEMS).filter(key => 
        MINECRAFT_ITEMS[key].category === category
    );
}

// Helper function to search items by name
function searchItems(query) {
    const lowerQuery = query.toLowerCase();
    return Object.keys(MINECRAFT_ITEMS).filter(key => {
        const item = MINECRAFT_ITEMS[key];
        return item.name.toLowerCase().includes(lowerQuery) || 
               key.toLowerCase().includes(lowerQuery);
    });
}

// Helper function to get item data
function getItemData(material) {
    const upperMaterial = material.toUpperCase();
    const itemData = MINECRAFT_ITEMS[upperMaterial];
    
    if (itemData) {
        return {
            ...itemData,
            icon: getMcIconUrl(upperMaterial)
        };
    }
    
    return {
        name: material,
        category: 'items',
        icon: getMcIconUrl(material)
    };
}
