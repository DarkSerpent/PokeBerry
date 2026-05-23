const MODULE_ID = "pokeberry";

const BERRY_DATA = {
  aguav: { tier: 2, imageSuffix: "_aguav", itemUuid: "Compendium.ptu.items.Item.XIUq1Al547PHDZXH" },
  apicot: { tier: 2, imageSuffix: "_apicot", itemUuid: "Compendium.ptu.items.Item.g7OvsSZcfwkbMiVY" },
  aspear: { tier: 1, imageSuffix: "_aspear", itemUuid: "Compendium.ptu.items.Item.1F4h8ATAl8MlaM7e" },
  babiri: { tier: 4, imageSuffix: "_babiri", itemUuid: "Compendium.ptu.items.Item.kdQKZJ0UWyT73mHR" },
  belue: { tier: 2, imageSuffix: "_belue", itemUuid: "Compendium.ptu.items.Item.34nn2TkdQjNbXL0U" },
  bluk: { tier: 0, imageSuffix: "_bluk", itemUuid: "Compendium.ptu.items.Item.LOHaoajMrgco1NjQ" },
  charti: { tier: 4, imageSuffix: "_charti", itemUuid: "Compendium.ptu.items.Item.pU0mQdHTnUAYgVNw" },
  cheri: { tier: 1, imageSuffix: "_cheri", itemUuid: "Compendium.ptu.items.Item.cv5eqwzldHxaSdUx" },
  chesto: { tier: 1, imageSuffix: "_chesto", itemUuid: "Compendium.ptu.items.Item.Ui1HOOBmxt6iCjqM" },
  chilan: { tier: 4, imageSuffix: "_chilan", itemUuid: "Compendium.ptu.items.Item.P1JwCLq7RN39KvIr" },
  chople: { tier: 4, imageSuffix: "_chople", itemUuid: "Compendium.ptu.items.Item.2Hz3FvCYLKM6GxqI" },
  coba: { tier: 4, imageSuffix: "_coba", itemUuid: "Compendium.ptu.items.Item.UkwrfJYxL3klZLA2" },
  colbur: { tier: 4, imageSuffix: "_colbur", itemUuid: "Compendium.ptu.items.Item.XpOAmnjq70PZgIKI" },
  cornn: { tier: 2, imageSuffix: "_cornn", itemUuid: "Compendium.ptu.items.Item.gdeshTlDpJXxuXOq" },
  custap: { tier: 3, imageSuffix: "_custap", itemUuid: "Compendium.ptu.items.Item.1RcHGmJQHWKigx54" },
  durin: { tier: 2, imageSuffix: "_durin", itemUuid: "Compendium.ptu.items.Item.Z8CeZSs15ub588jA" },
  enigma: { tier: 2, imageSuffix: "_enigma", itemUuid: "Compendium.ptu.items.Item.uahYsx6JSnsISmvH" },
  figy: { tier: 2, imageSuffix: "_figy", itemUuid: "Compendium.ptu.items.Item.KANaICzUllgcccn6" },
  ganlon: { tier: 2, imageSuffix: "_ganlon", itemUuid: "Compendium.ptu.items.Item.UQZg03UetHtq6tBK" },
  grepa: { tier: 3, imageSuffix: "_grepa", itemUuid: "Compendium.ptu.items.Item.5c1Ra5oqykO2dMb9" },
  haban: { tier: 4, imageSuffix: "_haban", itemUuid: "Compendium.ptu.items.Item.b0fjkhUpGjD3pjfN" },
  hondew: { tier: 3, imageSuffix: "_hondew", itemUuid: "Compendium.ptu.items.Item.gsti929NeOTl8LUN" },
  iapapa: { tier: 2, imageSuffix: "_iapapa", itemUuid: "Compendium.ptu.items.Item.qHAQPjlnHjtkJ28h" },
  jaboca: { tier: 2, imageSuffix: "_jaboca", itemUuid: "Compendium.ptu.items.Item.v48SW5lvvEUEIvIt" },
  kasib: { tier: 4, imageSuffix: "_kasib", itemUuid: "Compendium.ptu.items.Item.Zq6Rh3Tw1NCDXEFS" },
  kebia: { tier: 4, imageSuffix: "_kebia", itemUuid: "Compendium.ptu.items.Item.seMAAnnI4h7ssAjv" },
  kee: { tier: 5, imageSuffix: "_kee", itemUuid: "Compendium.ptu.items.Item.kdAhVEVIFWW0LAJi" },
  kelpsy: { tier: 3, imageSuffix: "_kelpsy", itemUuid: "Compendium.ptu.items.Item.0IBizkBY2Kyq5KkH" },
  lansat: { tier: 5, imageSuffix: "_lansat", itemUuid: "Compendium.ptu.items.Item.1DRUhFxU6Y72ODAA" },
  leppa: { tier: 3, imageSuffix: "_leppa", itemUuid: "Compendium.ptu.items.Item.wKKRq8CKmvmmIxJv" },
  liechi: { tier: 2, imageSuffix: "_liechi", itemUuid: "Compendium.ptu.items.Item.JsdmMnIq4DciokB6" },
  lum: { tier: 2, imageSuffix: "_lum", itemUuid: "Compendium.ptu.items.Item.HV1s0SlTRW15Czy4" },
  mago: { tier: 2, imageSuffix: "_mago", itemUuid: "Compendium.ptu.items.Item.QVycESa0ERv6vnVx" },
  magost: { tier: 2, imageSuffix: "_magost", itemUuid: "Compendium.ptu.items.Item.YvfMvlPLXjg1ObaG" },
  maranga: { tier: 3, imageSuffix: "_maranga", itemUuid: "Compendium.ptu.items.Item.gE1PMK51swmhZMuc" },
  micle: { tier: 2, imageSuffix: "_micle", itemUuid: "Compendium.ptu.items.Item.ooVt5GkL00bj2IKd" },
  nanab: { tier: 1, imageSuffix: "_nanab", itemUuid: "Compendium.ptu.items.Item.vlQ41G1No20eQlY9" },
  nomel: { tier: 2, imageSuffix: "_nomel", itemUuid: "Compendium.ptu.items.Item.WoqejsstCRWX2tdD" },
  occa: { tier: 3, imageSuffix: "_occa", itemUuid: "Compendium.ptu.items.Item.6YJtA57wmDEOVtC7" },
  oran: { tier: 1, imageSuffix: "_oran", itemUuid: "Compendium.ptu.items.Item.0txLVYw8LvBMSVdd" },
  pamtre: { tier: 2, imageSuffix: "_pamtre", itemUuid: "Compendium.ptu.items.Item.Pt8QZy6atB2PDZgK" },
  passho: { tier: 4, imageSuffix: "_passho", itemUuid: "Compendium.ptu.items.Item.urfkI8QlslEsvqrV" },
  payapa: { tier: 4, imageSuffix: "_payapa", itemUuid: "Compendium.ptu.items.Item.wz0rz7B6Qrd1xkhD" },
  pecha: { tier: 1, imageSuffix: "_pecha", itemUuid: "Compendium.ptu.items.Item.myUsKao9Dkcrkvky" },
  persim: { tier: 1, imageSuffix: "_persim", itemUuid: "Compendium.ptu.items.Item.UIukeOUhW7aQKDhe" },
  petaya: { tier: 2, imageSuffix: "_petaya", itemUuid: "Compendium.ptu.items.Item.qYhgTWe598QR5KVp" },
  pinap: { tier: 0, imageSuffix: "_pinap", itemUuid: "Compendium.ptu.items.Item.AnzVYlXddqWdCUCQ" },
  pomeg: { tier: 3, imageSuffix: "_pomeg", itemUuid: "Compendium.ptu.items.Item.XIe5IPZjyb1nxytx" },
  qualot: { tier: 3, imageSuffix: "_qualot", itemUuid: "Compendium.ptu.items.Item.OB3PSgoyi6o3yr3G" },
  rabuta: { tier: 2, imageSuffix: "_rabuta", itemUuid: "Compendium.ptu.items.Item.UX3xgG5stg8D8cy9" },
  rawst: { tier: 1, imageSuffix: "_rawst", itemUuid: "Compendium.ptu.items.Item.nyubmMDwJSkeLJiM" },
  razz: { tier: 0, imageSuffix: "_razz", itemUuid: "Compendium.ptu.items.Item.6Ulf3uG4QRO9sEEK" },
  rindo: { tier: 4, imageSuffix: "_rindo", itemUuid: "Compendium.ptu.items.Item.0UYLtvxxgnwAbDUF" },
  roseli: { tier: 3, imageSuffix: "_roseli", itemUuid: "Compendium.ptu.items.Item.FqoZCJvoWrxmqYCr" },
  rowap: { tier: 2, imageSuffix: "_rowap", itemUuid: "Compendium.ptu.items.Item.zSmw6LaCvKSj4mNd" },
  salac: { tier: 2, imageSuffix: "_salac", itemUuid: "Compendium.ptu.items.Item.xUZ48QKktiO0cifN" },
  shuca: { tier: 4, imageSuffix: "_shuca", itemUuid: "Compendium.ptu.items.Item.DcSCtsmyeHIdwbli" },
  sitrus: { tier: 2, imageSuffix: "_sitrus", itemUuid: "Compendium.ptu.items.Item.aUCBw6tTWR2Jj8EH" },
  spelon: { tier: 2, imageSuffix: "_spelon", itemUuid: "Compendium.ptu.items.Item.pR81Bf8454iI2LPj" },
  starf: { tier: 2, imageSuffix: "_starf", itemUuid: "Compendium.ptu.items.Item.tLbd4c0hcoukiAT0" },
  tamato: { tier: 3, imageSuffix: "_tamato", itemUuid: "Compendium.ptu.items.Item.EG9PIafCznbKmjbK" },
  tanga: { tier: 4, imageSuffix: "_tanga", itemUuid: "Compendium.ptu.items.Item.ADMAWB03oV5wv0zd" },
  wacan: { tier: 4, imageSuffix: "_wacan", itemUuid: "Compendium.ptu.items.Item.sSYi4rXcwYCUR9J0" },
  watmel: { tier: 2, imageSuffix: "_watmel", itemUuid: "Compendium.ptu.items.Item.63QJ0JtoxTJQ5nc0" },
  wepear: { tier: 0, imageSuffix: "_wepear", itemUuid: "Compendium.ptu.items.Item.4PebEIFVWG5hNGrz" },
  wiki: { tier: 2, imageSuffix: "_wiki", itemUuid: "Compendium.ptu.items.Item.xvhemPoZ4h4wBjUs" },
  yache: { tier: 4, imageSuffix: "_yache", itemUuid: "Compendium.ptu.items.Item.g6BHkwLi6oMYeTCS" },
};

