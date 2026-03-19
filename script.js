/* ============================================================
   BILLION POL ROI - Dashboard JavaScript
   Contract: 0xB373d35Db18fAe371280E2A2cE71ade95703EaaE
   Network:  Polygon Mainnet (Chain ID 137)
   ============================================================ */

'use strict';

//    CONFIG                                                   
const CONTRACT_ADDR = '0xB373d35Db18fAe371280E2A2cE71ade95703EaaE';
const CHAIN_ID_HEX  = '0x89';
const RPC_URL       = 'https://polygon-rpc.com';
const SITE_URL      = window.location.origin + window.location.pathname;

const CONTRACT_ABI = [{"inputs":[{"internalType":"address payable","name":"_admin1","type":"address"},{"internalType":"address payable","name":"_admin2","type":"address"},{"internalType":"address payable","name":"_admin3","type":"address"},{"internalType":"address payable","name":"_rootUser","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"slot","type":"uint256"},{"indexed":true,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pkgId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"netPkgAmount","type":"uint256"}],"name":"Compounded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"userId","type":"uint256"}],"name":"LeaderPromoted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pkgId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PackageBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalROI","type":"uint256"}],"name":"ROIClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rank","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bonus","type":"uint256"}],"name":"RankAchieved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"userId","type":"uint256"}],"name":"Registered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"wdId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"grossAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"netReceived","type":"uint256"}],"name":"Withdrawn","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"BOOSTER_HALVE_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_PACKAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_PER_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addrToId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin1","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin2","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin3","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyPackage","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claimROI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"compound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"directChildren","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getBoosterStatus","outputs":[{"internalType":"uint256","name":"boosterType","type":"uint256"},{"internalType":"uint256","name":"rateBps","type":"uint256"},{"internalType":"uint256","name":"pendingIncome","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"uid","type":"uint256"}],"name":"getDirectChildren","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddr","type":"address"},{"internalType":"uint256","name":"incomeType","type":"uint256"}],"name":"getIncomeByUser","outputs":[{"components":[{"internalType":"uint256","name":"incomeId","type":"uint256"},{"internalType":"uint256","name":"toUserId","type":"uint256"},{"internalType":"address","name":"toUserAddress","type":"address"},{"internalType":"address","name":"fromUserAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"incomeType","type":"uint256"},{"internalType":"uint256","name":"rateBps","type":"uint256"},{"internalType":"uint256","name":"timeStamp","type":"uint256"}],"internalType":"struct BillionPolROI.IncomeRecord[]","name":"result","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getPackagesByUser","outputs":[{"components":[{"internalType":"uint256","name":"pkgId","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"lastRoiTime","type":"uint256"},{"internalType":"uint256","name":"timeStamp","type":"uint256"}],"internalType":"struct BillionPolROI.Package[]","name":"result","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getPendingROI","outputs":[{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getTeamSplit","outputs":[{"internalType":"uint256","name":"strong","type":"uint256"},{"internalType":"uint256","name":"weaker","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getUserByAddress","outputs":[{"components":[{"internalType":"uint256","name":"userId","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"parentId","type":"uint256"},{"internalType":"uint256","name":"selfTotal","type":"uint256"},{"internalType":"uint256","name":"totalTopay","type":"uint256"},{"internalType":"uint256","name":"totalIncome","type":"uint256"},{"internalType":"uint256","name":"unpaidIncome","type":"uint256"},{"internalType":"uint256","name":"directCount","type":"uint256"},{"internalType":"uint256","name":"teamCount","type":"uint256"},{"internalType":"uint256","name":"directBusiness","type":"uint256"},{"internalType":"uint256","name":"teamBusiness","type":"uint256"},{"internalType":"uint256","name":"selfRoiTotal","type":"uint256"},{"internalType":"uint256","name":"boosterTotal","type":"uint256"},{"internalType":"uint256","name":"levelTotal","type":"uint256"},{"internalType":"uint256","name":"rankTotal","type":"uint256"},{"internalType":"uint256","name":"leaderTotal","type":"uint256"},{"internalType":"uint256","name":"directIncomeTotal","type":"uint256"},{"internalType":"uint256","name":"levelsno","type":"uint256"},{"internalType":"bool","name":"isLeader","type":"bool"},{"internalType":"uint256","name":"isThree","type":"uint256"},{"internalType":"uint256","name":"boosterRoiBps","type":"uint256"},{"internalType":"uint256","name":"ranknow","type":"uint256"},{"internalType":"uint256","name":"lastRoiTimestamp","type":"uint256"},{"internalType":"uint256","name":"lastRankTimestamp","type":"uint256"},{"internalType":"uint256","name":"lastBoosterTimestamp","type":"uint256"},{"internalType":"uint256","name":"joinTimestamp","type":"uint256"}],"internalType":"struct BillionPolROI.User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getWithdrawalsByUser","outputs":[{"components":[{"internalType":"uint256","name":"wdId","type":"uint256"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"grossAmount","type":"uint256"},{"internalType":"uint256","name":"userReceived","type":"uint256"},{"internalType":"uint256","name":"timeStamp","type":"uint256"}],"internalType":"struct BillionPolROI.Withdrawal[]","name":"result","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idToAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"incomeRecords","outputs":[{"internalType":"uint256","name":"incomeId","type":"uint256"},{"internalType":"uint256","name":"toUserId","type":"uint256"},{"internalType":"address","name":"toUserAddress","type":"address"},{"internalType":"address","name":"fromUserAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"incomeType","type":"uint256"},{"internalType":"uint256","name":"rateBps","type":"uint256"},{"internalType":"uint256","name":"timeStamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwnershipRenounced","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"packages","outputs":[{"internalType":"uint256","name":"pkgId","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"lastRoiTime","type":"uint256"},{"internalType":"uint256","name":"timeStamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalIncomeRecords","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPackages","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newAdmin","type":"address"}],"name":"updateAdmin1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newAdmin","type":"address"}],"name":"updateAdmin2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newAdmin","type":"address"}],"name":"updateAdmin3","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userWithdrawals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"uint256","name":"userId","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"parentId","type":"uint256"},{"internalType":"uint256","name":"selfTotal","type":"uint256"},{"internalType":"uint256","name":"totalTopay","type":"uint256"},{"internalType":"uint256","name":"totalIncome","type":"uint256"},{"internalType":"uint256","name":"unpaidIncome","type":"uint256"},{"internalType":"uint256","name":"directCount","type":"uint256"},{"internalType":"uint256","name":"teamCount","type":"uint256"},{"internalType":"uint256","name":"directBusiness","type":"uint256"},{"internalType":"uint256","name":"teamBusiness","type":"uint256"},{"internalType":"uint256","name":"selfRoiTotal","type":"uint256"},{"internalType":"uint256","name":"boosterTotal","type":"uint256"},{"internalType":"uint256","name":"levelTotal","type":"uint256"},{"internalType":"uint256","name":"rankTotal","type":"uint256"},{"internalType":"uint256","name":"leaderTotal","type":"uint256"},{"internalType":"uint256","name":"directIncomeTotal","type":"uint256"},{"internalType":"uint256","name":"levelsno","type":"uint256"},{"internalType":"bool","name":"isLeader","type":"bool"},{"internalType":"uint256","name":"isThree","type":"uint256"},{"internalType":"uint256","name":"boosterRoiBps","type":"uint256"},{"internalType":"uint256","name":"ranknow","type":"uint256"},{"internalType":"uint256","name":"lastRoiTimestamp","type":"uint256"},{"internalType":"uint256","name":"lastRankTimestamp","type":"uint256"},{"internalType":"uint256","name":"lastBoosterTimestamp","type":"uint256"},{"internalType":"uint256","name":"joinTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawIncome","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdrawals","outputs":[{"internalType":"uint256","name":"wdId","type":"uint256"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"grossAmount","type":"uint256"},{"internalType":"uint256","name":"userReceived","type":"uint256"},{"internalType":"uint256","name":"timeStamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

//    STATE                                                     
let provider, signer, contract, readContract;
let walletAddr   = null;
let roiInterval  = null;
let lastUser     = null;
let contractStartTime = 0;
let currentIncMode    = 1;

//    HELPERS                                                  
const fe   = v => parseFloat(ethers.formatEther(v));
const f2   = v => fe(v).toFixed(2) + ' POL';
const f4   = v => fe(v).toFixed(4) + ' POL';
const f6   = v => fe(v).toFixed(6) + ' POL';
const fNum = v => fe(v).toFixed(2);
const fd   = ts => new Date(Number(ts) * 1000).toLocaleDateString();
const sh   = a  => a ? a.slice(0,6) + '...' + a.slice(-4) : '--';
const $    = id => document.getElementById(id);
const set  = (id, v) => { const e = $(id); if (e) e.textContent = v; };

const RATES = [[500,1.0],[3000,1.2],[8000,1.5],[15000,1.8],[20000,2.0],[Infinity,2.5]];
function getRate(amtEther) {
  for (const [cap, r] of RATES) if (amtEther <= cap) return r;
  return 2.5;
}

//    PARTICLE CANVAS                                          
(function initParticles() {
  const canvas = $('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function randBetween(a, b) { return a + Math.random() * (b - a); }

  for (let i = 0; i < 55; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: randBetween(0.5, 2.2),
      dx: randBetween(-0.2, 0.2),
      dy: randBetween(-0.25, -0.05),
      alpha: randBetween(0.1, 0.5),
      color: Math.random() > 0.5 ? '99,179,237' : '183,148,244',
    });
  }

  function drawFrame() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
      if (p.x < -5) p.x = W + 5;
      if (p.x > W + 5) p.x = -5;
    });
    requestAnimationFrame(drawFrame);
  }
  drawFrame();
})();

