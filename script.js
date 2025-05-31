// Global variables
let currentGUIData = {
    title: "&6My GUI",
    size: 27,
    command: "mygui",
    permission: "",
    items: {}
};

let currentEditingSlot = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    generateGUIGrid();
    populateMaterialPicker();
    loadDefaultSettings();
});

// Event listeners
function initializeEventListeners() {
    // GUI settings
    document.getElementById('gui-title').addEventListener('input', updateGUITitle);
    document.getElementById('gui-size').addEventListener('change', updateGUISize);
    document.getElementById('gui-command').addEventListener('input', updateGUICommand);
    document.getElementById('gui-permission').addEventListener('input', updateGUIPermission);

    // Export/Import
    document.getElementById('export-btn').addEventListener('click', exportYAML);
    document.getElementById('import-btn').addEventListener('click', () => {
        document.getElementById('import-file').click();
    });
    document.getElementById('import-file').addEventListener('change', importYAML);

    // Color codes panel
    document.getElementById('toggle-format-btn').addEventListener('click', toggleFormatDisplay);
    
    // Color code click handlers
    document.querySelectorAll('.color-item').forEach(item => {
        item.addEventListener('click', () => copyColorCode(item));
    });

    // Modal controls
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeModals);
    });

    // Item editor tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', switchTab);
    });

    // Item editor controls
    document.getElementById('save-item-btn').addEventListener('click', saveItem);
    document.getElementById('clear-item-btn').addEventListener('click', clearItem);
    document.getElementById('material-picker-btn').addEventListener('click', openMaterialPicker);

    // Material search and suggestions
    document.getElementById('item-material').addEventListener('input', handleMaterialInput);
    document.getElementById('material-search').addEventListener('input', filterMaterials);

    // Material categories
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', filterByCategory);
    });

    // Preview updates
    document.getElementById('item-name').addEventListener('input', updateItemPreview);
    document.getElementById('item-lore').addEventListener('input', updateItemPreview);
    document.getElementById('item-amount').addEventListener('input', updateItemPreview);

    // PlaceholderAPI items
    document.querySelectorAll('.placeholder-item').forEach(item => {
        item.addEventListener('click', insertPlaceholder);
    });

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                closeModals();
            }
        });
    });
}

// GUI Grid functions
function generateGUIGrid() {
    const grid = document.getElementById('gui-grid');
    const size = currentGUIData.size;
    
    grid.innerHTML = '';
    grid.style.gridTemplateRows = `repeat(${size / 9}, 1fr)`;

    for (let i = 0; i < size; i++) {
        const slot = document.createElement('div');
        slot.className = 'gui-slot';
        slot.dataset.slot = i;
        
        // Make sure the click event is properly attached
        slot.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openItemEditor(i);
        });
        
        // Add visual feedback and ensure clickability
        slot.style.userSelect = 'none';
        slot.style.pointerEvents = 'auto';
        slot.style.cursor = 'pointer';
        slot.style.zIndex = '1';
        
        if (currentGUIData.items[i]) {
            renderSlotItem(slot, currentGUIData.items[i]);
        }
        
        grid.appendChild(slot);
    }
}

function renderSlotItem(slot, itemData) {
    slot.classList.add('occupied');
    const materialName = itemData.material;
    const firstLetter = materialName.split('_')[0].charAt(0).toUpperCase();
    
    slot.innerHTML = `
        <div class="slot-item">
            <div class="item-icon">
                <div class="material-text-fallback">${firstLetter}</div>
            </div>
            ${itemData.amount > 1 ? `<div class="item-amount">${itemData.amount}</div>` : ''}
        </div>
    `;
}

// Settings functions
function updateGUITitle() {
    currentGUIData.title = document.getElementById('gui-title').value || "&6My GUI";
}

function updateGUISize() {
    const newSize = parseInt(document.getElementById('gui-size').value);
    
    // Clear items that would be outside the new size
    Object.keys(currentGUIData.items).forEach(slot => {
        if (parseInt(slot) >= newSize) {
            delete currentGUIData.items[slot];
        }
    });
    
    currentGUIData.size = newSize;
    generateGUIGrid();
}

function updateGUICommand() {
    currentGUIData.command = document.getElementById('gui-command').value || "mygui";
}