const APRICORN_ITEMS = {
  apricornBlack: "Compendium.ptu.items.Item.AOpwLlhEyyupgxoQ",
  apricornBlue: "Compendium.ptu.items.Item.sVqd4iABHBjGV4ky",
  apricornGreen: "Compendium.ptu.items.Item.FeuH5JfRj5cyxTJ1",
  apricornPink: "Compendium.ptu.items.Item.JPV293LYQNNy5EzX",
  apricornRed: "Compendium.ptu.items.Item.uqSBEZvhGjfFx8BI",
  apricornWhite: "Compendium.ptu.items.Item.GvwXkhjQV22euvVa",
  apricornYellow: "Compendium.ptu.items.Item.Ya2E1j0rYQc8DIzv",
};

const GS = { 0: 10800, 1: 21600, 2: 28800, 3: 43200, 4: 54000, 5: 64800 };
const BS = ["planted", "sprouted", "taller", "flowering", "ready"];
const AS = ["planted", "sprouted", "growing", "ready"];

function gsFor(bt) { return isAp(bt) ? AS : BS; }
function bi(st, bt) { if (isAp(bt)) { if (st === "ready") { const color = bt.substring(8).toLowerCase(); return `modules/pokeberry/assets/ready_apricorn_${color}.png`; } return `modules/pokeberry/assets/${st}_apricorn.png`; } const s = BERRY_DATA[bt]?.imageSuffix || "_oran"; if (st === "planted") return "modules/pokeberry/assets/planted.png"; if (st === "sprouted") return "modules/pokeberry/assets/sprouted.png"; return `modules/pokeberry/assets/${st}${s}.png`; }
function fgi(st, bt) { return bi(st, bt).replace(/\.png$/, "_FG.png"); }
function gss(t, gm, ap) { if (ap) return 86400; let s = GS[t] || GS[1]; if (gm) { s = Math.floor(s * 0.75); s = Math.floor(s / 1800) * 1800; } return s; }
function sc() { return game.modules.get("foundryvtt-simple-calendar-reborn")?.api?.timestamp?.() ?? null; }
function ts() { const s = sc(); return s !== null ? s : Math.floor(game.time.worldTime); }
function hasC() { return game.modules.get("foundryvtt-simple-calendar-reborn")?.active || game.modules.get("smalltime")?.active; }
function isAp(bt) { return typeof bt === "string" && bt.startsWith("apricorn"); }

