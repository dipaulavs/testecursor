import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

const Login = () => {
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchPro = async () => {
      if (user) {
        const { data } = await supabase
          .from('contractpro_users')
          .select('subscription_expires_at')
          .eq('user_id', user.id)
          .single();
        if (data && data.subscription_expires_at) {
          setIsPro(new Date(data.subscription_expires_at) > new Date());
        } else {
          setIsPro(false);
        }
      }
    };
    fetchPro();
  }, [user]);

  const handleAuth = async (type: 'login' | 'signup') => {
    setLoading(true);
    setError(null);
    let res;
    if (type === 'login') {
      res = await supabase.auth.signInWithPassword({ email, password });
    } else {
      res = await supabase.auth.signUp({ email, password });
    }
    if (res.error) setError(res.error.message);
    setLoading(false);
  };

  const handleOAuth = async (provider: 'google' | 'apple') => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) setError(error.message);
    setLoading(false);
  };

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md text-center">
          {isPro && <div className="mb-4 text-gray-900 text-lg font-bold tracking-widest">PRO</div>}
          <div className="text-gray-900 text-xl font-semibold mb-2">Bem-vindo!</div>
          <div className="text-gray-600 mb-6">{user.email}</div>
          <button
            className="w-full py-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            onClick={async () => { await supabase.auth.signOut(); setUser(null); }}
          >
            Sair
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
        <div className="flex mb-8 border-b border-gray-200">
          <button
            className={`flex-1 py-2 text-lg font-medium ${tab === 'login' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400'}`}
            onClick={() => setTab('login')}
          >
            Entrar
          </button>
          <button
            className={`flex-1 py-2 text-lg font-medium ${tab === 'signup' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400'}`}
            onClick={() => setTab('signup')}
          >
            Criar Conta
          </button>
        </div>
        <form
          onSubmit={e => { e.preventDefault(); handleAuth(tab); }}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900 bg-gray-50"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900 bg-gray-50"
            required
          />
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            disabled={loading}
          >
            {tab === 'login' ? 'Entrar' : 'Criar Conta'}
          </button>
        </form>
        <div className="my-6 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-gray-200" />
          <span className="text-gray-400 text-sm">ou</span>
          <span className="h-px w-10 bg-gray-200" />
        </div>
        <button
          className="w-full py-2 mb-2 rounded-lg border border-gray-300 text-gray-900 font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2"
          onClick={() => handleOAuth('google')}
          disabled={loading}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35 11.1h-9.18v2.92h5.27c-.23 1.23-1.4 3.6-5.27 3.6-3.17 0-5.76-2.62-5.76-5.85s2.59-5.85 5.76-5.85c1.81 0 3.03.77 3.73 1.43l2.55-2.48C16.13 3.98 14.13 3 12 3 6.48 3 2 7.48 2 13s4.48 10 10 10c5.52 0 10-4.48 10-10 0-.68-.07-1.36-.2-2z"/></svg>
          Entrar com Google
        </button>
        <button
          className="w-full py-2 rounded-lg border border-gray-300 text-gray-900 font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2"
          onClick={() => handleOAuth('apple')}
          disabled={loading}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-.02-1.18.95-2.07 2.07-2.07zm4.7 16.37c-.13.3-.27.59-.43.87-.45.77-.92 1.53-1.67 1.55-.72.02-.95-.47-1.77-.47-.82 0-1.07.45-1.76.48-.72.03-1.27-.7-1.72-1.47-1.18-2.01-.98-5.7 1.01-5.72.8-.01 1.37.52 2.17.52.79 0 1.29-.53 2.18-.53 1.01.01 1.41.97 1.41.97s-1.24.5-1.23 1.98c.01 1.57 1.53 2.1 1.54 2.1zm-4.7-13.6c.01.01.01.01 0 0z"/></svg>
          Entrar com Apple
        </button>
      </div>
    </div>
  );
};

export default Login; 