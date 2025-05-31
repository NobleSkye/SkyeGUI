# SkyeGUI Plugin - Standalone GUI System

## Overview

This is a standalone version of the GUI system that was originally part of the SkyeNetP plugin. The code has been extracted and adapted into its own independent plugin for better modularity and reusability.

## What Was Moved

### Core Files
- **GUIModule.java** - Main GUI system logic (adapted for standalone use)
- **CreativeMenu.java** - Simple gamemode switching GUI
- **GamemodeMenuCommand.java** - Command handler for creative menu
- **SkyeGUIPlugin.java** - Main plugin class (new, adapted from SkyeNetP)

### Configuration Files
- **guis.yml** - GUI definitions and configurations (renamed from modules-guis.yml)
- **config.yml** - Plugin configuration
- **messages.yml** - Internationalization messages
- **plugin.yml** - Plugin metadata

### Build Files
- **build.gradle.kts** - Gradle build configuration
- **settings.gradle.kts** - Gradle project settings
- **gradle.properties** - Gradle properties
- **gradlew** / **gradlew.bat** - Gradle wrapper scripts

## Key Changes Made

### Package Structure
- Changed from `me.pilkeysek.skyeNetP.*` to `me.pilkeysek.skyegui.*`
- Organized into proper packages: `modules`, `menu`, `commands`

### Permissions
- Updated all permissions from `skyenetp.*` to `skyegui.*`
- Maintained the same permission structure for compatibility

### Configuration
- Simplified config structure (removed nested modules section)
- Renamed `modules-guis.yml` to `guis.yml` for clarity
- Updated prefix from "SkyeGUIs" to "SkyeGUI"

### Commands
- Maintained all original GUI commands (`/examplegui`, `/stafftools`, `/gmmenu`)
- Updated management commands to use `skyegui` namespace
- Added dedicated `/skyegui` plugin management command

## Features Included

✅ **Complete GUI System**
- Custom inventory-based interfaces
- Item click handlers with command execution
- MiniMessage formatting support
- Player placeholder support (%player%)
- Console command execution option

✅ **Example GUIs**
- Example GUI - Basic demonstration
- Staff Tools - Admin utilities
- Gamemode Menu - Quick gamemode switching

✅ **Management System**
- Dynamic GUI loading and reloading
- Command registration per GUI
- Permission-based access control
- Hot-reload without server restart

✅ **Creative Menu**
- Simple gamemode switching interface
- Toggle between Creative and Adventure modes
- Visual feedback with colored wool

## Dependencies

- **CommandAPI** - Required for advanced command registration
- **Paper/Spigot 1.21+** - Server platform
- **Java 21** - Runtime requirement

## Build Status

✅ **Successfully Built** - The plugin compiles without errors
- 3 actionable tasks completed
- Only deprecated API warnings (safe to ignore)
- JAR file generated successfully

## Usage

1. Place the built JAR in your server's `plugins` folder
2. Ensure CommandAPI is installed
3. Restart the server
4. Configure GUIs in `plugins/SkyeGUI/guis.yml`
5. Use `/skyeguis list` to see available GUIs
6. Grant appropriate permissions to players

## File Structure

```
SkyeGUIPlugin/
├── src/main/
│   ├── java/me/pilkeysek/skyegui/
│   │   ├── SkyeGUIPlugin.java
│   │   ├── commands/GamemodeMenuCommand.java
│   │   ├── menu/CreativeMenu.java
│   │   └── modules/GUIModule.java
│   └── resources/
│       ├── plugin.yml
│       ├── config.yml
│       ├── messages.yml
│       └── guis.yml
├── build.gradle.kts
├── settings.gradle.kts
├── gradle.properties
└── README.md
```

## Migration from Original

If migrating from the original SkyeNetP plugin:
1. Install this standalone plugin
2. Copy your `modules-guis.yml` to `guis.yml` in the new plugin folder
3. Update any permission references from `skyenetp.gui.*` to `skyegui.gui.*`
4. Remove GUI-related configuration from SkyeNetP config

This standalone plugin provides all the GUI functionality that was previously embedded in SkyeNetP, making it reusable across different server setups.