async function promptBerrySelection() {
  const c = await renderTemplate("modules/pokeberry/templates/berry-dialog.hbs", {});
  return new Promise((res) => {
    new Dialog({ title: game.i18n.localize("POKEBERRY.SelectBerry"), content: c, buttons: {
      plant: { icon: '<i class="fas fa-seedling"></i>', label: "Plant", callback: (h) => { const f = h[0].querySelector("form"); res({ berryType: f.querySelector("select[name='berryType']").value, growthMulch: f.querySelector("input[name='growthMulch']").checked, soilQuality: f.querySelector("select[name='soilQuality']").value }); }},
      cancel: { icon: '<i class="fas fa-times"></i>', label: "Cancel", callback: () => res(null) },
    }, default: "plant", classes: ["dialog", "pokeberry-berry-dialog"] }).render(true);
  });
}

async function createBerryTile(scene, x, y) {
  const r = await promptBerrySelection();
  if (!r) return;
  const { berryType, growthMulch, soilQuality } = r;
  const now = ts(); const ap = isAp(berryType);
  const tw = canvas.grid.sizeX;
  const th = canvas.grid.sizeY * 2;
  const sv = Math.floor(y / (canvas.grid.sizeY || 100));
  const base = (await scene.createEmbeddedDocuments("Tile", [{
    width: tw, height: th, texture: { src: bi("planted", berryType) }, x, y, sort: sv,
    [`flags.${MODULE_ID}.enabled`]: true, [`flags.${MODULE_ID}.berryType`]: berryType,
    [`flags.${MODULE_ID}.stage`]: "planted", [`flags.${MODULE_ID}.growthMulch`]: growthMulch,
    [`flags.${MODULE_ID}.soilQuality`]: soilQuality || "normal", [`flags.${MODULE_ID}.plantedTimestamp`]: now,
  }]))[0];
  const noFG = game.settings.get(MODULE_ID, "noForegroundTiles");
  if (!noFG) {
    const fg = (await scene.createEmbeddedDocuments("Tile", [{
      width: tw, height: th, texture: { src: fgi("planted", berryType) },
      x, y, sort: sv + 10000, overhead: true, locked: true, elevation: 50,
      [`flags.${MODULE_ID}.isForeground`]: true, [`flags.${MODULE_ID}.parentBaseId`]: base.id,
    }]))[0];
    if (fg) base.update({ [`flags.${MODULE_ID}.fgTileId`]: fg.id });
  }
}