function updateGUIPermission() {
    currentGUIData.permission = document.getElementById('gui-permission').value;
}

function loadDefaultSettings() {
    document.getElementById('gui-title').value = currentGUIData.title;
    document.getElementById('gui-size').value = currentGUIData.size;
    document.getElementById('gui-command').value = currentGUIData.command;
    document.getElementById('gui-permission').value = currentGUIData.permission;
}

// Item Editor functions
function openItemEditor(slot) {
    console.log('openItemEditor called for slot:', slot); // Debug log
    currentEditingSlot = slot;
    const modal = document.getElementById('item-editor-modal');
    
    if (!modal) {
        console.error('Modal element not found!');
        return;
    }
    
    // Load existing item data if present
    const itemData = currentGUIData.items[slot] || {
        material: 'STONE',
        amount: 1,
        name: '',
        lore: [],
        commands: [],
        closeGui: false
    };

    // Populate form fields
    document.getElementById('item-material').value = itemData.material;
    document.getElementById('item-amount').value = itemData.amount;
    document.getElementById('item-name').value = itemData.name;
    document.getElementById('item-lore').value = itemData.lore.join('\n');
    document.getElementById('click-commands').value = itemData.commands.join('\n');
    document.getElementById('close-gui').checked = itemData.closeGui;

    updateItemPreview();
    modal.style.display = 'block';
    console.log('Modal display set to block'); // Debug log
}

function saveItem() {
    if (currentEditingSlot === null) return;

    const material = document.getElementById('item-material').value || 'STONE';
    const amount = parseInt(document.getElementById('item-amount').value) || 1;
    const name = document.getElementById('item-name').value;
    const lore = document.getElementById('item-lore').value.split('\n').filter(line => line.trim());
    const commands = document.getElementById('click-commands').value.split('\n').filter(line => line.trim());
    const closeGui = document.getElementById('close-gui').checked;

    currentGUIData.items[currentEditingSlot] = {
        material,
        amount,
        name,
        lore,
        commands,
        closeGui
    };

    // Update the visual slot
    const slot = document.querySelector(`[data-slot="${currentEditingSlot}"]`);
    renderSlotItem(slot, currentGUIData.items[currentEditingSlot]);

    closeModals();
}

function clearItem() {
    if (currentEditingSlot === null) return;

    delete currentGUIData.items[currentEditingSlot];
    
    const slot = document.querySelector(`[data-slot="${currentEditingSlot}"]`);
    slot.classList.remove('occupied');
    slot.innerHTML = '';

    closeModals();
}

function updateItemPreview() {
    const material = document.getElementById('item-material').value || 'STONE';
    const amount = parseInt(document.getElementById('item-amount').value) || 1;
    const name = document.getElementById('item-name').value;
    const lore = document.getElementById('item-lore').value.split('\n').filter(line => line.trim());

    const itemData = getItemData(material);
    
    // Update icon with actual image
    const iconContainer = document.getElementById('item-icon-img').parentNode;
    const iconImg = document.createElement('img');
    iconImg.id = 'item-icon-img';
    iconImg.src = itemData.icon;
    iconImg.alt = material;
    iconImg.onerror = function() {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'material-text-fallback';
        iconDiv.textContent = material.split('_')[0].charAt(0).toUpperCase();
        this.parentNode.replaceChild(iconDiv, this);
    };
    iconContainer.innerHTML = '';
    iconContainer.appendChild(iconImg);

    // Update name
    const namePreview = document.getElementById('item-name-preview');
    namePreview.textContent = name || itemData.name;
    namePreview.style.color = name ? parseMinimessageColor(name) : '#e0e0e0';

    // Update lore
    const lorePreview = document.getElementById('item-lore-preview');
    if (lore.length > 0) {
        lorePreview.innerHTML = lore.map(line => `<div style="color: ${parseMinimessageColor(line)}">${stripMinimessageTags(line)}</div>`).join('');
    } else {
        lorePreview.innerHTML = '';
    }
}

// Material picker functions
function openMaterialPicker() {
    const modal = document.getElementById('material-picker-modal');
    modal.style.display = 'block';
    filterByCategory({ target: { dataset: { category: 'all' } } });
}

function populateMaterialPicker() {
    // Categories are already set up in HTML
    filterByCategory({ target: { dataset: { category: 'all' } } });
}