//    TOAST                                                    
function toast(msg, type = 'info', dur = 3500) {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  $('toastWrap').appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = '.3s';
    setTimeout(() => el.remove(), 320);
  }, dur);
}

//    SUCCESS POPUP                                             
function showSucc(icon, title, msg) {
  set('succIcon', icon); set('succTitle', title); set('succMsg', msg);
  $('succOv').classList.add('show');
}
function closeSucc() { $('succOv').classList.remove('show'); }

//    MODALS                                                    
function openModal(id) {
  $(id).classList.add('open');
  document.body.style.overflow = 'hidden';
  if (lastUser) {
    if (id === 'mWithdraw') set('wdBal',  f2(lastUser.unpaidIncome));
    if (id === 'mCompound') set('cmpBal', f2(lastUser.unpaidIncome));
  }
}
function closeModal(id) { $(id).classList.remove('open'); document.body.style.overflow = ''; }
function closeOv(e, id) { if (e.target.id === id) closeModal(id); }

function setSpin(btnId, spinId, loading) {
  $(btnId).disabled = loading;
  $(spinId).style.display = loading ? 'inline-block' : 'none';
}

//    TAB SWITCHING                                             
function switchNetTab(name, btn) {
  document.querySelectorAll('.gtab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  $('tabNetwork').style.display = name === 'network' ? 'block' : 'none';
  $('tabRanks').style.display   = name === 'ranks'   ? 'block' : 'none';
}

function switchIncTab(mode, btn) {
  document.querySelectorAll('.itab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentIncMode = mode;
  if (!walletAddr) return;
  if (mode === 0)  loadWithdrawals();
  else if (mode === 99) loadEarningsHistory();
  else loadPackages();
}

//    CONNECT SCREEN STATS (NO AUTO-CONNECT)                    
async function loadConnectStats() {
  try {
    const rp = new ethers.JsonRpcProvider(RPC_URL);
    const rc = new ethers.Contract(CONTRACT_ADDR, CONTRACT_ABI, rp);
    const [tu, tp, tw, ir] = await Promise.all([
      rc.totalUsers(), rc.totalPackages(), rc.totalWithdrawals(), rc.isOwnershipRenounced()
    ]);
    set('csTU', tu.toString());
    set('csTP', tp.toString());
    set('csTW', tw.toString());
    set('csOW', ir ? 'Renounced' : 'Active');
  } catch (e) { /* silent */ }
}

//    CONNECT WALLET                                            
async function connectWallet() {
  if (!window.ethereum) {
    toast('MetaMask not found. Please install it first.', 'error');
    return;
  }
  const btn = $('connectBtn');
  btn.disabled = true;
  btn.textContent = 'Connecting...';
  try {
    // Request accounts
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Switch / add Polygon
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if (chainId !== CHAIN_ID_HEX) {
      try {
        await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: CHAIN_ID_HEX }] });
      } catch (switchErr) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: CHAIN_ID_HEX,
            chainName: 'Polygon Mainnet',
            nativeCurrency: { name: 'POL', symbol: 'POL', decimals: 18 },
            rpcUrls: [RPC_URL],
            blockExplorerUrls: ['https://polygonscan.com'],
          }],
        });
      }
    }

    provider    = new ethers.BrowserProvider(window.ethereum);
    signer      = await provider.getSigner();
    walletAddr  = await signer.getAddress();
    contract    = new ethers.Contract(CONTRACT_ADDR, CONTRACT_ABI, signer);
    readContract = new ethers.Contract(CONTRACT_ADDR, CONTRACT_ABI, provider);

    // Show dashboard
    $('connectScreen').style.display = 'none';
    $('mainApp').style.display = 'block';

    // Set header info
    set('headerAddr', sh(walletAddr));
    set('wInfoAddr', walletAddr);

    // Set avatar letter
    const av = walletAddr.charAt(2).toUpperCase();
    const avatarEl = $('walletAvatar');
    if (avatarEl) avatarEl.textContent = av;

    // Referral from URL
    const urlRef = new URLSearchParams(window.location.search).get('ref');
    if (urlRef) $('regRef').value = urlRef;

    // Get contract start time
    contractStartTime = Number(await readContract.contractStartTime());

    // Load data
    await refreshAll();
    startROITicker();

    // Listen for account / chain changes
    window.ethereum.on('accountsChanged', () => location.reload());
    window.ethereum.on('chainChanged',    () => location.reload());

  } catch (err) {
    toast(err.message || 'Connection failed', 'error');
    btn.disabled = false;
    btn.textContent = 'Connect Wallet';
  }
}

