import { useSearch, Link } from "wouter";
import { MODES } from "@/lib/mockData";
import { CollaborationMode } from "@/lib/types";
import { ModeBadge } from "@/components/ModeBadge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Share2, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Results() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  
  const primary = (params.get("primary") as CollaborationMode) || "Architect";
  const secondary = (params.get("secondary") as CollaborationMode) || "Builder";
  const confidence = parseInt(params.get("confidence") || "80");

  const modeDef = MODES[primary];

  const handleDownloadPDF = () => {
    const resultsContent = `
Hey Maple - Your Collaboration Profile
======================================

PRIMARY MODE: ${primary}
"${modeDef.tagline}"

What This Means:
${modeDef.description}

Your Superpowers:
${modeDef.strengths.map(s => `- ${s}`).join('\n')}

Watch Out For:
${modeDef.weaknesses.map(w => `- ${w}`).join('\n')}

Best Paired With: ${modeDef.bestPairedWith.join(', ')}
Potential Friction: ${modeDef.avoidPairingWith.join(', ')}

SECONDARY MODE: ${secondary} (${100 - confidence}% influence)

======================================
Join Hey Maple to find your perfect teammates!
heymaple.com
    `;

    const blob = new Blob([resultsContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hey-maple-${primary.toLowerCase()}-profile.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareData = {
      title: `I'm a ${primary}!`,
      text: `I just discovered my collaboration mode on Hey Maple: ${primary} - "${modeDef.tagline}"`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-white py-6 md:py-12">
      <div className="content-width">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-border rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
        >
          <div className="bg-foreground text-white p-6 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
            <div className="relative z-10">
              <div className="eyebrow !text-white/60 mb-3">YOUR COLLABORATION MODE IS</div>
              <div className="flex justify-center mb-4">
                <ModeBadge mode={primary} size="lg" className="text-xl md:text-3xl py-2 px-6 md:py-3 md:px-8 bg-white/10 border-white/20 text-white backdrop-blur-md" />
              </div>
              <p className="text-lg md:text-2xl font-extrabold max-w-2xl mx-auto leading-relaxed">
                "{modeDef.tagline}"
              </p>
            </div>
          </div>

          <div className="p-5 md:p-10 grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold mb-4">What this means</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                {modeDef.description}
              </p>

              <div className="mb-6">
                <h4 className="font-bold mb-3 text-base md:text-lg">Your Superpowers</h4>
                <ul className="space-y-2">
                  {modeDef.strengths.map(s => (
                    <li key={s} className="flex items-center gap-2 p-2 md:p-3 bg-secondary rounded-2xl">
                      <span className="text-leaf text-sm md:text-lg">&#10003;</span>
                      <span className="font-medium text-foreground text-sm md:text-base">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                 <h4 className="font-bold mb-3 text-base md:text-lg">Watch Out For</h4>
                 <ul className="space-y-2">
                  {modeDef.weaknesses.map(w => (
                    <li key={w} className="flex items-center gap-2 p-2 md:p-3 bg-secondary rounded-2xl">
                      <span className="text-amber text-sm md:text-lg">&#9888;</span>
                      <span className="font-medium text-foreground text-sm md:text-base">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-maple">
                <h3 className="text-base md:text-lg font-bold mb-3">Compatibility Guide</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs md:text-sm text-muted-foreground mb-2">Best Pairs</div>
                    <div className="flex flex-wrap gap-2">
                      {modeDef.bestPairedWith.map(m => (
                        <ModeBadge key={m} mode={m} size="sm" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs md:text-sm text-muted-foreground mb-2">Potential Friction</div>
                    <div className="flex flex-wrap gap-2">
                      {modeDef.avoidPairingWith.map(m => (
                         <span key={m} className="inline-flex items-center px-3 py-1 rounded-full border border-border text-muted-foreground bg-white text-xs md:text-sm">
                           {m}
                         </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-maple border-2 border-primary/20">
                <h3 className="text-base md:text-lg font-bold mb-2">Secondary Mode</h3>
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <ModeBadge mode={secondary} size="sm" />
                  <span className="text-xs md:text-sm text-muted-foreground">({100 - confidence}% influence)</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  You also show traits of a {secondary}. This helps balance out some of your primary weaknesses.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <Link href="/login">
                  <Button size="lg" className="w-full shadow-md" data-testid="button-ready-to-grow-results">
                    Ready to Grow? <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" size="sm" onClick={handleShare} data-testid="button-share-results">
                    <Share2 className="mr-1.5 h-4 w-4" /> Share
                  </Button>
                  <Button variant="outline" className="flex-1" size="sm" onClick={handleDownloadPDF} data-testid="button-download-results">
                    <Download className="mr-1.5 h-4 w-4" /> Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