function filterByCategory(event) {
    const category = event.target.dataset.category;
    const items = getItemsByCategory(category);
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    displayMaterials(items);
}

function filterMaterials() {
    const query = document.getElementById('material-search').value;
    const items = query ? searchItems(query) : getItemsByCategory('all');
    displayMaterials(items);
}

function displayMaterials(items) {
    const grid = document.getElementById('material-grid');
    grid.innerHTML = '';

    items.forEach(material => {
        const itemData = getItemData(material);
        const item = document.createElement('div');
        item.className = 'material-item';
        
        // Use actual image icon with text fallback
        const iconImg = document.createElement('img');
        iconImg.src = itemData.icon;
        iconImg.alt = material;
        iconImg.onerror = function() {
            const iconDiv = document.createElement('div');
            iconDiv.className = 'material-text-fallback';
            iconDiv.textContent = material.split('_')[0].charAt(0).toUpperCase();
            this.parentNode.replaceChild(iconDiv, this);
        };
        
        const span = document.createElement('span');
        span.textContent = itemData.name;
        
        item.appendChild(iconImg);
        item.appendChild(span);
        item.addEventListener('click', () => selectMaterial(material));
        grid.appendChild(item);
    });
}

function selectMaterial(material) {
    document.getElementById('item-material').value = material;
    updateItemPreview();
    closeModals();
}

function handleMaterialInput() {
    const input = document.getElementById('item-material');
    const query = input.value;
    const suggestions = document.getElementById('material-suggestions');

    if (query.length < 1) {
        suggestions.style.display = 'none';
        return;
    }

    const matches = searchItems(query).slice(0, 5);
    
    if (matches.length > 0) {
        suggestions.innerHTML = matches.map(material => {
            const itemData = getItemData(material);
            return `
                <div class="suggestion-item" onclick="selectSuggestion('${material}')">
                    <img src="${itemData.icon}" alt="${material}" onerror="this.src='https://minecraft.wiki/images/c/ca/Barrier_%28held%29_JE2_BE2.png'">
                    <span>${itemData.name} (${material})</span>
                </div>
            `;
        }).join('');
        suggestions.style.display = 'block';
    } else {
        suggestions.style.display = 'none';
    }

    updateItemPreview();
}

function selectSuggestion(material) {
    document.getElementById('item-material').value = material;
    document.getElementById('material-suggestions').style.display = 'none';
    updateItemPreview();
}

// Tab functions
function switchTab(event) {
    const tabName = event.target.dataset.tab;
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// PlaceholderAPI functions
function insertPlaceholder(event) {
    const placeholder = event.currentTarget.dataset.placeholder;
    const activeElement = document.activeElement;
    
    // Insert placeholder into the active text field
    if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        const start = activeElement.selectionStart;
        const end = activeElement.selectionEnd;
        const value = activeElement.value;
        
        activeElement.value = value.substring(0, start) + placeholder + value.substring(end);
        activeElement.setSelectionRange(start + placeholder.length, start + placeholder.length);
        activeElement.focus();
        
        // Trigger preview update if it's the item editor
        if (activeElement.id === 'item-name' || activeElement.id === 'item-lore') {
            updateItemPreview();
        }
    }
}

// Utility functions
function closeModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    currentEditingSlot = null;
}

function parseMinimessageColor(text) {
    // Handle MiniMessage format
    if (text.includes('<red>') || text.includes('<dark_red>')) return '#ff5555';
    if (text.includes('<gold>') || text.includes('<yellow>')) return '#ffaa00';
    if (text.includes('<green>') || text.includes('<dark_green>')) return '#55ff55';
    if (text.includes('<aqua>') || text.includes('<blue>') || text.includes('<dark_blue>')) return '#55ffff';
    if (text.includes('<light_purple>') || text.includes('<dark_purple>')) return '#ff55ff';
    if (text.includes('<gray>') || text.includes('<dark_gray>')) return '#aaaaaa';
    if (text.includes('<white>') || text.includes('<black>')) return '#ffffff';
    
    // Handle legacy format
    if (text.includes('&c') || text.includes('&4')) return '#ff5555';
    if (text.includes('&6') || text.includes('&e')) return '#ffaa00';
    if (text.includes('&a') || text.includes('&2')) return '#55ff55';
    if (text.includes('&b') || text.includes('&3')) return '#55ffff';
    if (text.includes('&d') || text.includes('&5')) return '#ff55ff';
    if (text.includes('&9') || text.includes('&1')) return '#5555ff';
    if (text.includes('&7') || text.includes('&8')) return '#aaaaaa';
    if (text.includes('&f') || text.includes('&0')) return '#ffffff';
    return '#e0e0e0';
}