function disconnectWallet() {
  clearInterval(roiInterval);
  walletAddr = null;
  closeModal('mWallet');
  $('connectScreen').style.display = 'flex';
  $('mainApp').style.display = 'none';
}

function copyAddr() {
  navigator.clipboard.writeText(walletAddr || '')
    .then(() => toast('Address copied to clipboard', 'success'))
    .catch(() => {});
}

//    REFRESH ALL                                                
async function refreshAll() {
  if (!walletAddr) return;
  try {
    await Promise.all([loadUser(), loadPackages()]);
  } catch (e) { console.error('refreshAll:', e); }
}

//    LOAD USER DATA                                             
async function loadUser() {
  try {
    const [u, bal, isReg, boost, split] = await Promise.all([
      readContract.getUserByAddress(walletAddr),
      provider.getBalance(walletAddr),
      readContract.isRegistered(walletAddr),
      readContract.getBoosterStatus(walletAddr),
      readContract.getTeamSplit(walletAddr),
    ]);

    lastUser = u;

    // Wallet balance
    const balStr = f2(bal);
    set('wInfoBal', balStr);

    // Alert
    $('regAlert').style.display = isReg ? 'none' : 'flex';

    // Investor ID
    set('investorId', '#' + u.userId.toString());

    // Metric cards
    set('mcInvested',    fNum(u.selfTotal));
    set('mcEarned',      fNum(u.totalIncome));
    set('mcWithdrawable', fNum(u.unpaidIncome));

    // Income breakdown
    set('brkROI',     fNum(u.selfRoiTotal)      + ' POL');
    set('brkLevel',   fNum(u.levelTotal)         + ' POL');
    set('brkBooster', fNum(u.boosterTotal)       + ' POL');

    // Cap donut
    if (u.totalTopay > 0n) {
      const pct = Math.min(100, Number((u.totalIncome * 100n) / u.totalTopay));
      set('capDonut', pct.toFixed(0) + '%');
      const arc = $('donutArc1');
      if (arc) {
        const dash = (pct / 100) * 188;
        arc.setAttribute('stroke-dasharray', `${dash} 188`);
      }
    }

    // Network stats
    set('netTeam',    u.teamCount.toString() + ' Users');
    set('netDirect',  u.directCount.toString());
    set('netTeamBiz', fNum(u.teamBusiness)   + ' POL');

    // Ranks tab
    set('rankNow',       u.ranknow > 0n ? 'Rank ' + u.ranknow.toString() : 'Unranked');
    set('levelDepth',    'L' + u.levelsno.toString() + ' / L7');
    set('rankBonusTotal', fNum(u.rankTotal)   + ' POL');
    set('leaderBonusTotal', fNum(u.leaderTotal) + ' POL');
    set('netDirectBiz',  fNum(u.directBusiness) + ' POL');

    // Leader status
    const isLeader = u.isLeader;
    const lv = $('leaderStatusVal');
    if (lv) {
      lv.textContent  = isLeader ? 'TRUE' : 'FALSE';
      lv.style.color  = isLeader ? 'var(--green)' : 'var(--text3)';
      lv.style.fontFamily = 'JetBrains Mono, monospace';
    }
    const starEl = $('leaderStar');
    if (starEl) starEl.style.display = isLeader ? 'inline' : 'none';

    // Rank bar progress
    const rankPct = Math.min(100, Number(u.ranknow) * 11);
    const rf = $('rankBarFill');
    if (rf) rf.style.width = Math.max(5, rankPct) + '%';

    // Team split
    set('tsStrong', split[0].toString());
    set('tsWeaker', split[1].toString());
    set('tsCap',    u.isThree === 1n ? '3x Cap (Upgraded)' : '2x Cap (Standard)');
    set('tsTotalInvested', fNum(u.selfTotal) + ' POL');

    // Booster
    const bType = Number(boost[0]);
    const bRate = (Number(boost[1]) / 100).toFixed(2);
    const typeLabels = { 0: 'None', 1: 'Type 1 (0.30%/day)', 2: 'Type 2 (0.50%/day)', 3: 'Type 3 (1.00%/day)' };

    set('boosterRateDisplay', bType > 0 ? '+' + bRate + '%' : '--');
    set('boosterSubLabel', typeLabels[bType] || 'None');

    const halveWrap = $('boosterHalveWrap');
    const noneMsg   = $('boosterNone');

    if (bType > 0) {
      if (halveWrap) halveWrap.style.display = 'block';
      if (noneMsg)   noneMsg.style.display   = 'none';
      if (contractStartTime > 0) {
        const daysPassed = Math.floor((Date.now() / 1000 - contractStartTime) / 86400);
        const daysLeft   = Math.max(0, 100 - daysPassed);
        set('halveDays', daysLeft.toString());
      }
    } else {
      if (halveWrap) halveWrap.style.display = 'none';
      if (noneMsg)   noneMsg.style.display   = 'block';
    }

    // Referral link
    const refLink = SITE_URL + '?ref=' + walletAddr;
    set('refLinkText', refLink);

  } catch (e) { console.error('loadUser:', e); }
}

