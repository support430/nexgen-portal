import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, Lock, Eye, EyeOff, AlertTriangle, Cpu, Terminal } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [privacyMode, setPrivacyMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Strict Privacy Mode Check
    if (!privacyMode) {
      setError("CRITICAL SECURITY STOP: Privacy Mode MUST be enabled before entering credentials on external networks.");
      return;
    }

    // Hardcoded Credentials for Demo
    if (username !== 'admin' || password !== 'password') {
       // Simulate a processing delay for realism
       setTimeout(() => {
         setError("AUTHENTICATION FAILED: Invalid Identity Token. Access Denied.");
       }, 500);
       return;
    }

    // Simulate login delay
    setTimeout(() => {
      onLogin();
    }, 800);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nexgen-dark font-sans selection:bg-blue-500/30">
      
      {/* Demo Credentials Hint (Hidden in 'production' usually, but visible for preview) */}
      <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-800 bg-slate-900/50 px-2 py-1 rounded border border-slate-800">
        <span className="text-blue-900">DEBUG_ACCESS:</span> admin // password
      </div>

      {/* Background Animated Grid */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Scanning Line Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-[10%] w-full animate-scan opacity-30"></div>

      <div className="relative z-10 w-full max-w-md p-4">
        
        {/* Top Branding */}
        <div className="flex flex-col items-center mb-8">
            <img 
                src="https://cdn.shopify.com/s/files/1/0722/0989/1568/files/NexGen_Computing-01_56650346-a4d7-46e8-9739-8824f2558d44.png?v=1763881565" 
                alt="NexGen Computing"
                className="h-20 object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] mb-4"
            />
            <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] text-blue-500 font-mono uppercase">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                Secure Executive Gateway
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            </div>
        </div>

        {/* Login Card */}
        <div className={`backdrop-blur-xl border transition-all duration-500 rounded-lg shadow-2xl overflow-hidden relative
          ${privacyMode ? 'bg-slate-900/90 border-blue-500/30 shadow-blue-900/20' : 'bg-red-950/20 border-red-500/50 shadow-red-900/20'}`}>
          
          {/* Header Strip */}
          <div className={`h-1 w-full transition-colors duration-500 ${privacyMode ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'bg-red-500 animate-pulse'}`}></div>

          <div className="p-8">
            <div className="text-center mb-6">
              <h1 className="text-xl font-bold tracking-widest text-white uppercase">Identity Verification</h1>
              <p className="text-[10px] font-mono text-slate-500 mt-2">RESTRICTED ACCESS LEVEL 5+</p>
            </div>

            {/* Warning Box */}
            <div className={`mb-6 p-4 rounded border text-xs leading-relaxed transition-all duration-300
              ${privacyMode 
                ? 'bg-blue-950/30 border-blue-500/20 text-blue-200' 
                : 'bg-red-950/40 border-red-500/40 text-red-200 animate-pulse-slow'}`}>
              <div className="flex items-start gap-3">
                <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${privacyMode ? 'text-blue-400' : 'text-red-500'}`} />
                <div>
                  <strong className="block mb-1 uppercase tracking-wide font-bold">Confidentiality Protocol</strong>
                  <p className="opacity-90">
                    If accessing from a <span className="font-bold underline decoration-red-500/50">Client Terminal</span>, 
                    Privacy Mode MUST be enabled. This portal contains sensitive proof of NexGen Computing existence.
                  </p>
                  <div className="mt-3 font-mono text-[9px] bg-black/40 p-1.5 rounded border border-white/5 flex items-center gap-2">
                     <Terminal className="w-3 h-3" />
                     <span>PROTOCOL 99: DISCRETION ADVISED</span>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Privacy Mode Toggle */}
              <div 
                onClick={() => setPrivacyMode(!privacyMode)}
                className={`cursor-pointer group relative flex items-center justify-between p-3 rounded border transition-all duration-300 select-none
                  ${privacyMode 
                    ? 'bg-emerald-950/20 border-emerald-500/30 hover:bg-emerald-900/20' 
                    : 'bg-slate-900/50 border-slate-700 hover:border-red-400'}`}
              >
                <div className="flex items-center gap-3">
                  {privacyMode ? <ShieldCheck className="w-5 h-5 text-emerald-400" /> : <ShieldAlert className="w-5 h-5 text-slate-500 group-hover:text-red-400" />}
                  <div className="flex flex-col">
                    <span className={`text-sm font-bold tracking-wide ${privacyMode ? 'text-emerald-400' : 'text-slate-400 group-hover:text-red-300'}`}>
                      {privacyMode ? 'PRIVACY SHIELD ACTIVE' : 'ENABLE PRIVACY MODE'}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono uppercase">
                      {privacyMode ? 'Masking: ON // Logs: ENCRYPTED' : 'Masking: OFF // Connection: VISIBLE'}
                    </span>
                  </div>
                </div>
                <div className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${privacyMode ? 'bg-emerald-500' : 'bg-slate-700'}`}>
                  <div className={`absolute top-1 left-1 bg-white w-3 h-3 rounded-full transition-transform duration-300 ${privacyMode ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </div>
              </div>

              {/* Inputs */}
              <div className="space-y-4 pt-2">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Cpu className="h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 bg-black/40 border border-slate-700 rounded text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-mono text-sm tracking-wider"
                    placeholder="OPERATOR ID"
                    autoComplete="off"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-3 bg-black/40 border border-slate-700 rounded text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-mono text-sm tracking-wider"
                    placeholder="ACCESS KEY"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-400 text-xs bg-red-950/30 p-2 rounded border border-red-500/20 font-mono animate-pulse flex items-center gap-2">
                  <AlertTriangle className="w-3 h-3" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                className={`w-full py-4 rounded font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 transform border
                  ${privacyMode 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white border-blue-400 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                    : 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed opacity-50'}`}
                disabled={!privacyMode}
              >
                {privacyMode ? 'Establish Secure Link' : 'Awaiting Privacy Check...'}
              </button>
            </form>
          </div>
          
          {/* Footer Metadata */}
          <div className="bg-black/60 px-6 py-3 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-600">
            <span>SYS.CORE.V.5.0.1</span>
            <span className="flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${privacyMode ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                {privacyMode ? 'ENCRYPTED' : 'UNSECURED'}
            </span>
          </div>
        </div>
        
        <p className="text-center text-slate-600 text-[10px] mt-8 font-mono leading-relaxed opacity-60">
          UNAUTHORIZED ACCESS IS A FEDERAL OFFENSE. <br/>
          ALL BIO-METRIC AND INPUT DATA IS RECORDED.
        </p>
      </div>
    </div>
  );
};