function syncFG(tile, optStage, optBt) {
  if (!game.user.isGM) return;
  if (!tile || !canvas?.scene) return;
  const f = tile.flags?.[MODULE_ID];
  const fgId = f?.fgTileId;
  if (!fgId) return;
  const fg = canvas.scene.tiles.get(fgId);
  if (!fg) return;
  const stage = optStage || f.stage || "planted";
  const bt = optBt || f.berryType || "oran";
  canvas.scene.updateEmbeddedDocuments("Tile", [{
    _id: fgId, x: tile.x, y: tile.y, width: tile.width, height: tile.height,
    "texture.src": fgi(stage, bt),
  }]);
}

function tr(tile, ct) {
  const f = tile.flags?.[MODULE_ID]; if (!f?.enabled) return null;
  const bt = f.berryType || "oran"; const gm = f.growthMulch || false;
  const cs = f.stage || "planted"; const pt = f.plantedTimestamp || 0; const lt = f.lastCheckTimestamp || 0;
  const ap = isAp(bt); const sts = gsFor(bt); const bd = BERRY_DATA[bt];
  if (!bd && !ap) return null; if (ct <= lt) return null;
  const ss = gss(ap ? 0 : bd.tier, gm, ap);
  const csi = sts.indexOf(cs); if (csi < 0) return null;
  const el = ct - pt; if (el < 0) return null;
  const sa = Math.floor(el / ss); const nsi = Math.min(csi + sa, sts.length - 1);
  if (nsi === csi) return null;
  return { newStage: sts[nsi] };
}

async function processBerryTile(td, ct) {
  const f = td.flags?.[MODULE_ID]; if (!f?.enabled) return;
  const r = tr(td, ct);
  if (!r) { td.update({ [`flags.${MODULE_ID}.lastCheckTimestamp`]: ct }); return; }
  const bt = f.berryType || "oran";
  syncFG(td, r.newStage, bt);
  await td.update({
    [`flags.${MODULE_ID}.stage`]: r.newStage,
    [`flags.${MODULE_ID}.plantedTimestamp`]: ct,
    [`flags.${MODULE_ID}.lastCheckTimestamp`]: ct,
    "texture.src": bi(r.newStage, bt),
  });
}

async function processAll(ct) { if (!game.user.isGM || !canvas?.scene) return; for (const t of canvas.scene.tiles) { if (t.flags?.[MODULE_ID]?.enabled) await processBerryTile(t, ct); } }

function ftr(s) { const h = Math.floor(s/3600); const m = Math.floor((s%3600)/60); if(!s)return"0m"; const p=[]; if(h)p.push(`${h}h`); if(m)p.push(`${m}m`); if(!p.length)p.push("0m"); return p.join(" "); }

async function playSoundForUser(src, volume, userId) {
  if (!userId) return;
  if (game.user.id === userId) {
    AudioHelper.play({ src, volume, autoplay: true, loop: false }, false);
    return;
  }
  const soc = getSocketLib();
  if (soc && soc.executeForUsers) {
    try { await soc.executeForUsers("playSound", [userId], src, volume); }
    catch (e) { console.error("PokeBerry | Failed to play sound for user:", e); }
  }
}