//    LIVE ROI TICKER                                            
async function startROITicker() {
  async function tick() {
    if (!walletAddr) return;
    try {
      const roi = await readContract.getPendingROI(walletAddr);
      set('pendingROI', fe(roi).toFixed(6));
    } catch (e) { /* silent */ }
  }
  await tick();
  roiInterval = setInterval(tick, 8000);
}

//    LOAD PACKAGES                                              
async function loadPackages() {
  const head = $('incHead');
  const body = $('incBody');
  body.innerHTML = '<tr><td colspan="4" class="empty-td">Loading...</td></tr>';
  if (head) head.innerHTML = '<tr><th>Pkg ID</th><th>Date</th><th>Amount (POL)</th><th>Status</th></tr>';
  try {
    const pkgs = await readContract.getPackagesByUser(walletAddr);
    if (!pkgs.length) {
      body.innerHTML = '<tr><td colspan="4" class="empty-td">No packages yet. Buy a package to start earning.</td></tr>';
      return;
    }
    body.innerHTML = [...pkgs].reverse().map(p => `
      <tr>
        <td style="color:var(--blue); font-family:JetBrains Mono,monospace;">Pkg ${p.pkgId.toString()}</td>
        <td style="color:var(--text2);">${fd(p.timeStamp)}</td>
        <td style="font-family:JetBrains Mono,monospace;">${fe(p.amount).toFixed(3)} <span style="color:var(--text3);font-size:9px;">(${getRate(fe(p.amount))}%/day)</span></td>
        <td><span class="badge badge-active">Active</span></td>
      </tr>`).join('');
  } catch (e) {
    body.innerHTML = '<tr><td colspan="4" class="empty-td" style="color:var(--red)">Error loading data</td></tr>';
  }
}

