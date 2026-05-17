# PokéBerry

A module for the Pokémon Tabletop Reunited 1e system which allows you to have fully automated berry plants and apricorn trees that grow on a schedule using Simple Calendar Reborn or SmallTime.

## Import Link
```
https://raw.githubusercontent.com/DarkSerpent/PokeBerry/refs/heads/main/module.json
```

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

<video src="https://private-user-images.githubusercontent.com/12854153/593612726-f17dfe0d-c795-4aef-893d-f9369056ee53.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzg5NzIyNTgsIm5iZiI6MTc3ODk3MTk1OCwicGF0aCI6Ii8xMjg1NDE1My81OTM2MTI3MjYtZjE3ZGZlMGQtYzc5NS00YWVmLTg5M2QtZjkzNjkwNTZlZTUzLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTE2VDIyNTIzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJhMzAyMmNjZWQ3ZTY1OWQ4NjlkMzVjMjk5OTE4NjE2NDdmZGJmNGVjNTY4MDQxMGFlMzI2NDY5YTIyMGVlZDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT12aWRlbyUyRm1wNCJ9.WsXsotfUV1VCKtLceZemlHjCoQ01aosRwrmUpluyrGg" data-canonical-src="https://private-user-images.githubusercontent.com/12854153/593612726-f17dfe0d-c795-4aef-893d-f9369056ee53.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzg5NzIyNTgsIm5iZiI6MTc3ODk3MTk1OCwicGF0aCI6Ii8xMjg1NDE1My81OTM2MTI3MjYtZjE3ZGZlMGQtYzc5NS00YWVmLTg5M2QtZjkzNjkwNTZlZTUzLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTE2VDIyNTIzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJhMzAyMmNjZWQ3ZTY1OWQ4NjlkMzVjMjk5OTE4NjE2NDdmZGJmNGVjNTY4MDQxMGFlMzI2NDY5YTIyMGVlZDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT12aWRlbyUyRm1wNCJ9.WsXsotfUV1VCKtLceZemlHjCoQ01aosRwrmUpluyrGg" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit" style="max-height:300px; min-height: 200px"></video>

<video src="https://private-user-images.githubusercontent.com/12854153/593612727-1ccd572e-c624-4e71-8ddc-cf6c34c27182.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzg5NzIyNTgsIm5iZiI6MTc3ODk3MTk1OCwicGF0aCI6Ii8xMjg1NDE1My81OTM2MTI3MjctMWNjZDU3MmUtYzYyNC00ZTcxLThkZGMtY2Y2YzM0YzI3MTgyLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTE2VDIyNTIzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZmNDIzZjVmODA0ZThmNTY3MmRmZWEyNmY2ODE0NjU4NTNjZjM0NDNiMGNkYjE3YjJkY2JhZTA4ZWJlNWY2N2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT12aWRlbyUyRm1wNCJ9.twjWHVpoEL-fh8J5FjvfCBz-C1vSBmlQpQ8-N8HNDos" data-canonical-src="https://private-user-images.githubusercontent.com/12854153/593612727-1ccd572e-c624-4e71-8ddc-cf6c34c27182.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzg5NzIyNTgsIm5iZiI6MTc3ODk3MTk1OCwicGF0aCI6Ii8xMjg1NDE1My81OTM2MTI3MjctMWNjZDU3MmUtYzYyNC00ZTcxLThkZGMtY2Y2YzM0YzI3MTgyLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTE2VDIyNTIzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZmNDIzZjVmODA0ZThmNTY3MmRmZWEyNmY2ODE0NjU4NTNjZjM0NDNiMGNkYjE3YjJkY2JhZTA4ZWJlNWY2N2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT12aWRlbyUyRm1wNCJ9.twjWHVpoEL-fh8J5FjvfCBz-C1vSBmlQpQ8-N8HNDos" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit" style="max-height:300px; min-height: 200px"></video>

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
> Note that **Growth Time** is *per stage*. To calculate how long it'll take to progress to a specific stage, multiply the number by the amount of stages that come before (e.g. Taller to Ready is ×2).

| Tier | Growth Time | Yield Range | Berries |
|------|-------------|-------------|---------|
| T0 | 3 hours | 1 | Bluk, Pinap, Razz, Wepear |
| T1 | 6 hours | 1d3-1 | Aspear, Cheri, Chesto, Nanab, Oran, Pecha, Persim, Rawst |
| T2 | 8 hours | 1d3-2 | Aguav, Apicot, Belue, Cornn, Durin, Enigma, Figy, Ganlon, Iapapa, Jaboca, Liechi, Lum, Mago, Magost, Micle, Nomel, Pamtre, Petaya, Rabuta, Rowap, Salac, Sitrus, Spelon, Starf, Watmel, Wiki |
| T3 | 12 hours | 1d4-3 | Custap, Grepa, Hondew, Kelpsy, Leppa, Maranga, Occa, Pomeg, Qualot, Roseli, Tamato |
| T4 | 15 hours | 1d4-3 | Babiri, Charti, Chilan, Chople, Coba, Colbur, Haban, Kasib, Kebia, Passho, Payapa, Rindo, Shuca, Tanga, Wacan, Yache |
| T5 | 18 hours | 1d4-3 | Kee, Lansat |

> **Apricorns** have a fixed 24-hour growth cycle with stages: Planted → Sprouted → Growing → Ready. Yield is 1d2-2 per harvest.

## Dependencies

| Module | Required |
|--------|----------|
| [PTR Dev System](https://github.com/righthandofvecna/fvtt-ptr) | Yes |
| [socketlib](https://foundryvtt.com/packages/socketlib) | Yes |
| [libWrapper](https://foundryvtt.com/packages/lib-wrapper) | Yes |
| [Simple Calendar Reborn](https://foundryvtt.com/packages/foundryvtt-simple-calendar-reborn) | One of |
| [SmallTime](https://foundryvtt.com/packages/smalltime) | One of |

> While you only need one of the modules between **Simple Calendar Reborn** or **SmallTime** for **PokéBerry** to work, both modules have integration with each other, so you can install both!

## Limitations

- Does not currently support Herbs
- Requires a GM to be connected for non-GM players to harvest plants

## Credits

- **Module Author:** Amarulence
- **System:** Pokémon Tabletop Reunited (PTU)
- **Foundry VTT Compatibility:** V13
