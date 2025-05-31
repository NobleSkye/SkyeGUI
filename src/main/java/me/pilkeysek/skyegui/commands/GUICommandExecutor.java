package me.pilkeysek.skyegui.commands;

import me.pilkeysek.skyegui.SkyeGUIPlugin;
import net.kyori.adventure.text.minimessage.MiniMessage;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

public class GUICommandExecutor implements CommandExecutor {
    private final SkyeGUIPlugin plugin;
    private final String guiName;
    private final MiniMessage miniMessage = MiniMessage.miniMessage();

    public GUICommandExecutor(SkyeGUIPlugin plugin, String guiName) {
        this.plugin = plugin;
        this.guiName = guiName;
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (!(sender instanceof Player)) {
            sender.sendMessage(miniMessage.deserialize("<red>This command can only be used by players!"));
            return true;
        }

        Player player = (Player) sender;
        plugin.getGUIModule().openGUI(player, guiName);
        return true;
    }
}