async function handleBerryPick(tokDoc, tileDoc, callerUserId, callerSelfOnly, callerVolume) {
  const f = tileDoc.flags?.[MODULE_ID]; if (!f?.enabled) return;
  const stage = f.stage || "planted"; const bt = f.berryType || "oran"; const ap = isAp(bt); const bd = BERRY_DATA[bt];
  if (!bd && !ap) return; const ac = tokDoc.actor; if (!ac) return;
  const ct = ts(); const ss = gss(ap ? 0 : bd.tier, f.growthMulch, ap);
  if (stage !== "ready") {
    const sts = gsFor(bt); const csi = sts.indexOf(stage); const el = ct - (f.plantedTimestamp || 0);
    const rem = Math.max(0, (sts.length - 1 - csi) * ss - el);
    const gms = game.users.filter(u => u.isGM && u.active); const rec = [game.user.id];
    for (const g of gms) { if (!rec.includes(g.id)) rec.push(g.id); }
    ChatMessage.create({ content: game.i18n.format("POKEBERRY.NotReady", { time: ftr(rem) }), whisper: rec.map(id => game.users.get(id)).filter(u => u), speaker: ChatMessage.getSpeaker({ token: tokDoc, actor: ac }) });
    return;
  }
  let by; if (ap) by = Math.floor(Math.random() * 2) - 1; else if (bd.tier <= 0) by = 1; else if (bd.tier <= 2) by = Math.floor(Math.random() * 3) + 1 - bd.tier; else by = Math.floor(Math.random() * 4) - 2;
  const sb = f.soilQuality === "good" ? 1 : f.soilQuality === "great" ? 2 : 0; const yc = Math.max(0, by + sb);
  const rs = ap ? "growing" : "taller"; const bn = game.i18n.localize("POKEBERRY." + (bt.charAt(0).toUpperCase() + bt.slice(1)));
  const selfOnlySound = callerSelfOnly !== undefined ? callerSelfOnly : game.settings.get(MODULE_ID, "selfOnlySound");
  const soundVolume = callerVolume !== undefined ? callerVolume : game.settings.get(MODULE_ID, "soundVolume");
  if (yc <= 0) {
    ChatMessage.create({ content: game.i18n.localize(ap ? "POKEBERRY.PickedNoneApricorn" : "POKEBERRY.PickedNone"), speaker: ChatMessage.getSpeaker({ token: tokDoc, actor: ac }) });
    if (selfOnlySound && callerUserId) {
      playSoundForUser("modules/pokeberry/sounds/berry_fail.mp3", soundVolume, callerUserId);
    } else {
      AudioHelper.play({ src: "modules/pokeberry/sounds/berry_fail.mp3", volume: soundVolume, autoplay: true, loop: false }, true);
    }
    await tileDoc.update({ [`flags.${MODULE_ID}.stage`]: rs, [`flags.${MODULE_ID}.plantedTimestamp`]: ct, "texture.src": bi(rs, bt) });
    syncFG(tileDoc); return;
  }
  const iu = ap ? APRICORN_ITEMS[bt] : bd.itemUuid; if (!iu) { ui.notifications.warn("No item UUID"); return; }
  const it = await fromUuid(iu); if (!it) { ui.notifications.warn(`Could not find ${iu}`); return; }
  const ex = ac.items.find(i => i.name === it.name);
  if (ex) { const cq = Number(ex.system?.quantity ?? 0); if ("quantity" in (ex.system || {})) await ex.update({ "system.quantity": cq + yc }); else await ex.update({ "system.stack": (Number(ex.system?.stack ?? 0)) + yc }); }
  else { const idat = it.toObject(); if (idat.system) { if (foundry.utils.hasProperty(idat, "system.quantity")) idat.system.quantity = yc; if (foundry.utils.hasProperty(idat, "system.stack")) idat.system.stack = yc; } await ac.createEmbeddedDocuments("Item", [idat]); }
  ChatMessage.create({ content: game.i18n.format("POKEBERRY.Picked", { actor: ac.name, berry: bn, count: yc }), speaker: ChatMessage.getSpeaker({ token: tokDoc, actor: ac }) });
  if (selfOnlySound && callerUserId) {
    playSoundForUser("modules/pokeberry/sounds/berry_get.mp3", soundVolume, callerUserId);
  } else {
    AudioHelper.play({ src: "modules/pokeberry/sounds/berry_get.mp3", volume: soundVolume, autoplay: true, loop: false }, true);
  }
  await tileDoc.update({ [`flags.${MODULE_ID}.stage`]: rs, [`flags.${MODULE_ID}.plantedTimestamp`]: ct, "texture.src": bi(rs, bt) });
  syncFG(tileDoc);
}

function getSocketLib() {
  const mod = game.modules.get(MODULE_ID);
  return mod?.soc;
}

async function requestBerryPick(tokDoc, tileDoc) {
  if (game.user.isGM) return handleBerryPick(tokDoc, tileDoc, game.user.id);
  if (!game.users.activeGM) {
    ui.notifications.error(game.i18n.localize("POKEBERRY.NoGM"));
    return;
  }
  const soc = getSocketLib();
  if (!soc?.executeAsGM) {
    ui.notifications.error(game.i18n.localize("POKEBERRY.NoGM"));
    return;
  }
  const callerSelfOnly = game.settings.get(MODULE_ID, "selfOnlySound");
  const callerVolume = game.settings.get(MODULE_ID, "soundVolume");
  try {
    await soc.executeAsGM("berryPick", tokDoc.id, tileDoc.id, game.user.id, callerSelfOnly, callerVolume);
  } catch (e) {
    ui.notifications.error(game.i18n.localize("POKEBERRY.NoGM"));
  }
}

function onTimeChange(data) { if (!canvas?.scene) return; if (data?.diff !== undefined && data.diff <= 0) return; processAll(ts()); }