function stripMinimessageTags(text) {
    return text.replace(/&[0-9a-fklmnor]/g, '').replace(/<[^>]*>/g, '');
}

// Utility conversion functions
function legacyToMiniMessage(text) {
    if (!text) return text;
    
    // Color code mappings
    const colorMap = {
        '&0': '<black>',
        '&1': '<dark_blue>',
        '&2': '<dark_green>',
        '&3': '<dark_aqua>',
        '&4': '<dark_red>',
        '&5': '<dark_purple>',
        '&6': '<gold>',
        '&7': '<gray>',
        '&8': '<dark_gray>',
        '&9': '<blue>',
        '&a': '<green>',
        '&b': '<aqua>',
        '&c': '<red>',
        '&d': '<light_purple>',
        '&e': '<yellow>',
        '&f': '<white>',
        '&l': '<bold>',
        '&o': '<italic>',
        '&n': '<underlined>',
        '&m': '<strikethrough>',
        '&k': '<obfuscated>',
        '&r': '<reset>'
    };
    
    let result = text;
    
    // Replace legacy codes with MiniMessage tags
    Object.keys(colorMap).forEach(legacy => {
        const regex = new RegExp(legacy.replace('&', '\\&'), 'gi');
        result = result.replace(regex, colorMap[legacy]);
    });
    
    return result;
}

function miniMessageToLegacy(text) {
    if (!text) return text;
    
    // Color code mappings (reverse)
    const colorMap = {
        '<black>': '&0',
        '<dark_blue>': '&1',
        '<dark_green>': '&2',
        '<dark_aqua>': '&3',
        '<dark_red>': '&4',
        '<dark_purple>': '&5',
        '<gold>': '&6',
        '<gray>': '&7',
        '<dark_gray>': '&8',
        '<blue>': '&9',
        '<green>': '&a',
        '<aqua>': '&b',
        '<red>': '&c',
        '<light_purple>': '&d',
        '<yellow>': '&e',
        '<white>': '&f',
        '<bold>': '&l',
        '<italic>': '&o',
        '<underlined>': '&n',
        '<strikethrough>': '&m',
        '<obfuscated>': '&k',
        '<reset>': '&r'
    };
    
    let result = text;
    
    // Replace MiniMessage tags with legacy codes
    Object.keys(colorMap).forEach(mini => {
        const regex = new RegExp(mini.replace(/[<>]/g, '\\$&'), 'gi');
        result = result.replace(regex, colorMap[mini]);
    });
    
    return result;
}

