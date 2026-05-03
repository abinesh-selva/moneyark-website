import { useState } from 'react';
import { useAppStats } from '../hooks/useAppStats';
import { useRating } from '../hooks/useRating';

const RatingSection = () => {
  const { downloads, avgRating, totalRatings } = useAppStats();
  const { submitRating, submitted, submitting } = useRating();
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);

  function handleStar(val) {
    setSelected(val);
    submitRating(val);
  }

  const displayRating = avgRating || 0;
  const fullStars = Math.floor(displayRating);
  const hasHalf = displayRating - fullStars >= 0.5;

  function formatDownloads(n) {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
    return n.toString();
  }

  return (
    <section className="wrapper py-24">
      <div className="glass-card rounded-2xl p-12 md:p-16 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary-container/8 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left — Live Stats */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-4 text-primary-container font-label text-xs tracking-widest uppercase mb-6">
                <span className="w-12 h-px bg-primary-container"></span>
                <span>Live Stats</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-black mb-3">
                Loved by users
              </h2>
              <p className="text-on-surface-variant">Real numbers, updated in real time.</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Downloads */}
              <div className="bg-surface-container-high/40 border border-white/5 rounded-xl p-6 flex flex-col gap-2">
                <span className="material-symbols-outlined text-2xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
                <div className="font-headline font-black text-4xl text-on-surface">
                  {downloads > 0 ? formatDownloads(downloads) : '—'}
                </div>
                <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Downloads</div>
              </div>

              {/* Rating */}
              <div className="bg-surface-container-high/40 border border-white/5 rounded-xl p-6 flex flex-col gap-2">
                <span className="material-symbols-outlined text-2xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <div className="font-headline font-black text-4xl text-on-surface">
                  {totalRatings > 0 ? displayRating.toFixed(1) : '—'}
                </div>
                <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                  {totalRatings > 0 ? `${totalRatings} rating${totalRatings !== 1 ? 's' : ''}` : 'No ratings yet'}
                </div>
              </div>
            </div>

            {/* Star display */}
            {totalRatings > 0 && (
              <div className="flex items-center gap-2">
                {[1,2,3,4,5].map(s => (
                  <span key={s}
                    className={`material-symbols-outlined text-2xl ${s <= fullStars ? 'text-primary-container' : s === fullStars + 1 && hasHalf ? 'text-primary-container/50' : 'text-on-surface-variant/20'}`}
                    style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
                <span className="text-sm text-on-surface-variant ml-2 font-label">{displayRating.toFixed(1)} / 5</span>
              </div>
            )}
          </div>

          {/* Right — Rate the app */}
          <div className="bg-surface-container/60 border border-white/5 rounded-2xl p-10 flex flex-col items-center text-center gap-8">
            {submitted ? (
              <>
                <div className="w-16 h-16 rounded-full bg-primary-container/15 border border-primary-container/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-xl mb-2">Thanks for rating!</p>
                  <p className="text-on-surface-variant text-sm">Your feedback helps us improve MoneyArk.</p>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => (
                    <span key={s}
                      className={`material-symbols-outlined text-3xl ${s <= selected ? 'text-primary-container' : 'text-on-surface-variant/20'}`}
                      style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div>
                  <p className="font-headline font-bold text-xl mb-2">Rate MoneyArk</p>
                  <p className="text-on-surface-variant text-sm">Tried the app? Let others know what you think.</p>
                </div>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(s => (
                    <button
                      key={s}
                      disabled={submitting}
                      onMouseEnter={() => setHovered(s)}
                      onMouseLeave={() => setHovered(0)}
                      onClick={() => handleStar(s)}
                      className="transition-transform hover:scale-110 active:scale-95 disabled:opacity-50"
                    >
                      <span
                        className={`material-symbols-outlined text-4xl transition-colors ${s <= (hovered || selected) ? 'text-primary-container' : 'text-on-surface-variant/20'}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </button>
                  ))}
                </div>
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/40">
                  {hovered ? ['', 'Terrible', 'Poor', 'Okay', 'Good', 'Excellent'][hovered] : 'Tap a star to rate'}
                </p>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default RatingSection;
