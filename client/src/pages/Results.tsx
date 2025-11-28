import { useSearch, Link } from "wouter";
import { MODES } from "@/lib/mockData";
import { CollaborationMode } from "@/lib/types";
import { ModeBadge } from "@/components/ModeBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Share2, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Results() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  
  const primary = (params.get("primary") as CollaborationMode) || "Architect";
  const secondary = (params.get("secondary") as CollaborationMode) || "Builder";
  const confidence = parseInt(params.get("confidence") || "80");

  const modeDef = MODES[primary];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-card border shadow-2xl rounded-3xl overflow-hidden"
        >
          {/* Header Result */}
          <div className="bg-slate-900 text-white p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20" />
            <div className="relative z-10">
              <h2 className="text-xl text-slate-300 mb-4 font-medium tracking-wide uppercase">Your Collaboration Mode is</h2>
              <div className="flex justify-center mb-6">
                <ModeBadge mode={primary} size="lg" className="text-3xl py-3 px-8 bg-white/10 border-white/20 text-white backdrop-blur-md" />
              </div>
              <p className="text-2xl md:text-3xl font-heading font-bold max-w-2xl mx-auto leading-relaxed">
                "{modeDef.tagline}"
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">What this means</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {modeDef.description}
              </p>

              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-lg">Your Superpowers</h4>
                <ul className="space-y-3">
                  {modeDef.strengths.map(s => (
                    <li key={s} className="flex items-center gap-3 p-3 bg-green-50/50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-900/30">
                      <span className="text-green-600 text-lg">✓</span>
                      <span className="font-medium text-foreground/80">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                 <h4 className="font-semibold mb-4 text-lg">Watch Out For</h4>
                 <ul className="space-y-3">
                  {modeDef.weaknesses.map(w => (
                    <li key={w} className="flex items-center gap-3 p-3 bg-orange-50/50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-900/30">
                      <span className="text-orange-500 text-lg">⚠️</span>
                      <span className="font-medium text-foreground/80">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-muted/30 p-6 rounded-2xl border">
                <h3 className="text-lg font-bold mb-4">Compatibility Guide</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Best Pairs</div>
                    <div className="flex flex-wrap gap-2">
                      {modeDef.bestPairedWith.map(m => (
                        <ModeBadge key={m} mode={m} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Potential Friction</div>
                    <div className="flex flex-wrap gap-2">
                      {modeDef.avoidPairingWith.map(m => (
                         <span key={m} className="inline-flex items-center px-3 py-1 rounded-full border border-muted text-muted-foreground bg-muted/50 text-sm">
                           {m}
                         </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-2">Secondary Mode</h3>
                <div className="flex items-center gap-3 mb-2">
                  <ModeBadge mode={secondary} size="sm" />
                  <span className="text-sm text-muted-foreground">({100 - confidence}% influence)</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  You also show traits of a {secondary}. This helps balance out some of your primary weaknesses.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <Link href="/dashboard">
                  <Button size="lg" className="w-full h-12 text-lg shadow-lg">
                    Find Your Teammates <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" /> Share
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" /> Save PDF
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
