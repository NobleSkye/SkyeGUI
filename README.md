# SkyeGUI Plugin

A standalone GUI plugin for creating custom inventory-based interfaces with configurable commands and permissions. This plugin provides a powerful and flexible GUI system similar to CommandPanels.

## Features

- **Custom GUI Creation**: Create unlimited custom GUIs with configurable titles, sizes, and items
- **Command Integration**: Execute commands when players click GUI items
- **Permission Control**: Set individual permissions for each GUI and command
- **Dynamic Loading**: Hot-reload GUI configurations without server restart
- **Item Customization**: Full control over item materials, names, lore, and enchantments
- **Player Placeholders**: Use `%player%` placeholder in commands
- **Console Commands**: Execute commands as console for admin functions
- **Creative Menu**: Quick gamemode switching interface

## Installation

1. Download the latest release of SkyeGUI Plugin
2. Place the JAR file in your server's `plugins` folder
3. Ensure you have the **CommandAPI** plugin installed (dependency)
4. Restart your server
5. Configure your GUIs in the `guis.yml` file

## Commands

### `/creative`
- Opens the gamemode menu for quick gamemode switching.
- Permission: `skyegui.creative`

### `/examplegui`
- Opens the example GUI with diamond and emerald buttons.
- Permission: `skyegui.gui.example`

### `/stafftools`
- Opens the staff tools GUI with admin utilities.
- Permission: `skyegui.gui.staff`

### `/gmmenu`
- Opens a gamemode selection GUI.
- Permission: `skyegui.gui.gamemode`

### `/skyeguis`
- Main GUI management command.
- Permission: `skyegui.admin`
- Subcommands:
  - `list` - List all available GUIs
  - `open <gui>` - Open a specific GUI by name
  - `reload` - Reload all GUI configurations

### `/skyegui`
- Plugin management command.
- Permission: `skyegui.admin`
- Subcommands:
  - `reload` - Reload the plugin configuration and GUIs
  - `version` - Show plugin version information

## Configuration

GUIs are configured in the `guis.yml` file. Each GUI supports the following options:

```yaml
gui_name:
  title: "<gold>GUI Title"           # GUI window title (supports MiniMessage)
  size: 27                           # Inventory size (9, 18, 27, 36, 45, 54)
  command: "customcommand"           # Command to open this GUI
  permission: "skyegui.gui.custom"   # Permission required to use the command
  items:
    slot_number:                     # Slot position (0-53)
      material: DIAMOND              # Item material
      name: "<aqua>Item Name"        # Item display name
      lore:                          # Item lore (list)
        - "<gray>Line 1"
        - "<yellow>Line 2"
      enchantments:                  # Optional enchantments
        sharpness: 5
        unbreaking: 3
      commands:                      # Commands to execute on click
        - "give %player% diamond 1"
        - "tell %player% You got a diamond!"
      console: false                 # Execute as console (true) or player (false)
      close: true                    # Close GUI after click (true/false)
```

## Example GUIs

The plugin comes with several example GUIs:

1. **Example GUI** (`/examplegui`): Basic demonstration with diamond and emerald buttons
2. **Staff Tools** (`/stafftools`): Admin utilities including teleport and kit commands
3. **Gamemode Menu** (`/gmmenu`): Quick gamemode switching interface

## Permissions

- `skyegui.admin` - Access to all admin commands
- `skyegui.creative` - Access to creative menu command
- `skyegui.gui.example` - Access to example GUI
- `skyegui.gui.staff` - Access to staff tools GUI
- `skyegui.gui.gamemode` - Access to gamemode menu GUI

## Dependencies

- **CommandAPI** - Required for command registration and management

## Support

For support, visit [SkyeNetwork](https://skyemc.net) or create an issue on our GitHub repository.

## License

This plugin is developed by the SkyeNetwork Team.
