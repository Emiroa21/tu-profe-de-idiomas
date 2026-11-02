(function(){
'use strict';
const $ = (s, r=document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dkey = (d=new Date()) => d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const DOW = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
const MON = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
const shuffle = a => { a = a.slice(); for (let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
const norm = s => String(s||'').toLowerCase().replace(/[’‘`´]/g,"'").replace(/[.,!?;:]+$/,'').replace(/\s+/g,' ').trim();

/* ---------- iconos ---------- */
const P = {
  home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
  plan:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18M8 14h3M8 17h6"/>',
  book:'<path d="M3 5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16a2 2 0 0 0-2-2H3zM21 5a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v16a2 2 0 0 1 2-2h7z"/>',
  exam:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  vocab:'<rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>',
  stats:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
  flame:'<path d="M12 22c4 0 7-2.7 7-6.8 0-3.4-2.2-5.8-3.6-7.4-.4 2-1.4 3.2-2.6 3.6.3-3.6-1.3-7-4.3-9.4.3 3.4-1.4 5.6-3 7.6C4.2 11.3 5 13.9 5 15.2 5 19.3 8 22 12 22z" fill="currentColor" stroke="none"/>',
  doc:'<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  back:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
  check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  cal:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/>',
  level:'<path d="M4 20V14M10 20V9M16 20V4"/>',
  trend:'<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',
  spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4"/>'
};
const ic = (n, s=20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]||P.book}</svg>`;
const BIG = {
  mail:'<svg width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5" fill="currentColor" fill-opacity=".18"/><path d="m3 7 9 6.5L21 7"/></svg>',
  book:'<svg width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><path d="M3 5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16a2 2 0 0 0-2-2H3zM21 5a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v16a2 2 0 0 1 2-2h7z" fill="currentColor" fill-opacity=".18"/></svg>'
};

/* ---------- estado y guardado (Supabase) ---------- */
const LS_KEY = 'tu-profe-idiomas-v1';
const blank = () => ({v:1,name:'',active:null,courses:{},activity:{},xp:0,answered:0,correct:0,updatedAt:0});
let state = blank();
const C = () => state.courses[state.active];

const CFG = window.TU_PROFE_CONFIG || {};
const configured = !!(window.supabase && CFG.supabaseUrl && CFG.supabaseAnonKey && !/TU-PROYECTO|TU_ANON_KEY/.test(CFG.supabaseUrl + CFG.supabaseAnonKey));
const sb = configured ? window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey) : null;
let session = null, ai = null, syncMode = 'local', booted = false;
let saveTimer = null, writing = Promise.resolve();
const uid = () => session && session.user ? session.user.id : null;
const lsKey = () => uid() ? LS_KEY + ':' + uid() : LS_KEY;
function loadLocal(){
  state = blank();
  try { const raw = localStorage.getItem(lsKey()); if (raw) state = Object.assign(blank(), JSON.parse(raw)); } catch(e) {}
}
function save(){
  state.updatedAt = Date.now();
  try { localStorage.setItem(lsKey(), JSON.stringify(state)); } catch(e) {}
  if (!sb || !uid()) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(pushRemote, 1200);
}
function pushRemote(){
  const id = uid(); if (!id) return;
  const row = {user_id: id, data: state, updated_at: new Date().toISOString()};
  writing = writing.then(async () => {
    const {error} = await sb.from('progress').upsert(row);
    if (error) { syncMode = 'error'; console.warn('No se pudo guardar el progreso', error.message); } else syncMode = 'cloud';
  }).catch(() => {});
}
async function loadUser(){
  loadLocal();
  if (!uid()) { render(); return; }
  render();
  const {data, error} = await sb.from('progress').select('data').eq('user_id', uid()).maybeSingle();
  if (error) { syncMode = 'error'; render(); return; }
  syncMode = 'cloud';
  const remote = data && data.data;
  if (remote && (remote.updatedAt || 0) > (state.updatedAt || 0)) {
    state = Object.assign(blank(), remote);
    try { localStorage.setItem(lsKey(), JSON.stringify(state)); } catch(e) {}
  } else if (state.active) pushRemote();
  if (!state.name && session.user.user_metadata && session.user.user_metadata.name) state.name = session.user.user_metadata.name;
  render();
}
async function boot(){
  if (!sb) { loadLocal(); booted = true; render(); return; }
  const {data} = await sb.auth.getSession();
  session = data.session; booted = true;
  sb.auth.onAuthStateChange((event, s) => {
    if (event === 'PASSWORD_RECOVERY') { session = s; ui.auth = {mode:'newpass'}; render(); return; }
    const changed = (s && s.user ? s.user.id : null) !== uid();
    session = s;
    if (changed) { ui.lesson = null; ui.exam = null; ui.onb = {step:0}; loadUser(); }
  });
  await loadUser();
}
async function logout(){
  clearTimeout(saveTimer); if (uid()) pushRemote(); await writing;
  await sb.auth.signOut(); session = null; state = blank(); ui.auth = {mode:'login'}; location.hash = ''; render();
}

/* ---------- lógica del curso ---------- */
const topics = lang => lang === 'en' ? TOPICS.en : TOPICS.gen;
const lid = (lang, lv, i) => `${lang}-${lv}-${i}`;
function getLesson(c, lv, i){
  const id = lid(c.lang, lv, i);
  if (typeof i === 'number' && c.lang === 'en' && LESSONS_EN[lv+'-'+i]) return Object.assign({id, title: TOPICS.en[lv][i], level: lv}, LESSONS_EN[lv+'-'+i]);
  const g = c.generated[id];
  return g ? Object.assign({id, level: lv}, g) : null;
}
const nextLevel = lv => LEVELS[Math.min(LEVELS.indexOf(lv)+1, 5)];
const lvIdx = lv => LEVELS.indexOf(lv);
function doneInLevel(c, lv = c.level){ return [0,1,2,3].filter(i => c.completed[lid(c.lang, lv, i)]).length; }
function bestExam(c, lv = c.level){ return c.exams.filter(e => e.level === lv).reduce((m, e) => Math.max(m, e.score / e.total), 0); }
function levelPct(c){ return Math.round(doneInLevel(c) / 4 * 60 + bestExam(c) * 40); }
function canLevelUp(c){ return c.level !== 'C2' && doneInLevel(c) === 4 && bestExam(c) >= 0.7; }
function todayIdx(c){ for (let i=0;i<4;i++) if (!c.completed[lid(c.lang, c.level, i)]) return i; return -1; }
function goalOf(c){ return GOALS.find(g => g.id === c.goal) || GOALS[6]; }
function targetOf(level, goalId){
  const g = GOALS.find(x => x.id === goalId) || GOALS[6];
  return lvIdx(g.target) > lvIdx(level) ? g.target : nextLevel(level);
}
function newCourse(lang, level, goal){
  return {lang, level, startLevel: level, goal, target: targetOf(level, goal), completed:{}, exams:[], vocab:[], generated:{}, extra:[], practiceIdx:0, levels:[{level, date: dkey()}], created: dkey()};
}
function logActivity(xp){
  const k = dkey();
  const a = state.activity[k] || {xp:0, n:0};
  a.xp += xp; a.n += 1; state.activity[k] = a;
  state.xp += xp;
}
function streak(){
  const d = new Date(); let n = 0;
  if (!state.activity[dkey(d)]) d.setDate(d.getDate()-1);
  while (state.activity[dkey(d)]) { n++; d.setDate(d.getDate()-1); }
  return n;
}
function bestStreak(){
  const ks = Object.keys(state.activity).sort(); let best = 0, cur = 0, prev = null;
  for (const k of ks) {
    const d = new Date(k + 'T12:00:00');
    if (prev && (d - prev) / 864e5 < 1.5) cur++; else cur = 1;
    best = Math.max(best, cur); prev = d;
  }
  return best;
}
function recordAnswer(ok){ state.answered++; if (ok) state.correct++; logActivity(ok ? 10 : 2); save(); }

/* banco de preguntas para práctica y exámenes */
function camToQ(x){ return x.part === 1 ? {type:'mc', s:x.s, o:x.o, a:x.a, e:x.e, part:1} : {type:'fill', s:x.s, ans:x.ans, e:x.e, stem:x.stem, first:x.first, key:x.key, part:x.part}; }
function lessonQs(L){ return (L.questions || []).map(q => Object.assign({type: q.type === 'fill' ? 'fill' : 'mc', from: L.title}, q)); }
function practicePool(c){
  const cur = [], prev = [];
  LEVELS.slice(0, lvIdx(c.level)+1).forEach(lv => {
    for (let i=0;i<4;i++){ const L = getLesson(c, lv, i); if (L) (lv === c.level ? cur : prev).push(...lessonQs(L)); }
  });
  (c.extra || []).forEach(id => { const g = c.generated[id]; if (g) cur.push(...lessonQs(g)); });
  if (c.lang === 'en' && lvIdx(c.level) >= 3) CAMBRIDGE.filter(x => lvIdx(x.lv) <= lvIdx(c.level)).forEach(x => cur.push(camToQ(x)));
  return cur.concat(prev);
}
function weeklyPool(c){
  const weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate()-7);
  const recent = [], rest = [];
  LEVELS.slice(Math.max(0, lvIdx(c.level)-1), lvIdx(c.level)+1).forEach(lv => {
    for (let i=0;i<4;i++){
      const L = getLesson(c, lv, i); if (!L) continue;
      const done = c.completed[L.id];
      (done && new Date(done.date + 'T12:00:00') >= weekAgo ? recent : rest).push(...lessonQs(L));
    }
  });
  (c.extra || []).forEach(id => { const g = c.generated[id]; if (g) recent.push(...lessonQs(g)); });
  let pool = shuffle(recent).concat(shuffle(rest));
  if (c.lang === 'en') {
    if (lvIdx(c.level) >= 3) pool = pool.concat(shuffle(CAMBRIDGE.filter(x => lvIdx(x.lv) <= lvIdx(c.level)).map(camToQ)));
    pool = pool.concat(shuffle(PLACEMENT_EN.filter(x => lvIdx(x.band) <= lvIdx(c.level)).map(x => ({type:'mc', s:x.s, o:x.o, a:x.a, e:'Pregunta de repaso de nivel '+x.band+'.'}))));
  }
  const seen = new Set();
  return pool.filter(q => { const k = q.s; if (seen.has(k)) return false; seen.add(k); return true; });
}
function nextFriday(){
  const d = new Date(); const add = (5 - d.getDay() + 7) % 7; d.setDate(d.getDate() + add);
  return add === 0 ? 'Hoy, 18 h' : DOW[d.getDay()] + ' ' + d.getDate() + ' · 18 h';
}

/* ---------- IA (opcional) ---------- */
function cleanLesson(r, topic){
  if (!r || typeof r !== 'object') throw new Error('bad');
  const qs = (Array.isArray(r.questions) ? r.questions : []).map(q => q && q.type === 'fill'
    ? {type:'fill', s:String(q.s||''), ans:(Array.isArray(q.ans)?q.ans:[q.ans]).map(String), e:String(q.e||'')}
    : {type:'mc', s:String(q.s||''), o:(q.o||[]).map(String).slice(0,4), a:Math.max(0, Math.min(3, +q.a||0)), e:String(q.e||'')})
    .filter(q => q.s.includes('___') && (q.type === 'fill' ? q.ans.length : q.o.length >= 2));
  if (!qs.length || !Array.isArray(r.sections)) throw new Error('bad');
  return {title: String(r.title || topic), min: +r.min || 12, icon: 'book', intro: String(r.intro||''),
    sections: r.sections.slice(0,4).map(s => ({h:String(s.h||''), p:String(s.p||'')})),
    examples: (r.examples||[]).slice(0,5).map(e => [String(e[0]||''), String(e[1]||'')]),
    tip: String(r.tip||''), questions: qs.slice(0,3), vocab: (r.vocab||[]).slice(0,6).map(v => [String(v[0]||''), String(v[1]||'')]), ai: true};
}
async function aiLesson(c, lv, topic){
  const L = LANGS[c.lang];
  const cam = c.lang === 'en' && lvIdx(lv) >= 3 ? ' Como el estudiante prepara Cambridge, incluye un consejo para el examen en "tip".' : '';
  const prompt = `Eres "Tu profe de idiomas", un tutor experto, paciente y motivador. Crea una lección breve (10-15 minutos de lectura) de ${L.target} para un hispanohablante de nivel ${lv} (MCER) sobre: "${topic}".${cam}
Devuelve SOLO un objeto JSON con esta forma exacta:
{"title":"título corto en español","min":12,"intro":"una frase","sections":[{"h":"subtítulo","p":"2-3 frases claras en español con ejemplos en ${L.target}"}],"examples":[["frase en ${L.target}","traducción al español"]],"tip":"un consejo práctico","questions":[{"type":"mc","s":"frase en ${L.target} con ___ donde va la respuesta","o":["opción","opción","opción","opción"],"a":0,"e":"regla breve en español"},{"type":"fill","s":"frase con ___ (pista entre paréntesis si hace falta)","ans":["respuesta","variante aceptada"],"e":"regla breve"}],"vocab":[["palabra en ${L.target}","traducción"]]}
Reglas: exactamente 3 secciones, 3-4 ejemplos, 2 preguntas (una de opción múltiple con 4 opciones y una de completar), 4 palabras de vocabulario. "a" es el índice (0-3) de la opción correcta y debe haber una sola respuesta correcta.`;
  return cleanLesson(await ai.json(prompt, {modelTier:'default'}), topic);
}
// cleanLesson recorta a 3 preguntas; para exámenes usamos otro limpiador
async function aiExam(c, n, focus){
  const L = LANGS[c.lang];
  const prompt = `Eres "Tu profe de idiomas". Crea ${n} preguntas de examen de ${L.target} para un hispanohablante. ${focus}
Devuelve SOLO un array JSON. Cada elemento es {"type":"mc","s":"frase en ${L.target} con ___","o":["a","b","c","d"],"a":0,"e":"regla breve en español","band":"B1"} o {"type":"fill","s":"frase con ___ (pista)","ans":["respuesta"],"e":"regla breve","band":"B1"}. Una sola respuesta correcta por pregunta. "band" es el nivel MCER que evalúa.`;
  const r = await ai.json(prompt, {modelTier:'default'});
  const arr = Array.isArray(r) ? r : (r && Array.isArray(r.questions) ? r.questions : []);
  return arr.map(q => q && q.type === 'fill'
      ? {type:'fill', s:String(q.s||''), ans:(Array.isArray(q.ans)?q.ans:[q.ans]).map(String), e:String(q.e||''), band:q.band}
      : {type:'mc', s:String(q.s||''), o:(q.o||[]).map(String).slice(0,4), a:Math.max(0, Math.min(3, +q.a||0)), e:String(q.e||''), band:q.band})
    .filter(q => q.s.includes('___') && (q.type === 'fill' ? q.ans.length && q.ans[0] : q.o.length >= 2));
}

/* ---------- componentes ---------- */
function sentenceHTML(s){ return esc(s).replace(/_{2,}/g, '<span class="gap"></span>'); }
function isRight(q, v){ return q.type === 'mc' ? v === q.a : q.ans.some(a => norm(a) === norm(v)); }
function rightText(q){ return q.type === 'mc' ? q.o[q.a] : q.ans[0]; }
/* Pregunta con corrección inmediata (lecciones y práctica). mode 'exam' = sin corrección. */
function questionEl(q, opts = {}){
  const el = document.createElement('div');
  const title = opts.title || (q.part === 4 ? 'Completa con 2 a 5 palabras, incluida la palabra clave' : q.part === 3 ? 'Forma la palabra correcta' : q.type === 'fill' ? 'Completa el espacio' : '¿Cuál es la opción correcta?');
  let head = `<div class="q-head">${opts.eyebrow ? `<span class="eyebrow">${esc(opts.eyebrow)}</span>` : ''}<div class="q-title">${esc(title)}</div>`;
  if (q.first) head += `<div class="q-first">${esc(q.first)}</div><div><span class="keyword">${esc(q.key)}</span></div>`;
  head += `<div class="q-sent">${sentenceHTML(q.s)}${q.stem ? ` <span class="keyword">${esc(q.stem)}</span>` : ''}</div></div>`;
  let body;
  if (q.type === 'mc') {
    body = '<div class="opts">' + q.o.map((o, i) => `<button class="opt" data-i="${i}"><span class="letter">${'ABCD'[i]}</span><span>${esc(o)}</span></button>`).join('') + '</div>';
  } else {
    const fid = 'f' + Math.random().toString(36).slice(2, 8);
    body = `<form class="fill"><input id="${fid}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escribe tu respuesta" aria-label="Respuesta"><button class="btn" type="submit">${opts.mode === 'exam' ? 'Guardar' : 'Comprobar'}</button></form>`;
  }
  el.innerHTML = head + body + '<div class="fb-slot"></div>';
  const slot = $('.fb-slot', el);
  const finish = (v) => {
    if (opts.mode === 'exam') { opts.onAnswer && opts.onAnswer(v); return; }
    const ok = isRight(q, v);
    if (q.type === 'mc') {
      el.querySelectorAll('.opt').forEach(b => { b.disabled = true; const i = +b.dataset.i; if (i === q.a) b.classList.add('right'); else if (i === v) b.classList.add('wrong'); });
    } else {
      const inp = $('input', el); inp.disabled = true; inp.classList.add(ok ? 'right' : 'wrong'); $('button', el).disabled = true;
    }
    const msg = ok ? `<b>¡Correcto!</b><span>${esc(q.e)}</span>` : `<b>Casi. La respuesta correcta es "${esc(rightText(q))}".</b><span>${esc(q.e)}</span>`;
    slot.innerHTML = `<div class="fb"><div class="fb-msg"><span class="fb-ico ${ok ? 'ok' : 'no'}">${ic(ok ? 'check' : 'x', 15)}</span><div>${msg}</div></div>${opts.next ? `<button class="btn">${esc(opts.next)} ${ic('arrow', 18)}</button>` : ''}</div>`;
    if (opts.next) $('.fb .btn', slot).onclick = () => opts.onNext && opts.onNext();
    recordAnswer(ok);
    opts.onDone && opts.onDone(ok);
  };
  if (q.type === 'mc') {
    el.querySelectorAll('.opt').forEach(b => b.onclick = () => {
      const i = +b.dataset.i;
      if (opts.mode === 'exam') { el.querySelectorAll('.opt').forEach(x => x.classList.toggle('sel', x === b)); finish(i); }
      else finish(i);
    });
  } else {
    $('form', el).onsubmit = e => { e.preventDefault(); const v = $('input', el).value; if (!v.trim()) return; finish(v); };
  }
  return el;
}
function toast(msg){ const t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => t.hidden = true, 2600); }

/* ---------- vistas ---------- */
const VIEWS = [['inicio','Inicio','home'],['plan','Plan de estudio','plan'],['lecciones','Lecciones','book'],['examenes','Exámenes','exam'],['vocabulario','Vocabulario','vocab'],['estadisticas','Estadísticas','stats'],['configuracion','Configuración','gear']];
let ui = {lesson:null, exam:null, onb:{step:0}, flash:null, confirmReset:false};
const route = () => { const h = location.hash.slice(1); return VIEWS.some(v => v[0] === h) ? h : 'inicio'; };
window.addEventListener('hashchange', () => { if (ui.keep) ui.keep = false; else { ui.lesson = null; ui.exam = null; } render(); window.scrollTo(0, 0); });

function renderSide(){
  const c = C(), r = route();
  $('#side').innerHTML = `<div class="brand"><span class="brand-mark">${ic('spark', 20)}</span>Tu profe</div>
    <nav class="nav">${VIEWS.map(([id, label, icon]) => `<a href="#${id}" class="${r === id ? 'on' : ''}">${ic(icon)}<span>${label}</span></a>`).join('')}</nav>
    <div class="levelbox"><small>Tu nivel</small><b>${LANGS[c.lang].name} - ${c.level}</b><div class="bar"><i style="width:${levelPct(c)}%"></i></div>
    <small>${c.level === 'C2' ? levelPct(c) + '% de maestría C2' : levelPct(c) + '% para llegar a ' + nextLevel(c.level)}</small></div>`;
}
function header(title, sub){
  const c = C(), d = new Date();
  const init = (state.name || 'Tú').split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return `<header class="top"><div><h1>${title}</h1><p class="sub">${sub}</p></div>
    <div class="top-right" aria-label="Panel de control">
      <span class="chip" title="Tu nivel actual">${ic('level', 16)} ${LANGS[c.lang].name} · ${c.level}</span>
      <span class="chip" title="Tu progreso">${ic('trend', 16)} ${levelPct(c)}% ${c.level === 'C2' ? 'de C2' : 'para ' + nextLevel(c.level)}</span>
      <span class="chip" title="Racha de estudio">${ic('flame', 16)} ${streak()} ${streak() === 1 ? 'día' : 'días'}</span>
      <span class="chip">${ic('cal', 16)} ${DOW[d.getDay()]} ${d.getDate()} de ${MON[d.getMonth()]}</span>
      <span class="avatar" aria-hidden="true">${esc(init)}</span></div></header>`;
}

function render(){
  const app = $('#app');
  if (!booted) { app.classList.add('solo'); $('#main').innerHTML = '<div class="onb"><div class="row"><span class="spinner"></span> Cargando…</div></div>'; return; }
  if (sb && !session) { app.classList.add('solo'); renderAuth(); return; }
  if (ui.auth && ui.auth.mode === 'newpass') { app.classList.add('solo'); renderAuth(); return; }
  if (!state.active || !C()) { app.classList.add('solo'); renderOnboarding(); return; }
  app.classList.remove('solo');
  renderSide();
  const r = route();
  const fn = {inicio:vInicio, plan:vPlan, lecciones:vLecciones, examenes:vExamenes, vocabulario:vVocab, estadisticas:vStats, configuracion:vConfig}[r];
  fn($('#main'));
}

/* ---- Login / registro ---- */
function authError(msg){
  const m = String(msg || '');
  if (/Invalid login credentials/i.test(m)) return 'El correo o la contraseña no son correctos.';
  if (/Email not confirmed/i.test(m)) return 'Todavía no confirmaste tu correo. Revisa tu bandeja de entrada (y la de spam).';
  if (/already registered|already exists/i.test(m)) return 'Ya existe una cuenta con ese correo. Inicia sesión.';
  if (/Password should be at least/i.test(m)) return 'La contraseña debe tener al menos 6 caracteres.';
  if (/rate limit|too many/i.test(m)) return 'Demasiados intentos seguidos. Espera un minuto y vuelve a probar.';
  if (/valid email|invalid email/i.test(m)) return 'Escribe un correo válido.';
  return 'Algo salió mal: ' + m;
}
function renderAuth(){
  const a = ui.auth = ui.auth || {mode:'login'};
  const m = $('#main');
  const titles = {login:'Inicia sesión', signup:'Crea tu cuenta', reset:'Recupera tu contraseña', newpass:'Elige una contraseña nueva'};
  const intro = {login:'Entra para seguir con tu plan, tus lecciones y tu racha.', signup:'Tu progreso quedará guardado en tu cuenta y podrás seguir desde cualquier dispositivo.', reset:'Te enviaremos un enlace a tu correo para elegir una contraseña nueva.', newpass:'Escribe la contraseña que quieres usar a partir de ahora.'};
  const showEmail = a.mode !== 'newpass', showPass = a.mode === 'login' || a.mode === 'signup' || a.mode === 'newpass';
  m.innerHTML = `<div class="onb" style="max-width:460px">
    <div class="brand" style="padding:0"><span class="brand-mark">${ic('spark', 20)}</span>Tu profe de idiomas</div>
    <div class="card stack"><div><h2>${titles[a.mode]}</h2><p class="muted" style="margin-top:4px">${intro[a.mode]}</p></div>
    <form id="auth-form" class="stack" novalidate>
      ${a.mode === 'signup' ? `<div class="field"><label for="au-name">Tu nombre</label><input id="au-name" autocomplete="name" placeholder="¿Cómo te llamas?"></div>` : ''}
      ${showEmail ? `<div class="field"><label for="au-email">Correo electrónico</label><input id="au-email" type="email" autocomplete="email" value="${esc(a.email || '')}" placeholder="tu@correo.com"></div>` : ''}
      ${showPass ? `<div class="field"><label for="au-pass">${a.mode === 'newpass' ? 'Contraseña nueva' : 'Contraseña'}</label><input id="au-pass" type="password" autocomplete="${a.mode === 'login' ? 'current-password' : 'new-password'}" placeholder="Mínimo 6 caracteres"></div>` : ''}
      <p id="au-msg" class="muted" ${a.msg ? '' : 'hidden'} style="${a.err ? 'color:var(--bad)' : ''}">${esc(a.msg || '')}</p>
      <button class="btn" type="submit" id="au-go">${{login:'Entrar', signup:'Crear cuenta', reset:'Enviar enlace', newpass:'Guardar contraseña'}[a.mode]}</button>
    </form>
    <div class="row" style="justify-content:space-between;font-size:14px">
      ${a.mode === 'login' ? `<button class="btn ghost sm" data-mode="signup">Crear una cuenta</button><button class="btn ghost sm" data-mode="reset">¿Olvidaste tu contraseña?</button>` : a.mode === 'newpass' ? '' : `<button class="btn ghost sm" data-mode="login">${ic('back', 16)} Ya tengo cuenta</button>`}
    </div></div></div>`;
  m.querySelectorAll('[data-mode]').forEach(b => b.onclick = () => { const em = $('#au-email'); ui.auth = {mode:b.dataset.mode, email: em ? em.value : a.email}; renderAuth(); });
  $('#auth-form').onsubmit = async e => {
    e.preventDefault();
    const email = showEmail ? $('#au-email').value.trim() : '', pass = showPass ? $('#au-pass').value : '';
    const say = (msg, err) => { a.msg = msg; a.err = err; const p = $('#au-msg'); p.hidden = false; p.textContent = msg; p.style.color = err ? 'var(--bad)' : ''; };
    if (showEmail && !/^\S+@\S+\.\S+$/.test(email)) return say('Escribe un correo válido.', true);
    if (showPass && pass.length < 6) return say('La contraseña debe tener al menos 6 caracteres.', true);
    a.email = email;
    const btn = $('#au-go'); btn.disabled = true;
    try {
      if (a.mode === 'login') {
        const {error} = await sb.auth.signInWithPassword({email, password: pass});
        if (error) say(authError(error.message), true);
      } else if (a.mode === 'signup') {
        const name = $('#au-name').value.trim();
        const {data, error} = await sb.auth.signUp({email, password: pass, options:{data:{name}, emailRedirectTo: location.origin + location.pathname}});
        if (error) say(authError(error.message), true);
        else if (!data.session) { ui.auth = {mode:'login', email, msg:'¡Cuenta creada! Te enviamos un correo para confirmarla. Ábrelo y luego inicia sesión aquí.'}; renderAuth(); return; }
      } else if (a.mode === 'reset') {
        const {error} = await sb.auth.resetPasswordForEmail(email, {redirectTo: location.origin + location.pathname});
        if (error) say(authError(error.message), true); else say('Listo. Si existe una cuenta con ese correo, te llegará un enlace en unos minutos.', false);
      } else if (a.mode === 'newpass') {
        const {error} = await sb.auth.updateUser({password: pass});
        if (error) say(authError(error.message), true); else { ui.auth = null; toast('Contraseña actualizada'); loadUser(); return; }
      }
    } catch(err) { say('No hay conexión con el servidor. Revisa tu internet e inténtalo de nuevo.', true); }
    btn.disabled = false;
  };
}

/* ---- Onboarding ---- */
function renderOnboarding(){
  const m = $('#main'), o = ui.onb;
  const steps = `<div class="steps">${[0,1,2,3].map(i => `<i class="${i <= Math.min(o.step, 3) ? 'on' : ''}"></i>`).join('')}</div>`;
  const prof = `<span class="avatar" style="width:46px;height:46px">${ic('spark', 22)}</span>`;
  let h = '';
  if (o.step === 0) {
    h = `<div class="hello">${prof}<div class="speech stack"><h2>¡Hola! Soy tu profe de idiomas</h2>
      <p>Voy a acompañarte desde tu nivel actual, aunque empieces desde cero, hasta dominar el idioma y, si quieres, aprobar exámenes oficiales como el FCE, el CAE o el CPE de Cambridge.</p>
      <p>Cada día tendrás una lección corta con práctica, cada semana un examen y siempre verás tu nivel, tu progreso y tu racha. Empecemos por conocernos.</p></div></div>
      <div class="card stack"><div class="field"><label for="o-name">¿Cómo te llamas?</label><input id="o-name" value="${esc(state.name)}" placeholder="Tu nombre"></div>
      <div class="field"><label>¿Qué idioma quieres aprender?</label><div class="opt-grid">${Object.entries(LANGS).map(([k, L]) => `<button class="choice ${o.lang === k ? 'sel' : ''}" data-lang="${k}" ${k === 'en' || ai ? '' : 'disabled style="opacity:.55;cursor:not-allowed"'}><b>${L.name}</b><small>${k === 'en' ? 'Curso completo + Cambridge' : ai ? 'Lecciones con IA' : 'Próximamente'}</small></button>`).join('')}</div></div>
      <div class="row" style="justify-content:flex-end"><button class="btn" id="o-next" ${o.lang ? '' : 'disabled'}>Continuar ${ic('arrow', 18)}</button></div></div>`;
  } else if (o.step === 1) {
    h = `<div class="hello">${prof}<div class="speech"><p>¡Genial, ${esc(state.name || 'amigo')}! ¿Cuál es tu nivel actual de ${LANGS[o.lang].target}? Si no lo sabes, te hago una prueba rápida de 12 preguntas.</p></div></div>
      <div class="card stack"><div class="opt-grid">${LEVELS.map(lv => `<button class="choice ${o.level === lv ? 'sel' : ''}" data-lv="${lv}"><b>${lv}</b><small>${LEVEL_NAMES[lv]}</small></button>`).join('')}</div>
      <div class="row" style="justify-content:space-between"><button class="btn ghost" id="o-back">${ic('back', 18)} Atrás</button>
      <div class="row"><button class="btn soft" id="o-test">No lo sé, hazme una prueba</button><button class="btn" id="o-next" ${o.level ? '' : 'disabled'}>Continuar ${ic('arrow', 18)}</button></div></div>
      <p class="muted" id="o-err"></p></div>`;
  } else if (o.step === 'test') {
    const q = o.test[o.ti];
    h = `<div class="card stack"><div class="examhead"><span class="eyebrow">Prueba de nivel · pregunta ${o.ti + 1} de ${o.test.length}</span><span class="pill">${esc(LANGS[o.lang].name)}</span></div>
      <div class="bar"><i style="width:${o.ti / o.test.length * 100}%"></i></div><div id="o-q"></div>
      <div class="row" style="justify-content:flex-end"><button class="btn" id="o-qnext" disabled>${o.ti === o.test.length - 1 ? 'Ver mi nivel' : 'Siguiente'} ${ic('arrow', 18)}</button></div></div>`;
    m.innerHTML = `<div class="onb">${steps}${h}</div>`;
    const qe = questionEl(q, {mode:'exam', onAnswer: v => { o.answers[o.ti] = v; $('#o-qnext').disabled = false; }});
    $('#o-q').appendChild(qe);
    $('#o-qnext').onclick = () => {
      if (o.ti < o.test.length - 1) { o.ti++; renderOnboarding(); return; }
      const right = o.test.filter((q, i) => isRight(q, o.answers[i])).length;
      const per = o.test.length / 6;
      o.level = LEVELS[Math.min(5, Math.floor(right / per / 1.0001 ) )] || 'A1';
      if (right === 0) o.level = 'A1';
      o.testScore = right; o.step = 'result'; renderOnboarding();
    };
    return;
  } else if (o.step === 'result') {
    h = `<div class="hello">${prof}<div class="speech stack"><h2>¡Tu nivel es ${o.level}!</h2><p>Acertaste ${o.testScore} de ${o.test.length}. Eso corresponde a un nivel ${LEVEL_NAMES[o.level].toLowerCase()} (${o.level}). ${o.testScore >= o.test.length * 0.75 ? '¡Impresionante!' : 'Es un gran punto de partida.'}</p></div></div>
      <div class="row" style="justify-content:flex-end"><button class="btn" id="o-next">Elegir mi objetivo ${ic('arrow', 18)}</button></div>`;
  } else if (o.step === 2) {
    const gs = GOALS.filter(g => !g.en || o.lang === 'en');
    h = `<div class="hello">${prof}<div class="speech"><p>¿Cuál es tu objetivo principal? Con eso armo tu plan de estudio.</p></div></div>
      <div class="card stack"><div class="opt-grid">${gs.map(g => `<button class="choice ${o.goal === g.id ? 'sel' : ''}" data-goal="${g.id}"><b>${esc(g.label)}</b><small>Meta: ${g.target}</small></button>`).join('')}</div>
      <div class="row" style="justify-content:space-between"><button class="btn ghost" id="o-back">${ic('back', 18)} Atrás</button><button class="btn" id="o-next" ${o.goal ? '' : 'disabled'}>Crear mi plan ${ic('arrow', 18)}</button></div></div>`;
  } else if (o.step === 3) {
    const tmp = newCourse(o.lang, o.level, o.goal);
    h = `<div class="hello">${prof}<div class="speech stack"><h2>Tu plan de estudio está listo</h2><p>Vamos de <b>${tmp.level}</b> a <b>${tmp.target}</b> con una lección de 10 a 15 minutos al día y un examen cada semana. ¡Vas a ver el progreso muy pronto!</p></div></div>
      <div class="card">${planTimeline(tmp)}</div>
      <div class="row" style="justify-content:space-between"><button class="btn ghost" id="o-back">${ic('back', 18)} Atrás</button><button class="btn" id="o-start">Empezar mi primera lección ${ic('arrow', 18)}</button></div>`;
  }
  m.innerHTML = `<div class="onb">${steps}${h}</div>`;
  m.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => { state.name = $('#o-name').value.trim(); o.lang = b.dataset.lang; renderOnboarding(); });
  m.querySelectorAll('[data-lv]').forEach(b => b.onclick = () => { o.level = b.dataset.lv; renderOnboarding(); });
  m.querySelectorAll('[data-goal]').forEach(b => b.onclick = () => { o.goal = b.dataset.goal; renderOnboarding(); });
  const nx = $('#o-next'), bk = $('#o-back'), ts = $('#o-test'), st = $('#o-start');
  if (nx) nx.onclick = () => {
    if (o.step === 0) { state.name = $('#o-name').value.trim(); o.step = 1; }
    else if (o.step === 1 || o.step === 'result') o.step = 2;
    else if (o.step === 2) o.step = 3;
    renderOnboarding();
  };
  if (bk) bk.onclick = () => { o.step = o.step === 3 ? 2 : o.step === 2 ? 1 : 0; renderOnboarding(); };
  if (ts) ts.onclick = async () => {
    o.answers = []; o.ti = 0;
    if (o.lang === 'en') { o.test = PLACEMENT_EN.map(x => ({type:'mc', s:x.s, o:x.o, a:x.a, band:x.band})); o.step = 'test'; renderOnboarding(); return; }
    if (!ai) { $('#o-err').textContent = 'La prueba de este idioma la genera la IA, que no está disponible en esta vista. Elige el nivel que creas más cercano; podrás cambiarlo en Configuración.'; return; }
    ts.disabled = true; ts.innerHTML = '<span class="spinner"></span> Preparando la prueba…';
    try {
      const qs = await aiExam({lang:o.lang}, 12, 'Es una prueba de nivel: 2 preguntas por cada nivel A1, A2, B1, B2, C1 y C2, en orden de dificultad creciente. Solo opción múltiple.');
      if (qs.length < 6) throw new Error('pocas');
      o.test = qs; o.step = 'test';
    } catch(e) { $('#o-err').textContent = 'No pude preparar la prueba ahora. Elige el nivel que creas más cercano.'; ts.disabled = false; ts.textContent = 'Reintentar prueba'; return; }
    renderOnboarding();
  };
  if (st) st.onclick = () => {
    state.courses[o.lang] = state.courses[o.lang] && state.courses[o.lang].level === o.level ? Object.assign(state.courses[o.lang], {goal:o.goal, target:targetOf(o.level, o.goal)}) : newCourse(o.lang, o.level, o.goal);
    state.active = o.lang; ui.onb = {step:0}; logActivity(5); save();
    location.hash = '#inicio'; render();
  };
}

/* ---- Inicio ---- */
function vInicio(m){
  const c = C(), ti = todayIdx(c), name = state.name ? ', ' + esc(state.name.split(' ')[0]) : '';
  const L = ti >= 0 ? getLesson(c, c.level, ti) : null;
  const title = ti >= 0 ? topics(c.lang)[c.level][ti] : '¡Completaste las lecciones de ' + c.level + '!';
  const icon = L && L.icon === 'mail' ? 'mail' : 'book';
  const pct = levelPct(c), circ = 2 * Math.PI * 40;
  const now = new Date(), mon = new Date(now); mon.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  const days = [...Array(7)].map((_, i) => { const d = new Date(mon); d.setDate(mon.getDate() + i); return d; });
  const xs = days.map(d => (state.activity[dkey(d)] || {}).xp || 0), mx = Math.max(60, ...xs);
  const last7 = [...Array(7)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - 6 + i); return state.activity[dkey(d)] ? (i === 6 ? 'today' : 'on') : ''; });
  const s = streak();
  m.innerHTML = header('Hola' + name, `Tu plan de ${LANGS[c.lang].target} personalizado · meta ${c.target}`) +
    (canLevelUp(c) ? `<div class="banner"><div><b>¡Estás listo para subir a ${nextLevel(c.level)}!</b><div class="muted">Completaste todas las lecciones y aprobaste el examen con más del 70%.</div></div><button class="btn" id="lvup">Subir a ${nextLevel(c.level)}</button></div>` : '') +
    `<div class="grid"><div class="col">
      <section class="hero"><div><div class="label">${ic('book', 18)} Lección de hoy</div><h2>${esc(title)}</h2>
        <div class="meta"><span>${ic('clock', 15)} ${L ? L.min : 12} min</span><span>${LANGS[c.lang].name} · Nivel ${c.level}</span>${ti >= 0 ? `<span>Lección ${ti + 1} de 4</span>` : ''}</div></div>
        <div class="hero-art">${BIG[icon]}</div>
        <div class="actions">${ti >= 0 ? `<button class="btn" id="go-lesson">Iniciar lección de hoy ${ic('arrow', 18)}</button>` : `<a class="btn" href="#examenes">Hacer el examen de nivel ${ic('arrow', 18)}</a>`}</div></section>
      <section class="card" id="practice"></section>
    </div><div class="col">
      <section class="card"><h3>Tu progreso</h3>
        <div class="prog" style="margin-top:14px"><div class="ring"><svg width="96" height="96" viewBox="0 0 96 96"><circle cx="48" cy="48" r="40" fill="none" stroke="var(--line)" stroke-width="8"/><circle cx="48" cy="48" r="40" fill="none" stroke="var(--accent)" stroke-width="8" stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${circ * (1 - pct / 100)}"/></svg><b>${pct}%</b></div>
        <div><b style="font-family:var(--display);font-size:18px">Nivel ${c.level}</b><div class="muted">${LANGS[c.lang].name}</div><div class="muted" style="font-size:13px">${c.level === 'C2' ? 'Rumbo a la maestría' : 'para llegar a ' + nextLevel(c.level)}</div></div></div>
        <div class="week" aria-label="Puntos de esta semana">${days.map((d, i) => { const fut = d > now && dkey(d) !== dkey(now); const h = fut ? 18 : Math.max(8, xs[i] / mx * 100); return `<div class="d ${dkey(d) === dkey(now) ? 'today' : ''}" title="${xs[i]} XP"><div class="b ${fut ? 'fut' : xs[i] ? '' : 'zero'}" style="height:${h}%"></div><span>${'LMXJVSD'[i]}</span></div>`; }).join('')}</div>
      </section>
      <section class="card"><h3>Examen semanal</h3><a href="#examenes" class="rowlink" style="margin-top:12px"><span class="ico">${ic('doc')}</span><span><b>${nextFriday()}</b><br><span class="muted" style="font-size:13.5px">${lvIdx(c.level) >= 3 && c.lang === 'en' ? '20 preguntas · formato Cambridge' : '10 a 20 preguntas'}</span></span><span class="go">${ic('arrow', 16)}</span></a></section>
      <section class="card"><h3>Racha de estudio</h3><div class="streak-num">${ic('flame', 26)} ${s} ${s === 1 ? 'día' : 'días'}</div>
        <div class="sq">${last7.map(x => `<i class="${x}"></i>`).join('')}</div>
        <p class="muted" style="font-size:13px;margin-top:10px">${s ? '¡No la rompas! Cada lección o respuesta cuenta.' : 'Responde una pregunta hoy para empezar tu racha.'}</p></section>
    </div></div>`;
  const gl = $('#go-lesson'); if (gl) gl.onclick = () => openLesson(c.level, ti);
  const lu = $('#lvup'); if (lu) lu.onclick = levelUp;
  renderPractice($('#practice'));
}
function renderPractice(box){
  const c = C(), pool = practicePool(c);
  if (!pool.length) {
    box.innerHTML = `<span class="eyebrow">Pregunta de práctica</span><p style="margin-top:10px">Cuando completes tu primera lección, aquí aparecerán preguntas para repasar cada día.</p>`;
    return;
  }
  const q = pool[c.practiceIdx % pool.length];
  box.innerHTML = '';
  box.appendChild(questionEl(q, {eyebrow:'Pregunta de práctica', next:'Siguiente', onNext: () => { c.practiceIdx++; save(); renderPractice(box); renderSide(); }, onDone: () => { renderSide(); }}));
}
function levelUp(){
  const c = C(); const nl = nextLevel(c.level);
  c.level = nl; c.levels.push({level:nl, date:dkey()});
  if (lvIdx(c.target) < lvIdx(nl)) c.target = nl;
  if (lvIdx(c.target) === lvIdx(nl) && nl !== 'C2' && goalOf(c).target === nl) {/* meta alcanzada */}
  logActivity(100); save(); toast('¡Felicidades! Ahora eres nivel ' + nl); render();
}

/* ---- Plan ---- */
function planTimeline(c){
  const from = lvIdx(c.startLevel || c.level), cur = lvIdx(c.level), to = Math.max(lvIdx(c.target), cur);
  const cert = {B2:'FCE (B2 First)', C1:'CAE (C1 Advanced)', C2:'CPE (C2 Proficiency)'};
  return `<div class="timeline">${LEVELS.slice(from, Math.min(5, to) + 1).map(lv => {
    const i = lvIdx(lv), st = i < cur ? 'done' : i === cur ? 'now' : '';
    const done = c.completed ? doneInLevel(c, lv) : 0;
    const items = topics(c.lang)[lv].map((t, k) => `<div class="li"><span class="num ${c.completed && c.completed[lid(c.lang, lv, k)] ? 'done' : ''}">${c.completed && c.completed[lid(c.lang, lv, k)] ? ic('check', 14) : k + 1}</span><div class="t"><b>${esc(t)}</b></div></div>`).join('');
    return `<div class="ms ${st} ${i === to ? 'goal' : ''}"><div class="ms-dot">${lv}</div><div class="card stack" style="padding:16px 18px">
      <div class="row" style="justify-content:space-between"><div><h3>Hito ${i - from + 1}: Nivel ${lv} · ${LEVEL_NAMES[lv]}</h3><small class="muted">${st === 'done' ? 'Superado' : st === 'now' ? done + ' de 4 lecciones · examen de nivel ≥ 70%' : 'Unas 6 a 8 semanas a 15 min por día'}</small></div>
      <span class="pill ${st === 'done' ? 'done' : st === 'now' ? 'now' : ''}">${st === 'done' ? 'Completado' : st === 'now' ? 'En curso' : i === to ? 'Tu meta' : 'Próximo'}</span></div>
      <div class="list">${items}</div>
      ${c.lang === 'en' && cert[lv] && i >= 3 ? `<div class="tip">${ic('trophy', 16)} Al cerrar este hito estarás en condiciones de presentarte al <b>${cert[lv]}</b>. Practica con los simulacros de Reading and Use of English.</div>` : ''}
    </div></div>`; }).join('')}</div>`;
}
function vPlan(m){
  const c = C(), g = goalOf(c);
  m.innerHTML = header('Plan de estudio', `Objetivo: ${esc(g.label)} · de ${c.startLevel} a ${c.target}`) +
    `<div class="card stack"><div class="row" style="justify-content:space-between"><div><h3>Cómo funciona tu plan</h3><p class="muted">Cada nivel es un hito con 4 lecciones clave y un examen. Al completar las lecciones y sacar 70% o más en el examen, subes de nivel.</p></div>
    <a class="btn ghost sm" href="#configuracion">Cambiar objetivo</a></div></div>` + planTimeline(c);
}

/* ---- Lecciones ---- */
function openLesson(lv, i){ ui.lesson = {lv, i}; if (route() !== 'lecciones') { ui.keep = true; location.hash = '#lecciones'; } else render(); window.scrollTo(0, 0); }
function vLecciones(m){
  const c = C();
  if (ui.lesson) return vLesson(m);
  const cur = lvIdx(c.level);
  m.innerHTML = header('Lecciones', `Una lección por día · ${LANGS[c.lang].name}`) +
    LEVELS.map((lv, li) => {
      if (li > cur + 1) return '';
      const locked = li > cur;
      return `<section class="card"><div class="row" style="justify-content:space-between"><h3>Nivel ${lv} · ${LEVEL_NAMES[lv]}</h3><span class="pill ${li < cur ? 'done' : li === cur ? 'now' : ''}">${li < cur ? 'Superado' : li === cur ? doneInLevel(c, lv) + ' / 4' : 'Bloqueado'}</span></div>
      <div class="list" style="margin-top:8px">${topics(c.lang)[lv].map((t, i) => { const done = c.completed[lid(c.lang, lv, i)]; const L = getLesson(c, lv, i);
        return `<div class="li"><span class="num ${done ? 'done' : ''}">${done ? ic('check', 14) : i + 1}</span><div class="t"><b>${esc(t)}</b><small>${done ? 'Completada · ' + done.score + '/' + done.total + ' aciertos' : L ? (L.min || 12) + ' min' : 'Se genera con IA'}</small></div>
        ${locked ? '' : `<button class="btn ${done ? 'ghost' : ''} sm" data-open="${lv}|${i}">${done ? 'Repasar' : 'Abrir'}</button>`}</div>`; }).join('')}</div></section>`;
    }).join('') +
    `<section class="card stack"><h3>Lección extra a tu medida</h3><p class="muted">Pídele al profe una lección sobre lo que necesites: "Entrevistas de trabajo", "Pedir en un restaurante", "Phrasal verbs de negocios"…</p>
    ${ai ? `<form class="fill" id="extra"><input id="extra-topic" placeholder="Tema de la lección" maxlength="80"><button class="btn" type="submit">Crear lección</button></form><p class="muted" id="extra-msg"></p>` : `<p class="muted">Próximamente podrás pedir lecciones a tu medida.</p>`}
    ${(c.extra || []).length ? `<div class="list">${c.extra.map(id => { const g = c.generated[id]; return g ? `<div class="li"><span class="num ${c.completed[id] ? 'done' : ''}">${c.completed[id] ? ic('check', 14) : ic('spark', 14)}</span><div class="t"><b>${esc(g.title)}</b><small>${esc(g.level || c.level)} · ${g.min} min</small></div><button class="btn ghost sm" data-extra="${esc(id)}">Abrir</button></div>` : ''; }).join('')}</div>` : ''}</section>`;
  m.querySelectorAll('[data-open]').forEach(b => b.onclick = () => { const [lv, i] = b.dataset.open.split('|'); openLesson(lv, +i); });
  m.querySelectorAll('[data-extra]').forEach(b => b.onclick = () => openLesson(c.level, b.dataset.extra));
  const f = $('#extra');
  if (f) f.onsubmit = async e => {
    e.preventDefault(); const t = $('#extra-topic').value.trim(); if (!t) return;
    const btn = $('button', f); btn.disabled = true; $('#extra-msg').innerHTML = '<span class="row"><span class="spinner"></span> El profe está preparando tu lección…</span>';
    try {
      const L = await aiLesson(c, c.level, t); const id = `${c.lang}-${c.level}-x${Date.now().toString(36)}`;
      L.level = c.level; c.generated[id] = L; c.extra = (c.extra || []).concat(id).slice(-20); save(); openLesson(c.level, id);
    } catch(err) { $('#extra-msg').textContent = 'No pude crear la lección ahora. Prueba otra vez en un momento.'; btn.disabled = false; }
  };
}
function vLesson(m){
  const c = C(), {lv, i} = ui.lesson;
  const isExtra = typeof i === 'string';
  const id = isExtra ? i : lid(c.lang, lv, i);
  const L = isExtra ? Object.assign({id}, c.generated[id]) : getLesson(c, lv, i);
  const topic = isExtra ? (L.title || '') : topics(c.lang)[lv][i];
  const back = `<button class="btn ghost sm" id="back">${ic('back', 16)} Lecciones</button>`;
  if (!L || !L.sections) {
    m.innerHTML = header(esc(topic), `Nivel ${lv} · ${LANGS[c.lang].name}`) + `<div class="card stack">${back}
      ${ai ? `<p>El profe prepara esta lección para ti en unos segundos.</p><div><button class="btn" id="gen">Preparar lección</button></div><p class="muted" id="gen-msg"></p>` : `<p>Esta lección se crea con IA y el generador no está disponible en esta vista. El curso de inglés incluye todas sus lecciones sin necesidad de IA.</p>`}</div>`;
    $('#back').onclick = () => { ui.lesson = null; render(); };
    const g = $('#gen');
    if (g) g.onclick = async () => {
      g.disabled = true; $('#gen-msg').innerHTML = '<span class="row"><span class="spinner"></span> Preparando tu lección…</span>';
      try { c.generated[id] = await aiLesson(c, lv, topic); save(); render(); }
      catch(e) { $('#gen-msg').textContent = 'No pude preparar la lección ahora. Prueba otra vez en un momento.'; g.disabled = false; }
    };
    return;
  }
  const prev = c.completed[id];
  m.innerHTML = header(esc(L.title || topic), `Lección de hoy · Nivel ${lv} · ${L.min || 12} min de lectura`) +
    `<div class="row">${back}${prev ? '<span class="pill done">Ya completada</span>' : ''}${L.ai ? '<span class="pill">Creada con IA</span>' : ''}</div>
    <article class="card"><div class="lesson-body">
      <p style="font-size:17px">${esc(L.intro)}</p>
      ${L.sections.map(s => `<section><h3>${esc(s.h)}</h3><p>${esc(s.p)}</p></section>`).join('')}
      ${L.examples && L.examples.length ? `<section><h3>Ejemplos</h3><div class="ex">${L.examples.map(e => `<div>${esc(e[0])}</div><div>${esc(e[1])}</div>`).join('')}</div></section>` : ''}
      ${L.tip ? `<div class="tip"><b>Consejo del profe:</b> ${esc(L.tip)}</div>` : ''}
      ${L.vocab && L.vocab.length ? `<section><h3>Vocabulario nuevo</h3><div class="vchips">${L.vocab.map(v => `<span><b>${esc(v[0])}</b> · ${esc(v[1])}</span>`).join('')}</div></section>` : ''}
    </div></article>
    <section class="card stack"><div><span class="eyebrow">Práctica</span><h3>Pon a prueba lo que aprendiste</h3><p class="muted">Responde y te digo si es correcto, con la regla.</p></div><div id="lq" class="stack"></div>
    <div class="row" style="justify-content:flex-end"><button class="btn" id="finish" disabled>Completar lección ${ic('check', 18)}</button></div></section>`;
  $('#back').onclick = () => { ui.lesson = null; render(); };
  const qs = lessonQs(L); let answered = 0, right = 0;
  qs.forEach((q, k) => {
    const w = document.createElement('div'); if (k) w.style.cssText = 'border-top:1px solid var(--line);padding-top:16px';
    w.appendChild(questionEl(q, {eyebrow:`Ejercicio ${k + 1} de ${qs.length}`, onDone: ok => { answered++; if (ok) right++; renderSide(); if (answered === qs.length) $('#finish').disabled = false; }}));
    $('#lq').appendChild(w);
  });
  $('#finish').onclick = () => {
    const first = !c.completed[id];
    c.completed[id] = {date: dkey(), score: right, total: qs.length};
    if (first) {
      (L.vocab || []).forEach(v => { if (!c.vocab.some(x => x.w === v[0])) c.vocab.push({w:v[0], t:v[1], from:L.title || topic, known:false}); });
      logActivity(50);
    }
    save(); ui.lesson = null;
    toast(first ? `¡Lección completada! +50 XP · ${right}/${qs.length} aciertos` : '¡Buen repaso!');
    location.hash = '#inicio'; render(); window.scrollTo(0, 0);
  };
}

/* ---- Exámenes ---- */
function startExam(kind, qs, title){
  ui.exam = {kind, qs, title, i:0, answers:[], done:false};
  if (route() !== 'examenes') { ui.keep = true; location.hash = '#examenes'; } else render();
  window.scrollTo(0, 0);
}
function vExamenes(m){
  const c = C();
  if (ui.exam) return vExam(m);
  const camOK = c.lang === 'en' && lvIdx(c.level) >= 3;
  const wp = weeklyPool(c);
  m.innerHTML = header('Exámenes', `Evalúa todo lo que viste · nivel ${c.level}`) +
    `<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr))">
    <section class="card stack"><span class="ico" style="width:44px;height:44px;border-radius:12px;background:var(--accent-soft);display:grid;place-items:center;color:var(--accent)">${ic('doc', 22)}</span>
      <div><h3>Examen semanal</h3><p class="muted">${Math.min(20, Math.max(10, wp.length))} preguntas sobre lo que estudiaste esta semana. También cuenta como examen de nivel.</p></div>
      <div class="row"><span class="pill">${nextFriday()}</span></div>
      ${wp.length >= 10 ? `<button class="btn" id="ex-week">Empezar examen</button>` : `<p class="muted">Necesitas más contenido para el examen. ${c.lang === 'en' ? 'Completa más lecciones.' : ai ? 'Usa el examen con IA.' : 'Completa más lecciones.'}</p>`}</section>
    <section class="card stack"><span class="ico" style="width:44px;height:44px;border-radius:12px;background:var(--accent-soft);display:grid;place-items:center;color:var(--accent)">${ic('trophy', 22)}</span>
      <div><h3>Simulacro Cambridge</h3><p class="muted">Reading and Use of English: multiple-choice cloze, open cloze, word formation y key word transformations.</p></div>
      ${camOK ? `<button class="btn" id="ex-cam">Empezar simulacro</button>` : `<p class="muted">${c.lang === 'en' ? 'Se desbloquea al llegar a B2. ¡Ya falta menos!' : 'Disponible en el curso de inglés.'}</p>`}</section>
    ${ai ? `<section class="card stack"><span class="ico" style="width:44px;height:44px;border-radius:12px;background:var(--accent-soft);display:grid;place-items:center;color:var(--accent)">${ic('spark', 22)}</span>
      <div><h3>Examen nuevo con IA</h3><p class="muted">15 preguntas inéditas de tu nivel, distintas cada vez.</p></div>
      ${ai ? `<button class="btn" id="ex-ai">Generar examen</button><p class="muted" id="ex-ai-msg"></p>` : `<p class="muted">El generador con IA no está disponible en esta vista.</p>`}</section>` : ''}</div>
    <section class="card"><h3>Historial</h3>${c.exams.length ? `<div class="tablewrap"><table><thead><tr><th>Fecha</th><th>Examen</th><th>Nivel</th><th>Resultado</th></tr></thead><tbody>${c.exams.slice().reverse().map(e => `<tr><td>${esc(e.date)}</td><td>${esc(e.title)}</td><td>${e.level}</td><td><span class="pill ${e.score / e.total >= .7 ? 'done' : ''}">${e.score}/${e.total} · ${Math.round(e.score / e.total * 100)}%</span></td></tr>`).join('')}</tbody></table></div>` : '<p class="muted" style="margin-top:8px">Todavía no hiciste ningún examen.</p>'}</section>`;
  const w = $('#ex-week'); if (w) w.onclick = () => startExam('weekly', wp.slice(0, Math.min(20, wp.length)), 'Examen semanal');
  const cm = $('#ex-cam'); if (cm) cm.onclick = () => {
    const items = CAMBRIDGE.filter(x => lvIdx(x.lv) <= lvIdx(c.level));
    const byPart = [1,2,3,4].flatMap(p => shuffle(items.filter(x => x.part === p)).slice(0, 4));
    startExam('cambridge', byPart.map(camToQ), 'Simulacro Cambridge ' + ({B2:'FCE', C1:'CAE', C2:'CPE'}[c.level]));
  };
  const a = $('#ex-ai'); if (a) a.onclick = async () => {
    a.disabled = true; $('#ex-ai-msg').innerHTML = '<span class="row"><span class="spinner"></span> Preparando tu examen…</span>';
    const seen = Object.keys(c.completed).map(k => { const [, lv, i] = k.split('-'); return TOPICS[c.lang === 'en' ? 'en' : 'gen'][lv] && TOPICS[c.lang === 'en' ? 'en' : 'gen'][lv][+i]; }).filter(Boolean);
    try {
      const qs = await aiExam(c, 15, `Nivel ${c.level}. Temas vistos: ${seen.join('; ') || topics(c.lang)[c.level].join('; ')}. Mezcla opción múltiple y completar.${c.lang === 'en' && lvIdx(c.level) >= 3 ? ' Usa el estilo de Cambridge Reading and Use of English.' : ''}`);
      if (qs.length < 5) throw new Error('pocas');
      startExam('ai', qs, 'Examen con IA');
    } catch(e) { $('#ex-ai-msg').textContent = 'No pude generar el examen ahora. Prueba otra vez en un momento.'; a.disabled = false; }
  };
}
function vExam(m){
  const c = C(), x = ui.exam;
  if (x.done) {
    const right = x.qs.filter((q, i) => isRight(q, x.answers[i])).length, pct = Math.round(right / x.qs.length * 100);
    m.innerHTML = header(esc(x.title), 'Resultados') +
      `<section class="card stack"><div class="row" style="justify-content:space-between"><div><div class="score">${pct}%</div><p class="muted">${right} de ${x.qs.length} correctas · +${right * 5} XP</p></div>
      <div style="max-width:42ch"><b>${pct >= 90 ? '¡Excelente trabajo!' : pct >= 70 ? '¡Aprobado! Vas muy bien.' : pct >= 50 ? 'Buen intento. Repasa los errores y vuelve a intentarlo.' : 'No pasa nada: cada error es una lección. Revisa las explicaciones.'}</b>
      <p class="muted">${pct >= 70 && c.level !== 'C2' ? (doneInLevel(c) === 4 ? 'Ya puedes subir de nivel desde Inicio.' : 'Completa las lecciones del nivel para poder subir.') : 'Necesitas 70% para avanzar de nivel.'}</p></div></div>
      <div class="row"><button class="btn" id="ex-close">Volver a exámenes</button><a class="btn ghost" href="#inicio">Ir a inicio</a></div></section>
      <section class="card review"><h3>Revisión</h3><div class="list" style="margin-top:6px">${x.qs.map((q, i) => { const ok = isRight(q, x.answers[i]); const given = q.type === 'mc' ? (x.answers[i] != null ? q.o[x.answers[i]] : '—') : (x.answers[i] || '—');
        return `<div class="li"><span class="fb-ico ${ok ? 'ok' : 'no'}">${ic(ok ? 'check' : 'x', 14)}</span><div class="t">${q.first ? `<small>${esc(q.first)} · <b>${esc(q.key)}</b></small>` : ''}<b>${sentenceHTML(q.s)}${q.stem ? ' (' + esc(q.stem) + ')' : ''}</b><small>Tu respuesta: ${esc(given)}${ok ? '' : ' · Correcta: ' + esc(rightText(q))}</small><small style="display:block">${esc(q.e || '')}</small></div></div>`; }).join('')}</div></section>`;
    $('#ex-close').onclick = () => { ui.exam = null; render(); };
    return;
  }
  const q = x.qs[x.i];
  m.innerHTML = header(esc(x.title), `Pregunta ${x.i + 1} de ${x.qs.length}${q.part ? ' · ' + PART_NAMES[q.part] : ''}`) +
    `<section class="card stack"><div class="bar"><i style="width:${x.i / x.qs.length * 100}%"></i></div><div id="eq"></div>
    <div class="row" style="justify-content:space-between"><button class="btn ghost sm" id="ex-quit">Salir</button><button class="btn" id="ex-next" ${x.answers[x.i] != null ? '' : 'disabled'}>${x.i === x.qs.length - 1 ? 'Terminar examen' : 'Siguiente'} ${ic('arrow', 18)}</button></div>
    <p class="muted" style="font-size:13px">Las respuestas y explicaciones aparecen al terminar, como en un examen real.</p></section>`;
  $('#eq').appendChild(questionEl(q, {mode:'exam', onAnswer: v => { x.answers[x.i] = v; $('#ex-next').disabled = false; }}));
  $('#ex-quit').onclick = () => { ui.exam = null; render(); };
  $('#ex-next').onclick = () => {
    if (x.i < x.qs.length - 1) { x.i++; render(); return; }
    const right = x.qs.filter((q, i) => isRight(q, x.answers[i])).length;
    state.answered += x.qs.length; state.correct += right;
    c.exams.push({date: dkey(), kind: x.kind, title: x.title, level: c.level, score: right, total: x.qs.length});
    logActivity(right * 5); save(); x.done = true; render(); renderSide(); window.scrollTo(0, 0);
  };
}

/* ---- Vocabulario ---- */
function vVocab(m){
  const c = C();
  const f = ui.vf || '';
  const words = c.vocab.filter(v => !f || (v.w + ' ' + v.t).toLowerCase().includes(f.toLowerCase()));
  m.innerHTML = header('Vocabulario', `${c.vocab.length} palabras · ${c.vocab.filter(v => v.known).length} dominadas`) +
    (c.vocab.length ? `<section class="card stack" id="flash-card"></section>` : '') +
    `<section class="card stack"><div class="row" style="justify-content:space-between"><h3>Tu lista</h3><input id="vf" class="" style="padding:9px 12px;border:1px solid var(--line);border-radius:10px;background:var(--surface);min-width:0;flex:0 1 240px" placeholder="Buscar palabra" value="${esc(f)}"></div>
    ${c.vocab.length ? `<div class="tablewrap"><table><thead><tr><th>Palabra</th><th>Significado</th><th>Lección</th><th>Estado</th></tr></thead><tbody>${words.map(v => `<tr><td><b>${esc(v.w)}</b></td><td>${esc(v.t)}</td><td class="muted">${esc(v.from)}</td><td><span class="pill ${v.known ? 'done' : ''}">${v.known ? 'Dominada' : 'Repasar'}</span></td></tr>`).join('')}</tbody></table></div>` : '<p class="muted">Las palabras nuevas de cada lección que completes se guardan aquí para repasarlas con tarjetas.</p>'}</section>`;
  const vf = $('#vf'); vf.oninput = () => { ui.vf = vf.value; const pos = vf.selectionStart; vVocab(m); const n = $('#vf'); n.focus(); n.setSelectionRange(pos, pos); };
  if (c.vocab.length) renderFlash($('#flash-card'));
}
function renderFlash(box){
  const c = C();
  const pend = c.vocab.filter(v => !v.known), deck = pend.length ? pend : c.vocab;
  ui.flash = ui.flash || {i:0, show:false};
  const v = deck[ui.flash.i % deck.length];
  box.innerHTML = `<div class="row" style="justify-content:space-between"><h3>Tarjetas de repaso</h3><span class="pill">${pend.length} por repasar</span></div>
    <div class="flash"><b>${esc(v.w)}</b>${ui.flash.show ? `<span style="font-size:18px">${esc(v.t)}</span><small class="muted">De: ${esc(v.from)}</small>` : '<span class="muted">¿Recuerdas qué significa?</span>'}</div>
    <div class="row" style="justify-content:center">${ui.flash.show ? `<button class="btn ghost" id="fl-no">Repasar otra vez</button><button class="btn" id="fl-yes">${ic('check', 18)} La sabía</button>` : `<button class="btn" id="fl-show">Mostrar significado</button>`}</div>`;
  const s = $('#fl-show', box); if (s) s.onclick = () => { ui.flash.show = true; renderFlash(box); };
  const y = $('#fl-yes', box); if (y) y.onclick = () => { v.known = true; logActivity(3); save(); ui.flash = {i: ui.flash.i, show:false}; vVocab($('#main')); renderSide(); };
  const n = $('#fl-no', box); if (n) n.onclick = () => { v.known = false; logActivity(1); save(); ui.flash = {i: ui.flash.i + 1, show:false}; renderFlash(box); };
}

/* ---- Estadísticas ---- */
function vStats(m){
  const c = C();
  const acc = state.answered ? Math.round(state.correct / state.answered * 100) : 0;
  const lessons = Object.keys(c.completed).length;
  const days = [...Array(28)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - 27 + i); return {d, xp:(state.activity[dkey(d)] || {}).xp || 0}; });
  const mx = Math.max(50, ...days.map(x => x.xp));
  m.innerHTML = header('Estadísticas', 'Tu esfuerzo, en números') +
    `<div class="tiles"><div class="tile"><b>${state.xp}</b><span>Puntos de experiencia (XP)</span></div><div class="tile"><b>${lessons}</b><span>Lecciones completadas</span></div>
    <div class="tile"><b>${acc}%</b><span>Precisión (${state.correct}/${state.answered})</span></div><div class="tile"><b>${streak()} / ${bestStreak()}</b><span>Racha actual / mejor racha</span></div></div>
    <section class="card stack"><div class="row" style="justify-content:space-between"><h3>Actividad de los últimos 28 días</h3><span class="muted" style="font-size:13px">XP por día</span></div>
    <div class="chart">${days.map(x => `<i class="${x.xp ? '' : 'z'}" style="height:${Math.max(3, x.xp / mx * 100)}%" title="${dkey(x.d)}: ${x.xp} XP"></i>`).join('')}</div>
    <div class="row muted" style="justify-content:space-between;font-size:12px"><span>${days[0].d.getDate()} ${MON[days[0].d.getMonth()]}</span><span>Hoy</span></div></section>
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))">
    <section class="card"><h3>Tu camino</h3><div class="list" style="margin-top:6px">${c.levels.map(l => `<div class="li"><span class="num done">${l.level}</span><div class="t"><b>Nivel ${l.level} · ${LEVEL_NAMES[l.level]}</b><small>Desde ${esc(l.date)}</small></div></div>`).join('')}
      <div class="li"><span class="num">${c.target}</span><div class="t"><b>Meta: ${c.target}</b><small>${esc(goalOf(c).label)}</small></div></div></div></section>
    <section class="card"><h3>Exámenes</h3>${c.exams.length ? `<div class="list" style="margin-top:6px">${c.exams.slice(-6).reverse().map(e => `<div class="li"><div class="t"><b>${esc(e.title)}</b><small>${esc(e.date)} · ${e.level}</small></div><span class="pill ${e.score / e.total >= .7 ? 'done' : ''}">${Math.round(e.score / e.total * 100)}%</span></div>`).join('')}</div>` : '<p class="muted" style="margin-top:8px">Haz tu primer examen semanal para ver tu evolución aquí.</p>'}</section></div>`;
}