function isFacing(tokObj, tx, ty) {
  if (!tokObj) return false;
  const cx = tokObj.center.x;
  const cy = tokObj.center.y;
  const r = tokObj.document.rotation ?? 0;
  const angle = Math.atan2(ty - cy, tx - cx) * 180 / Math.PI - 90;
  const norm = a => a < 0 ? a + 360 : a >= 360 ? a - 360 : a;
  return Math.floor(norm(angle + 22.5) / 45) === Math.floor(norm(r + 22.5) / 45);
}

function inPickZone(tok, to) {
  const td = to.document;
  const gs = canvas.grid.size;
  const pt = td.y + td.height - gs;
  const cx = tok.object ? tok.object.center.x : tok.x;
  const cy = tok.object ? tok.object.center.y : tok.y;
  const onBottom = cx >= td.x && cx <= td.x + td.width && cy >= pt && cy <= td.y + td.height;
  const paActive = game.modules.get("pokemon-assets")?.active;
  let integration = false;
  try { integration = game.settings.get(MODULE_ID, "enableSpriteIntegration"); } catch(e) {}
  const useIntegration = paActive && integration && !tok.lockRotation;
  if (!useIntegration) return onBottom;
  if (onBottom) return false;
  const bx = td.x + td.width / 2;
  const by = td.y + td.height - gs / 2;
  const distX = Math.abs(cx - bx);
  const distY = Math.abs(cy - by);
  if (distX > td.width / 2 + gs || distY > gs * 2.5) return false;
  return isFacing(tok.object, bx, by);
}

function onKeyDown(event) {
  if (event.key !== "Enter") return;
  if (document.activeElement?.closest("dialog, #chat-log, #sidebar, input, textarea, select")) return;
  const ctrl = canvas.tokens?.controlled; if (!ctrl?.length) return;
  const td = ctrl[0].document; if (!td.actor || !td.isOwner) return;
  for (const to of canvas.tiles?.placeables || []) { if (!to.document.flags?.[MODULE_ID]?.enabled) continue; if (inPickZone(td, to)) { event.preventDefault(); event.stopPropagation(); requestBerryPick(td, to.document); return; } }
}

async function cleanupOrphanedTiles() {
  if (!canvas?.scene || !game.user.isGM) { ui.notifications.warn("Only the GM can run cleanup."); return; }
  const toDelete = [];
  for (const t of canvas.scene.tiles) {
    const f = t.flags?.[MODULE_ID]; if (!f) continue;
    if (f.isForeground) { if (!f.parentBaseId || !canvas.scene.tiles.has(f.parentBaseId)) toDelete.push(t.id); continue; }
    if (f.enabled && f.fgTileId && !canvas.scene.tiles.has(f.fgTileId)) toDelete.push(t.id);
  }
  if (toDelete.length > 0) { await canvas.scene.deleteEmbeddedDocuments("Tile", toDelete); ui.notifications.info(`Cleaned ${toDelete.length} orphaned tiles.`); }
  else ui.notifications.info("No orphaned PokeBerry tiles found.");
}

Hooks.on("init", () => {
  const mod = game.modules.get(MODULE_ID);
  if (typeof socketlib !== "undefined" && socketlib.registerModule) {
    mod.soc = socketlib.registerModule(MODULE_ID);
  mod.soc.register("berryPick", async (tokId, tileId, callerUserId, callerSelfOnly, callerVolume) => {
      const tokDoc = canvas?.scene?.tokens?.get(tokId);
      const tileDoc = canvas?.scene?.tiles?.get(tileId);
      if (tokDoc && tileDoc) return handleBerryPick(tokDoc, tileDoc, callerUserId, callerSelfOnly, callerVolume);
    });
    mod.soc.register("playSound", async (src, volume) => {
      AudioHelper.play({ src, volume, autoplay: true, loop: false }, false);
    });
  } else {
    Hooks.once("socketlib.ready", () => {
      const soc = socketlib.registerModule(MODULE_ID);
      mod.soc = soc;
      soc.register("berryPick", async (tokId, tileId, callerUserId, callerSelfOnly, callerVolume) => {
        const tokDoc = canvas?.scene?.tokens?.get(tokId);
        const tileDoc = canvas?.scene?.tiles?.get(tileId);
        if (tokDoc && tileDoc) return handleBerryPick(tokDoc, tileDoc, callerUserId, callerSelfOnly, callerVolume);
      });
      soc.register("playSound", async (src, volume) => {
        AudioHelper.play({ src, volume, autoplay: true, loop: false }, false);
      });
    });
  }

  const tc = foundry.applications.sheets.TileConfig; const et = tc.TABS?.sheet?.tabs || [];
  if (!et.some(t => t.id === "berry")) { tc.PARTS = { ...tc.PARTS, berry: { template: "modules/pokeberry/templates/berry-settings.hbs" } }; tc.TABS = foundry.utils.mergeObject(tc.TABS || {}, { sheet: { tabs: [...et, { id: "berry", icon: "fas fa-seedling", label: "POKEBERRY.Tab" }] } }); }
  foundry.applications.handlebars.loadTemplates(["modules/pokeberry/templates/berry-settings.hbs", "modules/pokeberry/templates/berry-dialog.hbs"]);
  libWrapper.register(MODULE_ID, "foundry.applications.sheets.TileConfig.prototype._preparePartContext", _ppc, "WRAPPER");

  game.settings.register(MODULE_ID, "disableWallCollisions", {
    name: "POKEBERRY.DisableWallCollisionsName",
    hint: "POKEBERRY.DisableWallCollisionsHint",
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });
  game.settings.register(MODULE_ID, "noForegroundTiles", {
    name: "POKEBERRY.NoForegroundTilesName",
    hint: "POKEBERRY.NoForegroundTilesHint",
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });
  game.settings.register(MODULE_ID, "selfOnlySound", {
    name: "POKEBERRY.SelfOnlySoundName",
    hint: "POKEBERRY.SelfOnlySoundHint",
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
  });
  game.settings.register(MODULE_ID, "soundVolume", {
    name: "POKEBERRY.SoundVolumeName",
    hint: "POKEBERRY.SoundVolumeHint",
    scope: "client",
    config: true,
    type: Number,
    range: { min: 0, max: 1, step: 0.1 },
    default: 0.7,
  });
  if (game.modules.get("pokemon-assets")?.active) {
    game.settings.register(MODULE_ID, "enableSpriteIntegration", {
      name: "POKEBERRY.EnableSpriteIntegrationName",
      hint: "POKEBERRY.EnableSpriteIntegrationHint",
      scope: "world",
      config: true,
      type: Boolean,
      default: false,
    });
  }
});