// Export/Import functions
function exportYAML() {
    const exportAsMiniMessage = document.getElementById('export-minimessage-toggle').checked;
    
    // Create a copy of current data for conversion
    let exportData = JSON.parse(JSON.stringify(currentGUIData));
    
    if (exportAsMiniMessage) {
        // Convert all text to MiniMessage format
        exportData.title = legacyToMiniMessage(exportData.title);
        
        Object.keys(exportData.items).forEach(slot => {
            const item = exportData.items[slot];
            if (item.name) {
                item.name = legacyToMiniMessage(item.name);
            }
            if (item.lore && item.lore.length > 0) {
                item.lore = item.lore.map(line => legacyToMiniMessage(line));
            }
        });
    } else {
        // Convert all text to Legacy format
        exportData.title = miniMessageToLegacy(exportData.title);
        
        Object.keys(exportData.items).forEach(slot => {
            const item = exportData.items[slot];
            if (item.name) {
                item.name = miniMessageToLegacy(item.name);
            }
            if (item.lore && item.lore.length > 0) {
                item.lore = item.lore.map(line => miniMessageToLegacy(line));
            }
        });
    }
    
    const yaml = generateYAMLFromData(exportData);
    const blob = new Blob([yaml], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${exportData.command}.yml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function generateYAMLFromData(data) {
    const formatType = document.getElementById('export-minimessage-toggle').checked ? 'MiniMessage' : 'Legacy';
    
    let yaml = `# GUI Configuration for ${data.command}
# Generated by SkyeGUI Editor
# Format: ${formatType}

gui:
  title: "${data.title}"
  size: ${data.size}
  command: "${data.command}"`;

    if (data.permission) {
        yaml += `\n  permission: "${data.permission}"`;
    }

    yaml += `\n\nitems:`;

    if (Object.keys(data.items).length === 0) {
        yaml += ` {}`;
    } else {
        Object.keys(data.items).sort((a, b) => parseInt(a) - parseInt(b)).forEach(slot => {
            const item = data.items[slot];
            yaml += `\n  ${slot}:`;
            yaml += `\n    material: ${item.material}`;
            
            if (item.amount > 1) {
                yaml += `\n    amount: ${item.amount}`;
            }
            
            if (item.name) {
                yaml += `\n    name: "${item.name}"`;
            }
            
            if (item.lore.length > 0) {
                yaml += `\n    lore:`;
                item.lore.forEach(line => {
                    yaml += `\n      - "${line}"`;
                });
            }
            
            if (item.commands.length > 0) {
                yaml += `\n    commands:`;
                item.commands.forEach(command => {
                    yaml += `\n      - "${command}"`;
                });
            }
            
            if (item.closeGui) {
                yaml += `\n    close-gui: true`;
            }
        });
    }

    return yaml;
}

function importYAML(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            parseYAML(e.target.result);
            generateGUIGrid();
            loadDefaultSettings();
            alert('GUI imported successfully!');
        } catch (error) {
            alert('Error importing YAML: ' + error.message);
        }
    };
    reader.readAsText(file);
}

function parseYAML(yamlText) {
    // Simple YAML parser for this specific format
    const lines = yamlText.split('\n');
    let currentSection = null;
    let currentItem = null;
    let currentArray = null;
    
    currentGUIData = {
        title: "&6My GUI",
        size: 27,
        command: "mygui",
        permission: "",
        items: {}
    };

    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;

        if (trimmed === 'gui:') {
            currentSection = 'gui';
        } else if (trimmed === 'items:') {
            currentSection = 'items';
        } else if (currentSection === 'gui') {
            const match = trimmed.match(/^(\w+):\s*["']?([^"']+)["']?$/);
            if (match) {
                const [, key, value] = match;
                if (key === 'title') currentGUIData.title = value;
                else if (key === 'size') currentGUIData.size = parseInt(value);
                else if (key === 'command') currentGUIData.command = value;
                else if (key === 'permission') currentGUIData.permission = value;
            }
        } else if (currentSection === 'items') {
            if (trimmed.match(/^\d+:$/)) {
                currentItem = trimmed.replace(':', '');
                currentGUIData.items[currentItem] = {
                    material: 'STONE',
                    amount: 1,
                    name: '',
                    lore: [],
                    commands: [],
                    closeGui: false
                };
                currentArray = null;
            } else if (currentItem) {
                if (trimmed.startsWith('lore:')) {
                    currentArray = 'lore';
                } else if (trimmed.startsWith('commands:')) {
                    currentArray = 'commands';
                } else if (trimmed.startsWith('- ')) {
                    const value = trimmed.substring(2).replace(/^["']|["']$/g, '');
                    if (currentArray === 'lore') {
                        currentGUIData.items[currentItem].lore.push(value);
                    } else if (currentArray === 'commands') {
                        currentGUIData.items[currentItem].commands.push(value);
                    }
                } else {
                    const match = trimmed.match(/^(\w+(?:-\w+)?):\s*(.+)$/);
                    if (match) {
                        const [, key, value] = match;
                        const cleanValue = value.replace(/^["']|["']$/g, '');
                        
                        if (key === 'material') currentGUIData.items[currentItem].material = cleanValue;
                        else if (key === 'amount') currentGUIData.items[currentItem].amount = parseInt(cleanValue);
                        else if (key === 'name') currentGUIData.items[currentItem].name = cleanValue;
                        else if (key === 'close-gui') currentGUIData.items[currentItem].closeGui = cleanValue === 'true';
                        
                        currentArray = null;
                    }
                }
            }
        }
    });
}
