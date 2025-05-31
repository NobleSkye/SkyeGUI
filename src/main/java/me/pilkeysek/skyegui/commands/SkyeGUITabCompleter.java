package me.pilkeysek.skyegui.commands;

import me.pilkeysek.skyegui.SkyeGUIPlugin;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.command.TabCompleter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SkyeGUITabCompleter implements TabCompleter {
    private final SkyeGUIPlugin plugin;

    public SkyeGUITabCompleter(SkyeGUIPlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    public List<String> onTabComplete(CommandSender sender, Command command, String alias, String[] args) {
        List<String> completions = new ArrayList<>();

        if (command.getName().equalsIgnoreCase("skyegui")) {
            if (args.length == 1) {
                // First argument - subcommands
                List<String> subcommands = Arrays.asList("list", "reload", "version", "open");
                String input = args[0].toLowerCase();
                
                for (String subcommand : subcommands) {
                    if (subcommand.startsWith(input)) {
                        completions.add(subcommand);
                    }
                }
            } else if (args.length == 2 && args[0].equalsIgnoreCase("open")) {
                // Second argument for "open" - GUI names
                if (plugin.getGUIModule() != null) {
                    List<String> guiNames = plugin.getGUIModule().getGUINames();
                    String input = args[1].toLowerCase();
                    
                    for (String guiName : guiNames) {
                        if (guiName.toLowerCase().startsWith(input)) {
                            completions.add(guiName);
                        }
                    }
                }
            }
        }

        return completions;
    }
}