async function _ppc(w, pi, c) {
  c = await w(pi, c); if (pi !== "berry") return c;
  const fl = this.document.flags?.[MODULE_ID] || {}; const ap = isAp(fl.berryType || "oran");
  const ti = ap ? 0 : (BERRY_DATA[fl.berryType]?.tier || 1); const ss = gss(ti, fl.growthMulch || false, ap);
  const el = (ts() - (fl.plantedTimestamp || 0)) % ss;
  c.berry = { enabled: fl.enabled || false, berryType: fl.berryType || "oran", stage: fl.stage || "planted", growthMulch: fl.growthMulch || false, soilQuality: fl.soilQuality || "normal", elapsedHours: Math.floor(el / 3600), elapsedMinutes: Math.floor((el % 3600) / 60), elapsedSeconds: Math.floor(el % 60), isApricorn: ap };
  return c;
}

Hooks.on("closeTileConfig", (app) => { const t = app.document; const f = t.flags?.[MODULE_ID]; if (!f?.enabled) return; if (f.stage && f.berryType && t.texture?.src !== bi(f.stage, f.berryType)) t.update({ "texture.src": bi(f.stage, f.berryType) }); syncFG(t); });
Hooks.on("getSceneControlButtons", (ctrls) => { if (ctrls.tiles?.tools) { ctrls.tiles.tools.pokeberry = { name: "pokeberry", title: "POKEBERRY.TileTool", icon: "fas fa-seedling" }; ctrls.tiles.tools.pokeberryCleanup = { name: "pokeberryCleanup", title: "Remove orphaned PokeBerry tiles", icon: "fas fa-eraser" }; } });
Hooks.on("canvasReady", () => {
  for (const to of canvas.tiles?.placeables || []) {
    const f = to.document?.flags?.[MODULE_ID];
    if (f?.enabled) to.initializeEdges?.();
  }
  if (!hasC()) { console.warn("PokeBerry | No time tracking module found."); return; }
  processAll(ts());
});
Hooks.on("simple-calendar-date-time-change", d => onTimeChange(d));
Hooks.on("updateWorldTime", () => onTimeChange({ diff: 1 }));
document.addEventListener("keydown", onKeyDown);

function _ol2(w, evt) { const tl = game.activeTool; if (tl === "pokeberry") { const p = canvas.grid.getSnappedPoint(canvas.mousePosition, { mode: CONST.GRID_SNAPPING_MODES.TOP_LEFT_CORNER }); createBerryTile(canvas.scene, p.x, p.y); return; } if (tl === "pokeberryCleanup") { cleanupOrphanedTiles(); return; } return w(evt); }

