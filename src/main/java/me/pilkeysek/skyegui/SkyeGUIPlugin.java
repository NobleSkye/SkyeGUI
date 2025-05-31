package me.pilkeysek.skyegui;

import me.pilkeysek.skyegui.commands.GamemodeMenuCommand;
import me.pilkeysek.skyegui.commands.SkyeGUITabCompleter;
import me.pilkeysek.skyegui.menu.CreativeMenu;
import me.pilkeysek.skyegui.modules.GUIModule;
import net.kyori.adventure.text.minimessage.MiniMessage;
import net.kyori.adventure.text.Component;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.entity.Player;
import org.bukkit.plugin.java.JavaPlugin;

import java.io.File;

public final class SkyeGUIPlugin extends JavaPlugin {
    public static FileConfiguration config;
    private YamlConfiguration messagesConfig;
    private MiniMessage miniMessage = MiniMessage.miniMessage();
    private GUIModule guiModule;

    private void loadMessages() {
        File messagesFile = new File(getDataFolder(), "messages.yml");
        if (!messagesFile.exists()) {
            saveResource("messages.yml", false);
        }
        messagesConfig = YamlConfiguration.loadConfiguration(messagesFile);
    }

    public String getRawMessage(String key) {
        return messagesConfig.getString(key, "");
    }

    public Component getMessage(String key) {
        String msg = getRawMessage(key);
        String prefix = messagesConfig.getString("prefix", "");
        msg = msg.replace("<prefix>", prefix);
        msg = msg.replace("<version>", this.getName());
        return miniMessage.deserialize(msg);
    }

    public GUIModule getGUIModule() {
        return guiModule;
    }

    @Override
    public void onLoad() {
        // Plugin loaded
    }

    @Override
    public void onEnable() {
        // Create config and data folders
        if (!getDataFolder().exists()) {
            getDataFolder().mkdirs();
        }

        // Save default config if it doesn't exist
        File configFile = new File(getDataFolder(), "config.yml");
        if (!configFile.exists()) {
            saveDefaultConfig();
        }
        config = this.getConfig();
        loadMessages();

        // Initialize GUI module
        guiModule = new GUIModule(this);

        // Register tab completer for skyegui command
        this.getCommand("skyegui").setTabCompleter(new SkyeGUITabCompleter(this));
        
        // Register GUI command executors - creative command has its own executor
        
        getServer().getPluginManager().registerEvents(new CreativeMenu(), this);

        // Register GUI listener
        if (config.getBoolean("enabled", true)) {
            getServer().getPluginManager().registerEvents(guiModule, this);
            guiModule.registerGUICommands();
            guiModule.registerManagementCommand();
            getLogger().info("SkyeGUI Plugin enabled with " + guiModule.getGUICount() + " GUIs");
        } else {
            getLogger().info("SkyeGUI Plugin is disabled in config");
        }
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        String commandName = command.getName().toLowerCase();
        
        if (commandName.equals("skyegui")) {
            if (args.length > 0) {
                if (args[0].equalsIgnoreCase("reload")) {
                    this.reloadConfig();
                    config = this.getConfig();
                    loadMessages();
                    if (guiModule != null) {
                        guiModule.reloadGUIs();
                    }
                    sender.sendMessage(miniMessage.deserialize(
                        config.getString("prefix", "<gold>[<aqua>SkyeGUI<gold>] ") + 
                        "<green>Plugin reloaded! (" + guiModule.getGUICount() + " GUIs loaded)"));
                    return true;
                } else if (args[0].equalsIgnoreCase("version")) {
                    sender.sendMessage(getMessage("version"));
                    return true;
                } else if (args[0].equalsIgnoreCase("list")) {
                    if (guiModule != null) {
                        sender.sendMessage(miniMessage.deserialize(
                            config.getString("prefix", "<gold>[<aqua>SkyeGUI<gold>] ") + 
                            "<green>Available GUIs: <white>" + String.join(", ", guiModule.getGUINames())));
                    } else {
                        sender.sendMessage(miniMessage.deserialize(
                            config.getString("prefix", "<gold>[<aqua>SkyeGUI<gold>] ") + 
                            "<red>GUI module not loaded!"));
                    }
                    return true;
                } else if (args[0].equalsIgnoreCase("open") && args.length > 1) {
                    if (!(sender instanceof org.bukkit.entity.Player)) {
                        sender.sendMessage(miniMessage.deserialize("<red>This command can only be used by players!"));
                        return true;
                    }
                    if (guiModule != null) {
                        String guiName = args[1];
                        if (guiModule.getGUINames().contains(guiName)) {
                            guiModule.openGUI((org.bukkit.entity.Player) sender, guiName);
                            sender.sendMessage(miniMessage.deserialize(
                                config.getString("prefix", "<gold>[<aqua>SkyeGUI<gold>] ") + 
                                "<green>Opened GUI: <white>" + guiName));
                        } else {
                            sender.sendMessage(miniMessage.deserialize(
                                config.getString("prefix", "<gold>[<aqua>SkyeGUI<gold>] ") + 
                                "<red>GUI not found: <white>" + guiName));
                        }
                    } else {
                        sender.sendMessage(miniMessage.deserialize(
                            config.getString("prefix", "<gold>[<aqua>SkyeGUI<gold>] ") + 
                            "<red>GUI module not loaded!"));
                    }
                    return true;
                }
            }
            // Show usage if no valid subcommand
            sender.sendMessage(miniMessage.deserialize(
                config.getString("prefix", "<gold>[<aqua>SkyeGUI<gold>] ") + 
                "<yellow>Usage: /skyegui <list|reload|version|open <gui_name>>"));
            return true;
        } else if (commandName.equals("examplegui")) {
            if (sender instanceof org.bukkit.entity.Player) {
                guiModule.openGUI((org.bukkit.entity.Player) sender, "example");
            } else {
                sender.sendMessage(miniMessage.deserialize("<red>This command can only be used by players!"));
            }
            return true;
        } else if (commandName.equals("stafftools")) {
            if (sender instanceof org.bukkit.entity.Player) {
                guiModule.openGUI((org.bukkit.entity.Player) sender, "staff_tools");
            } else {
                sender.sendMessage(miniMessage.deserialize("<red>This command can only be used by players!"));
            }
            return true;
        } else if (commandName.equals("gmmenu")) {
            if (sender instanceof org.bukkit.entity.Player) {
                guiModule.openGUI((org.bukkit.entity.Player) sender, "gamemode_menu");
            } else {
                sender.sendMessage(miniMessage.deserialize("<red>This command can only be used by players!"));
            }
            return true;
        }
        return false;
    }

    @Override
    public void onDisable() {
        getLogger().info("SkyeGUI Plugin disabled");
    }
}
