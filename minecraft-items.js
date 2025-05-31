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
    'EMERALD_ORE': { name: 'Emerald Ore', category: 'blocks' },
    'NETHERITE_BLOCK': { name: 'Netherite Block', category: 'blocks' },
    'GLASS': { name: 'Glass', category: 'blocks' },
    'OBSIDIAN': { name: 'Obsidian', category: 'blocks' },
    'ICE': { name: 'Ice', category: 'blocks' },
    'SNOW': { name: 'Snow', category: 'blocks' },
    'CLAY': { name: 'Clay', category: 'blocks' },
    'PUMPKIN': { name: 'Pumpkin', category: 'blocks' },
    'NETHERRACK': { name: 'Netherrack', category: 'blocks' },
    'SOUL_SAND': { name: 'Soul Sand', category: 'blocks' },
    'GLOWSTONE': { name: 'Glowstone', category: 'blocks' },
    'END_STONE': { name: 'End Stone', category: 'blocks' },

    // Tools
    'WOODEN_SWORD': { name: 'Wooden Sword', category: 'tools' },
    'STONE_SWORD': { name: 'Stone Sword', category: 'tools' },
    'IRON_SWORD': { name: 'Iron Sword', category: 'tools' },
    'GOLDEN_SWORD': { name: 'Golden Sword', category: 'tools' },
    'DIAMOND_SWORD': { name: 'Diamond Sword', category: 'tools' },
    'NETHERITE_SWORD': { name: 'Netherite Sword', category: 'tools' },
    'WOODEN_PICKAXE': { name: 'Wooden Pickaxe', category: 'tools' },
    'STONE_PICKAXE': { name: 'Stone Pickaxe', category: 'tools' },
    'IRON_PICKAXE': { name: 'Iron Pickaxe', category: 'tools' },
    'GOLDEN_PICKAXE': { name: 'Golden Pickaxe', category: 'tools' },
    'DIAMOND_PICKAXE': { name: 'Diamond Pickaxe', category: 'tools' },
    'NETHERITE_PICKAXE': { name: 'Netherite Pickaxe', category: 'tools' },
    'WOODEN_AXE': { name: 'Wooden Axe', category: 'tools' },
    'STONE_AXE': { name: 'Stone Axe', category: 'tools' },
    'IRON_AXE': { name: 'Iron Axe', category: 'tools' },
    'GOLDEN_AXE': { name: 'Golden Axe', category: 'tools' },
    'DIAMOND_AXE': { name: 'Diamond Axe', category: 'tools' },
    'NETHERITE_AXE': { name: 'Netherite Axe', category: 'tools' },
    'WOODEN_SHOVEL': { name: 'Wooden Shovel', category: 'tools' },
    'STONE_SHOVEL': { name: 'Stone Shovel', category: 'tools' },
    'IRON_SHOVEL': { name: 'Iron Shovel', category: 'tools' },
    'GOLDEN_SHOVEL': { name: 'Golden Shovel', category: 'tools' },
    'DIAMOND_SHOVEL': { name: 'Diamond Shovel', category: 'tools' },
    'NETHERITE_SHOVEL': { name: 'Netherite Shovel', category: 'tools' },
    'WOODEN_HOE': { name: 'Wooden Hoe', category: 'tools' },
    'STONE_HOE': { name: 'Stone Hoe', category: 'tools' },
    'IRON_HOE': { name: 'Iron Hoe', category: 'tools' },
    'GOLDEN_HOE': { name: 'Golden Hoe', category: 'tools' },
    'DIAMOND_HOE': { name: 'Diamond Hoe', category: 'tools' },
    'NETHERITE_HOE': { name: 'Netherite Hoe', category: 'tools' },
    'BOW': { name: 'Bow', category: 'tools' },
    'CROSSBOW': { name: 'Crossbow', category: 'tools' },
    'TRIDENT': { name: 'Trident', category: 'tools' },
    'FISHING_ROD': { name: 'Fishing Rod', category: 'tools' },
    'SHEARS': { name: 'Shears', category: 'tools' },
    'FLINT_AND_STEEL': { name: 'Flint and Steel', category: 'tools' },

    // Combat/Armor
    'LEATHER_HELMET': { name: 'Leather Helmet', category: 'combat' },
    'LEATHER_CHESTPLATE': { name: 'Leather Chestplate', category: 'combat' },
    'LEATHER_LEGGINGS': { name: 'Leather Leggings', category: 'combat' },
    'LEATHER_BOOTS': { name: 'Leather Boots', category: 'combat' },
    'CHAINMAIL_HELMET': { name: 'Chainmail Helmet', category: 'combat' },
    'CHAINMAIL_CHESTPLATE': { name: 'Chainmail Chestplate', category: 'combat' },
    'CHAINMAIL_LEGGINGS': { name: 'Chainmail Leggings', category: 'combat' },
    'CHAINMAIL_BOOTS': { name: 'Chainmail Boots', category: 'combat' },
    'IRON_HELMET': { name: 'Iron Helmet', category: 'combat' },
    'IRON_CHESTPLATE': { name: 'Iron Chestplate', category: 'combat' },
    'IRON_LEGGINGS': { name: 'Iron Leggings', category: 'combat' },
    'IRON_BOOTS': { name: 'Iron Boots', category: 'combat' },
    'GOLDEN_HELMET': { name: 'Golden Helmet', category: 'combat' },
    'GOLDEN_CHESTPLATE': { name: 'Golden Chestplate', category: 'combat' },
    'GOLDEN_LEGGINGS': { name: 'Golden Leggings', category: 'combat' },
    'GOLDEN_BOOTS': { name: 'Golden Boots', category: 'combat' },
    'DIAMOND_HELMET': { name: 'Diamond Helmet', category: 'combat' },
    'DIAMOND_CHESTPLATE': { name: 'Diamond Chestplate', category: 'combat' },
    'DIAMOND_LEGGINGS': { name: 'Diamond Leggings', category: 'combat' },
    'DIAMOND_BOOTS': { name: 'Diamond Boots', category: 'combat' },
    'NETHERITE_HELMET': { name: 'Netherite Helmet', category: 'combat' },
    'NETHERITE_CHESTPLATE': { name: 'Netherite Chestplate', category: 'combat' },
    'NETHERITE_LEGGINGS': { name: 'Netherite Leggings', category: 'combat' },
    'NETHERITE_BOOTS': { name: 'Netherite Boots', category: 'combat' },
    'SHIELD': { name: 'Shield', category: 'combat' },
    'ARROW': { name: 'Arrow', category: 'combat' },
    'SPECTRAL_ARROW': { name: 'Spectral Arrow', category: 'combat' },

    // Food
    'APPLE': { name: 'Apple', category: 'food' },
    'GOLDEN_APPLE': { name: 'Golden Apple', category: 'food' },
    'ENCHANTED_GOLDEN_APPLE': { name: 'Enchanted Golden Apple', category: 'food' },
    'BREAD': { name: 'Bread', category: 'food' },
    'PORKCHOP': { name: 'Raw Porkchop', category: 'food' },
    'COOKED_PORKCHOP': { name: 'Cooked Porkchop', category: 'food' },
    'BEEF': { name: 'Raw Beef', category: 'food' },
    'COOKED_BEEF': { name: 'Steak', category: 'food' },
    'CHICKEN': { name: 'Raw Chicken', category: 'food' },
    'COOKED_CHICKEN': { name: 'Cooked Chicken', category: 'food' },
    'MUTTON': { name: 'Raw Mutton', category: 'food' },
    'COOKED_MUTTON': { name: 'Cooked Mutton', category: 'food' },
    'COD': { name: 'Raw Cod', category: 'food' },
    'COOKED_COD': { name: 'Cooked Cod', category: 'food' },
    'SALMON': { name: 'Raw Salmon', category: 'food' },
    'COOKED_SALMON': { name: 'Cooked Salmon', category: 'food' },
    'CAKE': { name: 'Cake', category: 'food' },
    'COOKIE': { name: 'Cookie', category: 'food' },
    'MELON_SLICE': { name: 'Melon Slice', category: 'food' },
    'PUMPKIN_PIE': { name: 'Pumpkin Pie', category: 'food' },
    'CARROT': { name: 'Carrot', category: 'food' },
    'GOLDEN_CARROT': { name: 'Golden Carrot', category: 'food' },
    'POTATO': { name: 'Potato', category: 'food' },
    'BAKED_POTATO': { name: 'Baked Potato', category: 'food' },
    'BEETROOT': { name: 'Beetroot', category: 'food' },
    'BEETROOT_SOUP': { name: 'Beetroot Soup', category: 'food' },
    'MUSHROOM_STEW': { name: 'Mushroom Stew', category: 'food' },
    'RABBIT_STEW': { name: 'Rabbit Stew', category: 'food' },
    'SUSPICIOUS_STEW': { name: 'Suspicious Stew', category: 'food' },

    // Items/Materials
    'COAL': { name: 'Coal', category: 'items' },
    'CHARCOAL': { name: 'Charcoal', category: 'items' },
    'DIAMOND': { name: 'Diamond', category: 'items' },
    'EMERALD': { name: 'Emerald', category: 'items' },
    'IRON_INGOT': { name: 'Iron Ingot', category: 'items' },
    'GOLD_INGOT': { name: 'Gold Ingot', category: 'items' },
    'NETHERITE_INGOT': { name: 'Netherite Ingot', category: 'items' },
    'STICK': { name: 'Stick', category: 'items' },
    'STRING': { name: 'String', category: 'items' },
    'FEATHER': { name: 'Feather', category: 'items' },
    'GUNPOWDER': { name: 'Gunpowder', category: 'items' },
    'WHEAT': { name: 'Wheat', category: 'items' },
    'WHEAT_SEEDS': { name: 'Wheat Seeds', category: 'items' },
    'FLINT': { name: 'Flint', category: 'items' },
    'BONE': { name: 'Bone', category: 'items' },
    'LEATHER': { name: 'Leather', category: 'items' },
    'RABBIT_HIDE': { name: 'Rabbit Hide', category: 'items' },
    'SLIME_BALL': { name: 'Slimeball', category: 'items' },
    'ENDER_PEARL': { name: 'Ender Pearl', category: 'items' },
    'BLAZE_ROD': { name: 'Blaze Rod', category: 'items' },
    'GHAST_TEAR': { name: 'Ghast Tear', category: 'items' },
    'NETHER_STAR': { name: 'Nether Star', category: 'items' },
    'PRISMARINE_SHARD': { name: 'Prismarine Shard', category: 'items' },
    'PRISMARINE_CRYSTALS': { name: 'Prismarine Crystals', category: 'items' },
    'NAUTILUS_SHELL': { name: 'Nautilus Shell', category: 'items' },
    'HEART_OF_THE_SEA': { name: 'Heart of the Sea', category: 'items' },
    'SCUTE': { name: 'Scute', category: 'items' },
    'PHANTOM_MEMBRANE': { name: 'Phantom Membrane', category: 'items' },
    'HONEYCOMB': { name: 'Honeycomb', category: 'items' },
    'HONEY_BOTTLE': { name: 'Honey Bottle', category: 'items' },

    // Redstone
    'REDSTONE': { name: 'Redstone Dust', category: 'redstone' },
    'REDSTONE_TORCH': { name: 'Redstone Torch', category: 'redstone' },
    'REDSTONE_BLOCK': { name: 'Redstone Block', category: 'redstone' },
    'REPEATER': { name: 'Redstone Repeater', category: 'redstone' },
    'COMPARATOR': { name: 'Redstone Comparator', category: 'redstone' },
    'PISTON': { name: 'Piston', category: 'redstone' },
    'STICKY_PISTON': { name: 'Sticky Piston', category: 'redstone' },
    'DISPENSER': { name: 'Dispenser', category: 'redstone' },
    'DROPPER': { name: 'Dropper', category: 'redstone' },
    'LEVER': { name: 'Lever', category: 'redstone' },
    'STONE_BUTTON': { name: 'Stone Button', category: 'redstone' },
    'OAK_BUTTON': { name: 'Oak Button', category: 'redstone' },
    'STONE_PRESSURE_PLATE': { name: 'Stone Pressure Plate', category: 'redstone' },
    'OAK_PRESSURE_PLATE': { name: 'Oak Pressure Plate', category: 'redstone' },
    'HEAVY_WEIGHTED_PRESSURE_PLATE': { name: 'Heavy Weighted Pressure Plate', category: 'redstone' },
    'LIGHT_WEIGHTED_PRESSURE_PLATE': { name: 'Light Weighted Pressure Plate', category: 'redstone' },
    'DAYLIGHT_DETECTOR': { name: 'Daylight Detector', category: 'redstone' },
    'TRIPWIRE_HOOK': { name: 'Tripwire Hook', category: 'redstone' },
    'TNT': { name: 'TNT', category: 'redstone' },
    'NOTE_BLOCK': { name: 'Note Block', category: 'redstone' },
    'JUKEBOX': { name: 'Jukebox', category: 'redstone' },

    // Decoration
    'TORCH': { name: 'Torch', category: 'decoration' },
    'LANTERN': { name: 'Lantern', category: 'decoration' },
    'SOUL_LANTERN': { name: 'Soul Lantern', category: 'decoration' },
    'CRAFTING_TABLE': { name: 'Crafting Table', category: 'decoration' },
    'FURNACE': { name: 'Furnace', category: 'decoration' },
    'CHEST': { name: 'Chest', category: 'decoration' },
    'ENDER_CHEST': { name: 'Ender Chest', category: 'decoration' },
    'BOOKSHELF': { name: 'Bookshelf', category: 'decoration' },
    'ENCHANTING_TABLE': { name: 'Enchanting Table', category: 'decoration' },
    'ANVIL': { name: 'Anvil', category: 'decoration' },
    'BED': { name: 'Red Bed', category: 'decoration' },
    'WHITE_BED': { name: 'White Bed', category: 'decoration' },
    'PAINTING': { name: 'Painting', category: 'decoration' },
    'ITEM_FRAME': { name: 'Item Frame', category: 'decoration' },
    'GLOW_ITEM_FRAME': { name: 'Glow Item Frame', category: 'decoration' },
    'FLOWER_POT': { name: 'Flower Pot', category: 'decoration' },
    'CAULDRON': { name: 'Cauldron', category: 'decoration' },
    'BREWING_STAND': { name: 'Brewing Stand', category: 'decoration' },
    'END_CRYSTAL': { name: 'End Crystal', category: 'decoration' },
    'DRAGON_EGG': { name: 'Dragon Egg', category: 'decoration' },
    'BEACON': { name: 'Beacon', category: 'decoration' },
    'CONDUIT': { name: 'Conduit', category: 'decoration' },

    // Common GUI items
    'BARRIER': { name: 'Barrier', category: 'items' },
    'STRUCTURE_VOID': { name: 'Structure Void', category: 'items' },
    'WHITE_STAINED_GLASS_PANE': { name: 'White Stained Glass Pane', category: 'decoration' },
    'BLACK_STAINED_GLASS_PANE': { name: 'Black Stained Glass Pane', category: 'decoration' },
    'GRAY_STAINED_GLASS_PANE': { name: 'Gray Stained Glass Pane', category: 'decoration' },
    'GREEN_STAINED_GLASS_PANE': { name: 'Green Stained Glass Pane', category: 'decoration' },
    'RED_STAINED_GLASS_PANE': { name: 'Red Stained Glass Pane', category: 'decoration' },
    'BLUE_STAINED_GLASS_PANE': { name: 'Blue Stained Glass Pane', category: 'decoration' },
    'YELLOW_STAINED_GLASS_PANE': { name: 'Yellow Stained Glass Pane', category: 'decoration' },
    'LIME_STAINED_GLASS_PANE': { name: 'Lime Stained Glass Pane', category: 'decoration' },
    'PINK_STAINED_GLASS_PANE': { name: 'Pink Stained Glass Pane', category: 'decoration' },
    'PURPLE_STAINED_GLASS_PANE': { name: 'Purple Stained Glass Pane', category: 'decoration' },
    'ORANGE_STAINED_GLASS_PANE': { name: 'Orange Stained Glass Pane', category: 'decoration' },
    'LIGHT_BLUE_STAINED_GLASS_PANE': { name: 'Light Blue Stained Glass Pane', category: 'decoration' },
    'MAGENTA_STAINED_GLASS_PANE': { name: 'Magenta Stained Glass Pane', category: 'decoration' },
    'CYAN_STAINED_GLASS_PANE': { name: 'Cyan Stained Glass Pane', category: 'decoration' },
    'LIGHT_GRAY_STAINED_GLASS_PANE': { name: 'Light Gray Stained Glass Pane', category: 'decoration' },
    'BROWN_STAINED_GLASS_PANE': { name: 'Brown Stained Glass Pane', category: 'decoration' }
};

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