/* ---- Configuración ---- */
function vConfig(m){
  const c = C();
  const gs = GOALS.filter(g => !g.en || c.lang === 'en');
  m.innerHTML = header('Configuración', 'Tu perfil y tu curso') +
    `<section class="card stack"><h3>Perfil</h3><div class="field"><label for="cf-name">Nombre</label><input id="cf-name" value="${esc(state.name)}"></div>
    <div class="field"><label for="cf-goal">Objetivo</label><select id="cf-goal">${gs.map(g => `<option value="${g.id}" ${g.id === c.goal ? 'selected' : ''}>${esc(g.label)} (${g.target})</option>`).join('')}</select></div>
    <div class="field"><label for="cf-level">Nivel actual</label><select id="cf-level">${LEVELS.map(l => `<option ${l === c.level ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
    <div><button class="btn" id="cf-save">Guardar cambios</button></div></section>
    ${ai ? `<section class="card stack"><h3>Idioma</h3><p class="muted">Cada idioma guarda su propio progreso. Tu racha es una sola.</p>
    <div class="opt-grid">${Object.entries(LANGS).map(([k, L]) => `<button class="choice ${k === state.active ? 'sel' : ''}" data-sw="${k}"><b>${L.name}</b><small>${state.courses[k] ? 'Nivel ' + state.courses[k].level : 'Empezar'}</small></button>`).join('')}</div></section>` : ''}
    <section class="card stack"><h3>Tu cuenta</h3>${session ? `<p>Sesión iniciada como <b>${esc(session.user.email)}</b></p>` : ''}<p class="muted">${syncMode === 'cloud' ? 'Tu progreso se guarda en tu cuenta y te acompaña en cualquier dispositivo donde inicies sesión.' : syncMode === 'error' ? 'No pudimos conectar con el servidor. Tu progreso se guarda en este navegador y se sincronizará cuando vuelva la conexión.' : 'Tu progreso se guarda en este navegador.'}</p>
    ${session ? `<div><button class="btn ghost" id="logout">Cerrar sesión</button></div>` : ''}
    ${ui.confirmReset ? `<div class="confirm"><span>¿Borrar todo el progreso de ${LANGS[c.lang].target}? No se puede deshacer.</span><button class="btn sm" id="rs-yes" style="background:var(--bad);color:var(--surface)">Sí, reiniciar</button><button class="btn ghost sm" id="rs-no">Cancelar</button></div>` : `<div><button class="btn ghost" id="rs">Reiniciar curso de ${LANGS[c.lang].target}</button></div>`}</section>`;
  $('#cf-save').onclick = () => {
    state.name = $('#cf-name').value.trim(); c.goal = $('#cf-goal').value;
    const nl = $('#cf-level').value; if (nl !== c.level) { c.level = nl; c.levels.push({level:nl, date:dkey()}); }
    c.target = targetOf(c.level, c.goal); save(); toast('Cambios guardados'); render();
  };
  m.querySelectorAll('[data-sw]').forEach(b => b.onclick = () => {
    const k = b.dataset.sw; if (k === state.active) return;
    if (state.courses[k]) { state.active = k; save(); toast('Ahora estudias ' + LANGS[k].target); location.hash = '#inicio'; render(); }
    else { ui.onb = {step:1, lang:k}; state.active = null; render(); }
  });
  const lo = $('#logout'); if (lo) lo.onclick = logout;
  const rs = $('#rs'); if (rs) rs.onclick = () => { ui.confirmReset = true; vConfig(m); };
  const rn = $('#rs-no'); if (rn) rn.onclick = () => { ui.confirmReset = false; vConfig(m); };
  const ry = $('#rs-yes'); if (ry) ry.onclick = () => { delete state.courses[c.lang]; state.active = Object.keys(state.courses)[0] || null; ui.confirmReset = false; ui.onb = {step:1, lang:c.lang}; if (!state.active) {} save(); toast('Curso reiniciado'); location.hash = '#inicio'; render(); };
}

boot();
})();
