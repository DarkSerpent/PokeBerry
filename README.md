# PokéBerry

A module for the Pokémon Tabletop Reunited 1e system which allows you to have fully automated berry plants and apricorn trees that grow on a schedule using Simple Calendar Reborn or SmallTime.

## Features

- **65 Berry Varieties** across tiers T0–T5, each with unique growth times and item UUIDs tied to the PTU compendium
- **7 Apricorn Colors** (Black, Blue, Green, Pink, Red, White, Yellow) with their own growth cycle
- **Automatic Growth** — plants progress through stages over time using Simple Calendar Reborn or SmallTime
- **Growth Mulch** — optional checkbox when planting that reduces growth time by 25%
- **Soil Quality** — Normal, Good (+1 yield), or Great (+2 yield) affects harvest quantity
- **Movement Blocking** — berry plants and apricorn trees act as walls, preventing tokens from walking through them
- **Foreground Overlays** — plants render above tokens for visual depth
- **GM Tile Config Tab** — change berry type, growth stage, mulch, soil quality, or elapsed time on existing plants
- **Orphaned Tile Cleanup** — tool to remove broken foreground/background tile pairs

<video src="BerryModule1.mp4" controls></video>
<video src="BerryModule2.mp4" controls></video>

## How to Use

### Planting
1. Open the **Tiles** tool palette in the left sidebar
2. Click the **Place Berry Plant** button (seedling icon)
3. Double-Click on the canvas where you want to place the plant
4. Select the berry type from the dropdown
5. Optionally enable Growth Mulch and select Soil Quality

### Harvesting
1. Move a token you control next to the bottom of a berry plant or apricorn tree
2. Press **Enter** to attempt harvesting
3. If the plant is ready, berries/apricorns are added to your actor's inventory and the plant resets to an earlier stage. If not ready, a time-remaining whisper is sent to you and the GM

### Managing Existing Plants
1. Right-click any berry/apricorn tile and open **Tile Configuration**
2. Navigate to the **Berry** tab
3. Adjust berry type, stage, mulch, soil quality, or elapsed time

## Supported Berries

| Tier | Growth Time | Yield Range | Berries |
|------|-------------|-------------|---------|
| T0 | 3 hours | 1 | Bluk, Pinap, Razz, Wepear |
| T1 | 6 hours | 0–2 | Aspear, Cheri, Chesto, Nanab, Oran, Pecha, Persim, Rawst |
| T2 | 8 hours | 0–2 | Aguav, Apicot, Belue, Cornn, Durin, Enigma, Figy, Ganlon, Iapapa, Jaboca, Liechi, Lum, Mago, Magost, Micle, Nomel, Pamtre, Petaya, Rabuta, Rowap, Salac, Sitrus, Spelon, Starf, Watmel, Wiki |
| T3 | 12 hours | 0–2 | Custap, Grepa, Hondew, Kelpsy, Leppa, Maranga, Occa, Pomeg, Qualot, Roseli, Tamato |
| T4 | 15 hours | 0–2 | Babiri, Charti, Chilan, Chople, Coba, Colbur, Haban, Kasib, Kebia, Passho, Payapa, Rindo, Shuca, Tanga, Wacan, Yache |
| T5 | 18 hours | 0–2 | Kee, Lansat |

> **Apricorns** have a fixed 24-hour growth cycle with stages: Planted → Sprouted → Growing → Ready. Yield is 0–1 per harvest.

## Dependencies

| Module | Required |
|--------|----------|
| [PTR Dev System](https://github.com/righthandofvecna/fvtt-ptr) | Yes |
| [socketlib](https://foundryvtt.com/packages/socketlib) | Yes |
| [libWrapper](https://foundryvtt.com/packages/lib-wrapper) | Yes |
| [Simple Calendar Reborn](https://foundryvtt.com/packages/foundryvtt-simple-calendar-reborn) | One of |
| [SmallTime](https://foundryvtt.com/packages/smalltime) | One of |

## Limitations

- Does not currently support Herbs
- Requires a GM to be connected for non-GM players to harvest plants

## Credits

- **Module Author:** Amarulence
- **System:** Pokémon Tabletop Reunited (PTU)
- **Foundry VTT Compatibility:** V13
