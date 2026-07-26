import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-[#08080a] flex items-center justify-center px-4">
          <div className="text-center max-w-lg">
            <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-8">
              <AlertTriangle className="w-9 h-9 text-red-400" />
            </div>

            <h1 className="text-3xl font-extrabold text-white mb-4">Terjadi Kesalahan</h1>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Application mengalami error yang tidak terduga. Silakan coba muat ulang halaman.
            </p>

            {this.state.error && (
              <div className="mb-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left">
                <code className="text-xs font-mono text-red-400 break-all">
                  {this.state.error.message}
                </code>
              </div>
            )}

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-zinc-950 font-extrabold text-xs uppercase tracking-wider shadow-[0_0_35px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all hover:scale-105"
              >
                <RefreshCw className="w-4 h-4" />
                Coba Lagi
              </button>
              <a
                href="/"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                Beranda
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
