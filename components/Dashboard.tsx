import React, { useEffect, useState } from 'react';
import { 
  LogOut, Activity, Globe, Shield, 
  Terminal, Server, Users, Power, CheckCircle2,
  Mail, MessageSquare, AlertTriangle, FileText,
  Zap, Thermometer, Disc, ShieldAlert, BadgeDollarSign, Cpu, AlertOctagon, TrendingUp
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

interface DashboardProps {
  onLogout: () => void;
}

// Mock Data generators
const generateData = (count: number) => 
  Array.from({ length: count }, (_, i) => ({
    name: `T-${i}`,
    val: Math.floor(Math.random() * 40) + 60,
    val2: Math.floor(Math.random() * 30) + 20
  }));

const financialData = [
    { name: 'Gov Tenders', value: 450000 },
    { name: 'Corporate SLAs', value: 300000 },
    { name: 'Hardware Sales', value: 150000 },
    { name: 'Consulting', value: 100000 },
];

const threatData = [
  { subject: 'DDoS', A: 120, fullMark: 150 },
  { subject: 'Phishing', A: 98, fullMark: 150 },
  { subject: 'Malware', A: 86, fullMark: 150 },
  { subject: 'Intrusion', A: 99, fullMark: 150 },
  { subject: 'SQL Inj', A: 85, fullMark: 150 },
  { subject: 'Zero-Day', A: 45, fullMark: 150 },
];

const COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'];

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [serverData, setServerData] = useState(generateData(20));
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Real Software & Realistic SA Company Data
  const [clientModules, setClientModules] = useState([
    { id: 1, name: 'Microsoft 365 E5', client: 'Sandton Capital Group', status: true, version: 'v16.0.1' },
    { id: 2, name: 'Autodesk Revit 2025', client: 'Veldskoen Construction', status: false, version: 'v2025.1' },
    { id: 3, name: 'Adobe Acrobat Pro', client: 'Protea Legal Services', status: true, version: 'v23.003' },
    { id: 4, name: 'Sage 200 Evolution', client: 'Karoo Logistics', status: true, version: 'v11.1.0' },
    { id: 5, name: 'Cisco Secure Client', client: 'Gold Reef Mining', status: false, version: 'v5.0.0' },
  ]);

  const recentTransactions = [
    { id: 'INV-24-001', client: 'Anglo American Plat.', service: 'Cloud Storage Exp.', amount: 'R 45,000', status: 'Paid' },
    { id: 'INV-24-002', client: 'Discovery Health', service: 'Security Audit Q3', amount: 'R 120,500', status: 'Pending' },
    { id: 'INV-24-003', client: 'Multichoice Grp', service: 'CDN Optimization', amount: 'R 85,200', status: 'Process' },
    { id: 'INV-24-004', client: 'Woolworths Hldg', service: 'POS System Patch', amount: 'R 32,150', status: 'Paid' },
    { id: 'INV-24-005', client: 'Standard Bank', service: 'Mainframe Maint.', amount: 'R 210,000', status: 'Paid' },
  ];

  const pendingActivations = [
    {
        name: 'FANELE ZONDI',
        id: '8803010924081',
        address: '6 fountains residential, 680 Hendrich street, Pretoria, 0054',
        phone: '078 124 7977',
        role: 'Marketing',
        product: 'Autodesk Revit 2026',
        subs: { email: true, sms: false },
        tax: 'Collect Tax',
        region: 'Gauteng, ZA',
        language: 'English'
    }
  ];

  const toggleModule = (id: number) => {
    setClientModules(prev => prev.map(m => 
        m.id === id ? { ...m, status: !m.status } : m
    ));
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const dataTimer = setInterval(() => {
      setServerData(prev => {
        const newData = [...prev.slice(1), { 
          name: `T-${Date.now()}`, 
          val: Math.floor(Math.random() * 40) + 50,
          val2: Math.floor(Math.random() * 30) + 20
        }];
        return newData;
      });
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(dataTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-nexgen-dark flex flex-col font-sans overflow-hidden">
      
      {/* Top Navigation Bar */}
      <header className="h-14 border-b border-white/10 bg-nexgen-panel/90 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-6">
          <img 
              src="https://cdn.shopify.com/s/files/1/0722/0989/1568/files/NexGen_Computing-01_56650346-a4d7-46e8-9739-8824f2558d44.png?v=1763881565" 
              alt="NexGen Logo"
              className="h-8 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          />
          <div className="hidden md:flex items-center gap-3">
             <div className="h-6 w-px bg-white/10"></div>
             <div>
                <h1 className="text-white text-xs font-bold tracking-wider">EXECUTIVE PORTAL</h1>
                <p className="text-[9px] text-blue-400 font-mono tracking-widest">CLEARANCE: LEVEL 5 (DIAMOND)</p>
             </div>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex gap-6 text-xs font-mono text-slate-400">
             <div className="flex flex-col items-end">
                <span className="text-[9px] uppercase tracking-wider text-slate-500">Local Time (SAST)</span>
                <span className="text-white">{currentTime.toLocaleTimeString()}</span>
             </div>
             <div className="h-6 w-px bg-white/10"></div>
             <div className="flex flex-col items-end">
                <span className="text-[9px] uppercase tracking-wider text-slate-500">Connection</span>
                <span className="text-emerald-500 flex items-center gap-1.5 shadow-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  ENCRYPTED (AES-256)
                </span>
             </div>
          </div>
          
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all px-3 py-1.5 rounded border border-red-500/20 text-[10px] font-bold tracking-wider uppercase"
          >
            <LogOut className="w-3 h-3" />
            <span className="hidden sm:inline">Terminate</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 overflow-y-auto custom-scrollbar">
        
        {/* Welcome Banner */}
        <div className="col-span-1 md:col-span-4 lg:col-span-6 relative overflow-hidden group rounded-lg border border-blue-500/30 min-h-[100px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-900/10 to-transparent z-0"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0"></div>
          <div className="relative z-10 p-6 flex flex-col md:flex-row justify-between items-center w-full gap-4">
            <div>
                <h2 className="text-2xl font-light text-white tracking-tight">Welcome back, <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Executive Manager</span>.</h2>
                <p className="text-slate-400 text-xs mt-1 max-w-2xl leading-relaxed">
                    Regional operations active. Privacy protocols active. <span className="text-emerald-400">All systems nominal.</span>
                </p>
            </div>
            <div className="flex gap-3">
                <div className="px-3 py-1.5 bg-black/40 rounded border border-white/10 text-center min-w-[100px]">
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider">Active Clients</div>
                    <div className="text-lg font-mono text-white">4,821</div>
                </div>
                <div className="px-3 py-1.5 bg-black/40 rounded border border-white/10 text-center min-w-[100px]">
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider">Auth Token</div>
                    <div className="text-lg font-mono text-emerald-400 truncate">VALID</div>
                </div>
            </div>
          </div>
        </div>

        {/* Global Traffic Widget */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-nexgen-panel border border-white/5 rounded-lg p-4 relative overflow-hidden shadow-lg h-[240px]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-slate-200 font-mono text-xs font-bold tracking-widest flex items-center gap-2 uppercase">
              <Globe className="w-3 h-3 text-blue-500" />
              ZA Network Traffic
            </h3>
            <div className="flex items-center gap-2 text-[9px] text-slate-500 font-mono">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                LIVE FEED
            </div>
          </div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={serverData}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.1} vertical={false} />
                <XAxis dataKey="name" hide />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', fontSize: '10px' }} 
                  itemStyle={{ color: '#3b82f6' }}
                />
                <Area type="monotone" dataKey="val" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorVal)" />
                <Area type="monotone" dataKey="val2" stroke="#10b981" strokeWidth={1} fillOpacity={0} fill="transparent" strokeDasharray="4 4" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Threat Intelligence Radar (New) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-nexgen-panel border border-white/5 rounded-lg p-4 shadow-lg h-[240px] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
                 <ShieldAlert className="w-24 h-24 text-red-500" />
             </div>
             <h3 className="text-slate-200 font-mono text-xs font-bold tracking-widest flex items-center gap-2 mb-2 uppercase relative z-10">
              <AlertTriangle className="w-3 h-3 text-red-500" />
              Threat Vector Analysis
            </h3>
            <div className="h-[180px] w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={threatData}>
                    <PolarGrid stroke="#334155" opacity={0.2} />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 9 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                    <Radar
                        name="Threat Level"
                        dataKey="A"
                        stroke="#ef4444"
                        strokeWidth={2}
                        fill="#ef4444"
                        fillOpacity={0.2}
                    />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', fontSize: '10px', color: '#fff' }}/>
                    </RadarChart>
                </ResponsiveContainer>
            </div>
             <div className="absolute bottom-2 right-4 text-[9px] text-red-400 font-mono animate-pulse">
                THREAT LEVEL: MODERATE
            </div>
        </div>

        {/* Executive Summary / Financials */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-nexgen-panel border border-white/5 rounded-lg p-4 shadow-lg flex flex-col h-[280px]">
          <h3 className="text-slate-200 font-mono text-xs font-bold tracking-widest flex items-center gap-2 mb-2 uppercase">
            <TrendingUp className="w-3 h-3 text-emerald-400" />
            Q3 Revenue Projection
          </h3>
          <div className="flex-1 relative">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={financialData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {financialData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(0,0,0,0.5)" />
                        ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', fontSize: '10px', color: '#fff' }} 
                        formatter={(value) => `R ${value.toLocaleString()}`}
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xl font-bold text-white font-mono">R12.4M</span>
                <span className="text-[8px] text-slate-500 uppercase tracking-widest">Est. Total</span>
            </div>
          </div>
          <div className="space-y-1.5 mt-2">
             {financialData.map((item, idx) => (
                 <div key={idx} className="flex justify-between items-center text-[10px]">
                     <div className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: COLORS[idx] }}></div>
                         <span className="text-slate-400">{item.name}</span>
                     </div>
                     <span className="text-slate-200 font-mono">{(item.value / 1000).toFixed(0)}k</span>
                 </div>
             ))}
          </div>
        </div>

        {/* Recent Transactions (New) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-nexgen-panel border border-white/5 rounded-lg p-4 shadow-lg flex flex-col h-[280px]">
            <h3 className="text-slate-200 font-mono text-xs font-bold tracking-widest flex items-center gap-2 mb-3 uppercase">
                <BadgeDollarSign className="w-3 h-3 text-yellow-500" />
                Enterprise Billing
            </h3>
            <div className="flex-1 overflow-auto custom-scrollbar">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-[9px] text-slate-500 uppercase border-b border-white/5">
                            <th className="pb-2 pl-1 font-mono">ID</th>
                            <th className="pb-2">Client</th>
                            <th className="pb-2 text-right">Amount</th>
                            <th className="pb-2 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-[10px] text-slate-300">
                        {recentTransactions.map((tx, i) => (
                            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                <td className="py-2 pl-1 font-mono text-slate-500">{tx.id}</td>
                                <td className="py-2">
                                    <div className="font-bold text-white">{tx.client}</div>
                                    <div className="text-[8px] text-slate-500">{tx.service}</div>
                                </td>
                                <td className="py-2 text-right font-mono">{tx.amount}</td>
                                <td className="py-2 text-right">
                                    <span className={`px-1.5 py-0.5 rounded text-[8px] uppercase font-bold border ${
                                        tx.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                                        tx.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                                        'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                    }`}>
                                        {tx.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* System Health Widget */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-nexgen-panel border border-white/5 rounded-lg p-4 flex flex-col shadow-lg h-[280px]">
          <h3 className="text-slate-200 font-mono text-xs font-bold tracking-widest flex items-center gap-2 mb-4 uppercase">
            <Activity className="w-3 h-3 text-emerald-400" />
            Infrastructure Health
          </h3>
          
          <div className="space-y-5 flex-1">
            {[
              { label: 'JHB Main Node', val: '42°C', color: 'bg-emerald-500', width: '40%' },
              { label: 'CPT Backup Load', val: '8.2 TB', color: 'bg-blue-500', width: '65%' },
              { label: 'Cloud Encryption', val: '99.9%', color: 'bg-purple-500', width: '99%' },
              { label: 'DBN Relay Status', val: 'Active', color: 'bg-orange-500', width: '85%' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-[10px] mb-1.5">
                  <span className="text-slate-400 font-mono uppercase">{item.label}</span>
                  <span className="text-white font-mono">{item.val}</span>
                </div>
                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${item.color} animate-pulse`} style={{ width: item.width }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-2 gap-2">
            <div className="text-center p-1.5 bg-white/5 rounded">
              <div className="text-lg font-mono text-white">100%</div>
              <div className="text-[8px] text-slate-500 uppercase tracking-wider mt-0.5">SLA Uptime</div>
            </div>
            <div className="text-center p-1.5 bg-white/5 rounded">
              <div className="text-lg font-mono text-white">12ms</div>
              <div className="text-[8px] text-slate-500 uppercase tracking-wider mt-0.5">Local Latency</div>
            </div>
          </div>
        </div>

        {/* Client Software Activation */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-nexgen-panel border border-white/5 rounded-lg p-4 shadow-lg flex flex-col relative overflow-hidden h-[320px]">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50"></div>
           
           <h3 className="text-slate-200 font-mono text-xs font-bold tracking-widest flex items-center gap-2 mb-3 uppercase">
              <Power className="w-3 h-3 text-blue-400" />
              Client Software Control
            </h3>
            
            <div className="space-y-2 flex-1 overflow-y-auto pr-1 custom-scrollbar">
               {clientModules.map((module) => (
                 <div key={module.id} className={`flex items-center justify-between p-2.5 rounded border transition-all duration-300
                    ${module.status ? 'bg-blue-900/10 border-blue-500/30' : 'bg-black/30 border-white/5 hover:border-white/10'}`}>
                    
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                             <span className={`text-[11px] font-bold tracking-wide ${module.status ? 'text-white' : 'text-slate-400'}`}>
                                {module.name}
                             </span>
                             {module.status && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[9px] text-slate-500 font-mono uppercase truncate max-w-[100px]">{module.client}</span>
                            <span className="text-[8px] text-slate-600 bg-white/5 px-1 rounded">{module.version}</span>
                        </div>
                    </div>

                    <button 
                        onClick={() => toggleModule(module.id)}
                        className={`relative w-8 h-4 rounded-full transition-colors duration-300 focus:outline-none 
                        ${module.status ? 'bg-emerald-500' : 'bg-slate-700'}`}
                    >
                        <span className={`absolute top-0.5 left-0.5 bg-white w-3 h-3 rounded-full transition-transform duration-300 shadow-md 
                        ${module.status ? 'translate-x-4' : 'translate-x-0'}`}></span>
                    </button>
                 </div>
               ))}
            </div>
            
            <div className="mt-2 pt-2 border-t border-white/5">
                <div className="flex items-center justify-between text-[8px] text-slate-500 font-mono">
                    <span>ACTIVE: {clientModules.filter(m => m.status).length}/{clientModules.length}</span>
                    <span className="text-blue-400 animate-pulse">CLOUD SYNC ON</span>
                </div>
            </div>
        </div>

         {/* Resource Allocation (New) */}
         <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-nexgen-panel border border-white/5 rounded-lg p-4 shadow-lg flex flex-col h-[320px]">
            <h3 className="text-slate-200 font-mono text-xs font-bold tracking-widest flex items-center gap-2 mb-4 uppercase">
              <Cpu className="w-3 h-3 text-purple-400" />
              Cluster Resource Alloc.
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
                 <div className="bg-black/40 rounded p-2 border border-white/5 text-center">
                    <div className="text-[9px] text-slate-500 uppercase mb-1">JHB Cluster CPU</div>
                    <div className="text-2xl font-mono text-white">78%</div>
                    <div className="h-1 bg-slate-800 w-full mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-[78%]"></div>
                    </div>
                 </div>
                 <div className="bg-black/40 rounded p-2 border border-white/5 text-center">
                    <div className="text-[9px] text-slate-500 uppercase mb-1">CPT Cluster CPU</div>
                    <div className="text-2xl font-mono text-slate-300">45%</div>
                    <div className="h-1 bg-slate-800 w-full mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[45%]"></div>
                    </div>
                 </div>
            </div>
            <div className="space-y-3 flex-1">
                <div>
                     <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                        <span>RAM Usage (Total)</span>
                        <span className="text-white font-mono">128GB / 256GB</span>
                     </div>
                     <div className="h-1.5 bg-slate-800 w-full rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[50%]"></div>
                    </div>
                </div>
                <div>
                     <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                        <span>SAN Storage Array</span>
                        <span className="text-yellow-500 font-mono">92% FULL</span>
                     </div>
                     <div className="h-1.5 bg-slate-800 w-full rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 w-[92%] animate-pulse"></div>
                    </div>
                </div>
                 <div>
                     <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                        <span>Network Bandwidth</span>
                        <span className="text-white font-mono">8.4 Gbps</span>
                     </div>
                     <div className="h-1.5 bg-slate-800 w-full rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 w-[84%]"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Command Line & Logs */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-nexgen-panel border border-white/5 rounded-lg p-4 shadow-lg flex flex-col h-[320px]">
           <h3 className="text-slate-200 font-mono text-xs font-bold tracking-widest flex items-center gap-2 mb-3 uppercase">
              <Terminal className="w-3 h-3 text-orange-400" />
              Live System Logs
            </h3>
            <div className="bg-black/80 rounded p-3 font-mono text-[9px] flex-1 overflow-hidden relative border border-white/5 shadow-inner">
              <div className="absolute inset-0 p-3 space-y-1.5 overflow-y-auto custom-scrollbar">
                <p className="text-slate-500 border-b border-slate-800 pb-1 mb-2">root@nexgen-jhb01:~# tail -f /var/log/sys.log</p>
                <div className="space-y-1 text-emerald-500/90 opacity-80">
                  <p><span className="text-slate-600">[10:42:01]</span> <span className="text-blue-400">INFO</span> Initiating handshake with Vodacom-Fibre...</p>
                  <p><span className="text-slate-600">[10:42:02]</span> <span className="text-blue-400">INFO</span> Auth token refreshed for User: ADMIN.</p>
                  <p><span className="text-slate-600">[10:42:05]</span> <span className="text-yellow-500">WARN</span> Minor latency detected in sector 7 (Midrand).</p>
                  <p><span className="text-slate-600">[10:42:06]</span> <span className="text-blue-400">INFO</span> Rerouting traffic via Centurion node.</p>
                  <p><span className="text-slate-600">[10:42:08]</span> <span className="text-emerald-500">SUCCESS</span> Latency normalized. Ping: 12ms.</p>
                  <p><span className="text-slate-600">[10:42:15]</span> <span className="text-blue-400">INFO</span> Encrypted backup scheduled for 12:00.</p>
                  <p><span className="text-slate-600">[10:42:18]</span> <span className="text-purple-400">AUDIT</span> Privacy check passed for current session.</p>
                  <p><span className="text-slate-600">[10:42:24]</span> <span className="text-blue-400">INFO</span> Client 'Sandton Capital' license verified.</p>
                  <p><span className="text-slate-600">[10:42:30]</span> <span className="text-red-400">BLOCK</span> IP 192.168.4.2 blocked (Repeated Auth Fail).</p>
                  <p className="animate-pulse"><span className="text-slate-600">[{currentTime.toLocaleTimeString()}]</span> <span className="text-slate-300">_</span></p>
                </div>
              </div>
            </div>
        </div>

        {/* Pending Activations */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-nexgen-panel border border-white/5 rounded-lg p-4 shadow-lg flex flex-col relative overflow-hidden group min-h-[220px]">
            <h3 className="text-slate-200 font-mono text-xs font-bold tracking-widest flex items-center gap-2 mb-3 uppercase">
                <AlertOctagon className="w-3 h-3 text-yellow-500 animate-pulse" />
                Pending Approvals <span className="text-[9px] bg-yellow-900/40 text-yellow-500 px-1.5 py-0.5 rounded ml-2 border border-yellow-700/30">1 New</span>
            </h3>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {pendingActivations.map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-yellow-900/10 to-transparent border border-yellow-500/20 rounded-md p-3 text-xs relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-10">
                            <FileText className="w-12 h-12 text-yellow-500" />
                        </div>

                        <div className="flex justify-between items-start mb-2 relative z-10">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-yellow-900/30 rounded border border-yellow-500/30 flex items-center justify-center text-yellow-500 font-bold">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <span className="block font-bold text-slate-200 tracking-wide">{item.name}</span>
                                    <span className="text-[9px] text-slate-500 font-mono uppercase">ID: {item.id}</span>
                                </div>
                            </div>
                            <span className="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded text-[8px] font-mono border border-yellow-500/20 tracking-wider">
                                AWAITING AUTH
                            </span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 relative z-10 bg-black/20 p-2 rounded border border-white/5 mb-2">
                            <div>
                                <span className="block text-[8px] text-slate-500 uppercase tracking-wider mb-0.5">Product</span>
                                <span className="text-white font-medium text-[10px]">{item.product}</span>
                            </div>
                            <div>
                                <span className="block text-[8px] text-slate-500 uppercase tracking-wider mb-0.5">Role</span>
                                <span className="text-white font-medium text-[10px]">{item.role}</span>
                            </div>
                             <div className="col-span-2 border-t border-white/5 pt-1 mt-0.5">
                                <span className="block text-[8px] text-slate-500 uppercase tracking-wider mb-0.5">Billing Address</span>
                                <span className="text-slate-300 font-mono text-[9px] leading-relaxed block">{item.address}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-[9px] text-slate-400 mb-2 relative z-10 pl-1">
                            <div className="flex gap-2">
                                <span className={`flex items-center gap-1 ${item.subs.email ? 'text-emerald-400' : 'text-slate-600'}`}>
                                    <Mail className="w-3 h-3" /> Email
                                </span>
                                <span className={`flex items-center gap-1 ${item.subs.sms ? 'text-emerald-400' : 'text-slate-600'}`}>
                                    <MessageSquare className="w-3 h-3" /> SMS
                                </span>
                            </div>
                            <span className="text-blue-400 italic opacity-80">{item.language} / {item.tax}</span>
                        </div>
                        
                        <div className="flex gap-2 relative z-10">
                            <button className="flex-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 py-1.5 rounded text-[9px] font-bold uppercase tracking-widest transition-all">
                                Approve
                            </button>
                            <button className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 hover:border-red-500/50 py-1.5 rounded text-[9px] font-bold uppercase tracking-widest transition-all">
                                Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Key Personnel Status */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-nexgen-panel border border-white/5 rounded-lg p-4 shadow-lg min-h-[220px]">
          <h3 className="text-slate-200 font-mono text-xs font-bold tracking-widest flex items-center gap-2 mb-3 uppercase">
            <Users className="w-3 h-3 text-purple-400" />
            Key Personnel Status
          </h3>
          <div className="space-y-2 overflow-y-auto max-h-[170px] custom-scrollbar">
             {[
               { name: "L. Khumalo", role: "Chief Technology Officer", status: "Online", loc: "Sandton HQ", color: "text-emerald-400" },
               { name: "J. van der Merwe", role: "Head of Infrastructure", status: "Active", loc: "Cape Town Branch", color: "text-emerald-400" },
               { name: "S. Naidoo", role: "Network Security Lead", status: "Away", loc: "Remote (DBN)", color: "text-yellow-500" },
               { name: "D. Pillay", role: "Systems Architect", status: "Busy", loc: "Server Room B", color: "text-red-400" },
               { name: "M. Botha", role: "Lead Developer", status: "Online", loc: "Sandton HQ", color: "text-emerald-400" },
             ].map((person, i) => (
                <div key={i} className="flex items-center justify-between p-2 hover:bg-white/5 rounded transition-colors border-b border-white/5 last:border-0">
                   <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400 border border-slate-700">
                        {person.name.charAt(0)}
                      </div>
                      <div>
                         <div className="text-[11px] text-slate-200 font-medium">{person.name}</div>
                         <div className="text-[8px] text-slate-500 uppercase">{person.role}</div>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className={`text-[9px] font-mono ${person.color} flex items-center justify-end gap-1`}>
                         <div className={`w-1.5 h-1.5 rounded-full bg-current ${person.status === 'Online' ? 'animate-pulse' : ''}`}></div>
                         {person.status}
                      </div>
                      <div className="text-[8px] text-slate-600">{person.loc}</div>
                   </div>
                </div>
             ))}
          </div>
        </div>

        {/* Datacenter Environment Strip (New) */}
        <div className="col-span-1 md:col-span-4 lg:col-span-6 bg-nexgen-panel border border-white/5 rounded-lg p-3 shadow-lg flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2">
                    <div className="bg-blue-500/20 p-1.5 rounded-full">
                        <Zap className="w-3 h-3 text-blue-400" />
                    </div>
                    <div>
                        <div className="text-[9px] text-slate-500 uppercase">Power Draw</div>
                        <div className="text-xs font-mono text-white">4.2 MW <span className="text-emerald-500 text-[9px]">+0.4%</span></div>
                    </div>
                 </div>
                 <div className="w-px h-6 bg-white/10"></div>
                 <div className="flex items-center gap-2">
                    <div className="bg-orange-500/20 p-1.5 rounded-full">
                        <Thermometer className="w-3 h-3 text-orange-400" />
                    </div>
                    <div>
                        <div className="text-[9px] text-slate-500 uppercase">Avg Temp</div>
                        <div className="text-xs font-mono text-white">21.5°C</div>
                    </div>
                 </div>
                 <div className="w-px h-6 bg-white/10"></div>
                 <div className="flex items-center gap-2">
                    <div className="bg-purple-500/20 p-1.5 rounded-full">
                        <Disc className="w-3 h-3 text-purple-400 animate-spin-slow" />
                    </div>
                    <div>
                        <div className="text-[9px] text-slate-500 uppercase">Cooling Fans</div>
                        <div className="text-xs font-mono text-white">12,400 RPM</div>
                    </div>
                 </div>
            </div>
            
            <div className="flex items-center gap-3">
                 <div className="text-right hidden sm:block">
                    <div className="text-[9px] text-slate-500 uppercase">Fire Suppression</div>
                    <div className="text-[10px] text-emerald-500 font-bold tracking-wider">ARMED & READY</div>
                 </div>
                 <div className="bg-emerald-500/20 border border-emerald-500/30 p-1.5 rounded">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                 </div>
            </div>
        </div>

      </main>
      
      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/60 py-2 px-6 flex flex-col md:flex-row justify-between items-center text-[8px] text-slate-600 font-mono uppercase tracking-wider gap-2">
        <div>NEXGEN COMPUTING &copy; 2024 - EXECUTIVE ACCESS ONLY</div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Cpu className="w-2.5 h-2.5" /> BUILD: v.24.0.4-ALPHA</span>
          <span className="flex items-center gap-1"><Server className="w-2.5 h-2.5" /> REGION: ZA-JHB-1</span>
          <span className="flex items-center gap-1"><Shield className="w-2.5 h-2.5" /> SECURE: TRUE</span>
        </div>
      </footer>
    </div>
  );
};