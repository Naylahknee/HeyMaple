import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle } from "lucide-react";

interface ChangeRoleDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  currentRole: "Student" | "Faculty" | "Alumni";
  onConfirm: (newRole: "Student" | "Faculty" | "Alumni", password: string) => Promise<void>;
}

export function ChangeRoleDialog({
  isOpen,
  onOpenChange,
  currentRole,
  onConfirm,
}: ChangeRoleDialogProps) {
  const [newRole, setNewRole] = useState<"Student" | "Faculty" | "Alumni">(currentRole);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConfirm = async () => {
    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    setLoading(true);
    setError("");
    try {
      await onConfirm(newRole, password);
      setPassword("");
      setNewRole(currentRole);
      onOpenChange(false);
    } catch (err: any) {
      setError(err.message || "Failed to change role. Please check your password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent data-testid="dialog-change-role">
        <AlertDialogHeader>
          <AlertDialogTitle>Change Your Role</AlertDialogTitle>
          <AlertDialogDescription>
            Changing your role requires password confirmation for security.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="new-role">New Role</Label>
            <Select value={newRole} onValueChange={(val) => setNewRole(val as "Student" | "Faculty" | "Alumni")}>
              <SelectTrigger id="new-role" data-testid="select-new-role">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Faculty">Faculty</SelectItem>
                <SelectItem value="Alumni">Alumni/Mentor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Confirm Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
              disabled={loading}
              data-testid="input-password-confirm"
            />
          </div>

          {error && (
            <div className="flex gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
              <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className="flex gap-3 justify-end">
          <AlertDialogCancel disabled={loading} data-testid="button-cancel-role-change">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={loading}
            data-testid="button-confirm-role-change"
          >
            {loading ? "Changing..." : "Change Role"}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
