# SkyeGUI Editor

A comprehensive web application for creating Minecraft GUI configuration files with drag-and-drop functionality, item editing, and export capabilities supporting both Legacy and MiniMessage formats.

## Features

### 🎯 Core Functionality
- **Interactive grid interface** supporting 1 to 6 rows (9 to 54 slots)
- **Clickable slots** for editing item details
- **Real-time preview** of GUI layout and items
- **YAML export/import** with proper formatting
- **Dark theme** with responsive design
- **Color codes panel** with visual swatches and click-to-copy functionality

### 🎨 Item Customization
- **Material selection** with searchable text-based picker
- **Colored names and lore** using both Legacy (`&6`) and MiniMessage (`<gold>`) formatting
- **Command configuration** with `%player%` placeholder support
- **Amount settings** (1-64)
- **Close GUI behavior** toggle

### ⚙️ GUI Settings
- **Title customization** with color formatting support
- **Size configuration** (9, 18, 27, 36, 45, or 54 slots)
- **Command trigger** configuration (without leading slash)
- **Optional permission node** setup

### 🌈 Color Codes Panel
- **Visual color swatches** for all 16 Minecraft colors
- **Formatting codes** (bold, italic, underlined, strikethrough, obfuscated, reset)
- **Format toggle** between Legacy (`&6`) and MiniMessage (`<gold>`) display
- **Click-to-copy** functionality with visual feedback
- **Export format selection** integrated into the color panel

### 🔧 PlaceholderAPI Integration
Built-in support for common PlaceholderAPI placeholders:
- `%player_name%` - Player's name
- `%player_displayname%` - Player's display name
- `%player_level%` - Player's level
- `%player_exp%` - Player's experience
- `%vault_eco_balance%` - Player's balance (Vault)
- `%player_world%` - Player's current world
- `%player_ping%` - Player's ping
- `%player_health%` - Player's health

### 🎮 Minecraft Items
- **Comprehensive item database** with 200+ Minecraft items
- **Text-based item icons** with letter representations
- **Smart search functionality** by name or material ID
- **Reliable fallback display** for all items

## Usage

### Getting Started
1. Open `index.html` in a modern web browser
2. Configure your GUI settings in the settings panel
3. Use the color codes panel to copy color codes and toggle export format
4. Click on any slot in the grid to add/edit items
5. Use the export button to download your configuration as a YAML file

### Editing Items
1. **Click a slot** to open the item editor
2. **Select material** using the search field or dropdown
3. **Customize display** with name and lore
4. **Add commands** that execute when the item is clicked
5. **Save** to apply changes or **Clear** to remove the item

### Using Color Codes
The application supports both Legacy and MiniMessage formatting:

**Legacy Format (`&` codes):**
- `&0` through `&f` - Colors (black to white)
- `&l` - Bold, `&o` - Italic, `&n` - Underline
- `&m` - Strikethrough, `&k` - Obfuscated, `&r` - Reset

**MiniMessage Format:**
- `<black>`, `<dark_blue>`, `<dark_green>`, etc.
- `<bold>`, `<italic>`, `<underlined>`
- `<strikethrough>`, `<obfuscated>`, `<reset>`

Use the color codes panel to easily copy the desired format.

### Command Placeholders
- Use `%player%` in commands for the player's username
- Use PlaceholderAPI placeholders for dynamic content
- Commands are executed without the leading slash

### Export Formats
Toggle between Legacy and MiniMessage export formats using the switch in the color codes panel. The exported YAML follows this structure:

**Legacy Format:**
```yaml
gui:
  title: "&6My GUI Title"
  size: 27
  command: "mygui"
  permission: "myplugin.gui.use"  # Optional

items:
  0:
    material: DIAMOND_SWORD
    amount: 1
    name: "&6Special Sword"
    lore:
      - "&7A powerful weapon"
      - "&a+10 Attack Damage"
    commands:
      - "give %player% diamond 1"
    close-gui: false
```

**MiniMessage Format:**
```yaml
gui:
  title: "<gold>My GUI Title"
  size: 27
  command: "mygui"
  permission: "myplugin.gui.use"  # Optional

items:
  0:
    material: DIAMOND_SWORD
    amount: 1
    name: "<gold>Special Sword"
    lore:
      - "<gray>A powerful weapon"
      - "<green>+10 Attack Damage"
    commands:
      - "give %player% diamond 1"
    close-gui: false
```

## Browser Compatibility

- ✅ Chrome/Chromium 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## File Structure

```
SkyeGUI/
├── index.html          # Main application interface
├── styles.css          # Dark theme and responsive styles
├── script.js           # Core application logic
├── minecraft-items.js  # Item database and utilities
└── README.md          # This documentation
```

## Development

### Adding New Items
To add new Minecraft items, edit `minecraft-items.js`:

```javascript
'NEW_ITEM': { 
    name: 'Display Name', 
    category: 'category' 
}
```

### Item Categories
Available categories:
- `blocks` - Building blocks and natural materials
- `tools` - Tools and weapons
- `combat` - Armor and combat items
- `food` - Food and consumables
- `redstone` - Redstone components
- `decoration` - Decorative items
- `items` - General items and materials

## Links

- **GitHub Repository**: [github.com/skyenetmc/skyegui](https://github.com/skyenetmc/skyegui)
- **Developer**: [nobleskye.dev](https://nobleskye.dev)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests on GitHub.