let _canvasInitDone = false;
Hooks.on("canvasInit", () => {
  if (_canvasInitDone) return;
  _canvasInitDone = true;
  try { libWrapper.register(MODULE_ID, "foundry.canvas.layers.TilesLayer.prototype._onClickLeft2", _ol2, "MIXED"); } catch (e) { console.error("PokeBerry | LW:", e); }
  const origIE = CONFIG.Tile.objectClass.prototype.initializeEdges;
  CONFIG.Tile.objectClass.prototype.initializeEdges = function({ deleted } = {}) {
    if (origIE) origIE.call(this, { deleted }); const pf = `${this.id}_pbw`;
    if (deleted) { [...canvas.edges.keys()].filter(k => k.startsWith(pf)).forEach(k => canvas.edges.delete(k)); return; }
    if (!this.document?.flags?.[MODULE_ID]?.enabled) return;
    if (game.settings.get(MODULE_ID, "disableWallCollisions")) return;
    [...canvas.edges.keys()].filter(k => k.startsWith(pf)).forEach(k => canvas.edges.delete(k));
    const gs = canvas.grid.size; const x = this.document.x; const sy = this.document.y + this.document.height - gs;
    canvas.edges.set(pf, new foundry.canvas.geometry.edges.Edge({ x, y: sy }, { x: x + this.document.width, y: sy }, { id: pf, object: this, type: "wall", direction: CONST.WALL_DIRECTIONS.BOTH, move: CONST.WALL_MOVEMENT_TYPES.NORMAL }));
    canvas.perception.update({ refreshLighting: true, refreshVision: true }, true);
  };
  libWrapper.register(MODULE_ID, "CONFIG.Tile.objectClass.prototype._onCreate", function(w, ev) { w(ev); this.initializeEdges(); }, "WRAPPER");
  libWrapper.register(MODULE_ID, "CONFIG.Tile.objectClass.prototype._onUpdate", function(w, c, o, u) { w(c, o, u); this.initializeEdges(); }, "WRAPPER");
  libWrapper.register(MODULE_ID, "CONFIG.Tile.objectClass.prototype._onDelete", function(w, o, u) { w(o, u); const pf = `${this.id}_pbw`; [...canvas.edges.keys()].filter(k => k.startsWith(pf)).forEach(k => canvas.edges.delete(k)); canvas.perception.update({ refreshLighting: true, refreshVision: true }, true); }, "WRAPPER");
  libWrapper.register(MODULE_ID, "Token.prototype.checkCollision", function(w, dest, { origin, type } = {}) {
    const r = w(dest, { origin, type }); if (type !== "move" || !origin || !r) return r;
    const gs = canvas.grid.size; const td = this.document; const cx = dest.x + td.width * gs / 2; const ocy = origin.y + td.height * gs;
    for (const to of canvas.tiles?.placeables || []) { const f = to.document?.flags?.[MODULE_ID]; if (!f?.enabled) continue; const wy = to.document.y + to.document.height - gs; if (cx >= to.document.x && cx <= to.document.x + to.document.width && dest.y < wy && ocy >= wy) return []; }
    return r;
  }, "MIXED");
});

Hooks.on("createTile", (td, o, uid) => { if (!game.user.isGM) return; const f = td.flags?.[MODULE_ID]; if (f?.isForeground || !f?.enabled) return; if (!f.plantedTimestamp) td.update({ [`flags.${MODULE_ID}.plantedTimestamp`]: ts() }); });
Hooks.on("deleteTile", (td, o, uid) => { if (!game.user.isGM) return; const f = td.flags?.[MODULE_ID]; if (f?.isForeground) return; if (!f?.enabled) return; if (!f.fgTileId) return; const fgDoc = canvas?.scene?.tiles?.get(f.fgTileId); if (fgDoc) canvas.scene.deleteEmbeddedDocuments("Tile", [f.fgTileId]); });

Hooks.on("updateTile", (td, ch, o, uid) => {
  if (td.flags?.[MODULE_ID]?.isForeground) return;
  if (!td.flags?.[MODULE_ID]?.enabled) return;
  syncFG(td);
});

Hooks.on("preUpdateTile", (td, ch, o, uid) => {
  const nf = foundry.utils.getProperty(ch, `flags.${MODULE_ID}`); if (!nf) return; if (nf.enabled === false) return;
  const cf = td.flags?.[MODULE_ID] || {};
  if (nf.berryType && nf.stage && !foundry.utils.getProperty(ch, "texture.src")) foundry.utils.setProperty(ch, "texture.src", bi(nf.stage, nf.berryType));
  if (nf.stage && nf.stage !== cf.stage) { foundry.utils.setProperty(ch, `flags.${MODULE_ID}.plantedTimestamp`, ts()); delete nf.elapsedHours; delete nf.elapsedMinutes; delete nf.elapsedSeconds; return; }
  const eh = nf.elapsedHours !== undefined ? Number(nf.elapsedHours) : undefined; const em = nf.elapsedMinutes !== undefined ? Number(nf.elapsedMinutes) : undefined; const es = nf.elapsedSeconds !== undefined ? Number(nf.elapsedSeconds) : undefined;
  if (eh !== undefined || em !== undefined || es !== undefined) { const et = (eh||0)*3600 + (em||0)*60 + (es||0); foundry.utils.setProperty(ch, `flags.${MODULE_ID}.plantedTimestamp`, Math.max(0, ts() - et)); delete nf.elapsedHours; delete nf.elapsedMinutes; delete nf.elapsedSeconds; }
});