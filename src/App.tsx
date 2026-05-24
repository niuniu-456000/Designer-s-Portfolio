/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TabType } from './types';
import Navigation from './components/Navigation';
import RightVolumeControl from './components/RightVolumeControl';
import HeroView from './components/HeroView';
import CommercialView from './components/CommercialView';
import LabView from './components/LabView';
import ArchivesView from './components/ArchivesView';
import { Play, VolumeX, AlertCircle } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoError, setVideoError] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync state with HTML5 Video element
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch((err) => {
        console.warn('Auto-play blocked or interrupted:', err);
        setIsPlaying(false);
      });
    } else {
      video.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
  }, [isMuted]);

  // Enable sound on first interaction anywhere as requested in original template
  const handleViewportClick = () => {
    if (isMuted) {
      setIsMuted(false);
    }
  };

  const handleRestartVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#ECEEF2] to-[#E1E4E8] text-black relative flex flex-col font-sans overflow-x-hidden selection:bg-black/10 selection:text-black"
      onClick={handleViewportClick}
    >
      {/* 1. LUXURY AMBIENT GLOW SYSTEM & VIDEO CONTAINER */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Luminous dynamic glow points and satin line reflections are only loaded outside of home tab to keep hero video completely original and pristine */}
        {currentTab !== 'home' ? (
          <>
            <div className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[#E8DDF5]/50 to-[#F2EBF9]/30 blur-[140px]" />
            <div className="absolute top-[15%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-[#DCEEFC]/65 to-[#E9F4FE]/30 blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#FCF3EC]/50 to-[#FDF8F4]/30 blur-[150px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />
          </>
        ) : null}

        {!videoError ? (
          <video
            ref={videoRef}
            src="https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D.mp4"
            className={`w-full h-full object-cover object-[15%_center] md:object-[22%_center] lg:object-[28%_center] transition-all duration-550 ${
              currentTab === 'home' ? 'opacity-100' : 'opacity-85'
            }`}
            autoPlay
            loop
            playsInline
            muted={isMuted}
            onError={() => {
              console.error('Video failed to load.');
              setVideoError(true);
            }}
          />
        ) : (
          /* High-Fidelity abstract generator grid if video URL fails or blocks */
          <div className="w-full h-full bg-transparent relative overflow-hidden flex items-center justify-center">
            {/* Ambient slow rotating mesh blobs */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-black/5 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-black/5 blur-[150px] rounded-full animate-pulse-slow"></div>
          </div>
        )}
      </div>

      {/* 2. GLOSSY GLASSMORPHIC DIFFUSION MASK
          Home maximizes presenter clarity; inner tabs diffuse state with premium frosted glass refraction,
          maintaining total legibility and an elegant satin aesthetic */}
      <div 
        className={`fixed inset-0 z-[1] transition-all duration-700 pointer-events-none ${
          currentTab === 'home' 
            ? 'bg-transparent' 
            : 'bg-white/35 backdrop-blur-[24px] border-b border-white/20 shadow-[inset_0_4px_30px_rgba(255,255,255,0.2)]'
        }`}
      />

      {/* 3. GLASS HEAD FLOATING NAVBAR */}
      <Navigation currentTab={currentTab} onChangeTab={setCurrentTab} />

      {/* 4. FLUID LAYOUT CHASSIS CONTROLLER */}
      <main className="relative z-10 flex-grow flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {currentTab === 'home' && <HeroView onExplore={setCurrentTab} />}
            {currentTab === 'commercial' && <CommercialView />}
            {currentTab === 'lab' && <LabView />}
            {currentTab === 'archives' && <ArchivesView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 5. RIGHT HAND FLOAT DECK */}
      <RightVolumeControl
        isPlaying={isPlaying}
        isMuted={isMuted}
        onPlayToggle={setIsPlaying}
        onMuteToggle={setIsMuted}
        onRestart={handleRestartVideo}
      />

      {/* 6. BOTTOM HUD & USER STATUS SIGNATURE BAR */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[#666666] uppercase tracking-wider mt-auto select-none">
        <div>
          <span>© 2026 niuniu portfolio • Tsinghua MFA</span>
        </div>
        <div className="flex gap-4 items-center">
          {isMuted && (
            <motion.span 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="text-[#999999] flex items-center gap-1.5 font-bold"
            >
              <VolumeX className="w-3.5 h-3.5" />
              Intro narration muted. Click to hear introduction voice.
            </motion.span>
          )}
          <span>UTC 22:31:15</span>
        </div>
      </footer>
    </div>
  );
}