//    EARNINGS HISTORY                                           
async function loadEarningsHistory() {
  const head = $('incHead');
  const body = $('incBody');
  body.innerHTML = '<tr><td colspan="4" class="empty-td">Loading...</td></tr>';
  if (head) head.innerHTML = '<tr><th>Type</th><th>Amount</th><th>Level</th><th>Date</th></tr>';
  try {
    const typeMap = { 1:'ROI', 2:'Level', 3:'Rank', 4:'Booster', 5:'Leader', 6:'Direct' };
    const badgeMap = { 1:'badge-teal', 2:'badge-gold', 3:'badge-purple', 4:'badge-purple', 5:'badge-gold', 6:'badge-blue' };
    let all = [];
    for (const t of [1,2,3,4,5,6]) {
      const recs = await readContract.getIncomeByUser(walletAddr, t);
      recs.forEach(r => all.push({ ...r, _t: t }));
    }
    all.sort((a, b) => Number(b.timeStamp) - Number(a.timeStamp));
    if (!all.length) {
      body.innerHTML = '<tr><td colspan="4" class="empty-td">No earnings records yet</td></tr>';
      return;
    }
    body.innerHTML = all.slice(0, 60).map(r => `
      <tr>
        <td><span class="badge ${badgeMap[r._t]}">${typeMap[r._t]}</span></td>
        <td style="font-family:JetBrains Mono,monospace; color:var(--gold);">${fe(r.amount).toFixed(4)} POL</td>
        <td style="color:var(--text2);">${r.level > 0n ? 'L' + r.level.toString() : '--'}</td>
        <td style="color:var(--text3);">${fd(r.timeStamp)}</td>
      </tr>`).join('');
  } catch (e) {
    body.innerHTML = '<tr><td colspan="4" class="empty-td" style="color:var(--red)">Error loading data</td></tr>';
  }
}

