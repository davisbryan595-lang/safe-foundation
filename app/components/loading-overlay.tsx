'use client';

import { Leaf } from 'lucide-react';

export function LoadingOverlay({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="relative w-16 h-16 mb-4">
        <Leaf className="w-16 h-16 text-emerald-500 animate-spin-leaf" />
      </div>
      <p className="text-slate-600 font-medium">Building Safer Tomorrows...</p>
    </div>
  );
}
