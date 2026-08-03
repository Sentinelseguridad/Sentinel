import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    if (error?.message && error.message.includes('solana')) {
      return { hasError: false };
    }
    return { hasError: true };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Unhandled error caught by ErrorBoundary:', error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0A1628] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-[#102542] border border-[#1A7FD4]/30 rounded-2xl p-8 max-w-md shadow-2xl">
            <h2 className="text-2xl font-bold font-poppins mb-2 text-[#1A7FD4]">SENTINEL QR</h2>
            <p className="text-gray-300 text-sm mb-6">
              Se ha detectado un conflicto con una extensión del navegador. Haz clic en el botón para recargar.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#1A7FD4] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-colors cursor-pointer"
            >
              Recargar Vista
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