//    WITHDRAWALS HISTORY                                        
async function loadWithdrawals() {
  const head = $('incHead');
  const body = $('incBody');
  body.innerHTML = '<tr><td colspan="4" class="empty-td">Loading...</td></tr>';
  if (head) head.innerHTML = '<tr><th>ID</th><th>Gross Amount</th><th>Received (90%)</th><th>Date</th></tr>';
  try {
    const wds = await readContract.getWithdrawalsByUser(walletAddr);
    if (!wds.length) {
      body.innerHTML = '<tr><td colspan="4" class="empty-td">No withdrawals yet</td></tr>';
      return;
    }
    body.innerHTML = [...wds].reverse().map(w => `
      <tr>
        <td style="color:var(--text3); font-family:JetBrains Mono,monospace;">#${w.wdId.toString()}</td>
        <td style="font-family:JetBrains Mono,monospace;">${fe(w.grossAmount).toFixed(2)} POL</td>
        <td style="font-family:JetBrains Mono,monospace; color:var(--green);">${fe(w.userReceived).toFixed(2)} POL</td>
        <td style="color:var(--text3);">${fd(w.timeStamp)}</td>
      </tr>`).join('');
  } catch (e) {
    body.innerHTML = '<tr><td colspan="4" class="empty-td" style="color:var(--red)">Error loading data</td></tr>';
  }
}

//    FORM PREVIEWS                                              
function calcBuyPrev() {
  const v   = parseFloat($('buyAmt').value);
  const el  = $('buyPrev');
  if (v >= 10) {
    const r  = getRate(v);
    el.style.display = 'block';
    el.textContent   = `Daily ROI: ${(v * r / 100).toFixed(4)} POL at ${r}%/day`;
  } else { el.style.display = 'none'; }
}

function calcWdPrev() {
  const v  = parseFloat($('wdAmt').value);
  const el = $('wdPrev');
  if (v > 0) {
    el.style.display = 'block';
    el.textContent   = `You will receive: ${(v * 0.9).toFixed(4)} POL`;
  } else { el.style.display = 'none'; }
}

function calcCmpPrev() {
  const v  = parseFloat($('cmpAmt').value);
  const el = $('cmpPrev');
  if (v >= 10) {
    el.style.display = 'block';
    el.textContent   = `New package amount: ${(v * 0.87).toFixed(4)} POL`;
  } else { el.style.display = 'none'; }
}

