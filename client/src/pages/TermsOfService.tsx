import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  const [location, setLocation] = useLocation();
  const [agreed, setAgreed] = useState(false);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          data-testid="button-back"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="bg-card border rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="text-4xl font-heading font-bold mb-8 text-foreground">
            Terms of Service
          </h1>

          <ScrollArea className="h-96 border rounded-lg p-6 mb-8 bg-muted/50">
            <div className="space-y-6 pr-4">
              <section>
                <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using the Hey Maple platform, you agree to be bound by these Terms of Service. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">2. Use License</h2>
                <p className="text-muted-foreground mb-2">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Hey Maple for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software</li>
                  <li>Transferring the materials to another person</li>
                  <li>Violating any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">3. Email Verification</h2>
                <p className="text-muted-foreground">
                  You agree that only USC (@usc.edu) and UCLA (@ucla.edu) email addresses are eligible for registration on this platform. You are responsible for maintaining the confidentiality of your account and password.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">4. User Content</h2>
                <p className="text-muted-foreground">
                  You retain all rights to any content you submit, post, or display on or through Hey Maple. By submitting content, you grant Hey Maple a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content in any media or medium.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">5. Data Privacy</h2>
                <p className="text-muted-foreground">
                  Your use of Hey Maple is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">6. Disclaimer</h2>
                <p className="text-muted-foreground">
                  The materials on Hey Maple are provided on an 'as is' basis. Hey Maple makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">7. Limitations</h2>
                <p className="text-muted-foreground">
                  In no event shall Hey Maple or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Hey Maple.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">8. Modifications</h2>
                <p className="text-muted-foreground">
                  Hey Maple may revise these Terms of Service at any time without notice. By using this Web site, you are agreeing to be bound by the then current version of these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">9. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms and Conditions are governed by and construed in accordance with the laws of California, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>
            </div>
          </ScrollArea>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Checkbox
                id="agree"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                data-testid="checkbox-agree-terms"
              />
              <Label htmlFor="agree" className="text-base font-medium cursor-pointer flex-1">
                I have read and agree to the Terms of Service
              </Label>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleBack}
                data-testid="button-decline"
              >
                Decline
              </Button>
              <Button
                className="flex-1"
                disabled={!agreed}
                onClick={handleBack}
                data-testid="button-accept"
              >
                Accept & Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
