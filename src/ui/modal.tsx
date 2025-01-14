'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const modalOverlayRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP();

  const closeModal = contextSafe(() => {
    gsap
      .timeline({
        delay: 0.1,
        onComplete: () => router.back(),
      })
      .to(modalRef.current, {
        yPercent: -100,
        opacity: 1,
        duration: 0.25,
      })
      .to(modalOverlayRef.current, {
        opacity: 0,
       ease: 'power3.out',
      }, '-=20%');
  });

  useGSAP(
    () => {
      if (!modalRef.current) return;

      gsap.set(modalRef.current, {
        yPercent: 100,
      });

      const tl = gsap
        .timeline({ paused: true })
        .to(modalOverlayRef.current, {
          opacity: 1,
          duration: 0.15
        })
        .to(
          modalRef.current,
          {
            duration: 0.35,
            yPercent: 0,
          },
          '-=10%'
        );
      tl.play();
    },
    {
      dependencies: [],
      scope: modalOverlayRef,
    }
  );
  return (
    <div
      ref={modalOverlayRef}
      className="_modal fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/80 z-20"
      style={{ opacity: 0 }}
    >
      <div ref={modalRef} className="relative w-full h-full">
        <button
          className="_close-button fixed right-0 top-0 p-4 cursor-pointer z-30"
          onClick={closeModal}
        >
          Close
        </button>
        <div
          className="_modal-content bg-[--background] h-full overflow-scroll scrollbar-hide"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