//    WRITE FUNCTIONS                                            
async function doRegister() {
  const ref = $('regRef').value.trim();
  if (!ethers.isAddress(ref)) { toast('Enter a valid wallet address', 'error'); return; }
  setSpin('regBtn', 'regSpin', true);
  try {
    const tx = await contract.register(ref);
    toast('Transaction submitted. Waiting for confirmation...', 'info');
    await tx.wait();
    closeModal('mRegister');
    showSucc('&#9989;', 'Registered!', 'Your account is now active. Buy a package to start earning.');
    await refreshAll();
  } catch (e) { toast(e.reason || e.message || 'Transaction failed', 'error'); }
  setSpin('regBtn', 'regSpin', false);
}

async function doBuyPackage() {
  const amt = $('buyAmt').value;
  if (!amt || parseFloat(amt) < 10) { toast('Minimum package is 10 POL', 'error'); return; }
  setSpin('buyBtn', 'buySpin', true);
  try {
    const value = ethers.parseEther(String(parseFloat(amt)));
    const tx    = await contract.buyPackage({ value });
    toast('Transaction submitted. Waiting for confirmation...', 'info');
    await tx.wait();
    closeModal('mBuy');
    $('buyAmt').value   = '';
    $('buyPrev').style.display = 'none';
    showSucc('&#128230;', 'Package Active!', `${parseFloat(amt).toFixed(2)} POL is now staked and earning ROI every second.`);
    await refreshAll();
  } catch (e) { toast(e.reason || e.message || 'Transaction failed', 'error'); }
  setSpin('buyBtn', 'buySpin', false);
}

async function doClaimROI() {
  setSpin('claimBtn', 'claimSpin', true);
  try {
    const tx = await contract.claimROI();
    toast('Claiming ROI... please wait.', 'info');
    await tx.wait();
    showSucc('&#128176;', 'ROI Claimed!', 'Your ROI has been added to your income balance.');
    await refreshAll();
  } catch (e) { toast(e.reason || e.message || 'Claim failed', 'error'); }
  setSpin('claimBtn', 'claimSpin', false);
}

async function doWithdraw() {
  const amt = $('wdAmt').value;
  if (!amt || parseFloat(amt) <= 0) { toast('Enter a valid amount', 'error'); return; }
  setSpin('wdBtn', 'wdSpin', true);
  try {
    const value = ethers.parseEther(String(parseFloat(amt)));
    const tx    = await contract.withdrawIncome(value);
    toast('Withdrawal in progress...', 'info');
    await tx.wait();
    closeModal('mWithdraw');
    showSucc('&#127974;', 'Withdrawn!', `${(parseFloat(amt) * 0.9).toFixed(4)} POL has been sent to your wallet.`);
    await refreshAll();
    if (currentIncMode === 0) loadWithdrawals();
  } catch (e) { toast(e.reason || e.message || 'Withdrawal failed', 'error'); }
  setSpin('wdBtn', 'wdSpin', false);
}

async function doCompound() {
  const amt = $('cmpAmt').value;
  if (!amt || parseFloat(amt) < 10) { toast('Minimum compound is 10 POL', 'error'); return; }
  setSpin('cmpBtn', 'cmpSpin', true);
  try {
    const value = ethers.parseEther(String(parseFloat(amt)));
    const tx    = await contract.compound(value);
    toast('Compounding earnings...', 'info');
    await tx.wait();
    closeModal('mCompound');
    showSucc('&#128260;', 'Compounded!', 'A new staking package has been created from your income balance.');
    await refreshAll();
    if (currentIncMode === 1) loadPackages();
  } catch (e) { toast(e.reason || e.message || 'Compound failed', 'error'); }
  setSpin('cmpBtn', 'cmpSpin', false);
}

//    COPY REFERRAL                                              
function copyRef() {
  const link = SITE_URL + '?ref=' + walletAddr;
  navigator.clipboard.writeText(link)
    .then(() => toast('Referral link copied to clipboard!', 'success'))
    .catch(() => {
      const el = document.createElement('textarea');
      el.value = link;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      el.remove();
      toast('Referral link copied!', 'success');
    });
}

//    INIT                                                      
window.addEventListener('load', () => {
  // Load public stats on connect screen - NO auto wallet connect
  loadConnectStats();
});
