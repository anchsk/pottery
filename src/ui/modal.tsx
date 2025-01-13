'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useRef } from 'react';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP();

  const closeModal = contextSafe(
    (e: SyntheticEvent<HTMLButtonElement, Event>) => {
      gsap.to(modalRef.current, {
        yPercent: -30,
        opacity: 0,
        delay: 0.1,
        onComplete: () => router.back(),
      });
    }
  );

  useGSAP(
    () => {
      if (!modalRef.current) return;
      gsap.set(modalRef.current, {
        yPercent: 30,
      });
      gsap.to(modalRef.current, {
        opacity: 1,
        yPercent: 0,
      });
    },
    {
      dependencies: [],
    }
  );
  return (
    <div
      ref={modalRef}
      className="_modal fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-white/50 z-20"
      style={{ opacity: 0 }}
    >
      <button className="_back-button fixed right-0 top-0 p-4 cursor-pointer z-30" onClick={closeModal}>
        Close
      </button>
      <div className="_modal-content bg-white h-full overflow-scroll scrollbar-hide" style={{ opacity: 1 }}>        
        {children}
      </div>
    </div>
  );
}